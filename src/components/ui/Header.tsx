'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full bg-black py-5 px-10 flex justify-between items-center border-b border-red-600 z-50">
            {/* Logo Animation */}
            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ 
                    opacity: Math.max(1 - scrollY / 300, 0), 
                    scale: Math.max(1 - scrollY / 1000, 0.8) 
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <Image
                    src="/images/logo.jpg"
                    alt="PlayHamster logo"
                    width={200}
                    height={200}
                    className="transition-transform duration-300"
                    priority
                />
            </motion.div>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for games..."
                className="px-4 py-2 rounded-lg bg-gray-900 text-white outline-none border border-red-500 focus:ring-2 focus:ring-red-500 w-1/3"
            />

            {/* Navigation Links */}
            <div className="flex space-x-8">
                <Link href="/wishlist" className="hover:text-red-400 transition">Wishlist</Link>
                <Link href="/sales" className="hover:text-red-400 transition">Sales Tracker</Link>
                <Link href="/upcoming" className="hover:text-red-400 transition">Upcoming Releases</Link>
                <Link href="/profile" className="hover:text-red-400 transition">Profile</Link>
            </div>
        </div>
    );
}
