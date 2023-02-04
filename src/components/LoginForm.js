import React, { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { UserLoginContext } from "../store/user-auth";
import { validate } from "../utils/loginValidation";

const LoginForm = () => {
  console.log("LoginForm Component");
  const { setIsLogedIn, setUserName } = useContext(UserLoginContext);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: () => {
      setUserName({
        firstName: formik.values.firstName,
        lastName: formik.values.lastName,
      });
      setIsLogedIn(true);
      navigate("/");
    },
    validate,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 mx-8 mt-28 bg-sky-400 rounded shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block font-[Poppins] text-gray-800 font-bold mb-2"
        >
          First Name
        </label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          id="firstName"
          name="firstName"
          className="border rounded border-gray-400 p-2 w-full"
        />
        {formik.errors.firstName && formik.touched.firstName ? (
          <div className="text-red-500 font-bold mt-2">
            {formik.errors.firstName}
          </div>
        ) : null}
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block font-[Poppins] text-gray-800 font-bold mb-2"
        >
          Last Name
        </label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          id="lastName"
          name="lastName"
          className="border rounded border-gray-400 p-2 w-full"
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <div className="text-red-500 font-bold mt-2">
            {formik.errors.lastName}
          </div>
        ) : null}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block font-[Poppins] text-gray-800 font-bold mb-2"
        >
          E-mail
        </label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          id="email"
          name="email"
          className="border rounded border-gray-400 p-2 w-full"
        />
        {formik.errors.email && formik.touched.email ? (
          <div className="text-red-500 font-bold mt-2">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <Button
        type="submit"
        bgColor="bg-sky-700"
        bgHoverColor="bg-sky-600"
        margin="ml-0"
      >
        Submit
      </Button>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default LoginForm;
