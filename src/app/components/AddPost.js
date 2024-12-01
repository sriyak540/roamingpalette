"use client";

import React, { useState, useEffect } from "react";

const AddPost = ({ username, onAddPost, onCancel }) => {
    const [postingUser, setPostingUser] = useState("");
    const [enteredDescription, setDescription] = useState("");
    const [enteredTags, setTags] = useState("");
    const [selectedImage, setImage] = useState("");
    const [enteredLocation, setLocation] = useState("");

    // Ensure sessionStorage is accessed only in the browser
    useEffect(() => {
        if (typeof window !== "undefined") {
            setPostingUser(sessionStorage.getItem("userId") || "Guest");
        }
    }, []);

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const tagHandler = (event) => {
        setTags(event.target.value);
    };

    const imageHandler = (event) => {
        setImage(event.target.value);
    };

    const locationHandler = (event) => {
        setLocation(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const post_data = {
            username: postingUser,
            location: enteredLocation,
            description: enteredDescription,
            tags: enteredTags,
            image: selectedImage,
        };

        onAddPost(post_data); // Call parent component's function to add post to the list
        onCancel();

        // Clear form
        setDescription("");
        setTags("");
        setImage("");
        setLocation("");
    };

    return (
        <div className="p-5 flex justify-center items-center">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-6 bg-teal-700 text-white rounded-lg hover:bg-teal-600"
                        >
                            Post
                        </button>
                    </div>
                    <div>
                        <span className="p-6 mb-4 bg-orange-600 rounded-full border-2 border-gray-400"></span>
                        <p className="text-lg pt-3 pl-3 font-semibold text-gray-700">
                            {postingUser || "Guest"}
                        </p>
                    </div>
                    <textarea
                        value={enteredDescription}
                        onChange={descriptionHandler}
                        placeholder="Enter description"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                        rows="4"
                    />
                    <textarea
                        value={enteredTags}
                        onChange={tagHandler}
                        placeholder="Enter tags"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                        rows="1"
                    />
                    <textarea
                        value={selectedImage}
                        onChange={imageHandler}
                        placeholder="Enter image URL"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                        rows="1"
                    />
                    <textarea
                        value={enteredLocation}
                        onChange={locationHandler}
                        placeholder="Enter location"
                        className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                        rows="1"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddPost;
