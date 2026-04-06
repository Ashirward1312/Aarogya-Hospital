// DoctorLandingPage.jsx
// Requires: tailwindcss, react-icons, react-helmet-async
// Font: Poppins (add in index.html + tailwind.config.js)

import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import {
  FaPhoneAlt,
  FaCalendarCheck,
  FaUserMd,
  FaMicroscope,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaWallet,
  FaCheckCircle,
  FaProcedures,
  FaClipboardList,
  FaStar,
  FaBriefcaseMedical,
} from "react-icons/fa";

import { GiStomach, GiScalpel, GiBandageRoll, GiKidneys } from "react-icons/gi";
import { MdOutlineVerifiedUser, MdLocalHospital } from "react-icons/md";

import Rishiimg from "../images/dr1.png";
import suregn from "../images/op_.webp";
import img from "../images/a.png";

/* ─────────────────────── Reusable UI ─────────────────────── */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionTag({ children, dark = false }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.68rem] font-semibold tracking-[0.22em] uppercase border",
        dark
          ? "bg-white/8 border-white/15 text-white/70"
          : "bg-teal-50 border-teal-200 text-teal-700",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full inline-block",
          dark ? "bg-teal-300" : "bg-teal-500",
        ].join(" ")}
      />
      {children}
    </span>
  );
}

function SectionHeader({
  tag,
  title,
  highlight,
  desc,
  center = false,
  dark = false,
}) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
      <SectionTag dark={dark}>{tag}</SectionTag>

      <h2
        className={[
          "text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight",
          dark ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {title}{" "}
        {highlight ? (
          <span
            className={[
              "bg-clip-text text-transparent",
              dark
                ? "bg-gradient-to-r from-teal-200 to-teal-400"
                : "bg-gradient-to-r from-teal-600 to-teal-500",
            ].join(" ")}
          >
            {highlight}
          </span>
        ) : null}
      </h2>

      {desc ? (
        <p
          className={[
            "text-sm sm:text-base leading-relaxed max-w-2xl",
            dark ? "text-white/65" : "text-slate-500",
            center ? "text-center" : "",
          ].join(" ")}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-500/25 hover:-translate-y-0.5 hover:shadow-teal-500/40 transition-all duration-200"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200",
        dark
          ? "bg-white/8 border border-white/15 text-white hover:bg-white/12 backdrop-blur-sm"
          : "bg-white border border-slate-200 text-slate-900 hover:border-teal-300 hover:bg-teal-50 shadow-sm",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export default function DoctorLandingPage() {
  const navigate = useNavigate();
  // अपना नंबर यहाँ डालें:
  const PHONE_NUMBER = "+919827198000";
  const PHONE_HREF = `tel:${PHONE_NUMBER}`;

  const qualifications = ["MBBS", "MS", "FIAGES", "FMAS", "FALS"];

  const services = useMemo(
    () => [
      {
        title: "Laparoscopic Surgery",
        icon: FaProcedures,
        color: "from-blue-500 to-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-100",
        iconColor: "text-blue-600",
        desc: "Minimally invasive procedures focused on smaller incisions and smoother recovery when clinically suitable.",
      },
      {
        title: "Hernia Surgery",
        icon: GiBandageRoll,
        color: "from-teal-500 to-teal-700",
        bg: "bg-teal-50",
        border: "border-teal-100",
        iconColor: "text-teal-600",
        desc: "Evaluation and hernia repair planning with emphasis on safety, technique selection, and post-op guidance.",
      },
      {
        title: "Appendix Surgery",
        icon: GiScalpel,
        color: "from-violet-500 to-violet-700",
        bg: "bg-violet-50",
        border: "border-violet-100",
        iconColor: "text-violet-600",
        desc: "Clear advice on urgency and appropriate surgical care pathways for suspected appendicitis.",
      },
      {
        title: "Gallbladder Surgery",
        icon: GiStomach,
        color: "from-amber-500 to-orange-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
        iconColor: "text-amber-600",
        desc: "Gallstone disease evaluation and cholecystectomy care planning for safe surgery and recovery support.",
      },
      {
        title: "Piles (Hemorrhoids) Care",
        icon: GiKidneys, // ✅ fixed (GiIntestine doesn't exist)
        color: "from-rose-500 to-rose-700",
        bg: "bg-rose-50",
        border: "border-rose-100",
        iconColor: "text-rose-600",
        desc: "Evidence-based symptom relief, lifestyle guidance, and procedure options based on grade and severity.",
      },
      {
        title: "Fistula Treatment",
        icon: FaHandHoldingMedical,
        color: "from-emerald-500 to-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        iconColor: "text-emerald-600",
        desc: "Structured evaluation and treatment planning to support healing, minimize complications, and reduce recurrence risk.",
      },
      {
        title: "Minor & Major Surgeries",
        icon: MdLocalHospital,
        color: "from-sky-500 to-sky-700",
        bg: "bg-sky-50",
        border: "border-sky-100",
        iconColor: "text-sky-600",
        desc: "Pre-op optimization, safe operative care, and follow-up planning for general surgical conditions.",
      },
      {
        title: "Emergency & Trauma",
        icon: FaBriefcaseMedical,
        color: "from-indigo-500 to-indigo-700",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        iconColor: "text-indigo-600",
        desc: "Timely surgical assessment and emergency support for acute surgical conditions requiring urgent attention.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        title: "Diagnosis",
        icon: FaMicroscope,
        desc: "Clinical assessment with relevant investigations to confirm diagnosis and severity.",
      },
      {
        title: "Consultation",
        icon: FaUserMd,
        desc: "Clear discussion of options, risks, benefits, and expected recovery so you can decide confidently.",
      },
      {
        title: "Surgery",
        icon: FaProcedures,
        desc: "Modern surgical technique with safety checks and standardized protocols.",
      },
      {
        title: "Recovery",
        icon: FaHandHoldingMedical,
        desc: "Pain control, wound care, diet/activity guidance, and recovery milestones.",
      },
      {
        title: "Follow-up",
        icon: FaClipboardList,
        desc: "Planned review and support to monitor healing and address concerns early.",
      },
    ],
    []
  );

  const whyChoose = useMemo(
    () => [
      {
        title: "Experienced & Methodical",
        icon: FaUserMd,
        bg: "bg-blue-50",
        border: "border-blue-100",
        iconColor: "text-blue-600",
        desc: "A calm, step-by-step approach with focus on safety and decision clarity.",
      },
      {
        title: "Modern Technology",
        icon: FaMicroscope,
        bg: "bg-teal-50",
        border: "border-teal-100",
        iconColor: "text-teal-600",
        desc: "Contemporary techniques and structured workflows for reliable outcomes.",
      },
      {
        title: "High Safety Standards",
        icon: FaShieldAlt,
        bg: "bg-violet-50",
        border: "border-violet-100",
        iconColor: "text-violet-600",
        desc: "Safety checks, infection prevention practices, and careful monitoring.",
      },
      {
        title: "Personalized Care",
        icon: FaHandHoldingMedical,
        bg: "bg-rose-50",
        border: "border-rose-100",
        iconColor: "text-rose-600",
        desc: "Treatment planning tailored to your clinical profile and recovery goals.",
      },
      {
        title: "Transparent Planning",
        icon: FaWallet,
        bg: "bg-amber-50",
        border: "border-amber-100",
        iconColor: "text-amber-600",
        desc: "Clear discussion of options and practical planning to avoid surprises.",
      },
      {
        title: "Structured Follow-up",
        icon: FaClipboardList,
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        iconColor: "text-emerald-600",
        desc: "Defined recovery checkpoints and guidance on when to seek urgent care.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Helmet>
        <title>Dr. Rishi Kumar Agrawal | General Surgeon</title>
        <meta
          name="description"
          content="Dr. Rishi Kumar Agrawal (MBBS, MS, FIAGES, FMAS, FALS) — General Surgeon providing safe, modern surgical care. CGMC Registration: 141/2004."
        />
      </Helmet>

      {/* HERO (CTA here) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0B1D35] to-slate-800">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          {/* BACK BUTTON */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-white/20 transition-all duration-300 font-semibold text-sm"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/15 border border-teal-400/25 text-teal-200 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  CGMC Reg. 141/2004
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  <MdOutlineVerifiedUser className="text-teal-300" />
                  Verified Doctor
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight">
                Safe, Modern
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
                  General Surgery
                </span>
                <br />
                with Clear Guidance
              </h1>

              <div className="inline-flex items-center gap-4 bg-white/6 border border-white/10 rounded-2xl px-4 py-3 w-fit backdrop-blur-sm">
                <img
                  src={Rishiimg}
                  alt="Dr. Rishi Kumar Agrawal"
                  className="h-14 w-14 rounded-xl object-cover object-top ring-2 ring-teal-400/30 flex-shrink-0"
                  loading="eager"
                />
                <div>
                  <p className="text-white font-semibold text-sm">
                    Dr. Rishi Kumar Agrawal
                  </p>
                  <p className="text-teal-200 text-xs font-semibold mt-0.5">
                    General Surgeon
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1">
                    {qualifications.map((q) => (
                      <span key={q} className="text-white/50 text-[0.62rem] font-semibold">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-lg">
                Evidence-based surgical care with a focus on safety protocols, respectful communication,
                and recovery planning—so you know what to expect at every step.
              </p>

              {/* Only CTA here */}
              <div className="flex flex-wrap gap-3">
                <PrimaryButton href="/appointment">
                  <FaCalendarCheck />
                  Book Appointment
                </PrimaryButton>

                <SecondaryButton href={PHONE_HREF} dark>
                  <FaPhoneAlt />
                  Call Now
                </SecondaryButton>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Council", value: "CGMC" },
                  { label: "Reg. No.", value: "141/2004" },
                  { label: "Care Style", value: "Patient-first" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-center backdrop-blur-sm"
                  >
                    <p className="text-white/40 text-[0.62rem] font-semibold tracking-[0.18em] uppercase">
                      {s.label}
                    </p>
                    <p className="text-white text-xs font-bold mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <img
                  src={suregn}
                  alt="Modern operating theatre"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-md">
                    <p className="text-white font-semibold text-sm">
                      Safety-led Surgical Pathway
                    </p>
                    <p className="text-white/65 text-xs mt-1 leading-relaxed">
                      Accurate diagnosis • Clear consultation • Modern technique • Guided recovery
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Laparoscopic", "Hernia", "Gallbladder", "Appendix"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-teal-500/20 border border-teal-400/25 text-teal-200 px-3 py-0.5 text-[0.65rem] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <MdOutlineVerifiedUser className="text-teal-600 text-base" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xs">Verified Surgeon</p>
                    <p className="text-slate-500 text-[0.65rem]">CGMC · 141/2004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT (Name highlighted) */}
      <section id="about" className="py-20 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 bg-white">
                <img
                  src={Rishiimg}
                  alt="Dr. Rishi Kumar Agrawal"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
                <p className="text-teal-700 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
                  CGMC Registered
                </p>
                <p className="text-slate-900 font-bold text-sm mt-0.5">
                  Reg. No. 141/2004
                </p>
              </div>

              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg shadow-teal-500/30 flex flex-col items-center justify-center">
                <span className="text-white font-extrabold text-lg leading-none">MS</span>
                <span className="text-white/85 text-[0.65rem] font-semibold tracking-wide mt-0.5">
                  Surgery
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="About the Doctor"
                title="Meet"
                highlight="Dr. Rishi Kumar Agrawal"
                desc="A General Surgeon focused on safe, evidence-based care with clear communication—before surgery, during treatment, and throughout recovery."
              />

              <p className="text-slate-600 text-sm leading-relaxed">
                Consultation is kept transparent and practical—your reports, symptoms, and clinical findings are explained
                clearly, along with the most suitable next steps.
              </p>

              <div className="flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span
                    key={q}
                    className="bg-white border border-slate-200 text-slate-800 px-4 py-1.5 rounded-full text-xs font-semibold"
                  >
                    {q}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Clinical Clarity",
                    desc: "Explain findings, options, and timelines in a simple, structured way.",
                    icon: "🩺",
                  },
                  {
                    title: "Safety Protocols",
                    desc: "Standard checks and hygiene-focused practices for patient safety.",
                    icon: "🛡️",
                  },
                  {
                    title: "Modern Approach",
                    desc: "Minimally invasive options considered when clinically appropriate.",
                    icon: "⚕️",
                  },
                  {
                    title: "Recovery Support",
                    desc: "Follow-up planning with guidance on activity, diet, and warning signs.",
                    icon: "📌",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl bg-white border border-slate-200/80 px-5 py-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold text-sm">{card.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1.5">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">Council & Registration</p>
                    <p className="text-slate-600 text-xs mt-1">
                      Medical Council: <span className="font-bold text-slate-800">CGMC</span>
                      {" · "}Reg. No.: <span className="font-bold text-slate-800">141/2004</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-teal-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold">
                    <MdOutlineVerifiedUser />
                    Verified
                  </div>
                </div>
              </div>

              {/* CTA intentionally not here */}
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <Container>
          <SectionHeader
            tag="Services"
            title="Surgical"
            highlight="Services"
            desc="Comprehensive evaluation, treatment planning, and surgical care delivered with a safety-led clinical experience."
            center
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center ${s.iconColor} text-xl flex-shrink-0`}
                  >
                    <Icon />
                  </div>

                  <div className="flex flex-col flex-1 mt-5">
                    <h3 className="text-slate-900 font-semibold text-sm">{s.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2 flex-1">
                      {s.desc}
                    </p>
                  </div>

                  <div
                    className={`mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${s.color} group-hover:w-16 transition-all duration-300`}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 bg-slate-50">
        <Container>
          <SectionHeader
            tag="How It Works"
            title="Surgical"
            highlight="Approach"
            desc="A structured pathway that prioritizes safety, clarity, and predictable recovery."
            center
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 h-[420px] lg:h-auto min-h-[420px]">
              <img src={img} alt="Operating theatre" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-md">
                  <p className="text-white font-semibold text-sm">Safety-first Protocols</p>
                  <p className="text-white/70 text-xs leading-relaxed mt-1">
                    Standardized checks, careful anesthesia planning, and post-operative monitoring for a smooth recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {process.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="flex items-start gap-5 px-7 py-6 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                      </div>

                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 flex-shrink-0">
                          <Icon className="text-base" />
                        </div>
                        <div className="pt-0.5">
                          <h3 className="text-slate-900 font-semibold text-sm">{step.title}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed mt-1.5">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="px-7 py-5 bg-slate-50 border-t border-slate-100">
                <p className="text-slate-500 text-xs">
                  For appointment booking, use the booking section below.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="py-20 bg-white">
        <Container>
          <SectionHeader
            tag="Why Choose"
            title="A care experience built on"
            highlight="trust"
            desc="Strong clinical fundamentals, transparent communication, and consistent post-operative support."
            center
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${w.bg} border ${w.border} flex items-center justify-center ${w.iconColor} text-xl`}
                  >
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-slate-900 font-semibold text-sm">{w.title}</h3>
                  <p className="mt-2 text-slate-500 text-xs leading-relaxed flex-1">{w.desc}</p>
                  <div className="mt-5 h-0.5 w-8 rounded-full bg-teal-400 group-hover:w-14 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TRUST */}
      <section
        id="trust"
        className="py-20 bg-gradient-to-br from-slate-900 via-[#0B1D35] to-slate-800 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-teal-500/8 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="Qualifications"
                title="Qualifications &"
                highlight="Trust"
                desc="Professional credentials presented clearly—so you know who is caring for you and what standards guide your treatment."
                dark
              />

              <div className="flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span
                    key={q}
                    className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white px-4 py-2 rounded-full text-xs font-semibold"
                  >
                    <FaCheckCircle className="text-teal-300" />
                    {q}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between bg-white/6 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
                <div>
                  <p className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
                    Medical Council
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    CGMC · Reg. No. <span className="text-white font-bold">141/2004</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-xl text-xs font-bold">
                  <MdOutlineVerifiedUser />
                  Verified
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
                <span className="text-white/55 text-xs ml-2">
                  Patient-first care always
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-black/20 overflow-hidden">
              <div className="p-7 border-b border-slate-100">
                <h3 className="text-slate-900 font-semibold text-base">What you can expect</h3>
                <p className="text-slate-500 text-xs mt-1">A consistent standard of care</p>
              </div>

              <div className="p-7">
                <ul className="flex flex-col gap-4">
                  {[
                    "Clear explanation of diagnosis and treatment options",
                    "Safety-first protocols and careful operative planning",
                    "Guided recovery plan with follow-up support",
                    "Respectful, privacy-conscious patient experience",
                    "Transparent communication at every stage of care",
                  ].map((line, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheckCircle className="text-teal-600 text-xs" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-slate-500 text-xs">
                    For appointments, scroll to the booking section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA (Only CTA here) */}
      <section id="cta" className="py-20 bg-slate-50">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 sm:p-12">
            <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-50 blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div className="flex flex-col gap-5">
                <SectionTag>Book Appointment</SectionTag>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Get Safe & Modern
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                    Surgical Care
                  </span>
                </h2>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
                  Schedule a consultation to discuss symptoms, investigations, and the most suitable treatment plan—
                  built around safety, clarity, and recovery support.
                </p>

                <div className="flex flex-wrap gap-3">
                  <PrimaryButton href="/appointment">
                    <FaCalendarCheck />
                    Book Appointment
                  </PrimaryButton>

                  <SecondaryButton href={PHONE_HREF}>
                    <FaPhoneAlt className="text-teal-600" />
                    Call: {PHONE_NUMBER}
                  </SecondaryButton>
                </div>

                <p className="text-slate-400 text-xs">
                  Please bring prior reports, current medicines, and recent investigation results (if available).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 min-w-[240px] lg:min-w-[280px]">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <img
                    src={Rishiimg}
                    alt="Dr. Rishi Kumar Agrawal"
                    className="w-12 h-12 rounded-xl object-cover object-top border border-slate-200"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">
                      Dr. Rishi Kumar Agrawal
                    </p>
                    <p className="text-teal-600 text-xs font-semibold">General Surgeon</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  {[
                    { label: "Qualifications", value: "MBBS, MS, FIAGES, FMAS, FALS" },
                    { label: "CGMC Registration", value: "141/2004" },
                    { label: "Specialization", value: "General Surgery" },
                    { label: "Care Focus", value: "Safety-led & recovery-focused" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <p className="text-slate-600 text-xs leading-relaxed">
                        <span className="text-slate-400">{row.label}:</span>{" "}
                        <span className="text-slate-800 font-semibold">{row.value}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2">
                  <MdOutlineVerifiedUser className="text-teal-600 text-base" />
                  <span className="text-teal-700 text-xs font-bold">
                    Verified · CGMC Registered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}