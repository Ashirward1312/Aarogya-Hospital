// src/pages/HeartAndOTModern.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import h from "../images/h1.webp"; // heart / cardiac image
import op from "../images/op_.webp"; // OT / operation image

const HeartAndOTModern = () => {
  const [opLoaded, setOpLoaded] = useState(false);
  const [opError, setOpError] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="heart" className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 px-4 py-10 md:px-10 lg:px-20">
      {/* BACK BUTTON */}
      <div className="mx-auto max-w-6xl w-full mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 px-4 py-2.5 rounded-full shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-slate-50 transition-all duration-300 font-bold text-sm"
        >
          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </div>
      {/* PAGE HEADER */}
      <header className="mx-auto mb-10 max-w-6xl text-center relative">
        <p className="text-xs font-semibold tracking-[0.32em] text-slate-500">
          ADVANCED HEART & SURGICAL SCIENCES
        </p>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-orange-500 sm:text-3xl lg:text-4xl">
          CARING FOR EVERY BEAT, EVERY MOMENT
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-700 md:text-base">
          We bring together expert specialists, next‑generation technology and
          truly personal care in one modern, integrated centre of excellence.
        </p>
      </header>

      {/* MAIN WRAPPER */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10">
        {/* CARDIAC SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
          {/* Decorative gradient blobs */}
          <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.2fr_minmax(0,1fr)]">
            {/* LEFT: TEXT CONTENT */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <span>Advanced Cardiac Centre</span>
              </div>

              <h2 className="mt-3 bg-gradient-to-r from-slate-900 via-orange-600 to-emerald-600 bg-clip-text text-2xl font-extrabold uppercase leading-tight tracking-tight text-transparent md:text-3xl lg:text-4xl">
                Precision Heart Care,
                <span className="block text-2xl md:text-3xl lg:text-4xl">
                  Designed Around You
                </span>
              </h2>

              <div className="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-emerald-400" />

              <p className="mt-5 text-sm text-slate-700 md:text-base">
                Our cardiac service combines deep clinical expertise with
                advanced diagnostics and minimally invasive techniques, so that
                every patient receives safe, effective and personalised care.
              </p>

              {/* Feature list */}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  {
                    title: "LEADING HEART SPECIALISTS",
                    text: "Renowned cardiologists and cardiac surgeons working as one coordinated team, supported by specialised cardiac nurses.",
                  },
                  {
                    title: "END‑TO‑END CARDIAC SERVICES",
                    text: "From preventive heart screenings to complex interventions, every stage of care is available under a single, integrated programme.",
                  },
                  {
                    title: "NEXT‑GENERATION THERAPIES",
                    text: "Advanced options for heart failure, rhythm disorders and structural heart disease, tailored precisely to each individual case.",
                  },
                  {
                    title: "24/7 CARDIAC EMERGENCY RESPONSE",
                    text: "Dedicated protocols for heart attacks and critical events, with rapid diagnosis and immediate, life‑saving intervention.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]"
                  >
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-orange-500 via-rose-500 to-emerald-400" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl transition duration-300 group-hover:bg-orange-400/20" />

                    <div className="relative pl-4">
                      <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 md:text-sm">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold text-emerald-700 md:text-base italic">
                “Every heartbeat matters, and every patient deserves exceptional,
                compassionate care.”
              </p>
            </div>

            {/* RIGHT: HEART IMAGE */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/50 to-emerald-50/60 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.18),transparent_55%)]" />
                <img
                  src={h}
                  alt="3D heart illustration representing advanced cardiac care"
                  loading="lazy"
                  className="relative z-10 h-full w-full rounded-2xl object-contain p-6 md:p-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SURGICAL / OT SECTION */}
        <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-slate-50 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.32),transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.3),transparent_55%)]" />

          <div className="relative grid gap-10 p-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:p-10">
            {/* LEFT: OT IMAGE WITH LOADING / FALLBACK */}
            <div className="flex items-center justify-center">
              <div className="relative h-72 w-full max-w-md overflow-hidden rounded-3xl border border-white/5 bg-slate-800/60 shadow-[0_18px_45px_rgba(15,23,42,0.9)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-emerald-400/10" />

                {/* Skeleton / fallback background */}
                {!opLoaded && !opError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 animate-pulse">
                    <div className="h-12 w-12 rounded-full bg-slate-700/60" />
                    <p className="text-[11px] text-slate-300">
                      Loading operation theatre image...
                    </p>
                  </div>
                )}

                {/* If image fails, show a simple fallback illustration */}
                {opError ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="h-14 w-14 rounded-2xl bg-slate-700/70 flex items-center justify-center text-xs font-semibold text-slate-100">
                      OT
                    </div>
                    <p className="text-[11px] text-slate-300 text-center px-4">
                      Operation theatre image not available.
                    </p>
                  </div>
                ) : (
                  <img
                    src={op}
                    alt="Modern operation theatre and surgical team"
                    loading="lazy"
                    onLoad={() => setOpLoaded(true)}
                    onError={() => {
                      setOpLoaded(false);
                      setOpError(true);
                    }}
                    className={`h-full w-full object-cover transition-opacity duration-500 ${
                      opLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* RIGHT: TEXT CONTENT */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                SURGERY WITH SAFETY, PRECISION AND CALM
              </h2>

              <p className="mt-4 text-sm text-slate-100/85 md:text-base">
                Our operation theatres are built to international standards,
                with advanced technology and carefully engineered workflows that
                keep every procedure safe, efficient and reassuring.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "STATE‑OF‑THE‑ART OT TECHNOLOGY",
                  "HIGH‑EXPERIENCE SURGICAL TEAMS",
                  "STRICT INFECTION‑CONTROL PROTOCOLS",
                  "CLEAR, REASSURING COMMUNICATION",
                ].map((title, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-100/90"
                  >
                    <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-300 text-[10px] font-bold text-slate-900 shadow-md">
                      {i + 1}
                    </span>
                    <p className="text-xs font-semibold leading-5 md:text-sm">
                      {title}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold text-emerald-200 md:text-base italic">
                “Every procedure is a new beginning, and our team is devoted to
                making that beginning safe, confident and positive.”
              </p>

                
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeartAndOTModern;