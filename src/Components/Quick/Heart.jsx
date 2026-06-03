import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import doctorImage from "../images/Cardiologist in Raipur.webp";
import heartHeroImage from "../images/best cardiology and heart hospital in raipur.png";

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
  FiChevronDown,
  FiChevronUp,
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

const faqData = [
  {
    q: "Who is the best cardiologist in Raipur?",
    a: "Dr. Chirag Agrawal is a highly experienced interventional cardiologist in Raipur, known for advanced heart care, accurate diagnosis, and patient-focused treatment at Aarogya Hospital.",
  },
  {
    q: "What services are offered at Aarogya Hospital’s cardiology department?",
    a: "Our cardiology department offers complete heart care services in Raipur, including ECG, 2D Echo, TMT, angiography, angioplasty, blood pressure management, cholesterol control, and preventive cardiology.",
  },
  {
    q: "When should I consult a cardiologist?",
    a: "You should consult a cardiologist if you experience chest pain, shortness of breath, dizziness, high blood pressure, or irregular heartbeat, or if you have a family history of heart disease.",
  },
  {
    q: "Does Aarogya Hospital provide emergency heart care in Raipur?",
    a: "Yes, Aarogya Hospital provides 24/7 emergency cardiac care in Raipur, supported by advanced ICU facilities and a trained medical team for critical heart conditions.",
  },
  {
    q: "What tests are done for heart diagnosis?",
    a: "Common heart diagnostic tests include ECG, 2D Echocardiography, TMT (stress test), Holter monitoring, and blood tests, which help in early detection and accurate treatment of heart diseases.",
  },
 
  {
    q: "What are the common heart diseases treated at Aarogya Hospital?",
    a: "At Aarogya Hospital Raipur, we treat various heart conditions such as coronary artery disease, heart attack, hypertension, arrhythmia, and heart valve disorders with advanced care and monitoring.",
  },
  {
    q: "Where is Aarogya Hospital located in Raipur?",
    a: "Aarogya Hospital is centrally located in Shankar Nagar, Raipur, (C.G), offering easy access to advanced cardiology and multi-speciality healthcare services.",
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

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-bold text-slate-900 sm:text-lg">{q}</span>
        {open ? (
          <FiChevronUp className="text-red-600" size={20} />
        ) : (
          <FiChevronDown className="text-slate-400" size={20} />
        )}
      </button>
      {open && (
        <div className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {a}
        </div>
      )}
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
          : "bg-red-50 border-red-200 text-red-800",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full inline-block",
          dark ? "bg-red-300" : "bg-red-600",
        ].join(" ")}
      />
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/20 hover:-translate-y-0.5 hover:shadow-red-500/35 transition-all duration-200"
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
          : "bg-white border border-slate-200 text-slate-900 hover:border-red-300 hover:bg-red-50 shadow-sm",
      ].join(" ")}
    >
      {children}
    </a>
  );
}



/* =========================
   PAGE
========================= */
export default function PremiumAboutPage() {
  const navigate = useNavigate();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "1. Who is the best cardiologist in Raipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Chirag Agrawal is a highly experienced interventional cardiologist in Raipur, known for advanced heart care, accurate diagnosis, and patient-focused treatment at Aarogya Hospital."
        }
      },
      {
        "@type": "Question",
        "name": "2. What services are offered at Aarogya Hospital’s cardiology department?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our cardiology department offers complete heart care services in Raipur, including ECG, 2D Echo, TMT, angiography, angioplasty, blood pressure management, cholesterol control, and preventive cardiology."
        }
      },
      {
        "@type": "Question",
        "name": "3. When should I consult a cardiologist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should consult a cardiologist if you experience chest pain, shortness of breath, dizziness, high blood pressure, or irregular heartbeat, or if you have a family history of heart disease."
        }
      },
      {
        "@type": "Question",
        "name": "4. Does Aarogya Hospital provide emergency heart care in Raipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Aarogya Hospital provides 24/7 emergency cardiac care in Raipur, supported by advanced ICU facilities and a trained medical team for critical heart conditions."
        }
      },
      {
        "@type": "Question",
        "name": "5. What tests are done for heart diagnosis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common heart diagnostic tests include ECG, 2D Echocardiography, TMT (stress test), Holter monitoring, and blood tests, which help in early detection and accurate treatment of heart diseases."
        }
      },
      {
        "@type": "Question",
        "name": "6. What are the common heart diseases treated at Aarogya Hospital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Aarogya Hospital Raipur, We treat various heart conditions such as coronary artery disease, heart attack, hypertension, arrhythmia, and heart valve disorders with advanced care and monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "7. Where is Aarogya Hospital Located in Raipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aarogya Hospital is centrally located in Shankar Nagar, Raipur, (C.G), offering easy access to advanced cardiology and multi-speciality healthcare services."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Helmet>
        <title>#1 Best cardiology and Heart Hospital in Raipur | Aarogya Hospital</title>
        <meta
          name="description"
          content="Aarogya Hospital is one of the best cardiology and heart hospitals in Raipur, offering advanced cardiac care, expert cardiologists, and emergency heart treatment with trusted care."
        />
        <meta property="og:title" content="#1 Best cardiology and Heart Hospital in Raipur | Aarogya Hospital" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.aarogyahospitalraipur.com/logo.png" />
        <meta property="og:site_name" content="Aarogya Hospital Raipur" />
        <meta property="og:description" content="Aarogya Hospital is one of the best cardiology and heart hospitals in Raipur, offering advanced cardiac care, expert cardiologists, and emergency heart treatment with trusted care." />
        <meta property="og:url" content="https://www.aarogyahospitalraipur.com/departments/best-cardiology-and-heart-hospital-in-raipur" />
        <meta property="og:locale" content="en_IN" />
        <link rel="canonical" href="https://www.aarogyahospitalraipur.com/departments/best-cardiology-and-heart-hospital-in-raipur" />
        <meta name="keywords" content="cardiologist in Raipur, best cardiologist in Raipur, heart specialist in Raipur, best heart specialist in Raipur, heart specialist hospital in Raipur, best heart hospital in Raipur, best cardiac care in Raipur, best cardiac center in Raipur, best cardiac surgeon in Raipur, best interventional cardiologist in Raipur, cardiologist in Shankar Nagar, best cardiologist in Shankar Nagar, heart specialist in Shankar Nagar, best heart specialist in Shankar Nagar, best heart specialist hospital in Shankar Nagar, best cardiac care in Shankar Nagar, best cardiac center in Shankar Nagar, best cardiac surgeon in Shankar Nagar, best interventional cardiologist in Shankar Nagar" />
        <link rel="preload" as="image" href={heartHeroImage} fetchPriority="high" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      {/* ====== HERO ====== */}
      <section
        className="relative overflow-hidden bg-white"
        style={{
          background: `
            radial-gradient(circle at top right, rgba(239, 68, 68, 0.05), transparent 400px),
            radial-gradient(circle at bottom left, rgba(248, 250, 252, 1), transparent 400px),
            linear-gradient(to bottom right, #fef2f2, #ffffff, #f8fafc)
          `,
        }}
      >

        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Advanced Heart Care with Expert <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="hover:text-red-700 underline decoration-red-200 underline-offset-4">Cardiologists in Raipur</a>
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="hover:text-slate-800 transition-colors">
                  Best Cardiology & <span className="text-red-600">Heart Hospital</span> in Raipur (C.G)
                </a>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Aarogya Hospital is recognized as one of the <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="text-red-600 font-semibold hover:underline">best cardiology and heart hospitals in Raipur, (C.G)</a>, offering comprehensive cardiac care, advanced diagnostics, and life-saving heart treatments. Our cardiology department is dedicated to diagnosing, treating, and preventing all types of heart diseases with precision and compassion.
              </p>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                With a team of experienced cardiologists, cardiac surgeons, and critical care specialists, we provide world-class treatment supported by modern infrastructure and advanced technology.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src={doctorImage}
                  alt="Dr. Chirag Agrawal"
                  width="48"
                  height="48"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-red-100"
                  loading="eager"
                  fetchpriority="high"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Dr. Chirag Agrawal
                  </p>
                  <p className="text-xs text-slate-500">
                    <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="hover:text-red-600 transition-colors italic">Interventional Cardiologist Raipur</a>
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

             
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Soft subtle glow behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[80px]" />
              
              <img
                src={heartHeroImage}
                alt="Heart Care"
                width="480"
                height="550"
                className="relative z-10 w-full max-w-[450px] object-contain drop-shadow-[0_20px_40px_rgba(220,38,38,0.15)] transition-transform duration-700 hover:scale-105"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ====== ABOUT DOCTOR ====== */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-lg lg:mt-0">
                <div className="relative flex items-end justify-center px-4 pt-4 sm:pt-8">
                  <img
                    src={doctorImage}
                    alt="Dr. Chirag Agrawal"
                    width="420"
                    height="620"
                    className="relative z-10 w-full max-w-[420px] h-auto object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                About the doctor
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Dr. Chirag Agrawal
              </h2>
              <p className="mt-1 text-lg text-slate-500 font-medium italic">
                <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="hover:text-red-600 transition-colors">Best Interventional Cardiologist in Raipur</a>
              </p>

              <div className="mt-6 space-y-4">
                <p className="leading-relaxed text-slate-600">
                  Dr. Chirag Agrawal is a highly accomplished <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="text-red-600 font-semibold hover:underline">Interventional Cardiologist in Raipur</a> known for his academic excellence and advanced cardiac care expertise. He completed his MBBS with 9 distinctions and was awarded a Gold Medal, followed by an MD in Medicine with a Gold Medal. He further specialized in cardiology by completing his DM Cardiology from VMMC & Safdarjung Hospital, Delhi, one of India’s leading medical institutions.
                </p>

                <p className="leading-relaxed text-slate-600">
                  With over 6+ years of clinical experience, Dr. Chirag Agrawal is currently serving as a Consultant Cardiologist at Aarogya Hospital, Raipur, where he provides expert diagnosis and treatment for various heart conditions, including heart attack, hypertension, and coronary artery disease.
                </p>

                <p className="leading-relaxed text-slate-600">
                  Recognized as one of the <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="text-red-600 font-semibold hover:underline">best cardiologists in Raipur</a>, Dr. Agrawal focuses on patient education, preventive cardiology, and personalized treatment plans, helping patients make informed decisions about their heart health and lifestyle.
                </p>
              </div>

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
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.03), transparent 400px),
            radial-gradient(circle at 100% 100%, rgba(239, 68, 68, 0.03), transparent 400px),
            #f8fafc
          `,
        }}
      >

        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-red-600 shadow-sm">
              <FiHeart size={14} />
              About Our Cardiology Centre in Raipur
            </div>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Accurate Diagnosis &{" "}
              <span className="text-red-600">Personalised Treatment</span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Aarogya Hospital is a trusted cardiology centre in Raipur, offering advanced heart care through modern technology and personalized treatment plans. Led by expert cardiologists, we provide comprehensive cardiac services focused on early detection and patient-centered care for optimal outcomes.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            {/* Left - Content */}
            <div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
                <div className="space-y-4">
                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Our cardiology centre in Raipur is led by{" "}
                    <span className="font-semibold text-slate-900">Dr. Chirag Agrawal</span>,
                    an experienced <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="text-red-600 font-semibold hover:underline">Interventional Cardiologist in Raipur (C.G)</a> dedicated to
                    providing advanced and compassionate heart care. At Aarogya Hospital,
                    we offer a complete range of cardiology services including ECG,
                    blood pressure management, heart screening, cholesterol control,
                    and treatment for various heart diseases.
                  </p>

                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Recognized as one of the <a href="/departments/best-cardiology-and-heart-hospital-in-raipur" className="text-red-600 font-semibold hover:underline">best cardiology hospitals in Raipur</a>,
                    we focus on accurate diagnosis, modern cardiac technology, and
                    personalized treatment plans. Our goal is not just to treat heart
                    conditions, but to help patients achieve long-term heart health
                    and prevent future complications.
                  </p>

                  <p className="text-[15px] leading-relaxed text-slate-600">
                    Dr. Chirag Agrawal strongly believes in patient education and awareness.
                    He ensures that every patient understands their condition,
                    treatment options, and lifestyle changes, empowering them to
                    take better control of their heart health.
                  </p>
                </div>

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
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/10" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-red-600/5" />

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                    <FiAward size={24} />
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
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 100% 0%, rgba(220, 38, 38, 0.1), transparent 400px),
              radial-gradient(circle at 0% 100%, rgba(220, 38, 38, 0.05), transparent 400px),
              #0f172a
            `,
          }}
        />

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

      {/* ====== FAQ SECTION ====== */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Common Cardiology Questions
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-2">
              {faqData.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ✅ PREMIUM + SIMPLE BOOKING */}
      <section id="cta" className="py-20 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-orange-50" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

            <div className="relative p-8 sm:p-12">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                <div className="flex flex-col gap-5">
                  <SectionTag>Appointment</SectionTag>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    Book Appointment
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                      in 1 Minute
                    </span>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Book karne ke liye “Book Now” par click karein, ya urgent help ke liye call karein.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <PrimaryButton href="/appointment">
                      <FiCalendar />
                      Book Now
                    </PrimaryButton>

                    <SecondaryButton href="tel:+919827198000">
                      <FiPhoneCall className="text-red-700" />
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

                  <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                    <p className="text-red-800 text-xs font-semibold">
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