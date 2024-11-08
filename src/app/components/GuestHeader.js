//unauthorized user's home page
import React, { useState } from 'react';


function GuestHeader() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div> 
            <header className="flex items-center justify-between p-2 bg-white">

            <div className="flex items-center space-x-2">
                <img src="/logo.svg" alt="Roaming Palette Logo" width="50"/>
                <h1 className="font-extrabold text-black font-serif text-2xl pl-2">Roaming Palette</h1>
            </div>

            <div className="flex items-center justify-between space-x-2">
                <input 
                    type="text" 
                    value={searchQuery}  
                    placeholder="Search restaurant, cuisines..." 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-3 w-flex border cursor-pointer border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
            </div>

            <div className="flex items-center justify-between space-x-4">
                <button className="p-3 text-center hover:underline cursor-pointer bg-orange-600 rounded-lg text-black  font-serif" type='submit'>Sign Up</button>
                <button className="p-3 pr-4 pl-4 text-center hover:underline cursor-pointer bg-orange-300 rounded-lg text-black font-serif" type='submit'>Login</button>
            </div>

            </header>
            
            <div className="relative w-full h-full">
                <img src="/header-image.svg" alt="header image" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 flex items-center justify-center">
                    <div className="w-2/4"/>
                    <h1 className="p-3  pr-6 text-6xl font-serif text-white text-right w-2/4 font-light">Explore <br/>the <br/>palettes of <br/>the world</h1>
                </div>
            </div>

        </div>
    );
}

export default GuestHeader;