import React from "react";
import {
  FaStethoscope,
  FaUserMd,
  FaHeartbeat,
  FaXRay,
  FaFlask,
  FaAmbulance,
  FaPills,
  FaHandsHelping,
  FaShieldAlt,
} from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200 overflow-hidden">
      {/* Soft background accents (grey + orange) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-[-60px] h-56 w-56 rounded-3xl bg-[#F04E30]/20 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] h-64 w-64 rounded-full bg-slate-300/40 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-5 py-1.5 bg-white border border-[#F04E30]/30 rounded-full text-[11px] font-semibold text-[#F04E30] tracking-[0.22em] uppercase">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            COMPLETE MEDICAL SOLUTIONS
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-[#F04E30]/0 via-[#F04E30] to-[#F04E30]/0 rounded-full mx-auto mt-3" />

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            World‑class clinical, diagnostic, laboratory and support services
            under one roof for safe, seamless and coordinated patient care.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid gap-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Cardiology */}
          <ServiceCard
            icon={<FaHeartbeat />}
            title="Cardiology & Heart Care"
            items={[
              "OPD & Inpatient Cardiology Services",
              "Cardiac ICU / Coronary Care Unit (CCU)",
              "Advanced ECG, 2D Echo & TMT",
              "Management of Heart Failure & Arrhythmias",
              "Acute Heart Attack Stabilization",
            ]}
            color="rose"
          />

          <ServiceCard
            icon={<FaUserMd />}
            title="Clinical Services – Surgery & Critical Care"
            items={[
              "General & GI Surgery (Laparoscopy / Laser)",
              "Orthopedics & Joint Replacement",
              "Surgical Oncology",
              "Neuro Surgery",
              "ICU & Critical Care",
              "Emergency Medicine",
              "Trauma Management",
            ]}
            color="blue"
          />

          <ServiceCard
            icon={<FaStethoscope />}
            title="Clinical Services – Medicine & Specialties"
            items={[
              "General Medicine",
              "Obstetrics & Gynecology (High‑Risk & Infertility)",
              "Urology",
              "Ophthalmology",
              "Paediatrics",
              "Dentistry",
              "Nephrology",
            ]}
            color="emerald"
          />

          <ServiceCard
            icon={<FaFlask />}
            title="Laboratory Services"
            items={[
              "Clinical Microbiology & Serology",
              "Clinical Pathology",
              "Clinical Hematology",
              "Clinical Biochemistry",
            ]}
            color="indigo"
          />

          <ServiceCard
            icon={<FaXRay />}
            title="Diagnostic Services"
            items={["CT Scan", "Ultrasound", "X‑Ray", "2D Echo", "Spirometry"]}
            color="purple"
          />

          <ServiceCard
            icon={<FaHandsHelping />}
            title="Professions Allied to Medicine"
            items={["Dietetics", "Physiotherapy"]}
            color="orange"
          />

          <ServiceCard
            icon={<FaPills />}
            title="Pharmacy Services"
            items={["In‑house Pharmacy / Dispensary"]}
            color="teal"
          />

          <ServiceCard
            icon={<FaAmbulance />}
            title="Support Services – Patient Facilities"
            items={["Ambulance", "Canteen", "Blood Bank (Outsourced)"]}
            color="blue"
          />

          <ServiceCard
            icon={<FaShieldAlt />}
            title="Support Services – Operations & Safety"
            items={["Housekeeping", "Security"]}
            color="indigo"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, items, color }) => {
  const colorThemes = {
    blue: {
      accent: "from-sky-400 to-indigo-500",
      iconBg: "bg-sky-50 text-sky-700",
      border: "border-sky-100",
      title: "text-sky-900",
      bullet: "bg-sky-500",
    },
    emerald: {
      accent: "from-emerald-400 to-teal-500",
      iconBg: "bg-emerald-50 text-emerald-700",
      border: "border-emerald-100",
      title: "text-emerald-900",
      bullet: "bg-emerald-500",
    },
    indigo: {
      accent: "from-indigo-400 to-purple-500",
      iconBg: "bg-indigo-50 text-indigo-700",
      border: "border-indigo-100",
      title: "text-indigo-900",
      bullet: "bg-indigo-500",
    },
    purple: {
      accent: "from-purple-400 to-violet-500",
      iconBg: "bg-purple-50 text-purple-700",
      border: "border-purple-100",
      title: "text-purple-900",
      bullet: "bg-purple-500",
    },
    orange: {
      accent: "from-orange-400 to-amber-500",
      iconBg: "bg-orange-50 text-orange-700",
      border: "border-orange-100",
      title: "text-orange-900",
      bullet: "bg-orange-500",
    },
    teal: {
      accent: "from-teal-400 to-cyan-500",
      iconBg: "bg-teal-50 text-teal-700",
      border: "border-teal-100",
      title: "text-teal-900",
      bullet: "bg-teal-500",
    },
    rose: {
      accent: "from-rose-400 to-pink-500",
      iconBg: "bg-rose-50 text-rose-700",
      border: "border-rose-100",
      title: "text-rose-900",
      bullet: "bg-rose-500",
    },
  };

  const theme = colorThemes[color] || colorThemes.blue;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border ${theme.border} bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* top accent strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${theme.accent}`} />

      <div className="p-6 flex flex-col gap-5">
        {/* icon + title */}
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${theme.iconBg}`}
          >
            <span className="text-lg">{icon}</span>
          </div>
          <h3
            className={`text-sm sm:text-base font-semibold leading-snug ${theme.title}`}
          >
            {title}
          </h3>
        </div>

        {/* list */}
        <ul className="space-y-1.5 text-sm text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span
                className={`mt-[7px] h-1.5 w-1.5 rounded-full flex-shrink-0 ${theme.bullet}`}
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesSection;