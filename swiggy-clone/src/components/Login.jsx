import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useState } from "react";
import swiggy from "../assets/swiggy.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormError("Please fill all the fields.");
      return;
    }
    if (password.length < 6) {
      setFormError("Password must have atleast 6 characters");
      return;
    }
    setFormError("");
    dispatch(loginUser({ email, password }));
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <div className="max-w-md mx-auto my-20  border-0 shadow-2xl rounded-2xl p-6 sm:p-10 ">
        <div className="flex justify-center">
          <img className="h-30" src={swiggy} alt="swiggy logo" />
        </div>
        <h2 className="block text-center text-orange-500">Login for Swiggy</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="block my-1.5 w-full border border-gray-400 rounded-lg p-2"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block my-1.5 w-full border border-gray-400 rounded-lg p-2"
          />

          {/* form error handling */}
          {formError && (
            <div className="text-xs text-red-500 ">{formError}</div>
          )}

          {/* if we get some error from the backend */}
          {error && <div className="text-xs text-red-500 ">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="block bg-orange-500 hover:bg-orange-600 cursor-pointer w-full h-10 rounded-2xl mt-2.5"
          >
            {loading ? "Loging In..." : "Login"}
          </button>
        </form>
        <p className="block text-center">
          Don't have an account?{" "}
          <a href="/" className="text-blue-500">
            Signup
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
