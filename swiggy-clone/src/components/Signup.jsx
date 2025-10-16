import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../features/auth/authSlice";
import { useState } from "react";
import swiggy from "../assets/swiggy.png"

function Signup() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormError("Please fill all the fields");
      return;
    }
    if (password.length < 6) {
      setFormError("Password must have atleast 6 characters");
      return;
    }
    setFormError("");
    dispatch(signupUser({ email, password }));
  };
  return (
    <>
      <div className="max-w-md my-20 mx-40 border-1 rounded-2xl p-10 ">
        <div className="flex justify-center">
            <img className="h-30" src={swiggy} alt="swiggy logo" />
        </div>
        <h2>Sign up for Swiggy</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* form error handling */}
          {formError && <div>{formError}</div>}

          {/* if we get some error from the backend */}
          {error && <div>{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
