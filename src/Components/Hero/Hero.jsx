import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiCalendar } from "react-icons/fi";

// Images
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import home4 from "../images/a1.PNG";

const HERO_IMAGES = [home1, home2, home3, home4];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      {/* Background Images */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Aarogya Hospital banner ${idx + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              activeIndex === idx ? "opacity-100" : "opacity-0"
            } ${idx === 3 ? "object-top md:scale-105" : ""}`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-4">
        <div
          className={`mx-auto max-w-[1200px] text-center transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Hospital Name – Font 1 */}
          <p className="font-inter text-2xl sm:text-3xl font-semibold tracking-[0.22em] text-slate-300">
            AAROGYA SUPER SPECIALITY HOSPITAL
          </p>

          {/* Headline – Font 2 */}
          <h1 className="font-playfair mt-3 text-[1.4rem] sm:text-2xl lg:text-[2.8rem] leading-tight text-slate-100">
            ADVANCED CARE
            <span
              className="block mt-1 bg-clip-text text-transparent font-semibold"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f97316, #fb923c)", // Orange CTA
              }}
            >
              IN THE HEART OF RAIPUR
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              <FiCalendar />
              Book Appointment
            </Link>

            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-full border border-slate-400/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              <FiPhoneCall />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
