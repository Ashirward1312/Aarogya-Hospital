import React, { useEffect, useRef, useState } from "react";

import home2 from "../images/Hospital in shankar nagar.webp";
import home3 from "../images/Best Hospital in Shankar nagar raipur.webp";
import home4 from "../images/Best hospital in raipur.webp";

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

  const [firstLoaded, setFirstLoaded] = useState(false);

  // First image preload ASAP (component mount)
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGES[0];
    img.onload = () => setFirstLoaded(true);
    img.onerror = () => setFirstLoaded(true);
  }, []);

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
        {/* Placeholder */}
        {!firstLoaded && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-950" />
          </div>
        )}

        <img
          src={HERO_IMAGES[currentIndex]}
          alt="Aarogya Hospital banner"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority={currentIndex === 0 ? "high" : "low"}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding={currentIndex === 0 ? "sync" : "async"}
          onLoad={() => {
            if (!heroReady) setHeroReady(true);
            if (currentIndex === 0) setFirstLoaded(true);
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

        {/* Overlay */}
        <div className={`absolute inset-0 ${firstLoaded ? "bg-black/60" : "bg-black/20"}`} />
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
            Aarogya Hospital is a leading{" "}
            <a
              href="https://www.aarogyahospitalraipur.com/"
              className="font-semibold text-orange-300 underline decoration-orange-300/40 underline-offset-4 hover:text-orange-200"
            >
              super speciality hospital in Raipur, Chhattisgarh,
            </a>{" "}
            offering advanced treatments, experienced doctors, and modern medical
            facilities. We provide trusted, patient-focused healthcare with a
            strong commitment to safety, accurate diagnosis, and faster
            recovery—making us one of the best hospitals in Raipur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;