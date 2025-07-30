/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { FiLogOut } from "react-icons/fi";

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    try {
      setLoading(true);
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      disabled={loading}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm sm:text-base font-medium transition duration-200
        ${loading ? "bg-gray-300 cursor-not-allowed" : "bg-white hover:bg-blue-100"}
        text-blue-600 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : (
        <>
          <FiLogOut className="text-lg" />
          Logout
        </>
      )}
    </button>
  );
}

export default LogoutBtn;
