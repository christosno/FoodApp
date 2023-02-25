import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBADSE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBADSE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBADSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBADSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBADSE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBADSE_APP_ID,
});

export const auth = app.auth();
export default app;
