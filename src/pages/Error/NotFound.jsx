import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-indigo-600 tracking-widest animate-bounce">
        404
      </h1>
      
      <div className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded font-semibold">
        Page Not Found
      </div>

      <p className="text-2xl md:text-3xl font-light mt-8 mb-4">
        Sorry, we couldn't find the page you're looking for.
      </p>
      
      <p className="text-gray-500 max-w-md mb-8">
        But don't worry, you can find plenty of other things on our homepage.
      </p>

      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-lg hover:shadow-indigo-500/30"
      >
        Back to Home
      </Link>
    </div>
  );
}