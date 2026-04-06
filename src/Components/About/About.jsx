// src/components/AboutSection.jsx
import React, { useEffect } from "react";
import logo from "../images/logo1.jpg";
import hospitalImg from "../images/a.webp";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
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

        {/* Stats */}
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

        {/* Main Grid */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT: CONTENT */}
          <div className="space-y-7 text-sm sm:text-base leading-relaxed text-slate-700">
            {/* Overview paragraphs */}
            <div className="space-y-4">
              <p>
                Aarogya Hospital is a unit of{" "}
                <b>Aarogya Hospital Research Centre Pvt. Ltd.</b>, a recognized
                healthcare organization centrally located in Raipur,
                Chhattisgarh.
              </p>

              <p>
                Established as a <b>Health Care Organization (HCO)</b>, the
                hospital commenced its operations on{" "}
                <b>30th November 2006</b>. Since then, we have remained
                committed to delivering quality healthcare services with
                integrity and compassion.
              </p>

              <p>
                With over <b>19 years of clinical experience</b>, Aarogya
                Hospital has earned the trust of the community by maintaining
                high standards of patient safety, ethical medical practices, and
                regulatory compliance.
              </p>

              <p>
                Our facility is equipped with ultra-modern operation theatres,
                advanced ICUs, and a comprehensive trauma care unit to manage
                complex and critical medical conditions.
              </p>
            </div>

            {/* Compliance section */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                  <img
                    src={logo}
                    alt="Aarogya Hospital"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Legal & Regulatory Compliance
                  </h3>
                  <p className="text-sm text-slate-500">
                    Certified • Registered • Authorized
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
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
                  ✔ Shops & Establishment Act Registration:{" "}
                  <b>RAIPOO19/HOS/R17</b>
                </li>
                <li>
                  ✔ Bio Medical Waste Authorization:{" "}
                  <b>5721/BMW/HO/CECB/2023</b>
                </li>
                <li>
                  ✔ BMW Collection MOU:{" "}
                  <b>SMS Watergrace Enviroprotect Pvt. Ltd. (40019654)</b>
                </li>
                <li>
                  ✔ Pollution Control License (Water & Air):{" "}
                  <b>5077/RO/TS/CECB/2023</b>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: IMAGE + MAP */}
          <div className="space-y-6">
            {/* Image card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <img
                src={hospitalImg}
                alt="Aarogya Hospital Building"
                className="h-[320px] w-full object-contain object-center opacity-95 sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[580px]"
              />

              {/* Soft overlay badge */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                {/*  */}
              </div>
            </div>

            {/* Map card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <p className="px-4 py-2.5 text-xs font-medium text-[#F04E30] border-b border-slate-200 bg-slate-50 uppercase tracking-[0.12em]">
                LOCATION MAP
              </p>
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.40124538080124!2d81.6622531739687!3d21.254839115280692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd6f16e2ac29%3A0x739a132e13d1f0c8!2sAarogya%20Hospital%20%26%20Test%20Tube%20Baby%20Center!5e0!3m2!1sen!2sin!4v1767352740242!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aarogya Hospital – Super Speciality Hospital Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;