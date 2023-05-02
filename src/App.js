import "./App.css";
import Routs from "./routes/Routes";
import React, { useState, useEffect } from 'react';




function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // set loading to false after 2 seconds
  }, []);


  return (
    <div>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white z-50">
          <div className="flex space-x-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-black animate-pulse"></div>
          </div>
        </div>
      ) : (
        <Routs />
      )}
    </div>
  );
}

export default App;
