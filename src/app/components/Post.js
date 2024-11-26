import React, { useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    const isLoggedIn = props.isLoggedIn || false;

    // States to track thumbs-up and thumbs-down counts
    const [thumbsUpCount, setThumbsUpCount] = useState(0);
    const [thumbsDownCount, setThumbsDownCount] = useState(0);

    // State to track user vote (none, up, or down)
    const [userVote, setUserVote] = useState(null);

    // Function to handle thumbs-up click
    const handleThumbsUpClick = () => {
        if (userVote === 'up') {
            // User un-clicked thumbs-up
            setThumbsUpCount((prevCount) => prevCount - 1);
            setUserVote(null);
        } else if (userVote === 'down') {
            // User switches from thumbs-down to thumbs-up
            setThumbsDownCount((prevCount) => prevCount - 1);
            setThumbsUpCount((prevCount) => prevCount + 1);
            setUserVote('up');
        } else {
            // User clicks thumbs-up for the first time
            setThumbsUpCount((prevCount) => prevCount + 1);
            setUserVote('up');
        }
    };

    // Function to handle thumbs-down click
    const handleThumbsDownClick = () => {
        if (userVote === 'down') {
            // User un-clicked thumbs-down
            setThumbsDownCount((prevCount) => prevCount - 1);
            setUserVote(null);
        } else if (userVote === 'up') {
            // User switches from thumbs-up to thumbs-down
            setThumbsUpCount((prevCount) => prevCount - 1);
            setThumbsDownCount((prevCount) => prevCount + 1);
            setUserVote('down');
        } else {
            // User clicks thumbs-down for the first time
            setThumbsDownCount((prevCount) => prevCount + 1);
            setUserVote('down');
        }
    };

    return (
        <div className="w-full relative">
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
                    <div className="flex justify-start text-2xl text-gray-500 pt-2 space-x-6 items-center">
                        {/* Thumbs-up Icon with Counter */}
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon 
                                icon={faThumbsUp} 
                                className={`cursor-pointer ${
                                    userVote === 'up' ? 'text-orange-600' : 'hover:text-orange-600'
                                }`}
                                onClick={handleThumbsUpClick}
                            />
                            <span>{thumbsUpCount}</span> {/* Display thumbs-up count */}
                        </div>

                        {/* Thumbs-down Icon with Counter */}
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon 
                                icon={faThumbsDown} 
                                className={`cursor-pointer ${
                                    userVote === 'down' ? 'text-red-600' : 'hover:text-red-600'
                                }`}
                                onClick={handleThumbsDownClick}
                            />
                            <span>{thumbsDownCount}</span> {/* Display thumbs-down count */}
                        </div>

                        <span className="cursor-pointer ml-10">⎘</span>
                    </div>
                </div>

                {/* Right Section: Location, Description, and Tags */}
                <div className="relative flex flex-col justify-between pl-5">
                    {isLoggedIn && (
                        <button
                            className="absolute mt-2 right-2 text-red-600 hover:text-red-800 text-2xl font-bold"
                        >
                            X
                        </button>
                    )}
                    <div className="mt-16">
                        {/* CONNECTS GOOGLE MAPS FOR LOCATIONS */}
                        {/* Location */}
                        <h2 className="text-teal-700 hover:underline cursor-pointer flex items-center font-sans font-medium text-3xl mb-2 mt-5">
                            <span role="img" aria-label="location-pin" className="text-orange-500 pr-2">📍</span>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.location)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {props.location}
                            </a>
                        </h2>

                        {/* Description */}
                        <p className="pt-2 text-gray-700 font-sans text-3xl flex-grow">{props.description}</p>

                        {/* Hashtags */}
                        <div className="flex flex-wrap pt-2 mb-14 space-x-2">
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
                </div>
            </Card> 
        </div>
    );
};

export default Post;