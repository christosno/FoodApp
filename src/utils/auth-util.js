import { auth } from "../firebase";

export const loader = () => {
  const user = auth.currentUser;
  console.log(
    "______________________________________________-----------------------________________---",
    user
  );
  return user;
};
