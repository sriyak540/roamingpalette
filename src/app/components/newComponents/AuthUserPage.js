import React, { useState } from "react";
import AddPost from "../AddPost";
import Posts from "../Posts";
import UserBar from "../UserBar";
import { useNavigate } from "react-router-dom";

function AuthUserPage() {
    const [searchQuery, setSearchQuery] = useState("");
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
        {
            id: 1,
            username: "user2",
            location: "Burger Shop, City, County, Zip",
            description:
                "Huddled on the couch of a cosy local book store, he declared his signature dish to be the Fried Chicken. We enthused over how remarkably un-greasy it is and marvelled at how it’s crunchy all over, unlike KFC which we eeewed about how the skin has greasy soggy patches.",
            tags: "burger chickenburger burgershop city country burgershop",
            image: "/burger-image.svg",
        },
        {
            id: 2,
            username: "user3",
            location: "Thai Food, City, County, Zip",
            description: "Vegan Thai Green Curry",
            tags: "thaigreencurry curry thaifood veganfood vegancurry",
            image: "/thai-curry-image.svg",
        },
    ]);

    const token = sessionStorage.getItem("userId");
    const navigate = useNavigate();

    // Filter posts dynamically based on search query
    const filteredPosts = posts.filter((post) =>
        post.tags.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addPostHandler = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    const handleCreate = () => {
        setShowAddPost(true);
        console.log("Create button clicked");
    };

    const handleCancel = () => {
        setShowAddPost(false);
    };

    const handleLogout = () => {
        navigate("/");
        sessionStorage.removeItem("userId");
        sessionStorage.clear();
    };

    return (
        <div>
            <header className="flex items-center justify-between p-2 bg-white">
                <div className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Roaming Palette Logo" width="50" />
                    <h1 className="font-extrabold text-black font-sans text-2xl pl-2">Roaming Palette</h1>
                </div>

                <div className="flex items-center justify-center flex-grow">
                    <input
                        type="text"
                        value={searchQuery}
                        placeholder="Search restaurant, cuisines..."
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-3 w-80 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 font-sans"
                    />
                </div>

                <div className="flex items-center space-x-4 z-10">
                    <button
                        onClick={handleLogout}
                        className="p-3 hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-semibold font-sans"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="relative w-full h-full">
                <img src="/header-image.svg" alt="header image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 flex items-center justify-center">
                    <div className="w-2/4" />
                    <h1 className="p-3 pr-6 text-8xl font-serif text-white text-right w-2/4 font-light">
                        Explore <br /> the <br /> palettes of <br /> the world
                    </h1>
                </div>
            </div>

            <div className="w-full p-5 shadow-slate-50 rounded-lg mt-5 mr-auto">
                <UserBar username={token} onCreate={handleCreate} />

                {showAddPost && (
                    <AddPost username={token} onAddPost={addPostHandler} onCancel={handleCancel} />
                )}

                {/* Pass filtered posts to the Posts component */}
                <Posts items={filteredPosts} isLoggedIn={true} />
            </div>
        </div>
    );
}

export default AuthUserPage;
