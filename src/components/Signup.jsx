/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const account = await authService.createAccount(data);
      if (account) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Only blur the background, no color */}
      <div className="absolute inset-0 z-0 backdrop-blur-md" />

      {/* Transparent frosted glass form */}
      <div className="relative z-10 w-full max-w-lg bg-white/30 backdrop-blur-xl rounded-2xl p-10 shadow-2xl border border-white/40">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-full max-w-[80px]">
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign up to create an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline transition duration-200"
          >
            Sign In
          </Link>
        </p>

        {/* Error */}
        {error && (
          <div className="mt-6 text-red-600 text-center border border-red-300 bg-red-100 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            autoComplete="name"
            required
            {...register("name", {
              required: "Full name is required",
            })}
            error={errors.name?.message}
          />

          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            autoComplete="email"
            required
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Enter a valid email address",
              },
            })}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            required
            {...register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white text-lg py-2 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
