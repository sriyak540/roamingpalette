import React from "react";
import Post from './Post'; 

const Posts = (props) => {
    const { items, isLoggedIn } = props;  

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
                    
                />
            ))}
        </div>
    );
}

export default Posts;
