import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // hook for navigation after sign up
import { toast, ToastContainer } from "react-toastify"; //toast notification for feedback
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // validation function
    const validate = () => {
        const { name, email, password } = form;

        if (!name || !email || !password) { // checking for empty feild
            toast.error("Please fill all the fields.");
            return false;
        }

        // Regex for email and password validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; // password must contain 1 Uppercase, 1 digit and min 6 character

        if (!emailRegex.test(email)) { //validate email
            toast.error("Enter a valid email.");
            return false;
        }

        if (!passwordRegex.test(password)) { //validate password
            toast.error("Password must be at least 6 characters, include a number and uppercase letter.");
            return false;
        }

        return true;
    };

    // submit function
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        if (validate()) {
            localStorage.setItem("user", JSON.stringify(form)); // save user data to localStorage
            toast.success("Signup successful!");
            setTimeout(() => { navigate("/"); }, 2000); // after 2 sec it will redirect to home
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md" >
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

                <input className="w-full mb-4 p-3 rounded bg-gray-700 text-white" name="name" type="text" placeholder="Full Name"
                    value={form.name} //name input
                    onChange={handleChange}
                />

                <input name="email" type="email" placeholder="Email" className="w-full mb-4 p-3 rounded bg-gray-700 text-white"
                    value={form.email} //email input
                    onChange={handleChange}
                />

                <input name="password" type="password" placeholder="Password" className="w-full mb-6 p-3 rounded bg-gray-700 text-white"
                    value={form.password} //Password input 
                    onChange={handleChange}
                />


                <button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-bold py-3 rounded" >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
