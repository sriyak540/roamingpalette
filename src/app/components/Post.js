import React from 'react';
import Card from './Card';

const Post = (props) => {
    const isLoggedIn = props.isLoggedIn || false;
    return (
        <div className="w-full relative"> {/* Make the div relative for positioning the delete button */}
            <Card className="grid grid-cols-2 gap-5 p-5 border-2 rounded-lg w-full max-w-screen-lg mx-auto mt-10 bg-white">
                

                {/* Left Section: Image and Icons */}
                <div className="space-y-4">
                    {/* User Info */}
                    <div className="inline-flex items-center space-x-4">
                        <span className="p-6 cursor-pointer bg-orange-600 rounded-full border-2 border-gray-400"></span>
                        <h2 className="font-semibold font-sans text-2xl text-teal-700">{props.name}</h2>
                    </div>

                    {/* Image */}
                    <img 
                        src={props.img} 
                        className="w-fit h-fit object-cover rounded-lg shadow-md" 
                        alt={props.name} 
                    />

                    {/* Icons */}
                    <div className="flex justify-start text-2xl text-gray-500 pt-2 space-x-4">
                        <span className="cursor-pointer">♡</span>
                        <span className="cursor-pointer">💬</span>
                        <span className="cursor-pointer ml-10">⎘</span>
                    </div>
                </div>

                {/* Right Section: Location, Description, and Tags */}
                <div className="relative flex flex-col justify-between pl-5">
                    {isLoggedIn && (
                        <button
                            //onClick={() => props.deletePost(props.id)}  {/* Uncomment this line when ready */}
                            className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-2xl font-bold"
                        >
                            X
                        </button>
                    )}
                    {/* Location */}
                    <h2 className="text-teal-700 hover:underline cursor-pointer mt-16 flex items-center font-sans font-medium text-3xl mb-2 mt-5">
                        <span role="img" aria-label="location-pin" className="text-orange-500 pr-2">📍</span>
                        {props.location}
                    </h2>

                    {/* Description */}
                    <p className="pt-2 text-gray-700 font-sans text-3xl flex-grow">{props.description}</p>

                    {/* Hashtags */}
                    <div className="flex flex-wrap pt-2 space-x-2">
                        {props.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="text-amber-500 hover:underline cursor-pointer font-sans text-xl"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Card> 
        </div>
    );
};

export default Post;
