import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import CSS from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),
  number: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Number is required")
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number cannot exceed 50 characters"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={CSS.form}>
          <label htmlFor="name" className={CSS.label}>
            Name
          </label>
          <Field name="name" type="text" className={CSS.input} />
          <ErrorMessage name="name" component="span" className={CSS.error} />

          <label htmlFor="number" className={CSS.label}>
            Number
          </label>
          <Field name="number" type="tel" className={CSS.input} />
          <ErrorMessage name="number" component="span" className={CSS.error} />

          <button type="submit" className={CSS.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
