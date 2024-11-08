import React from "react";
import Card from './Card';
import Post from './Post'; 
import styles from './Posts';

const Posts = (props) => {
    return (
        <Card className="container">
            {props.items.map((post) => (
                <Post className="post"
                    key = {post.id}
                    posting = {post.image}
                    location = {post.location}
                    description = {post.description}
                    tags = {post.tags}
                />
            ))}
        </Card>
    )
}

export default Posts;