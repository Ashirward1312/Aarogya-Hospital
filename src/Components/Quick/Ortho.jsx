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

import DoctorImg from "../images/Orthopedics in Raipur.webp";
import HeroImg from "../images/Orthopedics  clinic in Raipur.webp";
import ClinicImg from "../images/Orthopedics  Hospital in Raipur.webp";

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
                ? "bg-gradient-to-r from-cyan-200 to-blue-300"
                : "bg-gradient-to-r from-cyan-600 to-blue-600",
            ].join(" ")}
          >
            {highlight}
          </span>
        ) : null}
      </h2>

      {displaySubtitle ? (
        <p className={`text-base sm:text-lg font-bold tracking-tight -mt-1 ${dark ? "text-cyan-300" : "text-cyan-600"}`}>
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
  const PHONE_NUMBER = "+919827198000";
  const PHONE_HREF = `tel:${PHONE_NUMBER}`;

  const doctor = {
    dept: "Orthopedics",
    name: "Dr. Deepak Agrawal",
    specialty: "Orthopedics",
    council: "CGMC",
    regNo: "641/2006",
    // ✅ show ONLY ONCE (Qualifications section)
    qualifications: ["Best Orthopedic Doctor in Raipur"],
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

  // ✅ About cards: better icons (no emojis)
  const aboutCards = useMemo(
    () => [
      {
        title: "Pain & Function Focus",
        desc: "Plan built around comfort, strength, and safe return to activity.",
        icon: FaWheelchair,
      },
      {
        title: "Clear Next Steps",
        desc: "Simple explanation of options, timelines, and what to do next.",
        icon: FaClipboardList,
      },
      {
        title: "Safety-first Planning",
        desc: "Structured decisions supported by clinical evaluation and reports.",
        icon: FaShieldAlt,
      },
      {
        title: "Recovery Guidance",
        desc: "Follow-up and practical rehab guidance for steady recovery.",
        icon: FaHandHoldingMedical,
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased scroll-smooth">
      <Helmet>
        <title>Best Orthopedics Hospital in Raipur (C.G)| Aarogya Hospital Raipur</title>
        <meta
          name="description"
          content="Aarogya Hospital is a leading orthopedics hospital in Raipur (C.G), offering joint replacement, fracture care, spine treatment, and advanced bone care services."
        />
        <meta property="og:title" content="Best Orthopedics Hospital in Raipur (C.G)| Aarogya Hospital Raipur" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.aarogyahospitalraipur.com/logo.png" />
        <meta property="og:site_name" content="Aarogya Hospital Raipur" />
        <meta property="og:description" content="Aarogya Hospital is a leading orthopedics hospital in Raipur (C.G), offering joint replacement, fracture care, spine treatment, and advanced bone care services." />
        <meta property="og:url" content="https://www.aarogyahospitalraipur.com/departments/orthopedics-hospital-in-raipur" />
        <meta property="og:locale" content="en_IN" />
        <link rel="canonical" href="https://www.aarogyahospitalraipur.com/departments/orthopedics-hospital-in-raipur" />
        <link rel="preload" as="image" href={HeroImg} fetchPriority="high" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative overflow-hidden bg-slate-950"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(6, 182, 212, 0.1), transparent 400px),
            radial-gradient(circle at bottom left, rgba(37, 99, 235, 0.1), transparent 400px),
            linear-gradient(to bottom right, #020617, #071C33, #031427)
          `,
        }}
      >

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">


          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                  <MdOutlineVerifiedUser className="text-cyan-300" />
                  Verified Doctor
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.2rem] font-extrabold text-white leading-[1.1] tracking-tight">
                Best Orthopedics Care
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400">
                  & Joint Care Hospital
                </span>

                <br />

                in Raipur
              </h1>

              <div className="flex flex-col gap-6">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Get advanced bone & joint care with modern techniques and complete recovery guidance at Aarogya Hospital, one of the <a href="/departments/orthopedics-hospital-in-raipur" className="text-cyan-300 font-semibold hover:underline">best orthopedics hospitals in Raipur (C.G)</a>.
                </p>
                <p className="text-white/70 text-sm sm:text-[0.95rem] leading-relaxed max-w-2xl">
                  Led by experienced orthopedics specialist Dr. Deepak Agrawal, our department provides evidence-based bone and joint treatments with a strong focus on pain relief, absolute patient safety, and structured recovery guidance. From diagnosis to rehab support, we ensure you feel informed, confident, and supported at every stage.
                </p>
              </div>

              <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-fit shadow-lg shadow-black/20">
                <img
                  src={DoctorImg}
                  alt={doctor.name}
                  width="56"
                  height="56"
                  className="h-14 w-14 rounded-xl object-cover object-top ring-2 ring-cyan-400/30 flex-shrink-0"
                  fetchPriority="high"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{doctor.name}</p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    {doctor.qualifications.map((q) => (
                      <span key={q} className="text-white/50 text-[0.62rem] font-semibold">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <img
                    src={HeroImg}
                    alt="Orthopedics care"
                    width="800"
                    height="600"
                    className="absolute inset-0 w-full h-full object-cover"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-4">
                      <p className="text-white font-semibold text-sm">
                        Care Pathway for Pain & Function
                      </p>
                      <p className="text-white/70 text-xs mt-1 leading-relaxed">
                        Clinical exam • Relevant investigations • Treatment plan • Follow-up support
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {["Joint Pain", "Fracture", "Sports Injury", "Back Pain"].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-cyan-500/20 border border-cyan-400/25 text-cyan-200 px-3 py-0.5 text-[0.65rem] font-semibold"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ removed floating CGMC/Reg card */}
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
                  src={DoctorImg}
                  alt={doctor.name}
                  width="600"
                  height="520"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* ✅ removed top-left council overlay (to avoid repetition) */}

              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 flex flex-col items-center justify-center">
                <span className="text-white font-extrabold text-lg leading-none">
                  D.Ortho
                </span>
                <span className="text-white/85 text-[0.65rem] font-semibold tracking-wide mt-0.5">
                  Orthopedics
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="About the Doctor"
                highlight={doctor.name}
                tittle={
                  <a href="/departments/orthopedics-hospital-in-raipur" className="hover:underline">
                    Best Orthopedic Doctor in Raipur
                  </a>
                }
                desc="Orthopedics-focused care with clear evaluation, transparent planning, and follow-up guidance to support better function and recovery."
              />

              <p className="text-slate-600 text-sm leading-relaxed">
                Consultations are structured and practical—symptoms, examination
                findings, and reports are explained clearly, along with the safest
                next steps.
              </p>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl bg-white border border-slate-200/80 px-5 py-5 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all duration-200 flex flex-col gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700">
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <h3 className="text-slate-900 font-semibold text-sm">
                          {card.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1.5">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ✅ Council/Reg ONLY ONE PLACE (here) */}
              <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 px-5 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">
                      Council & Registration
                    </p>
                    <p className="text-slate-600 text-xs mt-1">
                      Medical Council:{" "}
                      <span className="font-bold text-slate-800">
                        {doctor.council}
                      </span>
                      {" · "}
                      Reg. No.:{" "}
                      <span className="font-bold text-slate-800">
                        {doctor.regNo}
                      </span>
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

      {/* SERVICES */}
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
                  <div
                    className={`w-12 h-12 rounded-2xl ${s.bg} border ${s.border} flex items-center justify-center ${s.iconColor} text-xl flex-shrink-0`}
                  >
                    <Icon />
                  </div>

                  <div className="flex flex-col flex-1 mt-5">
                    <h3 className="text-slate-900 font-semibold text-sm">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2 flex-1">
                      {s.desc}
                    </p>
                  </div>

                  <div
                    className={`mt-4 h-0.5 w-10 rounded-full bg-gradient-to-r ${s.accent} group-hover:w-16 transition-all duration-300`}
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
            title="A structured"
            highlight="orthopedics pathway"
            desc="Step-by-step care designed for clarity, safety, and recovery support."
            center
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src={ClinicImg}
                  alt="Clinic environment"
                  width="800"
                  height="600"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/15 bg-slate-900/60 p-4">
                    <p className="text-white font-semibold text-sm">
                      Safety + Recovery Planning
                    </p>
                    <p className="text-white/70 text-xs leading-relaxed mt-1">
                      Clear diagnosis, practical plan, and structured follow-up to support mobility.
                    </p>
                  </div>
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
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 flex-shrink-0">
                          <Icon className="text-base" />
                        </div>
                        <div className="pt-0.5">
                          <h3 className="text-slate-900 font-semibold text-sm">
                            {step.title}
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed mt-1.5">
                            {step.desc}
                          </p>
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
                  <div
                    className={`w-12 h-12 rounded-2xl ${w.bg} border ${w.border} flex items-center justify-center ${w.iconColor} text-xl`}
                  >
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-slate-900 font-semibold text-sm">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-xs leading-relaxed flex-1">
                    {w.desc}
                  </p>
                  <div className="mt-5 h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-14 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ✅ QUALIFICATIONS (shown ONLY HERE) */}
      <section
        className="py-20 bg-slate-950 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.08), transparent 300px),
            radial-gradient(circle at 0% 100%, rgba(37, 99, 235, 0.08), transparent 300px),
            #020617
          `,
        }}
      >

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeader
                tag="Qualifications"
                title="Professional"
                highlight="Qualifications"
                desc="Degrees and credentials shown clearly in one place."
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

              {/* ✅ removed council/reg here to avoid repetition */}

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
                <h3 className="text-slate-900 font-semibold text-base">
                  What you can expect
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                  A consistent standard of care
                </p>
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
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {line}
                      </span>
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

      {/* ✅ PREMIUM + SIMPLE BOOKING (no doctor card, no council/reg, no qualifications) */}
      <section id="cta" className="py-20 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

            <div className="relative p-8 sm:p-12">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                <div className="flex flex-col gap-5">
                  <SectionTag>Appointment</SectionTag>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    Book Appointment
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
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
                      <FaPhoneAlt className="text-cyan-700" />
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

                  <div className="mt-6 rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3">
                    <p className="text-cyan-800 text-xs font-semibold">
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