import * as React from "react";
import { Button, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

import { Navigation } from "./src/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";


const firebaseConfig = {
  apiKey: "AIzaSyDBUxcfTkTUmAKOOCXyx-b22VXfNwa1HtA",
  authDomain: "cncnova-77105.firebaseapp.com",
  projectId: "cncnova-77105",
  storageBucket: "cncnova-77105.appspot.com",
  messagingSenderId: "775031094581",
  appId: "1:775031094581:web:a01d1ee84157ec8a18a07c"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </>
  );
}
