import React from 'react';

const Loader = () => {
    return (
       
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white z-50">
                <div className="flex space-x-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-black animate-pulse"></div>
                </div>
            </div>
    )
}

export default Loader