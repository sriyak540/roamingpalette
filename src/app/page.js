"use client";

import GuestHeader from './components/GuestHeader';
import AddPost from './components/AddPost';
import React from "react";
import Posts from './components/Posts';

export default function Home() {

  const posts = [
    {
        username: 'user1',
        location: 'Ramen Shop, City, County, Zip',
        description: 'While the tender, curly noodles and warm savory broth build the foundation of a good ramen soup, the toppings and mix-ins make it just plain fun and can take the flavors of your bowl in a million and one directions.',
        tags: '#ramen #ramennoodles #noodles #vegetarian #city #country',
        image: '/ramen-image.svg'
    }, 
    {
        username: 'user2',
        location: 'Burger Shop, City, County, Zip',
        description: 'Huddled on the couch of a cosy local book store, he declared his signature dish to be the Fried Chicken. We enthused over how remarkably un-greasy it is and marvelled at how it’s crunchy all over, unlike KFC which we eeewed about how the skin has greasy soggy patches.',
        tags: '#burger #chickenburger #burgershop #city #country #burgershop',
        image: '/burger-image.svg'
    }, 
    {
        username: 'user3',
        location: 'Thai Food, City, County, Zip',
        description: 'Vegan Thai Green Curry',
        tags: '#thaigreencurry #curry #thaifood #veganfood #vegancurry',
        image: '/thai-curry-image.svg'
    },
  ];

  const addPostHandler = newPost => {
    setPosts(prevPosts => [...prevPosts, newPost])
  }

  return(
    <div> 
      <GuestHeader/>
      <Posts items={posts}/>
      {/* <AddPost onAddPost = {addPostHandler}/> */}
    </div>
  );
}