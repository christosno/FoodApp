import React from "react";
import { useFormik } from "formik";
import { useOutletContext, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLogedIn, setIsLogedIn] = useOutletContext();
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name isRequired";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: () => {
      setIsLogedIn(true);
      navigate("/");
    },
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          id="firstName"
          name="firstName"
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          id="lastName"
          name="lastName"
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          id="email"
          name="email"
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
