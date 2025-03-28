'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 py-4 px-6 flex justify-between items-center shadow-md z-50">
        <h1 className="text-xl font-bold text-blue-400">GameTracker Pro</h1>
        <input 
          type="text" 
          placeholder="Search for games..." 
          className="px-4 py-2 rounded bg-gray-700 text-white outline-none w-1/3"
        />
        <div className="flex space-x-4">
          <Link href="/wishlist" className="hover:text-blue-400">Wishlist</Link>
          <Link href="/sales" className="hover:text-blue-400">Sales Tracker</Link>
          <Link href="/upcoming" className="hover:text-blue-400">Upcoming Releases</Link>
          <Link href="/profile" className="hover:text-blue-400">Profile</Link>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="mt-20 px-8 py-12 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold">Trending PC Games</h2>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {/* Game Cards Placeholder */}
        </div>
      </section>
      
      {/* Wishlist Preview */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold">Your Wishlist</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Wishlist Items Placeholder */}
        </div>
      </section>
      
      {/* Upcoming PC Releases */}
      <section className="px-8 py-12 bg-gray-800">
        <h2 className="text-2xl font-bold">Upcoming PC Releases</h2>
        <ul className="mt-4 space-y-2">
          {/* Upcoming Releases Placeholder */}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
