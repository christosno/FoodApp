import { redirect } from "react-router-dom";
import { auth } from "../firebase";

export const action = async () => {
  try {
    await auth.signOut();
    return redirect("/");
  } catch (error) {
    console.log(error);
  }
};
