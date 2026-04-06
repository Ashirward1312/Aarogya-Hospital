// OrthopedicsLandingPage.jsx
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
  FaCheckCircle,
  FaStar,
  FaRunning,
  FaWheelchair,
  FaClipboardList,
  FaProcedures,
} from "react-icons/fa";

import { MdOutlineVerifiedUser, MdLocalHospital } from "react-icons/md";

// Replace these with your actual images
import DoctorImg from "../images/dr3.png"; // <-- update file name/path
import HeroImg from "../images/o3.jpg";   // <-- update file name/path
import ClinicImg from "../images/o2.jpg";    // <-- update file name/path

/* ─────────────────────── Reusable UI ─────────────────────── */

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

// Ortho Theme: Cyan/Blue
function SectionTag({ children, dark = false }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[0.68rem] font-semibold tracking-[0.22em] uppercase border",
        dark
          ? "bg-white/8 border-white/15 text-white/70"
          : "bg-cyan-50 border-cyan-200 text-cyan-800",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full inline-block",
          dark ? "bg-cyan-300" : "bg-cyan-600",
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
                ? "bg-gradient-to-r from-cyan-200 to-blue-300"
                : "bg-gradient-to-r from-cyan-600 to-blue-600",
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
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-blue-500/35 transition-all duration-200"
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
          : "bg-white border border-slate-200 text-slate-900 hover:border-cyan-300 hover:bg-cyan-50 shadow-sm",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

/* ─────────────────────── Main Component ─────────────────────── */

export default function OrthopedicsLandingPage() {
  const navigate = useNavigate();
  const PHONE_NUMBER = "+919827198000"; // <-- set your number
  const PHONE_HREF = `tel:${PHONE_NUMBER}`;

  const doctor = {
    dept: "Orthopedics",
    name: "Dr. Deepak Agrawal",
    specialty: "Orthopedics",
    council: "CGMC",
    regNo: "641/2006",
    qualifications: ["MBBS", "D.Ortho,", "H.P.O."],
  };

  const services = useMemo(
    () => [
      {
        title: "Joint Pain & Arthritis",
        icon: FaHandHoldingMedical,
        bg: "bg-cyan-50",
        border: "border-cyan-100",
        iconColor: "text-cyan-700",
        accent: "from-cyan-500 to-blue-600",
        desc: "Assessment and care planning for chronic joint pain with clear guidance and follow-up.",
      },
      {
        title: "Fracture Care",
        icon: MdLocalHospital,
        bg: "bg-blue-50",
        border: "border-blue-100",
        iconColor: "text-blue-700",
        accent: "from-blue-500 to-indigo-600",
        desc: "Evaluation and management planning for fractures and acute injuries with safety-first approach.",
      },
      {
        title: "Sports Injuries",
        icon: FaRunning,
        bg: "bg-sky-50",
        border: "border-sky-100",
        iconColor: "text-sky-700",
        accent: "from-sky-500 to-cyan-600",
        desc: "Injury evaluation, return-to-activity guidance, and recovery planning based on symptoms and exam.",
      },
      {
        title: "Back & Neck Pain",
        icon: FaUserMd,
        bg: "bg-slate-50",
        border: "border-slate-200",
        iconColor: "text-slate-700",
        accent: "from-slate-700 to-slate-900",
        desc: "Clinical assessment with advice on posture, activity, investigations (if needed), and follow-up.",
      },
      {
        title: "Knee / Hip Problems",
        icon: FaWheelchair,
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        iconColor: "text-indigo-700",
        accent: "from-indigo-500 to-blue-600",
        desc: "Evaluation of knee/hip pain and mobility issues with practical treatment planning and guidance.",
      },
      {
        title: "Investigations Review",
        icon: FaMicroscope,
        bg: "bg-cyan-50",
        border: "border-cyan-100",
        iconColor: "text-cyan-700",
        accent: "from-cyan-500 to-sky-600",
        desc: "Review of reports and imaging with clear explanation and next-step planning.",
      },
      {
        title: "Surgical Opinion & Planning",
        icon: FaProcedures,
        bg: "bg-blue-50",
        border: "border-blue-100",
        iconColor: "text-blue-700",
        accent: "from-blue-500 to-cyan-600",
        desc: "When surgery is required, structured counselling on options, risks, benefits, and recovery timelines.",
      },
      {
        title: "Follow-up & Recovery",
        icon: FaClipboardList,
        bg: "bg-sky-50",
        border: "border-sky-100",
        iconColor: "text-sky-700",
        accent: "from-sky-500 to-blue-600",
        desc: "Planned follow-ups with recovery milestones and guidance for activity modification and rehab support.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        title: "Consultation",
        icon: FaUserMd,
        desc: "Discuss symptoms, injury history, daily activity, and goals in a calm, structured manner.",
      },
      {
        title: "Clinical Examination",
        icon: FaHandHoldingMedical,
        desc: "Focused physical exam to assess pain source, movement, stability, and functional limitation.",
      },
      {
        title: "Investigations (If needed)",
        icon: FaMicroscope,
        desc: "Only relevant tests/imaging to confirm diagnosis and guide safe treatment decisions.",
      },
      {
        title: "Treatment Plan",
        icon: FaShieldAlt,
        desc: "Personalized plan with clarity on medications, support devices, rehab guidance, and precautions.",
      },
      {
        title: "Follow-up",
        icon: FaClipboardList,
        desc: "Progress review and adjustments to ensure steady recovery and early problem detection.",
      },
    ],
    []
  );

  const whyChoose = useMemo(
    () => [
      {
        title: "Clear, Practical Guidance",
        icon: FaClipboardList,
        bg: "bg-cyan-50",
        border: "border-cyan-100",
        iconColor: "text-cyan-700",
        desc: "Understandable explanation of condition, options, and realistic timelines.",
      },
      {
        title: "Safety-first Approach",
        icon: FaShieldAlt,
        bg: "bg-blue-50",
        border: "border-blue-100",
        iconColor: "text-blue-700",
        desc: "Structured decision-making and careful planning for predictable, safe outcomes.",
      },
      {
        title: "Recovery-focused Care",
        icon: FaHandHoldingMedical,
        bg: "bg-sky-50",
        border: "border-sky-100",
        iconColor: "text-sky-700",
        desc: "Guidance on activity modification and follow-up support during recovery.",
      },
      {
        title: "Evidence-based Decisions",
        icon: FaMicroscope,
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        iconColor: "text-indigo-700",
        desc: "Treatment choices guided by clinical exam and appropriate investigations.",
      },
      {
        title: "Patient-first Experience",
        icon: FaUserMd,
        bg: "bg-slate-50",
        border: "border-slate-200",
        iconColor: "text-slate-700",
        desc: "Respectful consultation with attentive listening and transparent communication.",
      },
      {
        title: "Hospital Coordination (If needed)",
        icon: MdLocalHospital,
        bg: "bg-blue-50",
        border: "border-blue-100",
        iconColor: "text-blue-700",
        desc: "When required, guidance for hospital-based management with proper planning.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased scroll-smooth">
      <Helmet>
        <title>{doctor.name} | Orthopedics</title>
        <meta
          name="description"
          content={`${doctor.name} (${doctor.qualifications.join(
            " "
          )}) — Orthopedics. Council: ${doctor.council}, Registration: ${doctor.regNo}.`}
        />
      </Helmet>

      {/* ══════════════════════════════════════════
          HERO (Different theme + equal content/image height on lg+)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#071C33] to-[#031427]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-44 -right-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[680px] rounded-full bg-sky-400/5 blur-2xl" />
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left */}
            <div className="flex flex-col gap-6 self-stretch">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/25 text-cyan-200 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  COUNCIL: {doctor.council} • REG. NO: {doctor.regNo}
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  <MdOutlineVerifiedUser className="text-cyan-300" />
                  Verified Doctor
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight">
                Advanced
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-300">
                  Orthopedics Care
                </span>
                <br />
                for Pain & Mobility
              </h1>

              <div className="inline-flex items-center gap-4 bg-white/6 border border-white/10 rounded-2xl px-4 py-3 w-fit backdrop-blur-sm">
                <img
                  src={DoctorImg}
                  alt={doctor.name}
                  className="h-14 w-14 rounded-xl object-cover object-top ring-2 ring-cyan-400/30 flex-shrink-0"
                  loading="eager"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{doctor.name}</p>
                  <p className="text-cyan-200 text-xs font-semibold mt-0.5">
                    {doctor.specialty}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1">
                    {doctor.qualifications.map((q) => (
                      <span key={q} className="text-white/50 text-[0.62rem] font-semibold">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-lg">
                Orthopedics consultation designed for clarity—focused clinical evaluation,
                appropriate investigations, and recovery-first planning for pain and mobility concerns.
              </p>

              {/* CTA only here */}
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
                  { label: "Council", value: doctor.council },
                  { label: "Reg. No.", value: doctor.regNo },
                  { label: "Focus", value: "Mobility-first" },
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

            {/* Right (equal height to left on lg+) */}
            <div className="relative self-stretch">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 h-[320px] sm:h-[420px] lg:h-full">
                <img
                  src={HeroImg}
                  alt="Orthopedics care"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-md">
                    <p className="text-white font-semibold text-sm">
                      Care Pathway for Pain & Function
                    </p>
                    <p className="text-white/70 text-xs mt-1 leading-relaxed">
                      Clinical exam • Relevant investigations • Treatment plan • Follow-up support
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Joint Pain", "Fracture", "Sports Injury", "Back Pain"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-cyan-500/20 border border-cyan-400/25 text-cyan-200 px-3 py-0.5 text-[0.65rem] font-semibold"
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
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                    <MdOutlineVerifiedUser className="text-cyan-700 text-base" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-xs">CGMC Registered</p>
                    <p className="text-slate-500 text-[0.65rem]">Reg. No. {doctor.regNo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="py-20 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 bg-white">
                <img
                  src={DoctorImg}
                  alt={doctor.name}
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
                <p className="text-cyan-800 text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
                  Medical Council
                </p>
                <p className="text-slate-900 font-bold text-sm mt-0.5">
                  {doctor.council} • {doctor.regNo}
                </p>
              </div>

              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-blue-500/25 flex flex-col items-center justify-center">
                <span className="text-white font-extrabold text-base leading-none">D.Ortho</span>
                <span className="text-white/85 text-[0.65rem] font-semibold tracking-wide mt-0.5">
                  Orthopedics
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="About the Doctor"
                title="Meet"
                highlight={doctor.name}
                desc="Orthopedics-focused care with clear evaluation, transparent planning, and follow-up guidance to support better function and recovery."
              />

              <p className="text-slate-600 text-sm leading-relaxed">
                Consultations are structured and practical—symptoms, examination findings, and reports are explained clearly,
                along with the safest next steps.
              </p>

              <div className="flex flex-wrap gap-2">
                {doctor.qualifications.map((q) => (
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
                  { title: "Pain & Function Focus", desc: "Plan built around comfort, strength, and safe return to activity.", icon: "🦵" },
                  { title: "Clear Next Steps", desc: "Simple explanation of options and what to do next.", icon: "🧭" },
                  { title: "Safety-first Planning", desc: "Structured decisions supported by clinical evaluation.", icon: "🛡️" },
                  { title: "Recovery Guidance", desc: "Follow-up and practical advice for steady recovery.", icon: "📌" },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl bg-white border border-slate-200/80 px-5 py-5 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-200 flex flex-col gap-3"
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

              <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">Council & Registration</p>
                    <p className="text-slate-600 text-xs mt-1">
                      Medical Council: <span className="font-bold text-slate-800">{doctor.council}</span>
                      {" · "}Reg. No.: <span className="font-bold text-slate-800">{doctor.regNo}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-cyan-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold">
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

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="py-20 bg-white">
        <Container>
          <SectionHeader
            tag="Services"
            title="Orthopedics"
            highlight="Services"
            desc="Consultation, diagnosis, planning, and recovery guidance for common bone, joint, and mobility conditions."
            center
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center ${s.iconColor} text-xl flex-shrink-0`}>
                    <Icon />
                  </div>

                  <div className="flex flex-col flex-1 mt-5">
                    <h3 className="text-slate-900 font-semibold text-sm">{s.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2 flex-1">{s.desc}</p>
                  </div>

                  <div className={`mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${s.accent} group-hover:w-16 transition-all duration-300`} />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS (equal image/content height on lg+)
      ══════════════════════════════════════════ */}
      <section id="process" className="py-20 bg-slate-50">
        <Container>
          <SectionHeader
            tag="How It Works"
            title="A structured"
            highlight="orthopedics pathway"
            desc="Step-by-step care designed for clarity, safety, and recovery support."
            center
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left image (matches right height on lg+) */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 h-[320px] sm:h-[420px] lg:h-full self-stretch">
              <img
                src={ClinicImg}
                alt="Clinic environment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-md">
                  <p className="text-white font-semibold text-sm">Safety + Recovery Planning</p>
                  <p className="text-white/70 text-xs leading-relaxed mt-1">
                    Clear diagnosis, practical plan, and structured follow-up to support mobility.
                  </p>
                </div>
              </div>
            </div>

            {/* Right steps */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden self-stretch">
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
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 flex-shrink-0">
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

      {/* ══════════════════════════════════════════
          WHY CHOOSE
      ══════════════════════════════════════════ */}
      <section id="why" className="py-20 bg-white">
        <Container>
          <SectionHeader
            tag="Why Choose"
            title="Care built on"
            highlight="trust & clarity"
            desc="A professional orthopedics experience designed for safe decisions and recovery support."
            center
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${w.bg} border ${w.border} flex items-center justify-center ${w.iconColor} text-xl`}>
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-slate-900 font-semibold text-sm">{w.title}</h3>
                  <p className="mt-2 text-slate-500 text-xs leading-relaxed flex-1">{w.desc}</p>
                  <div className="mt-5 h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-14 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          TRUST / QUALIFICATIONS (dark section)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-[#071C33] to-[#031427] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-blue-600/8 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="Qualifications"
                title="Qualifications &"
                highlight="Medical Registration"
                desc="Credentials presented clearly—so you know who is caring for you and what standards guide your care."
                dark
              />

              <div className="flex flex-wrap gap-2">
                {doctor.qualifications.map((q) => (
                  <span
                    key={q}
                    className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white px-4 py-2 rounded-full text-xs font-semibold"
                  >
                    <FaCheckCircle className="text-cyan-300" />
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
                    {doctor.council} · Reg. No.{" "}
                    <span className="text-white font-bold">{doctor.regNo}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-xl text-xs font-bold">
                  <MdOutlineVerifiedUser />
                  Verified
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
                <span className="text-white/55 text-xs ml-2">
                  Clear evaluation • Safety-first planning • Recovery support
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
                    "Practical planning for pain relief and mobility improvement",
                    "Step-wise investigations only when needed",
                    "Recovery milestones and structured follow-up",
                    "Transparent communication at every stage",
                  ].map((line, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FaCheckCircle className="text-cyan-700 text-xs" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-slate-500 text-xs">
                    For appointments, scroll to the booking section below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA (only CTA here besides hero)
      ══════════════════════════════════════════ */}
      <section id="cta" className="py-20 bg-slate-50">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 sm:p-12">
            <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-50 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-50 blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div className="flex flex-col gap-5">
                <SectionTag>Book Now</SectionTag>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Book an Appointment with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                    {doctor.name}
                  </span>
                </h2>

                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg">
                  Schedule a consultation to discuss symptoms, reports, and the most suitable care plan—focused on
                  safety, clarity, and recovery support.
                </p>

                <div className="flex flex-wrap gap-3">
                  <PrimaryButton href="/appointment">
                    <FaCalendarCheck />
                    Book Appointment
                  </PrimaryButton>

                  <SecondaryButton href={PHONE_HREF}>
                    <FaPhoneAlt className="text-cyan-700" />
                    Call: {PHONE_NUMBER}
                  </SecondaryButton>
                </div>

                <p className="text-slate-400 text-xs">
                  Tip: Bring prior reports, current medicines, and any recent imaging (if available).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 min-w-[240px] lg:min-w-[280px]">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <img
                    src={DoctorImg}
                    alt={doctor.name}
                    className="w-12 h-12 rounded-xl object-cover object-top border border-slate-200"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{doctor.name}</p>
                    <p className="text-cyan-700 text-xs font-semibold">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  {[
                    { label: "Qualification", value: doctor.qualifications.join(" ") },
                    { label: "Medical Council", value: doctor.council },
                    { label: "Registration Number", value: doctor.regNo },
                    { label: "Focus", value: "Pain relief & mobility" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600 flex-shrink-0" />
                      <p className="text-slate-600 text-xs leading-relaxed">
                        <span className="text-slate-400">{row.label}:</span>{" "}
                        <span className="text-slate-800 font-semibold">{row.value}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2">
                  <MdOutlineVerifiedUser className="text-cyan-700 text-base" />
                  <span className="text-cyan-800 text-xs font-bold">
                    Verified · {doctor.council} Registered
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