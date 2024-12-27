import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-semibold">
          PayZap
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/transactions" className="text-white hover:text-gray-300">Transactions</Link>
          <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
