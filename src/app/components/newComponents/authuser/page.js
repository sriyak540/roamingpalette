"use client";

import React, { useState } from "react";
import UserBar from "../../UserBar";
import AddPost from "../../AddPost";
import Posts from "../../Posts";
import { useRouter } from "next/navigation";

function AuthUserPage() {
    const [showAddPost, setShowAddPost] = useState(false);
    const [posts, setPosts] = useState([
        {
            id: 0,
            username: "user1",
            location: "Ramen Shop, City, County, Zip",
            description:
                "While the tender, curly noodles and warm savory broth build the foundation of a good ramen soup, the toppings and mix-ins make it just plain fun and can take the flavors of your bowl in a million and one directions.",
            tags: "ramen ramennoodles noodles vegetarian city country",
            image: "/ramen-image.svg",
        },
    ]);

    const router = useRouter(); // Replace useNavigate with useRouter
    const token = typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

    const handleLogout = () => {
        sessionStorage.removeItem("userId");
        router.push("/"); // Use Next.js's router for navigation
    };

    const handleCreate = () => {
        setShowAddPost(true);
    };

    const handleCancel = () => {
        setShowAddPost(false);
    };

    const addPostHandler = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <div>
            <header className="flex items-center justify-between p-2 bg-white">
                <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Roaming Palette Logo" width="50" />
                    <h1 className="font-extrabold text-black font-sans text-2xl pl-2">
                        Roaming Palette
                    </h1>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleLogout}
                        className="p-3 hover:underline cursor-pointer bg-red-500 rounded-lg text-white font-sans font-semibold"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="p-4">
                <UserBar username={token} onCreate={handleCreate} />
                {showAddPost && <AddPost onAddPost={addPostHandler} onCancel={handleCancel} />}
                <Posts items={posts} />
            </div>
        </div>
    );
}

export default AuthUserPage;
