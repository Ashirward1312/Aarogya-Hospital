// src/components/HeroSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import home2 from "../images/home2_.webp";
import home3 from "../images/home3_.webp";
import home4 from "../images/a1.webp";

const HERO_IMAGES = [
  `${import.meta.env.BASE_URL}home1.webp`,
  home2,
  home3,
  home4,
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(null);
  const [incomingLoaded, setIncomingLoaded] = useState(false);
  const timerRef = useRef(null);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const preload = () => {
      HERO_IMAGES.slice(1).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    let id;
    if ("requestIdleCallback" in window) id = window.requestIdleCallback(preload);
    else id = setTimeout(preload, 1500);

    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    if (!heroReady) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const start = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => {
        const next = (currentIndex + 1) % HERO_IMAGES.length;
        setIncomingIndex(next);
        setIncomingLoaded(false);
      }, 5000);
    };

    let id;
    if ("requestIdleCallback" in window) id = window.requestIdleCallback(start);
    else id = setTimeout(start, 1500);

    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(id);
      else clearTimeout(id);
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [heroReady, currentIndex]);

  useEffect(() => {
    if (incomingIndex === null || !incomingLoaded) return;
    const t = setTimeout(() => {
      setCurrentIndex(incomingIndex);
      setIncomingIndex(null);
      setIncomingLoaded(false);
    }, 700);
    return () => clearTimeout(t);
  }, [incomingIndex, incomingLoaded]);

  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGES[currentIndex]}
          alt="Aarogya Hospital banner"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority={currentIndex === 0 ? "high" : "low"}
          decoding="async"
          onLoad={() => {
            if (!heroReady) setHeroReady(true);
          }}
        />

        {incomingIndex !== null && (
          <img
            src={HERO_IMAGES[incomingIndex]}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              incomingLoaded ? "opacity-100" : "opacity-0"
            }`}
            decoding="async"
            onLoad={() => setIncomingLoaded(true)}
          />
        )}

        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-4">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.26em] text-slate-300">
            AAROGYA HOSPITAL
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.15] text-slate-100">
            Best Super Speciality Hospital in{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Raipur (C.G.)
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300">
            <Link
              to="/"
              className="font-semibold text-orange-300 underline decoration-orange-300/40 underline-offset-4 hover:text-orange-200"
            >
              Aarogya Hospital
            </Link>{" "}
            We deliver trusted healthcare in Raipur through advanced treatments,
            experienced doctors, and modern medical facilities—because your
            health, safety, and recovery are always our top priorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;