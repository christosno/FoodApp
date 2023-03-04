import React, { useContext } from "react";
import { useFormik } from "formik";
import {
  useNavigate,
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
  console.log("LoginForm Component");
  // const { setIsLogedIn } = useContext(UserLoginContext);
  const [searchParams] = useSearchParams();
  const submit = useSubmit();

  const isLogin = searchParams.get("mode") === "login";

  // const navigate = useNavigate();

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
      // console.log("data -------", data);
      submit(data, { method: "post" });
      // setIsLogedIn(true);
      // navigate("/");
    },
    validate,
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="w-1/2 p-4 mx-auto mt-28 bg-slate-700 rounded shadow-xl"
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
      >
        {isLogin ? "Log In" : "Sign Up"}
      </Button>
      {isLogin ? (
        <Link to="?mode=signup" className="flex">
          You don't have account?
          <p className="text-slate-200 ml-3 cursor-pointer">
            {" "}
            Create an acount
          </p>
        </Link>
      ) : (
        <Link to="?mode=login" className="flex">
          Do you have an account{" "}
          <p className="text-slate-200 ml-3 cursor-pointer">Log in</p>
        </Link>
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
      console.log("log in new user");
      console.log(userCredential.user);
    } catch (err) {
      console.log(err);
    }
  }

  if (mode === "signup") {
    console.log("SIGN UP !!!!!!!!!!!!!!!");
    console.log(authData);
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
      console.log("added new user");
      console.log(auth.currentUser);
      console.log(userCredential.user);
    } catch (err) {
      console.log(err);
    }
  }

  return redirect("/");
};

export default Authentication;
