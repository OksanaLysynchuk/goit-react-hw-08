import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import CSS from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3).max(50),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6).max(12),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={CSS.form}>
          <label htmlFor="name" className={CSS.label}>
            Name
          </label>
          <Field name="name" type="text" className={CSS.input} />
          <ErrorMessage name="name" component="span" className={CSS.error} />

          <label htmlFor="email" className={CSS.label}>
            Email
          </label>
          <Field name="email" type="email" className={CSS.input} />
          <ErrorMessage name="email" component="span" className={CSS.error} />

          <label htmlFor="password" className={CSS.label}>
            Password
          </label>
          <Field name="password" type="password" className={CSS.input} />
          <ErrorMessage
            name="password"
            component="span"
            className={CSS.error}
          />

          <button type="submit" className={CSS.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
