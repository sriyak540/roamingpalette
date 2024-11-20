  "use client";

  import React, {useState} from "react";
  import App from './App';

  export default function Home() {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [username, setUsername] = useState("");
    // const [showAddPost, setShowAddPost] = useState(false);


    // const handleLogin = (user) => {
    //   setUsername(user);
    //   setIsLoggedIn(true);
    // };

    // const handleLogout = () => {
    //     setIsLoggedIn(false);
    //     setUsername("");
    // };

    // const addPostHandler = (newPost) => {
    //   setPosts(prevPosts => [...prevPosts, newPost])
    // };

    // const handleCreate = () => {
    //   setShowAddPost(true);
    //   console.log("Create button clicked");
    // };

    // const handleFilter = () => {
    //     console.log("Filter button clicked");
    // };

    // const handleCancel = () => {
    //   setShowAddPost(false); 
    // };


    return(
      <div> 
        <App />
      </div>
    );
  }