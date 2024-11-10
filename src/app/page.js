  "use client";

  import GuestHeader from './components/GuestHeader';
  import AddPost from './components/AddPost';
  import React, {useState} from "react";
  import Posts from './components/Posts';
  import UserBar from './components/UserBar';

  export default function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("")
    const [showAddPost, setShowAddPost] = useState(false);

    const [posts, setPosts] = useState([
      {
          id: 0,
          username: 'user1',
          location: 'Ramen Shop, City, County, Zip',
          description: 'While the tender, curly noodles and warm savory broth build the foundation of a good ramen soup, the toppings and mix-ins make it just plain fun and can take the flavors of your bowl in a million and one directions.',
          tags: 'ramen ramennoodles noodles vegetarian city country',
          image: '/ramen-image.svg'
      }, 
      {
          id: 1, 
          username: 'user2',
          location: 'Burger Shop, City, County, Zip',
          description: 'Huddled on the couch of a cosy local book store, he declared his signature dish to be the Fried Chicken. We enthused over how remarkably un-greasy it is and marvelled at how it’s crunchy all over, unlike KFC which we eeewed about how the skin has greasy soggy patches.',
          tags: 'burger chickenburger burgershop city country burgershop',
          image: '/burger-image.svg'
      }, 
      {
          id: 2,
          username: 'user3',
          location: 'Thai Food, City, County, Zip',
          description: 'Vegan Thai Green Curry',
          tags: 'thaigreencurry curry thaifood veganfood vegancurry',
          image: '/thai-curry-image.svg'
      },
    ]);
    const handleLogin = (user) => {
      setUsername(user);
      setIsLoggedIn(true);
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername("");
  };

    const addPostHandler = (newPost) => {
      setPosts(prevPosts => [...prevPosts, newPost])
    }
    const handleCreate = () => {
      setShowAddPost(true);
      console.log("Create button clicked");
  };

  const handleFilter = () => {
      console.log("Filter button clicked");
  };

  const handleCancel = () => {
    setShowAddPost(false); 
  };


    return(
      <div> 
        {/* 
          if (user != logged in ) {
            guestheader and pages
          } else if (user == logged in) {
            display authenticated user homepage and pages
            add post page will be availbe in this else statement 
          }
        */}
        <GuestHeader
          isLoggedIn={isLoggedIn} 
          onLogin={handleLogin} 
          onLogout={handleLogout} 
          username={username}
        />
        <div className="w-full p-5 shadow-slate-50 rounded-lg mt-5 mr-auto"> 

        {isLoggedIn && (
          <UserBar 
          username={username} 
          onCreate={handleCreate} 
          onFilter={handleFilter} 
          />
        )}

        
        {showAddPost && (
          <AddPost username={username} onAddPost={addPostHandler} onCancel={handleCancel} />
        )} 

  <Posts items={posts} isLoggedIn={isLoggedIn} />
        </div>
      </div>
    );
  }