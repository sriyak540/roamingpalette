import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';

const AddPost = ({username, onAddPost, onCancel}) => {
    const [postingUser, setPostingUser] = useState(sessionStorage.getItem('userId'));
    const [enteredDescription, setDescription] = useState('');
    const [enteredTags, setTags] = useState('');
    const [selectedImage, setImage] = useState('');
    const [enteredLocation, setLocation] = useState('');

    // let enteredDescriptionToken = sessionStorage.getItem('enteredDescription');
    // let enteredTagsToken = sessionStorage.getItem('enteredTags'); 
    // let selectedImageToken = sessionStorage.getItem('selectedImage');
    // let enteredLocationToken = sessionStorage.getItem('enteredLocation');

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
        // sessionStorage.setItem('enteredDescription', enteredDescription);
    };
    
    const tagHandler = (event) => {
        setTags(event.target.value);
        // sessionStorage.setItem('enteredTags', enteredTags);
    };

    const imageHandler = (event) => {
        setImage(event.target.value);
        // sessionStorage.setItem('selectedImage', selectedImage);
    };

    const locationHandler = (event) => {
        setLocation(event.target.value);
        // sessionStorage.setItem('enteredLocation', enteredLocation);
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

        onAddPost(post_data); // Call parent component's function to add post to the list
        console.log(post_data); // Log post data to console for verification
        onCancel();

        // clear form
        //setPostingUser('');
        setDescription('');
        setTags('');
        setImage('');
        setLocation('');
    };

    return (
        <div className="p-5 flex justify-center items-center">
            <Card className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="flex justify-between items-center">
                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={onCancel}
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
                    {/* Image */}
                    <div>
                        <textarea
                            value={selectedImage}
                            onChange={imageHandler}
                            placeholder="Enter image URL here"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="1"
                        />
                    </div>
                    {/* Location */}
                    <div>
                        <textarea
                            value={enteredLocation}
                            onChange={locationHandler}
                            placeholder="Enter location here"
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="1"
                        />
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddPost;
