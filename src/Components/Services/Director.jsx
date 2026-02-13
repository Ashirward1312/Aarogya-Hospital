import React from "react";
import DrRishiImage from "../images/d1.JPEG";
import DrPritiImage from "../images/d2.jpeg";

const directors = [
  {
    name: "Dr. Rishi Kumar Agrawal",
    designation: "General Surgeon",
    qualification: "MBBS MS, FIAGES, FMAS, FALS",
    council: "CGMC",
    regNo: "141/2004",
    department: "General Surgery",
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
    qualification: "MBBS MD MICCO FMAS FIMCH",
    council: "CGMC",
    regNo: "142/2004",
    department: "Gynecology",
    image: DrPritiImage,
    summary:
      "Dr. Priti Agrawal is a consultant gynecologist with expertise in high‑risk pregnancy care and minimally invasive gynecological surgery.",
    points: [
      "Focus on maternal safety, high‑risk obstetrics and evidence‑based women's health.",
      "Experienced in laparoscopic gynecological procedures and infertility management.",
      "Committed to providing compassionate, dignified and confidential care to women.",
    ],
    quote:
      "Every woman deserves respectful, safe and scientifically sound healthcare.",
  },
];

const DirectorsSection = () => {
  return (
    <section
      id="directors"
      className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200 overflow-hidden"
    >
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-[-70px] h-56 w-56 rounded-full bg-[#F04E30]/20 blur-3xl" />
        <div className="absolute top-10 right-[-70px] h-52 w-52 rounded-full bg-slate-300/40 blur-3xl" />
        <div className="absolute bottom-[-70px] left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-slate-300/45 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-white border border-[#F04E30]/30 rounded-full text-[11px] font-semibold tracking-[0.22em] text-[#F04E30] uppercase">
            HOSPITAL LEADERSHIP
          </span>

          <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-[0.12em] uppercase">
            BOARD OF DIRECTORS
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-[#F04E30]/0 via-[#F04E30] to-[#F04E30]/0 rounded-full mx-auto mt-3" />

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Aarogya Super Speciality Hospital is guided by experienced medical
            professionals dedicated to clinical excellence and compassionate
            patient care.
          </p>
        </div>

        {/* Director cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {directors.map((d) => {
            const nameColor = "text-slate-900";
            const chipClasses =
              "bg-[#F04E30]/5 text-[#F04E30] border-[#F04E30]/40";
            const bulletColor = "bg-[#F04E30]";
            const quoteColor = "text-slate-900";
            const quoteBorder = "border-l-[#F04E30]";

            return (
              <article
                key={d.name}
                className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 shadow-[0_14px_35px_rgba(15,23,42,0.08)]"
              >
                {/* Top row */}
                <div className="flex items-start gap-5 mb-6">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="h-36 w-28 rounded-xl object-cover object-top border border-slate-200 bg-white"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-xl sm:text-2xl font-bold mb-1 ${nameColor}`}
                    >
                      {d.name}
                    </h3>

                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full text-[11px] font-semibold tracking-[0.16em] uppercase ${chipClasses}`}
                    >
                      {d.designation} • {d.department}
                    </div>

                    <p className="text-sm font-medium text-slate-700 mt-3">
                      {d.qualification}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Council:{" "}
                      <span className="font-semibold text-slate-800">
                        {d.council}
                      </span>{" "}
                      · Reg. No:{" "}
                      <span className="font-semibold text-slate-800">
                        {d.regNo}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  {d.summary}
                </p>

                {/* Bullet points */}
                <div className="space-y-3 mb-6">
                  {d.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <span
                        className={`mt-2 h-2 w-2 rounded-full flex-shrink-0 ${bulletColor}`}
                      />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="pt-4 border-t border-slate-100">
                  <div className={`border-l-4 pl-4 ${quoteBorder}`}>
                    <p
                      className={`text-sm sm:text-base italic font-medium leading-relaxed ${quoteColor}`}
                    >
                      “{d.quote}”
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;