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
  FaVenus,
  FaBone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ServicesSection = () => {
  // Meta Title + Meta Description + Canonical + OG
  React.useEffect(() => {
    const pageTitle =
      "Aarogya Hospital Medical Services in Raipur | Aarogya Hospital";

    const descriptionContent =
      "Explore medical services at Aarogya Hospital Raipur including cardiology, general surgery, gynecology, orthopedics, diagnostics, laboratory, pharmacy, and support services.";

    const canonicalUrl = "https://www.aarogyahospitalraipur.com/services";

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

    // Open Graph (OG)
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
    setOg("og:url", "https://www.aarogyahospitalraipur.com/services");
    setOg(
      "og:title",
      "Aarogya Hospital Medical Services in Raipur | Aarogya Hospital"
    );
    setOg(
      "og:description",
      "Explore medical services at Aarogya Hospital Raipur including cardiology, general surgery, gynecology, orthopedics, diagnostics, laboratory, pharmacy, and support services."
    );
    setOg(
      "og:image",
      "https://www.aarogyahospitalraipur.com/assets/logo1-BEkNzzrJ.jpg"
    );
    setOg("og:site_name", "Aarogya Hospital Raipur");
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200 overflow-hidden">
      {/* soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-[-60px] h-56 w-56 rounded-3xl bg-[#F04E30]/20 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] h-64 w-64 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex px-5 py-1.5 bg-white border border-[#F04E30]/30 rounded-full text-[11px] font-semibold text-[#F04E30] tracking-[0.22em] uppercase">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="relative inline-flex">
              <span className="relative z-10">COMPLETE MEDICAL</span>
              <span
                aria-hidden="true"
                className="absolute -inset-x-3 -inset-y-2 -z-10 rounded-2xl
                 bg-gradient-to-r from-orange-500/15 via-orange-400/10 to-transparent
                 blur-sm"
              />
            </span>

            <br className="hidden sm:block" />

            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F04E30] via-orange-500 to-amber-400">
                SOLUTIONS
              </span>

              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-[3px] w-full rounded-full
                 bg-gradient-to-r from-[#F04E30] via-orange-400 to-amber-300"
              />

              <span
                aria-hidden="true"
                className="absolute -bottom-6 left-6 h-6 w-40 rounded-full bg-orange-500/20 blur-2xl"
              />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            World‑class clinical, diagnostic, laboratory and support services
            under one roof for seamless patient care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* ───── Top 4 = Doctor Pages ───── */}

          <ServiceCard
            icon={<FaHeartbeat />}
            title="Cardiology & Heart Care"
            items={[
              "OPD & Inpatient Cardiology Services",
              "Cardiac ICU / CCU",
              "Advanced ECG, 2D Echo & TMT",
              "Heart Failure & Arrhythmia Care",
              "Acute Heart Attack Stabilization",
            ]}
            color="rose"
            showButton={true}
            to="/services/cardiologist"
          />

          <ServiceCard
            icon={<FaUserMd />}
            title="General Surgery"
            items={[
              "General & GI Surgery",
              "Surgical Oncology",
              "Neuro Surgery",
              "ICU & Emergency Care",
              "Trauma Management",
            ]}
            color="indigo"
            showButton={true}
            to="/services/general-surgery"
          />

          <ServiceCard
            icon={<FaVenus />}
            title="Gynecology & Women’s Health"
            items={[
              "Obstetrics & Gynecology OPD",
              "Pregnancy Care (ANC)",
              "PCOS / PCOD Care",
              "Menstrual Disorders",
              "Infertility Counselling",
            ]}
            color="purple"
            showButton={true}
            to="/services/gynaecology"
          />

          <ServiceCard
            icon={<FaBone />}
            title="Orthopedics & Bone Care"
            items={[
              "Orthopedics OPD",
              "Fracture & Injury Care",
              "Joint Pain & Arthritis Care",
              "Back & Neck Pain",
              "Sports Injury Management",
            ]}
            color="blue"
            showButton={true}
            to="/services/orthopedics"
          />

          {/* ───── Remaining cards (shifted content down) ───── */}

          {/* Medicine & Specialties content shifted down here (Gyne/Ortho removed since separate cards above) */}
          <ServiceCard
            icon={<FaStethoscope />}
            title="Medicine & Other Specialties"
            items={[
              "General Medicine",
              "Urology",
              "Ophthalmology",
              "Paediatrics",
              "Dentistry",
              "Nephrology",
            ]}
            color="emerald"
            showButton={false}
          />

          {/* Laboratory services moved down here (not linked to orthopedics anymore) */}
          <ServiceCard
            icon={<FaFlask />}
            title="Laboratory Services"
            items={[
              "Clinical Microbiology",
              "Clinical Pathology",
              "Hematology",
              "Biochemistry",
            ]}
            color="amber"
            showButton={false}
          />

          <ServiceCard
            icon={<FaXRay />}
            title="Diagnostic Services"
            items={["CT Scan", "Ultrasound", "X‑Ray", "2D Echo", "Spirometry"]}
            color="purple"
            showButton={false}
          />

          <ServiceCard
            icon={<FaHandsHelping />}
            title="Allied Medical Services"
            items={["Dietetics", "Physiotherapy"]}
            color="orange"
            showButton={false}
          />

          <ServiceCard
            icon={<FaPills />}
            title="Pharmacy Services"
            items={["In‑house Pharmacy / Dispensary"]}
            color="teal"
            showButton={false}
          />

          <ServiceCard
            icon={<FaAmbulance />}
            title="Support Services"
            items={[
              "Ambulance",
              "Canteen",
              "Blood Bank (Outsourced)",
              "Housekeeping",
              "Security",
            ]}
            color="blue"
            showButton={false}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, items, color, showButton, to }) => {
  const colorThemes = {
    blue: {
      border: "from-sky-200 via-white to-indigo-200",
      borderHover: "group-hover:from-sky-300 group-hover:to-indigo-300",
      glow: "bg-sky-400/20",
      iconWrap: "from-sky-500 to-indigo-500",
      iconSoft: "bg-sky-50 text-sky-700",
      title: "text-slate-900",
      textAccent: "text-sky-700",
      btnBg: "bg-sky-50 hover:bg-sky-100",
    },
    emerald: {
      border: "from-emerald-200 via-white to-teal-200",
      borderHover: "group-hover:from-emerald-300 group-hover:to-teal-300",
      glow: "bg-emerald-400/20",
      iconWrap: "from-emerald-500 to-teal-500",
      iconSoft: "bg-emerald-50 text-emerald-700",
      title: "text-slate-900",
      textAccent: "text-emerald-700",
      btnBg: "bg-emerald-50 hover:bg-emerald-100",
    },
    indigo: {
      border: "from-indigo-200 via-white to-purple-200",
      borderHover: "group-hover:from-indigo-300 group-hover:to-purple-300",
      glow: "bg-indigo-400/20",
      iconWrap: "from-indigo-500 to-purple-500",
      iconSoft: "bg-indigo-50 text-indigo-700",
      title: "text-slate-900",
      textAccent: "text-indigo-700",
      btnBg: "bg-indigo-50 hover:bg-indigo-100",
    },
    purple: {
      border: "from-purple-200 via-white to-violet-200",
      borderHover: "group-hover:from-purple-300 group-hover:to-violet-300",
      glow: "bg-purple-400/20",
      iconWrap: "from-purple-500 to-violet-500",
      iconSoft: "bg-purple-50 text-purple-700",
      title: "text-slate-900",
      textAccent: "text-purple-700",
      btnBg: "bg-purple-50 hover:bg-purple-100",
    },
    orange: {
      border: "from-orange-200 via-white to-amber-200",
      borderHover: "group-hover:from-orange-300 group-hover:to-amber-300",
      glow: "bg-orange-400/20",
      iconWrap: "from-orange-500 to-amber-500",
      iconSoft: "bg-orange-50 text-orange-700",
      title: "text-slate-900",
      textAccent: "text-orange-700",
      btnBg: "bg-orange-50 hover:bg-orange-100",
    },
    teal: {
      border: "from-teal-200 via-white to-cyan-200",
      borderHover: "group-hover:from-teal-300 group-hover:to-cyan-300",
      glow: "bg-teal-400/20",
      iconWrap: "from-teal-500 to-cyan-500",
      iconSoft: "bg-teal-50 text-teal-700",
      title: "text-slate-900",
      textAccent: "text-teal-700",
      btnBg: "bg-teal-50 hover:bg-teal-100",
    },
    rose: {
      border: "from-rose-200 via-white to-pink-200",
      borderHover: "group-hover:from-rose-300 group-hover:to-pink-300",
      glow: "bg-rose-400/20",
      iconWrap: "from-rose-500 to-pink-500",
      iconSoft: "bg-rose-50 text-rose-700",
      title: "text-slate-900",
      textAccent: "text-rose-700",
      btnBg: "bg-rose-50 hover:bg-rose-100",
    },
    amber: {
      border: "from-amber-200 via-white to-yellow-200",
      borderHover: "group-hover:from-amber-300 group-hover:to-yellow-300",
      glow: "bg-amber-400/20",
      iconWrap: "from-amber-500 to-yellow-500",
      iconSoft: "bg-amber-50 text-amber-800",
      title: "text-slate-900",
      textAccent: "text-amber-800",
      btnBg: "bg-amber-50 hover:bg-amber-100",
    },
  };

  const theme = colorThemes[color] || colorThemes.blue;
  const Wrapper = to ? Link : "div";

  return (
    <Wrapper
      {...(to ? { to } : {})}
      className={[
        "group relative rounded-3xl p-[1px] transition-all duration-300 block h-full outline-none cursor-pointer",
        "bg-gradient-to-br",
        theme.border,
        theme.borderHover,
        "hover:-translate-y-1.5",
      ].join(" ")}
    >
      <div
        className={[
          "relative flex h-full flex-col overflow-hidden rounded-3xl",
          "bg-white/90 backdrop-blur",
          "shadow-[0_10px_30px_rgba(2,6,23,0.08)]",
          "ring-1 ring-black/5",
          "transition-all duration-300",
          "group-hover:shadow-[0_18px_55px_rgba(2,6,23,0.14)]",
        ].join(" ")}
      >
        {/* soft glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl ${theme.glow}`}
        />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-slate-300/20 blur-3xl" />

        {/* top accent bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${theme.iconWrap}`} />

        <div className="p-6 flex flex-col gap-5">
          {/* header */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <div
                className={[
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  "ring-1 ring-black/5",
                  "transition-transform duration-300",
                  "group-hover:scale-105",
                  theme.iconSoft,
                ].join(" ")}
              >
                <span className="text-xl">{icon}</span>
              </div>
            </div>

            <div className="min-w-0">
              <h3
                className={`text-[15px] sm:text-[16px] font-medium tracking-tight ${theme.title}`}
              >
                {title}
              </h3>
            </div>
          </div>

          {/* list */}
          <ul className="space-y-2 text-[13px] leading-6 text-slate-700">
            {items.map((item, idx) => (
              <li key={`${item}-${idx}`} className="flex items-start gap-2.5">
                <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="transition-colors group-hover:text-slate-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* footer button */}
        {showButton && (
          <div className="mt-auto px-6 pb-6">
            <div
              className={[
                "group/btn inline-flex w-full items-center justify-between",
                "rounded-2xl px-4 py-3",
                "text-xs font-medium uppercase tracking-wider",
                "ring-1 ring-black/5",
                "transition-all duration-300",
                theme.textAccent,
                theme.btnBg,
              ].join(" ")}
              aria-label={`Know more about ${title}`}
            >
              <span>Know More</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-slate-900/10 transition-colors group-hover/btn:bg-slate-900/15" />
                <FiArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ServicesSection;