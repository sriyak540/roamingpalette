// WelcomeBar.js
import React from 'react';
import Link from 'next/link'

function UserBar({ username, onCreate, onFilter }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
            <span className="text-lg font-semibold text-gray-800">Welcome, {username}</span>
            
            <div className="flex items-center space-x-4">
            <Link href="/additem">
                <button className="py-2 px-6 bg-teal-700 text-white rounded-lg hover:bg-teal-600">
                    Create
                </button>
            </Link>
                
                <button 
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    onClick={onFilter}
                >
                    ≡ Filter
                </button>
            </div>
        </div>
    );
}

export default UserBar;
