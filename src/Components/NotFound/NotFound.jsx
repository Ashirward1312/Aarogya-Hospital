import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHome, FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Aarogya Hospital Raipur</title>
        <meta
          name="description"
          content="The page you are looking for could not be found. Return to Aarogya Hospital's homepage."
        />
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center px-5 py-20 bg-white">
        {/* Soft red glow */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[100px]" />

        <div className="relative z-10 w-full max-w-md text-center">
          {/* 404 number */}
          <h1
            className="text-[8rem] sm:text-[10rem] font-black leading-none tracking-tighter"
            style={{
              background: "linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </h1>

          {/* Message */}
          <h2 className="text-slate-800 text-xl sm:text-2xl font-bold mt-2 mb-3">
            Page Not Found
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-10">
            Sorry, the page you're looking for doesn't exist.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-semibold shadow-lg shadow-red-500/20 hover:-translate-y-0.5 hover:shadow-red-500/35 transition-all duration-200"
            >
              <FaHome />
              Go Back Home
            </Link>

            
          </div>


          
        </div>
      </div>
    </>
  );
}
