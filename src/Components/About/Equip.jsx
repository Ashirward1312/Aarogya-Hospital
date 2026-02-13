import React, { useState } from "react";
import {
  FiHeart,
  FiActivity,
  FiCpu,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const BestMachinesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const machines = [
    {
      name: "Advanced Ventilator Systems",
      location: "ICU & CRITICAL CARE",
      detail:
        "High-end mechanical ventilation support with invasive and non-invasive modes for critically ill patients.",
      category: "critical",
      icon: FiActivity,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-[#F04E30]", // red
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "Multipara Patient Monitors",
      location: "ICU & WARDS",
      detail:
        "Real-time continuous monitoring of vital parameters (ECG, SpO₂, NIBP, Temp) ensuring 24/7 patient safety.",
      category: "critical",
      icon: FiActivity,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-emerald-500", // green
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "Biphasic Defibrillators",
      location: "EMERGENCY UNIT",
      detail:
        "Life-saving cardiac equipment designed for immediate response to sudden cardiac arrests and arrhythmias.",
      category: "emergency",
      icon: FiHeart,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-rose-500", // rose
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "Hemodialysis Unit",
      location: "DIALYSIS CENTER",
      detail:
        "State-of-the-art dialysis infrastructure providing safe and efficient renal replacement therapy.",
      category: "treatment",
      icon: FiCpu,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-violet-500", // violet
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "Digital X-Ray System",
      location: "RADIOLOGY",
      detail:
        "High-resolution digital radiography with reduced radiation exposure for rapid and accurate diagnosis.",
      category: "diagnostic",
      icon: FiCpu,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-amber-500", // amber
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "High-Freq Ultrasonography",
      location: "IMAGING DEPT",
      detail:
        "Advanced ultrasonography machines with multiple probes for precise abdominal, pelvic, and vascular imaging.",
      category: "diagnostic",
      icon: FiCpu,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-teal-500", // teal
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "C-Arm Imaging System",
      location: "OPERATION THEATRE",
      detail:
        "Real-time fluoroscopic imaging to guide orthopedic and complex surgical procedures with high precision.",
      category: "surgical",
      icon: FiShield,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-slate-600", // dark grey
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
    {
      name: "Modular OT Infrastructure",
      location: "SURGICAL SUITE",
      detail:
        "Equipped with hydraulic surgical tables and shadow-less LED lighting for optimal surgical outcomes.",
      category: "surgical",
      icon: FiShield,
      pillColor: "bg-slate-50 text-slate-700 border-slate-200",
      iconBg: "bg-orange-500", // orange
      hoverClass: "hover:border-slate-300 hover:bg-slate-50",
    },
  ];

  const filteredMachines =
    activeCategory === "all"
      ? machines
      : machines.filter((m) => m.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-[-60px] h-56 w-56 rounded-full bg-[#F04E30]/22 blur-3xl" />
        <div className="absolute top-10 right-[-60px] h-52 w-52 rounded-full bg-[#F04E30]/16 blur-3xl" />
        <div className="absolute bottom-[-60px] left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-slate-200/50 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F04E30]/30 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F04E30] shadow-sm">
            STATE‑OF‑THE‑ART EQUIPMENT
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[0.14em] text-slate-900 uppercase">
            ADVANCED MEDICAL TECHNOLOGY
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#F04E30]/0 via-[#F04E30] to-[#F04E30]/0" />

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Equipped with modern, reliable machines across ICU, emergency,
            radiology and surgical units to deliver precise diagnosis and safer
            treatment.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
          {[
            { id: "all", label: "ALL EQUIPMENT" },
            { id: "critical", label: "CRITICAL CARE" },
            { id: "diagnostic", label: "DIAGNOSTICS" },
            { id: "surgical", label: "SURGICAL" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-1.5 transition-colors ${
                activeCategory === cat.id
                  ? "border-[#F04E30] bg-[#F04E30] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#F04E30]/40 hover:bg-slate-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
          {/* Left side */}
          <div className="space-y-6">
            {/* NEW: Surgery highlight card (before cardiology) */}
            <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
              <div className="absolute -left-12 bottom-[-40px] h-28 w-28 rounded-3xl bg-slate-200/40 rotate-12 blur-xl" />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
                  <FiShield className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    SURGERY & OPERATION THEATRE
                  </p>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
                    ADVANCED SURGICAL & MODULAR OT FACILITIES
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    Modern modular operation theatres equipped with C‑Arm
                    imaging, hydraulic surgical tables and shadow‑less LED
                    lighting for safe and precise surgeries in orthopaedics,
                    general, laparoscopic and emergency procedures.
                  </p>
                </div>
              </div>
            </article>

            {/* Existing: Cardiology highlight */}
            <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F04E30]/8 blur-2xl" />
              <div className="absolute -left-12 bottom-[-40px] h-28 w-28 rounded-3xl bg-slate-200/40 rotate-12 blur-xl" />

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F04E30] text-white shadow-md">
                  <FiHeart className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    CARDIOLOGY & CCU
                  </p>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
                    ADVANCED CARDIOLOGY & CRITICAL HEART CARE
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    Dedicated cardiac ICU, advanced ECG and echocardiography
                    facilities along with 24×7 emergency response for heart
                    attacks, arrhythmias and complex cardiac conditions.
                  </p>
                </div>
              </div>
            </article>

            {/* Machines grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {filteredMachines.map((m) => {
                const Icon = m.icon;
                return (
                  <article
                    key={m.name}
                    className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] ${m.hoverClass}`}
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm ${m.iconBg}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {m.name.toUpperCase()}
                      </h3>
                    </div>

                    <span
                      className={`mb-3 inline-flex w-fit items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${m.pillColor}`}
                    >
                      {m.location}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {m.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Right side: Technology protocols card */}
          <aside className="sticky top-10">
            <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F04E30] via-[#F04E30]/80 to-[#F04E30]" />

              <div className="flex items-center gap-4 border-b border-slate-100 pb-5 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  <FiCpu className="h-7 w-7 text-[#F04E30]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-slate-900">
                    TECHNOLOGY DRIVEN CARE
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    SAFETY • PRECISION • RELIABILITY
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-600 mb-4">
                Every life‑support machine and diagnostic system follows strict
                clinical and engineering protocols to ensure safe, continuous
                operation.
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Preventive maintenance schedules for all life‑saving equipment.",
                  "Specialised training for clinicians and technicians on advanced devices.",
                  "Regular calibration and safety audits as per medical standards.",
                  "Redundant power backups to minimise downtime in critical areas.",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#F04E30]">
                      <FiCheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BestMachinesSection;