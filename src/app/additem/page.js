"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import Card from '../components/Card';

const AddPost = ({username, onAddPost}) => {
    const router = useRouter();
    const [postingUser, setPostingUser] = useState(username);
    const [enteredDescription, setDescription] = useState('');
    const [enteredTags, setTags] = useState('');
    const [selectedImage, setImage] = useState('');
    const [enteredLocation, setLocation] = useState('');

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    };
    
    const tagHandler = (event) => {
        setTags(event.target.value);
    };

    const imageHandler = () => {
        const imageURL = prompt("Enter Image URL:");
        if (imageURL) {
            setImage(imageURL);
        }
    };

    const locationHandler = () => {
        const location = prompt("Enter Location:");
        if (location) {
            setLocation(location);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const post_data = {
            username: postingUser,
            location: enteredLocation,
            description: enteredDescription,
            tags: enteredTags,
            image: selectedImage
        };

        //onAddPost(post_data); // Call parent component's function to add post to the list
        console.log(post_data); // Log post data to console for verification
       // onCancel();
        // clear form
        setPostingUser('');
        setDescription('');
        setTags('');
        //useSelectedLayoutSegments(' ');
        setImage('');
        setLocation('');

        /**HOW TO PASS DATA HERE AHHHHHHHH */
        router.push({
            pathname: "/",
            query: { newPost: JSON.stringify(post_data) }
          });
          
    };

    return (
        <div className="p-5 flex justify-center items-center">
            <Card className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={submitHandler} className="space-y-6">
                <div className="flex justify-between items-center">
            {/* Cancel Button */}
            <button
                type="button"
                onClick={() => router.push("/")}
                className="text-sm text-gray-500 hover:text-gray-700"
            >
                X
            </button>
            {/* Submit Button */}
            <button 
                type="submit" 
                className="py-2 px-6 bg-teal-700 text-white rounded-lg hover:bg-teal-600">
                Post
            </button>
        </div>
                    {/* Username */}
                    <div className="inline-flex text-left">
                        <span className="p-6 mb-4 cursor-pointer bg-orange-600 rounded-full border-2 border-gray-400"></span>
                        <p className="text-lg pt-3 pl-3 font-semibold text-gray-700">{postingUser || "Guest"}</p>
                    </div>

                    {/* Post Description */}
                    <div>
                        <textarea
                            value={enteredDescription}
                            onChange={descriptionHandler}
                            placeholder="Where did your tastebuds land you today..."
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
                    </div>
                    {/* Post Description */}
                    <div>
                        <textarea
                            value={enteredTags}
                            onChange={tagHandler}
                            placeholder="Enter tags here"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="1"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start space-x-4">
                        {/* Add Image Button */}
                        <button 
                            type="button" 
                            onClick={imageHandler} 
                            className="py-2 px-4 bg-teal-700 text-white rounded-lg hover:bg-teal-600">
                            Add Image
                        </button>

                        {/* Add Location Button */}
                        <button 
                            type="button" 
                            onClick={locationHandler} 
                            className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-600">
                            Add Location
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddPost;
