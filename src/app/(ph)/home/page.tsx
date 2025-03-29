'use client';

import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-hidden relative">

      {/* Floating Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/10 to-black opacity-40 animate-pulse"></div>

      {/* Main Content */}
      <main className="flex-1 mt-28 px-12 py-16 space-y-12">
        
        {/* Trending Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="w-full bg-gray-900/50 py-16 px-10 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-red-500 mb-6">Trending PC Games</h2>
          <motion.div 
            className="grid grid-cols-4 gap-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Trending Game Cards Here */}
          </motion.div>
        </motion.section>

        {/* Wishlist Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full py-16 px-10"
        >
          <h2 className="text-3xl font-bold text-red-500 mb-6">Your Wishlist</h2>
          <motion.div 
            className="grid grid-cols-3 gap-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Wishlist Items Here */}
          </motion.div>
        </motion.section>

        {/* Upcoming Releases Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-gray-900/50 py-16 px-10 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-red-500 mb-6">Upcoming PC Releases</h2>
          <ul className="mt-4 space-y-4">
            {/* Add Upcoming Releases Here */}
          </ul>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;
