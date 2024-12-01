"use client";

import React from "react";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import AuthUserPage from "./components/newComponents/authuser/page";
import GuestHomePage from "./components/newComponents/guesthomepage/page";
import LoginPage from "./components/newComponents/login/page";
import SignUpPage from "./components/newComponents/signup/page";
import UserBar from "./components/UserBar";

export default function Home() {
  return (
        <GuestHomePage />
  );
}

