import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import CSS from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={CSS.container}>
      <p className={CSS.text}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={CSS.input}
      />
    </div>
  );
}
