import React from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaVenus,
  FaBone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Department = () => {
  // Meta Title + Meta Description + Canonical + OG
  React.useEffect(() => {
    const pageTitle =
      "Medical Departments at Aarogya Hospital Raipur | Best Speciality Care";

    const descriptionContent =
      "Explore specialized medical departments at Aarogya Hospital Raipur including cardiology, general surgery, gynecology, and orthopedics with expert doctors and modern facilities.";

    const canonicalUrl = "https://www.aarogyahospitalraipur.com/departments";

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
    setOg("og:url", "https://www.aarogyahospitalraipur.com/departments");
    setOg(
      "og:title",
      "Medical Departments at Aarogya Hospital Raipur"
    );
    setOg(
      "og:description",
      "Explore specialized medical departments at Aarogya Hospital Raipur including cardiology, general surgery, gynecology, and orthopedics."
    );
    setOg(
      "og:image",
      "https://www.aarogyahospitalraipur.com/assets/logo1-BEkNzzrJ.jpg"
    );
    setOg("og:site_name", "Aarogya Hospital Raipur");
    setOg("og:locale", "en_IN");
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200 overflow-hidden min-h-screen">
      {/* soft blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-[-60px] h-56 w-56 rounded-3xl bg-[#F04E30]/20 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] h-64 w-64 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex px-5 py-1.5 bg-white border border-[#F04E30]/30 rounded-full text-[11px] font-semibold text-[#F04E30] tracking-[0.22em] uppercase">
            OUR DEPARTMENTS
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="relative inline-flex">
              <span className="relative z-10">SPECIALIZED MEDICAL</span>
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
                DEPARTMENTS
              </span>

              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-0 h-[3px] w-full rounded-full
                 bg-gradient-to-r from-[#F04E30] via-orange-400 to-amber-300"
              />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Dedicated centers of excellence providing comprehensive Care with advanced medical technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
          <DepartmentCard
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
            to="/departments/best-cardiology-and-heart-hospital-in-raipur"
          />

          <DepartmentCard
            icon={<FaUserMd />}
            title="General Surgery & Laparoscopy"
            items={[
              "General & GI Surgery",
              "Surgical Oncology",
              "Neuro Surgery",
              "ICU & Emergency Care",
              "Trauma Management",
            ]}
            color="indigo"
            to="/departments/general-laparoscopy-surgery-hospital-in-raipur"
          />

          <DepartmentCard
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
            to="/departments/gynaecology-hospital-in-raipur"
          />

          <DepartmentCard
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
            to="/departments/orthopedics-hospital-in-raipur"
          />
        </div>
      </div>
    </section>
  );
};

const DepartmentCard = ({ icon, title, items, color, to }) => {
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
  };

  const theme = colorThemes[color] || colorThemes.blue;

  return (
    <Link
      to={to}
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
      </div>
    </Link>
  );
};

export default Department;
