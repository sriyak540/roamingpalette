import React from 'react';
import styles from './Post';

const Post = (props) => {
    return (
        <div>
            <div className="post-header">
                <div key={props.id} className="user-name"/>
                {/* User icon will eventually go here */}
            </div>
            <img src={props.img} className="post-image" alt={props.name} />
            <div className="post-info">
                <h2>{props.location}</h2>
                <p>{props.description}</p>
                <div className='post-tags'>{props.tags}</div>
            </div>
            <div className="icons">
                <div className="icon">♡</div>
                <div className="icon">💬</div>
                <div className="icon">...</div>
                <div className="icon">⎘</div>
            </div>
        </div>    
    )
}

export default Post;
