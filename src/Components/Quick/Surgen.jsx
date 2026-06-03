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

import Rishiimg from "../images/General Surgeon in Raipur.webp";
import suregn from "../images/General Surgery Hospital in  Raipur.webp";
import img from "../images/Hospital in Raipur.webp";

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
  tittle,
  subtitle,
}) {
  const displaySubtitle = subtitle || tittle;
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

      {displaySubtitle ? (
        <p className={`text-base sm:text-lg font-bold tracking-tight -mt-1 ${dark ? "text-teal-300" : "text-teal-600"}`}>
          {displaySubtitle}
        </p>
      ) : null}

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
  const PHONE_NUMBER = "+919827198000";
  const PHONE_HREF = `tel:${PHONE_NUMBER}`;

  const qualifications = ["Best General & Laparoscopy Surgeon in Raipur"];

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
        icon: GiKidneys,
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

  const aboutCards = useMemo(
    () => [
      {
        title: "Clinical Clarity",
        desc: "Explain findings, options, and timelines in a simple, structured way.",
        icon: FaClipboardList,
      },
      {
        title: "Safety Protocols",
        desc: "Standard checks and hygiene-focused practices for patient safety.",
        icon: FaShieldAlt,
      },
      {
        title: "Modern Approach",
        desc: "Minimally invasive options considered when clinically appropriate.",
        icon: FaProcedures,
      },
      {
        title: "Recovery Support",
        desc: "Follow-up planning with guidance on activity, diet, and warning signs.",
        icon: FaHandHoldingMedical,
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Helmet>
        <title>Best General Surgery & Laparoscopy Hospital in Raipur (C.G)| Aarogya Hospital</title>
        <meta
          name="description"
          content="Get expert surgical care with modern techniques and complete guidance at Aarogya Hospital, the best general surgery hospital in Raipur (C.G). Led by Dr. Rishi Kumar Agrawal."
        />
        <meta property="og:title" content="Best General Surgery & Laparoscopy Hospital in Raipur (C.G)| Aarogya Hospital" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.aarogyahospitalraipur.com/logo.png" />
        <meta property="og:site_name" content="Aarogya Hospital Raipur" />
        <meta property="og:description" content="Aarogya Hospital is the best general surgery & laparoscopy hospital in Raipur (C.G), offering advanced surgical care, expert surgeons, modern OT facilities, and safe treatment." />
        <meta property="og:url" content="https://www.aarogyahospitalraipur.com/departments/general-laparoscopy-surgery-hospital-in-raipur" />
        <meta property="og:locale" content="en_IN" />
        <link rel="canonical" href="https://www.aarogyahospitalraipur.com/departments/general-laparoscopy-surgery-hospital-in-raipur" />
        <link rel="preload" as="image" href={suregn} fetchPriority="high" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-slate-900"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(20, 184, 166, 0.1), transparent 400px),
            radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.1), transparent 400px),
            linear-gradient(to bottom right, #0f172a, #0B1D35, #1e293b)
          `,
        }}
      >

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">


          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-200 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  <MdOutlineVerifiedUser className="text-teal-300" />
                  Verified Doctor
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.2rem] font-extrabold text-white leading-[1.1] tracking-tight">
                Best General & Laparoscopy
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-400">
                  Surgery Hospital in Raipur
                </span>
              </h1>

              <div className="flex flex-col gap-6">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Get expert surgical care with modern techniques and complete guidance at every step at Aarogya Hospital, one of the best general & laparoscopy surgery hospitals in Raipur (C.G).
                </p>
                <p className="text-white/70 text-sm sm:text-[0.95rem] leading-relaxed max-w-2xl">
                  Led by experienced surgeon Dr. Rishi Kumar Agrawal, our department provides evidence-based surgical treatment with a strong focus on patient safety, clear communication, and faster recovery. From consultation to post-surgery care, we ensure you feel informed, confident, and supported throughout your treatment journey.
                </p>
              </div>

              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-fit shadow-lg shadow-black/20">
                <img
                  src={Rishiimg}
                  alt="Dr. Rishi Kumar Agrawal"
                  width="56"
                  height="56"
                  className="h-14 w-14 rounded-xl object-cover object-top ring-2 ring-teal-400/30 flex-shrink-0"
                  fetchPriority="high"
                />
                <div>
                  <p className="text-white font-semibold text-sm">Dr. Rishi Kumar Agrawal</p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    {qualifications.map((q) => (
                      <span key={q} className="text-white/50 text-[0.62rem] font-semibold">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <img
                  src={suregn}
                  alt="Modern operating theatre"
                  width="800"
                  height="480"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-4">
                    <p className="text-white font-semibold text-sm">Safety-led Surgical Pathway</p>
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
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 bg-white">
                <img
                  src={Rishiimg}
                  alt="Dr. Rishi Kumar Agrawal"
                  width="600"
                  height="520"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg shadow-teal-500/30 flex flex-col items-center justify-center">
                <span className="text-white font-extrabold text-lg leading-none">MS</span>
                <span className="text-white/85 text-[0.65rem] font-semibold tracking-wide mt-0.5">
                  Surgery
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="About the Doctor"
               highlight="Dr. Rishi Kumar Agrawal"
                tittle="Best General & Laparoscopic Surgeon In Raipur"
                desc="A General & Laparoscopic Surgeon focused on safe, evidence-based care with clear communication—before surgery, during treatment, and throughout recovery."
              />

              <p className="text-slate-600 text-sm leading-relaxed">
                Consultation is kept transparent and practical—your reports, symptoms, and clinical findings are explained
                clearly, along with the most suitable next steps.
              </p>

              {/* <div className="flex flex-wrap gap-2">
                {qualifications.map((q) => (
                  <span
                    key={q}
                    className="bg-white border border-slate-200 text-slate-800 px-4 py-1.5 rounded-full text-xs font-semibold"
                  >
                    {q}
                  </span>
                ))}
              </div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl bg-white border border-slate-200/80 px-5 py-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 flex flex-col gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold text-sm">{card.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1.5">{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Council/CGMC/Reg/Care Style: only one place */}
              <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">Council & Registration</p>
                    <p className="text-slate-600 text-xs mt-1">
                      Medical Council: <span className="font-bold text-slate-800">CGMC</span>
                      {" · "}Reg. No.: <span className="font-bold text-slate-800">141/2004</span>
                      {" · "}Care Style: <span className="font-bold text-slate-800">Patient-first</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-teal-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold">
                    <MdOutlineVerifiedUser />
                    Verified
                  </div>
                </div>
              </div>
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
                    <p className="text-slate-500 text-xs leading-relaxed mt-2 flex-1">{s.desc}</p>
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
              <img
                src={img}
                alt="Operating theatre"
                width="600"
                height="420"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/15 bg-slate-900/40 p-4">
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
                        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
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
                <p className="text-slate-500 text-xs">For appointment booking, use the booking section below.</p>
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
                  <div className={`w-12 h-12 rounded-2xl ${w.bg} border ${w.border} flex items-center justify-center ${w.iconColor} text-xl`}>
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
        className="py-20 bg-slate-900 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 100% 0%, rgba(20, 184, 166, 0.08), transparent 300px),
            radial-gradient(circle at 0% 100%, rgba(37, 99, 235, 0.08), transparent 300px),
            #0f172a
          `,
        }}
      >

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

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
                <span className="text-white/55 text-xs ml-2">Patient-first care always</span>
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
                  <p className="text-slate-500 text-xs">For appointments, scroll to the booking section below.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ✅ PREMIUM + SIMPLE BOOKING (no doctor card, no council/reg, no qualifications) */}
      <section id="cta" className="py-20 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-sky-50" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative p-8 sm:p-12">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                <div className="flex flex-col gap-5">
                  <SectionTag>Appointment</SectionTag>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    Book Appointment
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                      in 1 Minute
                    </span>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Book karne ke liye “Book Now” par click karein, ya urgent help ke liye call karein.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <PrimaryButton href="/appointment">
                      <FaCalendarCheck />
                      Book Now
                    </PrimaryButton>

                    <SecondaryButton href={PHONE_HREF}>
                      <FaPhoneAlt className="text-teal-700" />
                      Call Now
                    </SecondaryButton>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 shadow-sm">
                  <p className="text-slate-900 font-extrabold text-base">Quick Steps</p>

                  <div className="mt-4 space-y-3">
                    {[
                      { n: "1", t: "Click “Book Now”" },
                      { n: "2", t: "Fill basic details" },
                      { n: "3", t: "Submit request" },
                    ].map((s) => (
                      <div key={s.n} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm">
                          {s.n}
                        </div>
                        <p className="text-slate-700 text-sm font-semibold">{s.t}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3">
                    <p className="text-teal-800 text-xs font-semibold">
                      Need urgent help? Use “Call Now”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}