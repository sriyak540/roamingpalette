import React, { useState } from "react";
import Post from './Post'; 

const Posts = (props) => {
    const { items, isLoggedIn, onDelete } = props;  

    return (
        <div> 
            {items.map((post) => (
                <Post
                    key={post.id}
                    id={post.id} 
                    name={post.username}
                    img={post.image}
                    location={post.location}
                    description={post.description}
                    tags={post.tags.split(" ")}
                    isLoggedIn={isLoggedIn} 
                    onDelete={() => onDelete(post.id)} 
                />
            ))}
        </div>
    );
}

export default Posts;
