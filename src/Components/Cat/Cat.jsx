import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../Cat/Data";

import {
  FiHeart,
  FiActivity,
  FiUser,
  FiMonitor,
  FiEye,
  FiSmile,
  FiFeather,
  FiDroplet,
  FiFileText,
  FiThermometer,
  FiTrendingUp,
  FiHeadphones,
  FiAward,
  FiHash,
  FiShield,
} from "react-icons/fi";

/* ------------ HOSPITAL NUMBERS ------------ */
const HOSPITAL_NUMBERS = ["812001212", "9827198000"];

/* ------------ CALL MODAL ------------ */
const CallModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            CALL HOSPITAL
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50"
          >
            ×
          </button>
        </div>

        <p className="text-xs text-gray-600 mb-4">
          Tap any number to open the dial pad.
        </p>

        <div className="grid gap-2">
          <a
            href={`tel:${HOSPITAL_NUMBERS[0]}`}
            className="w-full text-center rounded-md bg-[#F04E30] px-4 py-2 text-xs font-semibold text-white hover:bg-[#d54428] transition uppercase"
          >
            CALL {HOSPITAL_NUMBERS[0]}
          </a>
          <a
            href={`tel:${HOSPITAL_NUMBERS[1]}`}
            className="w-full text-center rounded-md border border-[#F04E30]/40 bg-white px-4 py-2 text-xs font-semibold text-[#F04E30] hover:bg-orange-50 transition uppercase"
          >
            CALL {HOSPITAL_NUMBERS[1]}
          </a>
        </div>
      </div>
    </div>
  );
};

/* ------------ ICON MAP ------------ */
const departmentIconMap = {
  "General Surgery": FiMonitor,
  Surgeon: FiMonitor,
  Neurosurgeon: FiActivity,
  Urologist: FiDroplet,
  Gastroenterology: FiMonitor,
  Gynecology: FiHeart,
  Medicine: FiThermometer,
  ICU: FiActivity,
  Anaesthesia: FiFeather,
  Orthopedics: FiActivity,
  Cardiology: FiHeart,
  "ENT Surgeon": FiHeadphones,
  Pathologist: FiFileText,
  Radiologist: FiEye,
  "Ophthalmology / Surgeon": FiEye,
  "Medical Oncology": FiActivity,
  Oncologist: FiActivity,
  Nephrologist: FiDroplet,
  Dentists: FiSmile,
  Physiotherapy: FiTrendingUp,
  Paediatrics: FiSmile,
  Dermatology: FiUser,
};
const getDoctorIcon = (department) => departmentIconMap[department] || FiUser;

/* ------------ AUTO HIGHLIGHTS ------------ */
const autoProfileFields = [
  { key: "experience", label: "EXPERIENCE" },
  { key: "hospitalExperience", label: "HOSPITAL EXPERIENCE" },
  { key: "procedures", label: "PROCEDURES" },
  { key: "expertise", label: "EXPERTISE" },
];

const Department = () => {
  const [activeId, setActiveId] = useState(null);
  const [callOpen, setCallOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  const activeDoctor = useMemo(() => {
    return activeId != null ? doctors.find((d) => d.sl === activeId) : null;
  }, [activeId]);

  const extraInfo = useMemo(() => {
    if (!activeDoctor) return [];
    return autoProfileFields
      .filter(({ key }) => Boolean(activeDoctor[key]))
      .map(({ key, label }) => ({ label, value: activeDoctor[key] }));
  }, [activeDoctor]);

  const hasHighlights =
    (activeDoctor?.achievements && activeDoctor.achievements.length > 0) ||
    extraInfo.length > 0;

  const goToAppointment = () => navigate("/appointment");

  const openProfile = (sl) => {
    setImgError(false);
    setActiveId(sl);
  };

  const closeProfile = () => setActiveId(null);

  return (
    <section
      id="doctors"
      className="relative w-full overflow-x-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-slate-300/35 blur-3xl" />
        <div className="absolute right-[-40px] bottom-[-40px] h-56 w-56 rounded-full bg-slate-400/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-[#F04E30]/30 bg-white/90 px-4 py-1 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F04E30]">
              OUR CONSULTANTS
            </p>
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-[0.18em]">
            AAROGYA HOSPITAL DOCTORS
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-slate-300" />

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            A TEAM OF EXPERIENCED SPECIALISTS DEDICATED TO PROVIDING SAFE,
            ETHICAL AND PATIENT‑CENTRED CARE.
          </p>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => {
            const Icon = getDoctorIcon(doc.department);

            return (
              <div
                key={doc.sl}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 px-4 py-4 text-left text-xs bg-white/95 shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-600">
                    <Icon className="text-base" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {doc.department}
                    </p>
                    <p className="mt-0.5 text-[12px] font-semibold text-slate-900 uppercase truncate">
                      {doc.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-600 uppercase truncate">
                      {doc.designation}
                    </p>
                    <p className="mt-0.5 text-[10px] text-slate-500 uppercase truncate">
                      {doc.qualification}
                    </p>
                  </div>
                </div>

                <div className="mt-3 text-[10px] text-slate-500 uppercase truncate">
                  {doc.council && `COUNCIL: ${doc.council}`}
                  {doc.council && doc.regNo && " • "}
                  {doc.regNo && `REG. NO: ${doc.regNo}`}
                </div>

                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => openProfile(doc.sl)}
                    className="flex-1 border border-slate-300 bg-slate-50 text-[11px] font-semibold text-slate-800 py-2 rounded-lg hover:bg-slate-100 transition-colors uppercase tracking-[0.12em]"
                  >
                    VIEW PROFILE
                  </button>
                  <button
                    type="button"
                    onClick={goToAppointment}
                    className="flex-1 bg-[#F04E30] hover:bg-[#d54428] text-[11px] font-semibold text-white py-2 rounded-lg transition-colors uppercase tracking-[0.12em]"
                  >
                    BOOK APPOINTMENT
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Profile Modal */}
        {activeDoctor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-900 shadow-[0_24px_70px_rgba(15,23,42,0.50)] md:p-7">
              <button
                onClick={closeProfile}
                type="button"
                className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-500 hover:bg-slate-100"
              >
                ×
              </button>

              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* Left info */}
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      {(() => {
                        const Icon = getDoctorIcon(activeDoctor.department);
                        return <Icon className="text-lg" />;
                      })()}
                    </div>

                    <div>
                      <p className="inline-flex rounded-full bg-slate-100 px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        {activeDoctor.department}
                      </p>
                      <p className="mt-2 text-base font-bold text-slate-900 uppercase">
                        {activeDoctor.name}
                      </p>
                      <p className="text-xs text-slate-700 uppercase">
                        {activeDoctor.designation}
                      </p>

                      {(activeDoctor.council || activeDoctor.regNo) && (
                        <p className="mt-1 text-[11px] text-slate-500 uppercase">
                          {activeDoctor.council &&
                            `COUNCIL: ${activeDoctor.council}`}
                          {activeDoctor.council && activeDoctor.regNo && " • "}
                          {activeDoctor.regNo &&
                            `REG. NO: ${activeDoctor.regNo}`}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Standard rows */}
                  <div className="mt-5 space-y-3 text-[12px] text-slate-800">
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <FiAward className="text-xs" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                          QUALIFICATION
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-800 uppercase">
                          {activeDoctor.qualification}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <FiShield className="text-xs" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                          MEDICAL COUNCIL
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-800 uppercase">
                          {activeDoctor.council || "—"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                        <FiHash className="text-xs" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                          REGISTRATION NUMBER
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-800 uppercase">
                          {activeDoctor.regNo || "—"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights auto */}
                  {hasHighlights && (
                    <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                        PROFILE HIGHLIGHTS
                      </p>

                      {activeDoctor.achievements?.length > 0 && (
                        <div className="mt-2">
                          <p className="text-[10px] font-semibold uppercase text-slate-600">
                            ACHIEVEMENTS
                          </p>
                          <ul className="mt-1 list-disc pl-5 text-[11px] text-slate-800">
                            {activeDoctor.achievements.map((a) => (
                              <li key={a} className="uppercase">
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {extraInfo.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {extraInfo.map((item) => (
                            <p
                              key={item.label}
                              className="text-[11px] text-slate-800 uppercase"
                            >
                              <span className="font-semibold text-slate-600">
                                {item.label}:
                              </span>{" "}
                              {item.value}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right image */}
                <div className="flex justify-center md:w-64">
                  <div className="h-52 w-40 md:h-60 md:w-44 rounded-xl border border-slate-200 bg-slate-50 shadow-md overflow-hidden">
                    {activeDoctor.image && !imgError ? (
                      <img
                        src={activeDoctor.image}
                        alt={activeDoctor.name}
                        className="h-full w-full object-cover object-top"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-500">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
                          <FiUser className="text-lg" />
                        </div>
                        <p className="text-[11px] font-medium uppercase">
                          PHOTO NOT AVAILABLE
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-5 flex flex-col md:flex-row gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeProfile();
                    goToAppointment();
                  }}
                  className="flex-1 bg-[#F04E30] hover:bg-[#d54428] text-white text-sm font-semibold py-2.5 rounded-lg shadow-sm shadow-[#F04E30]/30 transition-colors uppercase tracking-[0.14em]"
                >
                  BOOK APPOINTMENT 
                </button>

                <button
                  type="button"
                  onClick={() => setCallOpen(true)}
                  className="flex-1 border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-sm font-semibold text-slate-800 py-2.5 rounded-lg transition-colors uppercase tracking-[0.14em]"
                >
                  CALL HOSPITAL FOR ASSISTANCE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </section>
  );
};

export default Department;