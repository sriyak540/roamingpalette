import React from 'react';
import styles from './Post';
import Card from './Card';

const Post = (props) => {
    return (
        <div>
            <Card className="grid p-5 border-2 rounded-lg max-w-400 mt-20 mr-auto bg-white grid-cols-2">
                    <div>
                        <div className="inline-flex">
                            {/* User icon will eventually go here */}
                            <span className="p-6 mb-4 cursor-pointer bg-orange-600 rounded-full border-2 border-gray-400"> </span>
                            <h2 className="font-semibold pt-2.5 text-align-bottom text-lg pl-5 text-teal-700">{props.name}</h2>
                        </div>

                        <img src={props.img} className="w-50" alt={props.name} />
                        <span className="flex justify-between pr-15">
                            <span className="inline-flex text-lg cursor-pointer align-center">♡</span>
                            <span className="inline-flex text-lg cursor-pointer align-center">💬</span>
                            <div className="inline-flex text-lg cursor-pointer align-center">⎘</div>
                        </span>
                    </div>
                    
                    <div className="pr-5 pl-5 pb-5 mt-16">
                        <h2 className="text-teal-700 hover:underline cursor-pointer">{props.location}</h2>
                        <p className="pt-2">{props.description}</p>
                        <p className="flex flex-wrap pt-2">
                            {props.tags.map((tag, index) => (
                                <span key={index} className="text-amber-500 hover:underline cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </p>
                    </div>
            </Card> 
        </div>
         
    )
}

export default Post;
