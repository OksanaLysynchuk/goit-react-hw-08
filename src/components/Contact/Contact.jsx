import CSS from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={CSS.container}>
      <IoMdPerson className={CSS.icon} />
      <p className={CSS.text}>{name}</p>
      <FaPhoneAlt className={CSS.icon} />
      <p className={CSS.text}>{number}</p>
      <button onClick={handleDelete} className={CSS.btn}>
        Delete
      </button>
    </div>
  );
}
