import React from "react";
import {
  EyeIcon,
  RocketLaunchIcon,
  HeartIcon,
  UserGroupIcon,
  ScaleIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const VisionMissionValues = () => {
  const mainItems = [
    {
      title: "OUR VISION",
      text: "To be the best we can possibly be. As a leader in innovative, caring, and personalized healthcare, our goal is to become the most trusted healthcare center in Central India.",
      icon: EyeIcon,
      border: "border-sky-200",
      iconBg: "from-sky-500 to-blue-600",
      hoverBg: "from-sky-50 via-sky-50 to-blue-50",
      badgeText: "text-sky-700",
    },
    {
      title: "OUR MISSION",
      text: "To provide excellent healthcare for our communities by improving lives through high-quality medical services, safety, and compassion.",
      icon: RocketLaunchIcon,
      border: "border-rose-200",
      iconBg: "from-rose-500 to-red-500",
      hoverBg: "from-rose-50 via-rose-50 to-red-50",
      badgeText: "text-rose-700",
    },
  ];

  const coreValues = [
    {
      title: "RESPECT",
      text: "We respect the dignity of every individual at all times.",
      icon: UserGroupIcon,
      border: "border-sky-200",
      iconBg: "from-sky-500 to-blue-600",
      chipBg: "bg-sky-50 text-sky-700",
    },
    {
      title: "COMPASSION",
      text: "We demonstrate sincere care and empathy for all.",
      icon: HeartIcon,
      border: "border-rose-200",
      iconBg: "from-rose-500 to-red-500",
      chipBg: "bg-rose-50 text-rose-700",
    },
    {
      title: "TEAMWORK",
      text: "We embrace and capitalize on the unique talents of our team.",
      icon: UserGroupIcon,
      border: "border-indigo-200",
      iconBg: "from-indigo-500 to-blue-600",
      chipBg: "bg-indigo-50 text-indigo-700",
    },
    {
      title: "STEWARDSHIP",
      text: "We use all resources carefully and responsibly.",
      icon: ScaleIcon,
      border: "border-emerald-200",
      iconBg: "from-emerald-500 to-teal-500",
      chipBg: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "TRUSTWORTHINESS",
      text: "We act with integrity and honor in every situation.",
      icon: ShieldCheckIcon,
      border: "border-amber-200",
      iconBg: "from-amber-500 to-orange-500",
      chipBg: "bg-amber-50 text-amber-700",
    },
    {
      title: "EXCELLENCE",
      text: "We strive for the highest standards in patient care and service.",
      icon: StarIcon,
      border: "border-purple-200",
      iconBg: "from-purple-500 to-indigo-500",
      chipBg: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 overflow-hidden">
      {/* हल्का soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[-80px] h-56 w-56 rounded-full bg-slate-300/35 blur-3xl" />
        <div className="absolute top-10 right-[-60px] h-52 w-52 rounded-full bg-slate-400/25 blur-3xl" />
        <div className="absolute bottom-[-70px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-slate-300/45 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F04E30]/30 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F04E30] shadow-sm">
            Our Purpose & Promise
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.15em] text-slate-900">
            Vision · Mission · Values
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-28 rounded-full bg-gradient-to-r from-[#F04E30]/0 via-[#F04E30] to-[#F04E30]/0" />

          <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
            Guided by care, driven by innovation, and committed to delivering
            trusted healthcare excellence for every patient.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {mainItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-white p-7 sm:p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* हल्का gradient hover background */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex h-full flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.iconBg} text-white shadow-md`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${item.badgeText}`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item.text}
                  </p>

                  <div className="mt-4 h-[2px] w-16 rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 border border-slate-200">
              Our Core Values
            </span>

          <div className="mx-auto mt-3 h-[2px] w-20 rounded-full bg-gradient-to-r from-slate-400/0 via-slate-400 to-slate-400/0" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-white p-6 sm:p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  {/* हल्का hover tint */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-slate-50 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${item.iconBg} text-white shadow-md`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h4>
                    </div>

                    <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;