import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyCtaB2ksyFHzBuNkdzzqRkzBtL0nRHtcas",
  authDomain: "react-sandbox-16efa.firebaseapp.com",
  projectId: "react-sandbox-16efa",
  storageBucket: "react-sandbox-16efa.appspot.com",
  messagingSenderId: "360036954173",
  appId: "1:360036954173:web:9f09006632fb1d9c657a54",
  measurementId: "G-9BX5M169JT"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
