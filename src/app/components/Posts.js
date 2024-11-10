import React from "react";
import Post from './Post'; 

const Posts = (props) => {
    const tags = new Array();
    return (
        <div> 
            {props.items.map((post) => (
                <Post
                    key = {post.id}
                    name ={post.username}
                    img = {post.image}
                    location = {post.location}
                    description = {post.description}
                    tags = {post.tags.split(" ")}
                />
            ))}
        </div>
    )
}

export default Posts;