import React from "react";
import { useNavigate } from "react-router-dom";

/* ------------ ordered data ------------ */

const quickServices = [
  { label: "Get Health Checkup", icon: "stethoscope" },
  { label: "Second Opinion", icon: "secondOpinion" },
  { label: "Book A Virtual Consultation", icon: "monitor" },
  { label: "Book a Test", icon: "lab" },
  { label: "Radiology", icon: "scan" },
  { label: "Homecare", icon: "homecare" },
];

/* ------------ icons (slightly smaller) ------------ */

const getServiceIcon = (name) => {
  const base = "h-6 w-6"; // ✅ reduced size

  const icons = {
    stethoscope: (
      <svg className={`${base} text-emerald-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 4v4a4 4 0 008 0V4M6 4H4m2 0h2m4 0h2m0 0h2m-5 8v3a3 3 0 006 0v-1"
        />
      </svg>
    ),

    monitor: (
      <svg className={`${base} text-indigo-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.8" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8 20h8M12 16v4" />
      </svg>
    ),

    homecare: (
      <svg className={`${base} text-rose-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 11l8-6 8 6M6 10v8h5v-4h2v4h5v-8"
        />
      </svg>
    ),

    lab: (
      <svg className={`${base} text-amber-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3h6M11 3v9.5a4.5 4.5 0 11-2 0V3"
        />
      </svg>
    ),

    scan: (
      <svg className={`${base} text-violet-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth="1.8" />
        <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M9 10h6M9 14h3" />
      </svg>
    ),

    secondOpinion: (
      <svg className={`${base} text-rose-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 5h9a3 3 0 013 3v4a3 3 0 01-3 3H9l-4 3v-3"
        />
        <path
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 10l1.5 1.5L15 9"
        />
      </svg>
    ),
  };

  return icons[name] || icons["stethoscope"];
};

/* ------------ component ------------ */

const QuickServicesBar = () => {
  const navigate = useNavigate();

  const handleServiceClick = (item) => {
    if (item.label === "Get Health Checkup") {
      navigate("/health-check-packages");
    } else if (item.label === "Second Opinion") {
      navigate("/second-opinion");
    } else if (item.label === "Book A Virtual Consultation") {
      navigate("/virtual-consultation");
    } else if (item.label === "Book a Test") {
      navigate("/book-test");
    } else if (item.label === "Homecare") {
      navigate("/homecare-services");
    } else if (item.label === "Radiology") {
      navigate("/radiology");
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-10">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-16 h-44 w-44 rounded-full bg-[#F04E30]/14 blur-3xl" />
        <div className="absolute -left-24 bottom-[-60px] h-52 w-52 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ✅ No scroll, using flex-wrap */}
        <div className="flex flex-wrap justify-center gap-4">
          {quickServices.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleServiceClick(item)}
              className="group relative w-[150px] h-24 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/95 border border-slate-200 px-3 shadow-[0_14px_35px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.18)]"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-slate-200/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                {getServiceIcon(item.icon)}
              </div>

              <span className="text-[10px] font-semibold text-slate-800 text-center uppercase tracking-[0.1em]">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServicesBar;