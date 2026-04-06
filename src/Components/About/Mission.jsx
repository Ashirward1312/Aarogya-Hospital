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
    },
    {
      title: "COMPASSION",
      text: "We demonstrate sincere care and empathy for all.",
      icon: HeartIcon,
      border: "border-rose-200",
      iconBg: "from-rose-500 to-red-500",
    },
    {
      title: "TEAMWORK",
      text: "We embrace and capitalize on the unique talents of our team.",
      icon: UserGroupIcon,
      border: "border-indigo-200",
      iconBg: "from-indigo-500 to-blue-600",
    },
    {
      title: "STEWARDSHIP",
      text: "We use all resources carefully and responsibly.",
      icon: ScaleIcon,
      border: "border-emerald-200",
      iconBg: "from-emerald-500 to-teal-500",
    },
    {
      title: "TRUSTWORTHINESS",
      text: "We act with integrity and honor in every situation.",
      icon: ShieldCheckIcon,
      border: "border-amber-200",
      iconBg: "from-amber-500 to-orange-500",
    },
    {
      title: "EXCELLENCE",
      text: "We strive for the highest standards in patient care and service.",
      icon: StarIcon,
      border: "border-purple-200",
      iconBg: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ✅ HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full border border-[#F04E30]/30 bg-white px-4 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#F04E30]">
            Our Purpose & Promise
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-slate-900 leading-tight">
            Vision · Mission · Values
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Guided by care, driven by innovation, and committed to delivering
            trusted healthcare excellence for every patient.
          </p>
        </div>

        {/* ✅ VISION & MISSION */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {mainItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`group relative rounded-2xl border ${item.border} bg-white p-5 sm:p-7 shadow-sm transition hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.iconBg} text-white shadow-md`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest ${item.badgeText}`}>
                      {item.title}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* ✅ CORE VALUES */}
        <div className="mt-16">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-700 border border-slate-200">
              Our Core Values
            </span>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border ${item.border} bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-lg`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${item.iconBg} text-white shadow-md`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                      {item.title}
                    </h4>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {item.text}
                  </p>
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