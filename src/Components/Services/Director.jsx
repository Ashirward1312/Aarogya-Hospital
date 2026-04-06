import React from "react";
import DrRishiImage from "../images/drrishi.webp";
import DrPritiImage from "../images/drpriti.webp";
import DrChiragImage from "../images/drchirag.webp";

const leaders = [
  {
    name: "Dr. Rishi Kumar Agrawal",
    designation: "General Surgeon",
    department: "General Surgery",
    qualification: "MBBS MS, FIAGES, FMAS, FALS",
    council: "CGMC",
    regNo: "141/2004",
    image: DrRishiImage,
    summary:
      "Dr. Rishi Kumar Agrawal is a senior general surgeon with extensive experience in advanced laparoscopic and open surgical procedures.",
    points: [
      "Special interest in minimally invasive surgery and gastrointestinal procedures.",
      "Actively involved in surgical safety protocols and operation theatre standards.",
      "Known for patient‑centric decision making and clear pre‑ and post‑operative counselling.",
    ],
    quote:
      "Safe surgery, clear communication and ethical practice are at the core of every decision.",
  },
  {
    name: "Dr. Priti Agrawal",
    designation: "Gynecologist",
    department: "Gynecology",
    qualification: "MBBS MD MICCO FMAS FIMCH",
    council: "CGMC",
    regNo: "142/2004",
    image: DrPritiImage,
    summary:
      "Dr. Priti Agrawal is a consultant gynecologist with expertise in high‑risk pregnancy care and minimally invasive gynecological surgery.",
    points: [
      "Focus on maternal safety and high‑risk obstetrics.",
      "Experienced in laparoscopic procedures and infertility care.",
      "Committed to compassionate and confidential women’s healthcare.",
    ],
    quote:
      "Every woman deserves respectful, safe and scientifically sound healthcare.",
  },
  {
    name: "Dr. Chirag Agrawal",
    designation: "Interventional Cardiologist",
    department: "Cardiology",
    qualification: "MBBS, MD (Medicine), DM Cardiology",
    council: "CGMC",
    regNo: "—",
    image: DrChiragImage,
    summary:
      "Dr. Chirag Agrawal is a highly accomplished Interventional Cardiologist with strong academic excellence and extensive clinical experience, focused on safe and personalised heart care.",
    points: [
      "MBBS Gold Medalist (9 distinctions).",
      "MD (Medicine) Gold Medal.",
      "DM Cardiology (VMMC & Safdarjung Hospital, Delhi).",
      "6+ years experience in interventional cardiology.",
    ],
    quote:
      "Patient education, early diagnosis and ethical care lead to better long‑term heart health.",
  },
];

function LeaderCard({ d }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200">
      {/* Top Banner / Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-[#F04E30] to-orange-400 opacity-80" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Profile Header (Vertical) */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="h-32 w-32 overflow-hidden rounded-2xl bg-slate-100 ring-4 ring-slate-50 transition-all duration-300 group-hover:ring-[#F04E30]/10 lg:h-36 lg:w-36">
              <img
                src={d.image}
                alt={d.name}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-black tracking-tight text-slate-900 lg:text-2xl">
              {d.name}
            </h3>
            
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full border border-[#F04E30]/20 bg-[#F04E30]/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F04E30]">
                {d.designation}
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {d.department}
              </span>
            </div>

            <p className="mt-4 text-sm font-bold text-slate-800">
              {d.qualification}
            </p>

            {d.regNo !== "—" && (
              <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <span>{d.council}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Reg: {d.regNo}</span>
              </div>
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

        {/* Summary */}
        <p className="text-center text-sm leading-relaxed text-slate-600">
          {d.summary}
        </p>

        {/* Points */}
        <div className="mt-6 flex-1 space-y-2.5">
          {d.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/40 p-3 transition-colors hover:bg-slate-50"
            >
              <div className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[#F04E30]" />
              <p className="text-xs font-medium leading-relaxed text-slate-700">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
          <div className="relative">
            <svg className="absolute -left-2 -top-2 h-6 w-6 text-[#F04E30]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.9124 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z" />
            </svg>
            <p className="relative z-10 text-center text-xs font-semibold italic leading-relaxed text-slate-200">
              “{d.quote}”
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

const DirectorsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-40">
        <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-slate-50 blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-[#F04E30]/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F04E30]" />
              Hospital Excellence
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Board Of <span className="text-[#F04E30]">Directors</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            Aarogya Super Speciality Hospital is guided by visionary leaders
            dedicated to the pursuit of medical excellence and humble service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {leaders.map((d) => (
            <LeaderCard key={d.name} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;