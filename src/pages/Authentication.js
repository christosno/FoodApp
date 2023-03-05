import React, { useContext } from "react";
import { useFormik } from "formik";
import {
  useNavigation,
  Link,
  useSearchParams,
  useSubmit,
  Form,
  redirect,
} from "react-router-dom";
import Button from "../components/UI/Button";
// import { UserLoginContext } from "../store/user-auth";
import { validate } from "../utils/loginValidation";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const submit = useSubmit();

  const isSubmiting = navigation.state === "submitting";

  const isLogin = searchParams.get("mode") === "login";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
        username: values.username,
      };
      submit(data, { method: "post" });
    },
    validate,
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="w-full md:w-1/2 p-4 mx-auto mt-28 bg-slate-700 rounded shadow-xl"
    >
      <h1 className="my-3 text-white text-xl font-[Poppins] font-bold">
        {isLogin ? "User Log in" : "Create an Account"}
      </h1>
      {!isLogin && (
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block font-[Poppins] text-white font-bold mb-2"
          >
            User Name
          </label>
          <input
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="text"
            id="username"
            name="username"
            className="border rounded border-gray-400 p-2 w-full"
          />
          {formik.errors.username && formik.touched.username ? (
            <div className="text-red-500 font-bold mt-2">
              {formik.errors.username}
            </div>
          ) : null}
        </div>
      )}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block font-[Poppins] text-white font-bold mb-2"
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
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block font-[Poppins] text-white font-bold mb-2"
        >
          Password
        </label>
        <input
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          id="password"
          name="password"
          className="border rounded border-gray-400 p-2 w-full"
        />
        {formik.errors.password && formik.touched.password ? (
          <div className="text-red-500 font-bold mt-2">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <Button
        type="submit"
        bgColor="bg-slate-900"
        bgHoverColor="bg-slate-800"
        margin="ml-0"
        disabled={isSubmiting}
      >
        {isSubmiting ? "Submiting ..." : isLogin ? "Log In" : "Sign Up"}
      </Button>
      {isLogin ? (
        <div className="m-2 flex">
          <p className=" text-slate-400">You don't have account?</p>
          <Link to="/auth?mode=signup">
            <p className="text-slate-200 ml-3 cursor-pointer">Sign up</p>
          </Link>
        </div>
      ) : (
        <div className="m-2 flex">
          <p className=" text-slate-400">Do you have account?</p>
          <Link to="/auth?mode=login">
            <p className="text-slate-200 ml-3 cursor-pointer">Log in</p>
          </Link>
        </div>
      )}
    </Form>
  );
};

export const action = async ({ request }) => {
  const searchPar = new URLSearchParams(window.location.search);

  const mode = searchPar.get("mode");

  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
    username: data.get("username") || null,
  };

  if (mode === "login") {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
    } catch (err) {
      console.log(err);
    }
  }

  if (mode === "signup") {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: authData.username,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return redirect("/");
};

export default Authentication;
