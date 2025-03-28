'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-auto">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black py-5 px-10 flex justify-between items-center border-b border-red-600 z-50">
        <h1 className="text-2xl font-extrabold text-red-500 tracking-wide neon-glow">
          GameTracker Pro
        </h1>
        <input
          type="text"
          placeholder="Search for games..."
          className="px-4 py-2 rounded-lg bg-gray-900 text-white outline-none border border-red-500 focus:ring-2 focus:ring-red-500 w-1/3"
        />
        <div className="flex space-x-8">
          <Link href="/wishlist" className="hover:text-red-400 transition">Wishlist</Link>
          <Link href="/sales" className="hover:text-red-400 transition">Sales Tracker</Link>
          <Link href="/upcoming" className="hover:text-red-400 transition">Upcoming Releases</Link>
          <Link href="/profile" className="hover:text-red-400 transition">Profile</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mt-28 px-12 py-16 space-y-12">
        {/* Trending Section */}
        <section className="w-full bg-gray-900 py-16 px-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-red-500 mb-6">Trending PC Games</h2>
          <div className="grid grid-cols-4 gap-8">
            {/* Add Trending Game Cards Here */}
          </div>
        </section>

        {/* Wishlist Section */}
        <section className="w-full py-16 px-10">
          <h2 className="text-3xl font-bold text-red-500 mb-6">Your Wishlist</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Add Wishlist Items Here */}
          </div>
        </section>

        {/* Upcoming Releases Section */}
        <section className="w-full bg-gray-900 py-16 px-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-red-500 mb-6">Upcoming PC Releases</h2>
          <ul className="mt-4 space-y-4">
            {/* Add Upcoming Releases Here */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
