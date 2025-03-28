'use client';

const HomePage = () => {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-auto">

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
