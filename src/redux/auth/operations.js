import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("token", token);
};

const clearToken = () => {
  delete axios.defaults.headers.common.Authorization;
  localStorage.removeItem("token");
};

export const getToken = () => localStorage.getItem("token");

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      const { token } = response.data;
      setToken(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      const { token } = response.data;
      setToken(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = getToken() || state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    try {
      setToken(token);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      clearToken();
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
