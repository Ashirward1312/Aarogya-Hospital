// src/components/AboutSection.jsx
import React from "react";
import logo from "../images/Aarogya Hospital Raipur.jpg";
import hospitalImg from "../images/Best Super Speciality Hospital in Raipur.webp";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F04E30]">
            About Aarogya Hospital
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-[0.12em] text-slate-900">
            Aarogya Super Speciality Hospital
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A multi-speciality healthcare organization committed to safe,
            ethical, and world-class medical care.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-[12px]">
          <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-slate-800">
            100+ Beds
          </span>
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700">
            12 ICU Beds
          </span>
          <span className="rounded-full border border-[#F04E30]/30 bg-[#F04E30]/5 px-4 py-1.5 text-[#F04E30]">
            6 Operation Theatres
          </span>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* ================= LEFT: CONTENT ================= */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
            {/* Overview paragraphs */}
            <div className="space-y-3">
              <p>
                Aarogya Hospital is a unit of{" "}
                <b>Aarogya Hospital Research Centre Pvt. Ltd.</b>, a recognized
                healthcare organization centrally located in Raipur,
                Chhattisgarh.
              </p>

              <p>
                Established as a <b>Health Care Organization (HCO)</b>, the
                hospital commenced its operations on <b>30th November 2006</b>.
                We remain committed to safe, ethical care with integrity and
                compassion.
              </p>

              <p>
                With over <b>19 years of clinical experience</b>, Aarogya
                Hospital has earned community trust through patient safety,
                ethical medical practices, and regulatory compliance.
              </p>

              <p>
                Our facility includes ultra-modern operation theatres, advanced
                ICUs, and a comprehensive trauma care unit for critical medical
                needs.
              </p>
            </div>

            {/* Compliance card (compact) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                  <img
                    src={logo}
                    alt="Aarogya Hospital"
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    Legal &amp; Regulatory Compliance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Certified • Registered • Authorized
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  ✔ Type of Organization: <b>Health Care Organization (HCO)</b>
                </li>
                <li>
                  ✔ Legal Identity: <b>Private Corporate</b>
                </li>
                <li>
                  ✔ Registration Authority: <b>CMHO</b>
                </li>
                <li>
                  ✔ Shops &amp; Establishment Act Registration:{" "}
                  <b>RAIPOO19/HOS/R17</b>
                </li>
                <li>
                  ✔ Bio Medical Waste Authorization:{" "}
                  <b>5721/BMW/HO/CECB/2023</b>
                </li>
                <li>
                  ✔ Pollution Control License (Water &amp; Air):{" "}
                  <b>5077/RO/TS/CECB/2023</b>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= RIGHT: IMAGE (slightly smaller now) ================= */}
          <div className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <img
                src={hospitalImg}
                alt="Aarogya Hospital Building"
                className="
                  w-full object-cover object-center
                  h-[420px]
                  sm:h-[500px]
                  md:h-[560px]
                  lg:h-[600px]
                  xl:h-[640px]
                "
                loading="lazy"
              />

              {/* Soft bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;