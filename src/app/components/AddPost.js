//unauthorized user's home page
import React, { useState } from 'react';
import Button from './Button';
import Card from './Card';
import styles from './AddPost';

const AddPost = () => {
    const [postingUser, setPostingUser] = useState('');
    const [enteredLocation, setLocation] = useState('');
    const [enteredDescription, setDescription] = useState('');
    const [enteredTags, setEnteredTags] = useState('');
    const [selectedImage, setImage] = useState('');


    const userHandler = (event) => {
        setPostingUser(event.target.value);
    };

    const locationHandler = (event) => {
        setLocation(event.target.value);
    };

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    };

    const tagHandler = (event) => {
        setEnteredTags(event.target.value);
    };

    const imageHandler = (event) => {
        setImage(event.target.value);
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

        setPostingUser('');
        setLocation('');
        setDescription('');
        setEnteredTags('');
        setImage('');
    }

    return (
        <div className="padding">
            <Card className="card">
                <form onSubmit={submitHandler}>
                    <div className="split">
                        <section className="image-side">
                            <div id="username" type="text" value = {postingUser} onChange={userHandler}/>
                            <input id="img" type="text" value = {selectedImage} onChange={imageHandler}/>
                        </section>
                        <section className="details-side">
                            <input id="location" type="text" value = {enteredLocation} onChange={locationHandler}/>
                            <input id="description" type="text" value = {enteredDescription} onChange={descriptionHandler}/>
                            <input id="tags" type="text" value = {enteredTags} onChange={tagHandler}/>
                        </section>
                    </div>
                    <Button type="submit">Post</Button>
                </form>
            </Card>
        </div>
    );
}

export default AddPost;