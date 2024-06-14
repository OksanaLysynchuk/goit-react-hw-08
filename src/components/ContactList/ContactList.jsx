import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import CSS from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading contacts.</p>;
  }

  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <li className={CSS.listitem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
