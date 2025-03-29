'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';

export function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Header */}
            <motion.div 
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="fixed top-0 left-0 w-full bg-black py-4 px-6 flex justify-between items-center z-50"
            >
                {/* Left Section: Menu + Logo */}
                <div className="flex items-center space-x-4">
                    {/* Sidebar Toggle Button */}
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        transition={{ type: "spring", stiffness: 200 }}
                        onClick={() => setSidebarOpen(!sidebarOpen)} 
                        className="text-red-500 hover:text-red-400 transition"
                    >
                        <Menu size={24} />
                    </motion.button>

                    {/* Logo Animation */}
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ 
                            opacity: Math.max(1 - scrollY / 300, 0), 
                            scale: Math.max(1 - scrollY / 1000, 0.8) 
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="w-16 md:w-20"
                    >
                        <Image
                            src="/images/logo.jpg"
                            alt="PlayHamster logo"
                            width={200}
                            height={200}
                            className="transition-transform duration-300 rounded-full"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Search Bar */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-1/4 sm:w-1/3 md:w-1/6"
                >
                    <input
                        type="text"
                        placeholder="Search for games..."
                        className="px-4 py-2 pl-10 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-red-500 w-full"
                    />
                    <Search className="absolute left-3 top-2 text-gray-400" size={20} />
                </motion.div>
            </motion.div>

            {/* Sidebar with animation */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div 
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-64 bg-black border-r-2 border-red-600 z-50"
                    >
                        {/* Close Button */}
                        <button onClick={() => setSidebarOpen(false)} className="p-4 text-white hover:text-red-400 transition flex justify-end">
                            ✖
                        </button>

                        {/* Animated Navigation Links */}
                        <nav className="flex flex-col space-y-6 mt-4 text-white px-6 relative z-10">
                            {["Wishlist", "Sales Tracker", "Upcoming Releases", "Profile"].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-red-400 transition">
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
