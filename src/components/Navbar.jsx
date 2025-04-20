import React from "react";
import { FaRobot } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    // getting current location object to determine the current route
    const location = useLocation();

    // retriving user name from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
            {/* Logo */}
            <h1 className="text-2xl font-bold">{<FaRobot/>}</h1>

            <div className="space-x-6 flex items-center text-xl font-semibold">
                {/* conditional rendering of home */}
                {location.pathname !== "/" && (
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                )}
                
                {/* conditional rendering of sign-up and username */}
                {!user ? (
                    <Link to="/signup" className="hover:underline">
                        Sign Up
                    </Link>
                ) : (
                    <span className="font-semibold text-yellow-400">
                         {user.name}
                    </span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
