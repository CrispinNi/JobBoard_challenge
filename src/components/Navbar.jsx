import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";
import { logout } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <nav className="flex justify-between items-center px-6 py-6 mx-10">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-2xl font-bold text-blue-900">
          ISCO Technologies
        </Link>
      </div>
      <ul className="flex items-center gap-6 text-sm font-medium text-[#21295c]">
        <li className="hover:text-[#06aeef]"> 
          <Link to="/">Find Jobs</Link>
        </li>
        <li className="hover:text-[#06aeef]">
          <a href="#">Contact Us</a>
        </li>
        <li className="hover:text-[#06aeef]">
          <a href="/admin">Admin</a>
        </li>
        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-[#06aeef] text-white px-4 py-2 rounded-full"
              >
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-gray-600">{user?.email}</li>
            <li>
              <button
                onClick={() => dispatch(logout())}
                className="bg-red-500 text-white px-4 py-2 rounded-full"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
