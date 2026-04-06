import React from "react";
import { useNavigate } from "react-router-dom";
import doctorImage from "../images/dr.webp";
import heartHeroImage from "../images/h1.webp";

import {
  FiPhoneCall,
  FiCheckCircle,
  FiHeart,
  FiActivity,
  FiShield,
  FiAward,
  FiCalendar,
  FiTarget,
  FiTrendingUp,
  FiSearch,
  FiMessageCircle,
  FiClipboard,
  FiClock,
  FiZap,
  FiUser,
} from "react-icons/fi";
import { RiHeartPulseLine, RiStethoscopeLine } from "react-icons/ri";

/* =========================
   DATA
========================= */
const clinicPoints = [
  "Trusted centre for advanced cardiology care in Raipur",
  "Accurate diagnosis with modern cardiac technology",
  "Expert management of heart disease, BP, and cholesterol",
  "Focused on long-term heart health and complication prevention",
];

const expertiseCards = [
  {
    icon: FiActivity,
    title: "ECG, 2D Echo & TMT",
    desc: "Accurate interpretation of cardiac tests for early detection of heart conditions and rhythm abnormalities.",
  },
  {
    icon: FiSearch,
    title: "Coronary Angiography",
    desc: "Advanced imaging to visualise coronary arteries and detect blockages with precision.",
  },
  {
    icon: FiZap,
    title: "Angioplasty & Stenting",
    desc: "Minimally invasive procedure to open blocked arteries and restore normal blood flow.",
  },
  {
    icon: FiHeart,
    title: "Heart Failure Management",
    desc: "Comprehensive care for heart failure including medication, monitoring, and lifestyle guidance.",
  },
  {
    icon: FiShield,
    title: "Hypertension & Cholesterol",
    desc: "Personalised management plans for blood pressure and cholesterol to reduce cardiac risk.",
  },
  {
    icon: FiUser,
    title: "Preventive Cardiology",
    desc: "Proactive screening and lifestyle strategies to prevent heart disease before it starts.",
  },
];

const approachSteps = [
  {
    icon: FiSearch,
    title: "Accurate Diagnosis",
    desc: "Advanced cardiac tests for precise identification of heart conditions.",
  },
  {
    icon: FiMessageCircle,
    title: "Clear Explanation",
    desc: "We explain your condition and all available treatment options clearly.",
  },
  {
    icon: FiClipboard,
    title: "Personalised Treatment",
    desc: "Custom treatment plans based on your health history and risk factors.",
  },
  {
    icon: FiShield,
    title: "Preventive Strategies",
    desc: "Proactive heart care to reduce risks and prevent future complications.",
  },
  {
    icon: FiClock,
    title: "Long-Term Follow-Up",
    desc: "Continuous monitoring and guidance for sustained heart health.",
  },
  {
    icon: FiHeart,
    title: "Compassionate Care",
    desc: "Patient-first support with empathy, comfort, and trusted guidance at every step.",
  },
];

const nonInvasiveServices = [
  "ECG Test",
  "TMT Test",
  "2D Echo",
  "Ambulatory BP Monitoring",
  "Coronary Risk Assessment",
  "Colour Doppler Test",
  "Hypertension Treatment",
  "Lipid Management",
  "Preventive Cardiology",
];

const interventionalServices = [
  "Angiography",
  "Angioplasty",
  "Pacemaker Implantation",
  "Valvular Heart Disease Treatment",
  "Congenital Heart Disease Care",
  "Structural Heart Interventions",
];

const whyChooseList = [
  {
    icon: RiStethoscopeLine,
    title: "Experienced Cardiac Care",
    desc: "Expert evaluation and treatment for a wide range of heart conditions.",
  },
  {
    icon: FiActivity,
    title: "Advanced Diagnostics",
    desc: "ECG, Echo, TMT, and modern tests for accurate and timely diagnosis.",
  },
  {
    icon: RiHeartPulseLine,
    title: "Complete Heart Treatment",
    desc: "From lifestyle guidance to angiography and angioplasty under one roof.",
  },
  {
    icon: FiTarget,
    title: "Personalised Patient Care",
    desc: "Treatment plans tailored to your health history, lifestyle, and risk factors.",
  },
  {
    icon: FiTrendingUp,
    title: "Modern Technology",
    desc: "Latest cardiac equipment for safe, effective, and reliable procedures.",
  },
  {
    icon: FiShield,
    title: "Trusted Heart Clinic",
    desc: "Reliable care focused on prevention, recovery, and long-term heart health.",
  },
];

/* =========================
   HELPERS
========================= */
function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================
   PAGE
========================= */
export default function PremiumAboutPage() {
  const navigate = useNavigate();
  // SEO Updates
  React.useEffect(() => {
    const pageTitle = "Best Cardiologist in Raipur | Heart Hospital Raipur | Aarogya Hospital";
    const descriptionContent = "Dr. Chirag Agrawal is the best cardiologist in Raipur at Aarogya Hospital. Expert heart care, angiography, angioplasty, and hypertension treatment in Raipur.";
    const canonicalUrl = "https://www.aarogyahospitalraipur.com/services/cardiologist";

    document.title = pageTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", descriptionContent);

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // OG Tags
    const setOg = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOg("og:type", "website");
    setOg("og:url", canonicalUrl);
    setOg("og:title", pageTitle);
    setOg("og:description", descriptionContent);
    setOg("og:site_name", "Aarogya Hospital Raipur");
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ====== HERO ====== */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-slate-50" />

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          {/* BACK BUTTON */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-800 px-4 py-2.5 rounded-full shadow-md hover:-translate-y-1 hover:shadow-lg hover:bg-slate-50 transition-all duration-300 font-bold text-sm"
            >
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Best Heart Care in Raipur
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                Advanced Cardiac Care by{" "}
                <span className="text-red-600">Dr. Chirag Agrawal</span>
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
                A trusted cardiology clinic in Raipur for heart disease
                treatment, preventive heart check-ups, hypertension care,
                cholesterol management, and personalised cardiac treatment.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={doctorImage}
                  alt="Dr. Chirag Agrawal"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-red-100"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Dr. Chirag Agrawal
                  </p>
                  <p className="text-xs text-slate-500">
                    Interventional Cardiologist
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  <FiCalendar size={16} />
                  Book Appointment
                </a>
                <a
                  href="tel:+919827198000"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-600"
                >
                  <FiPhoneCall size={16} />
                  Call Now
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  { val: "6+", label: "Years Experience" },
                  { val: "2", label: "Gold Medals" },
                  { val: "9", label: "Distinctions" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-red-600">{s.val}</p>
                    <p className="text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-lg">
                <div
                  className="absolute bottom-0 right-0 top-0 w-[55%] bg-red-600"
                  style={{
                    clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
                <div className="relative flex min-h-[450px] items-center justify-center p-8 sm:min-h-[520px]">
                  <img
                    src={heartHeroImage}
                    alt="Heart Care"
                    className="relative z-10 w-full max-w-[380px] object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====== ABOUT DOCTOR ====== */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-3xl border border-red-100 bg-slate-50 shadow-lg">
                <div
                  className="absolute bottom-0 right-0 top-0 w-[50%] bg-red-600"
                  style={{
                    clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
                <div className="relative flex min-h-[550px] items-end justify-center px-4 pt-8 sm:min-h-[620px]">
                  <img
                    src={doctorImage}
                    alt="Dr. Chirag Agrawal"
                    className="relative z-10 w-full max-w-[420px] object-contain object-bottom drop-shadow-xl"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                About the Doctor
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Dr. Chirag Agrawal
              </h2>
              <p className="mt-1 text-lg text-slate-500">
                Interventional Cardiologist
              </p>

              <p className="mt-5 leading-relaxed text-slate-600">
                Dr. Chirag Agrawal is a highly accomplished Interventional
                Cardiologist with strong academic excellence and extensive
                clinical experience. He completed MBBS with 9 distinctions and
                earned the Gold Medal.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                He further pursued MD (Medicine) with a Gold Medal, followed by
                DM Cardiology from VMMC & Safdarjung Hospital, Delhi. With 6+
                years of experience, he serves as Consultant Cardiologist at
                Aarogya Hospital, Raipur.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                Dr. Agrawal believes in educating patients about their heart
                health so they can make informed decisions about treatment and
                lifestyle changes.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FiAward,
                    title: "MBBS Gold Medalist",
                    desc: "9 distinctions",
                  },
                  {
                    icon: FiAward,
                    title: "MD Gold Medal",
                    desc: "Medicine excellence",
                  },
                  {
                    icon: FiActivity,
                    title: "DM Cardiology",
                    desc: "Safdarjung Hospital, Delhi",
                  },
                  {
                    icon: FiHeart,
                    title: "6+ Years Experience",
                    desc: "Interventional cardiology",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-red-100 hover:bg-red-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====== ABOUT CLINIC ====== */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-red-50 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/4 rounded-full bg-red-50/50 blur-[80px]" />

        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600 shadow-sm">
              <FiHeart size={14} />
              About Our Cardiology Centre
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Accurate Diagnosis &{" "}
              <span className="text-red-600">Personalised Treatment</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A trusted destination for advanced heart care, heart disease
              treatment, and preventive heart check-ups in Raipur.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            {/* Left - Content */}
            <div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <p className="text-[15px] leading-relaxed text-slate-600">
                  Our cardiology centre in Raipur is led by experienced
                  cardiologist{" "}
                  <span className="font-semibold text-slate-900">
                    Dr. Chirag Agrawal
                  </span>
                  . The clinic offers comprehensive services including ECG, blood
                  pressure management, heart screening, cholesterol control, and
                  treatment for various cardiac conditions.
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  Known as one of the best heart clinics in Raipur, we focus on
                  accurate diagnosis, modern cardiac technology, and personalised
                  care to help patients maintain better heart health and prevent
                  future complications.
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  Dr. Agrawal believes in educating patients about their heart
                  health so they can make informed decisions about treatment and
                  lifestyle.
                </p>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="grid gap-3 sm:grid-cols-2">
                  {clinicPoints.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition hover:border-red-100 hover:bg-red-50/30"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                        <FiCheckCircle size={13} />
                      </div>
                      <span className="text-sm leading-relaxed text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  <FiCalendar size={16} />
                  Book Consultation
                </a>
                <a
                  href="tel:+919827198000"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-600"
                >
                  <FiPhoneCall size={16} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Right - Trust / Commitment / Stats */}
            <div className="flex flex-col gap-6">
              {/* Dark trust card */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-xl sm:p-10">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/20 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-red-600/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <img
                      src={doctorImage}
                      alt="Dr. Chirag Agrawal"
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
                    />
                    <div>
                      <p className="text-sm font-bold text-white">
                        Dr. Chirag Agrawal
                      </p>
                      <p className="text-xs text-white/60">
                        Interventional Cardiologist
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    Why Patients Trust Us
                  </h3>

                  <div className="mt-5 space-y-4">
                    {[
                      "Advanced diagnostic technology for precise results",
                      "Clear and transparent communication about treatment",
                      "Patient-first approach with personalised care plans",
                      "Comprehensive cardiac services under one roof",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/30">
                          <FiCheckCircle
                            className="text-red-400"
                            size={12}
                          />
                        </div>
                        <span className="text-sm leading-relaxed text-white/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Care Commitment card */}
              <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                    <FiShield size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Our Care Commitment
                  </h4>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We are committed to providing accurate diagnosis, clear
                  guidance, and personalised cardiac care focused on better
                  outcomes and long-term heart health.
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    "Timely cardiac evaluation with modern diagnostic testing",
                    "Clear explanation of diagnosis and treatment options",
                    "Personalised care focused on prevention, recovery, and follow-up",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-700"
                    >
                      <FiCheckCircle
                        className="mt-0.5 shrink-0 text-red-600"
                        size={14}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "6+", label: "Years" },
                  { val: "1000+", label: "Patients" },
                  { val: "Expert", label: "Care" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm"
                  >
                    <p className="text-xl font-bold text-red-600">{s.val}</p>
                    <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====== AREAS OF EXPERTISE ====== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Areas of Expertise
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Specialised Cardiac Care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Dr. Chirag Agrawal provides expert care across all major areas of
              cardiology, from diagnostic testing to advanced interventions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-red-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====== OUR APPROACH ====== */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-red-600/5 blur-[100px]" />

        <Container className="relative z-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-400">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How We Care for Your Heart
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              We understand heart problems can be stressful for patients and
              families. That is why our care is built around trust, clarity,
              safety, and long-term support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approachSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/30 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/20 text-red-400 transition group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-base text-slate-300">
              Whether you need a routine heart check-up or advanced cardiac
              intervention, our clinic ensures{" "}
              <span className="font-semibold text-white">
                safe and compassionate care
              </span>{" "}
              at every step.
            </p>
          </div>
        </Container>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="bg-white py-16 sm:py-20" id="services">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Complete Heart Care Under One Roof
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <FiActivity size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Non-Invasive Cardiology
                  </h3>
                  <p className="text-sm text-slate-500">
                    Testing & preventive care
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {nonInvasiveServices.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg bg-slate-50 p-3"
                  >
                    <FiCheckCircle
                      className="shrink-0 text-red-600"
                      size={14}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50/30 p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                  <RiHeartPulseLine size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Interventional Cardiology
                  </h3>
                  <p className="text-sm text-slate-500">Advanced procedures</p>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {interventionalServices.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg bg-white p-3"
                  >
                    <FiCheckCircle
                      className="shrink-0 text-red-600"
                      size={14}
                    />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Trust, Precision & Comfort
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Every heart deserves personalised care with early diagnosis and
              long-term support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseList.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-red-100 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ====== MISSION CTA ====== */}
      <section id="book" className="bg-slate-900 py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FiHeart className="mx-auto text-red-500" size={32} />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
              Our Mission
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
              To reduce the burden of heart disease in Raipur by offering early
              detection, advanced treatment, and preventive heart care under one
              roof.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919827198000"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <FiPhoneCall size={16} />
                Call Now
              </a>

              <a
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <FiCalendar size={16} />
                Book Appointment
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}