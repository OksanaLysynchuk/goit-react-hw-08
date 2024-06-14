import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar.jsx";
import CSS from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={CSS.container}>
      <AppBar />
      <Outlet />
    </div>
  );
}
