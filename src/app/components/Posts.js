import React, { useState } from "react";
import Post from './Post'; 

const Posts = (props) => {
    const { items, isLoggedIn, onDelete } = props;  

    return (
        <div> 
            {items.map((post) => (
                <Post
                    key={post._id}
                    id={post._id} 
                    name={post.username}
                    img={post.image}
                    location={post.location}
                    description={post.description}
                    tags={Array.isArray(post.tags) ? post.tags : []}
                    isLoggedIn={isLoggedIn} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
}

export default Posts;
