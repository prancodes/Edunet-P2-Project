const HomePage = () => {
    return (
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to PayZap</h1>
          <p className="text-xl mb-6">The easiest way to manage your transactions and profile.</p>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  