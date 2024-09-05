import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginValue),
      };
      const res = await fetch('http://httpbin.org/post', config);
      if(res.ok) {
        toast.success("Login Succesfull!");
      }else{
        toast.error("Invalid login details!")
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to connect")
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="py-12 bg-slate-200">
        <div className="font-poppins max-w-md mx-auto p-4 bg-slate-50 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">Login</h2>
          <span className="mb-2 block  text-slate-900">
            Please enter your valid credentials
          </span>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-600"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
                value={loginValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-600"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 px-2 py-3.5 border border-gray-300 rounded-md w-full focus:outline-slate-200 text-sm"
                value={loginValue.password}
                onChange={handleChange}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-12 -translate-y-1/2 right-4 hover:cursor-pointer"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="mt-4">
              <button type="submit"
                className="py-2.5 px-4 w-full bg-orange-500 text-white rounded-md hover:bg-orange-600 duration-300 focus:outline-none"
              >
                Login
              </button>
            </div>
            <span className="block text-center mt-4">
              Don't have an account?
              <NavLink
                to="/sastobazar-register"
                className="ml-2 no-underline text-orange-500 duration-300 hover:text-orange-600"
              >
                Register
              </NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login