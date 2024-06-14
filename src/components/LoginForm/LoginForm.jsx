// // components/LoginForm.jsx
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { login } from "../../redux/auth/operations";
// import CSS from "./LoginForm.module.css";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().required("Email is required").email(),
//   password: Yup.string().required("Password is required").min(6).max(12),
// });

// export default function LoginForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(login(values));
//     actions.resetForm();
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         <Form className={CSS.form}>
//           <label htmlFor="email" className={CSS.label}>
//             Email
//           </label>
//           <Field name="email" type="email" className={CSS.input} />
//           <ErrorMessage name="email" component="span" className={CSS.error} />

//           <label htmlFor="password" className={CSS.label}>
//             Password
//           </label>
//           <Field name="password" type="password" className={CSS.input} />
//           <ErrorMessage
//             name="password"
//             component="span"
//             className={CSS.error}
//           />

//           <button type="submit" className={CSS.btn}>
//             Login
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// components/LoginForm.jsx
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import CSS from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6).max(12),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={CSS.form}>
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
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
