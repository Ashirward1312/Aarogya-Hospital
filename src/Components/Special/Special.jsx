import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================== CALL MODAL ================== */
const CallModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase">REQUEST A CALL</h3>
          <button type="button" onClick={onClose}
            className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50">×</button>
        </div>
        <p className="text-xs text-gray-600 mb-4">Call us for doctor availability, OPD timings and appointment guidance.</p>
        <div className="grid gap-2">
          <a href="tel:812001212" className="w-full text-center rounded-md bg-[#F04E30] px-4 py-2 text-xs font-semibold text-white hover:bg-[#d54428] transition uppercase">CALL 812001212</a>
          <a href="tel:9827198000" className="w-full text-center rounded-md border border-[#F04E30]/40 bg-white px-4 py-2 text-xs font-semibold text-[#F04E30] hover:bg-orange-50 transition uppercase">CALL 9827198000</a>
        </div>
        <p className="mt-3 text-[10px] text-gray-500">Available during hospital working hours.</p>
      </div>
    </div>
  );
};

/* ================== DEPARTMENTS ================== */
const departments = [
  { name: "Cardiac Care", desc: "Advanced heart & vascular care", icon: "❤️" },
  { name: "Oncology (Cancer Care)", desc: "Comprehensive oncology services", icon: "🎗️" },
  { name: "Neurology", desc: "Brain & spine specialists", icon: "🧠" },
  { name: "Gastro Sciences", desc: "Digestive & liver care", icon: "🩺" },
  { name: "Orthopaedics", desc: "Bone & joint care", icon: "🦴" },
  { name: "Gynaecology & Oncology", desc: "Women's cancer care", icon: "👩" },
  { name: "Paediatric Care", desc: "Specialised child healthcare", icon: "👶" },
  { name: "Obstetrics & Gynaecology", desc: "Maternity & women health", icon: "🤰" },
  { name: "Emergency", desc: "24×7 emergency & trauma care", icon: "🚑" },
  { name: "ENT, Head & Neck", desc: "ENT & head-neck care", icon: "👂" },
  { name: "Plastic & Reconstructive", desc: "Plastic & cosmetic surgery", icon: "🩹" },
  { name: "Internal Medicine", desc: "Comprehensive adult care", icon: "🩺" },
  { name: "Respiratory & Sleep Medicine", desc: "Lung & sleep disorders", icon: "😴" },
  { name: "Peripheral Vascular", desc: "Blood vessel care", icon: "🩸" },
  { name: "Radiology & Imaging", desc: "Advanced diagnostic imaging", icon: "🖥️" },
  { name: "Ophthalmology", desc: "Eye care services", icon: "👁️" },
  { name: "Critical Care", desc: "ICU & intensive monitoring", icon: "🏥" },
  { name: "Dentistry", desc: "Dental & oral care", icon: "🦷" },
  { name: "Dietetics & Nutrition", desc: "Clinical nutrition plans", icon: "🥗" },
  { name: "Lab & Pathology", desc: "Diagnostic lab services", icon: "🧫" },
];

/* ================== DETAILS ================== */
const departmentDetails = {
  "Cardiac Care": "Comprehensive cardiac services including angioplasty, bypass surgery and 24×7 cardiac emergency care.",
  "Cancer Care": "Medical, surgical and radiation oncology supported by advanced technology.",
  "Neurology": "Brain, spine and nerve care using modern neuro-navigation techniques.",
  "Gastro Sciences": "Advanced GI care including liver transplant and minimally invasive surgery.",
  "Orthopaedics": "Joint replacement, sports injury and spine care with faster recovery.",
  "Gynaecology & Oncology": "Advanced women's cancer treatment and fertility care.",
  "Paediatric Care": "Dedicated child care with PICU and paediatric specialists.",
  "Obstetrics & Gynaecology": "High-risk pregnancy care with NICU support.",
  "Emergency": "24×7 trauma and emergency services following golden-hour protocols.",
  "ENT, Head & Neck": "ENT surgeries including cochlear implants and head & neck cancer care.",
  "Plastic & Reconstructive": "Cosmetic, burns and reconstructive surgeries.",
  "Internal Medicine": "Comprehensive care for adult medical conditions and chronic diseases.",
  "Respiratory & Sleep Medicine": "Treatment of asthma, COPD and sleep apnea disorders.",
  "Peripheral Vascular": "Management of varicose veins and peripheral vascular disease.",
  "Radiology & Imaging": "CT, MRI, PET-CT and ultrasound imaging services.",
  "Ophthalmology": "Cataract, retina and vision correction services.",
  "Critical Care": "Advanced ICU with multi-disciplinary critical care team.",
  "Dentistry": "Root canal, implants, cosmetic dentistry and orthodontics.",
  "Dietetics & Nutrition": "Personalised diet and clinical nutrition planning.",
  "Lab & Pathology": "NABL accredited diagnostic laboratory services.",
};

/* ================== DETAILS MODAL ================== */
const DetailsModal = ({ activeDept, activeMeta, activeText, onClose, onBook, onCall }) => {
  if (!activeDept || !activeMeta) return null;

  const careItems = ["OPD & IPD specialist care", "Diagnostics & pharmacy", "Pre & post procedure plans"];
  const apptItems = ["Prior appointment advised", "Emergency on priority", "Front-desk for OPD times"];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-12 bg-slate-900/60 backdrop-blur-sm"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[340px] sm:max-w-xl lg:max-w-2xl rounded-2xl overflow-hidden flex flex-col border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border-b border-slate-100 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 mr-3">
            <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200
              h-9 w-9 text-lg
              sm:h-12 sm:w-12 sm:text-2xl
              lg:h-14 lg:w-14 lg:text-3xl">
              {activeMeta.icon}
            </div>
            <div className="min-w-0">
              <p className="font-semibold uppercase tracking-[0.14em] text-slate-400 leading-none mb-1
                text-[8px] sm:text-[10px] lg:text-xs">
                DEPARTMENT DETAILS
              </p>
              <h3 className="font-bold text-slate-900 uppercase leading-tight truncate
                text-sm sm:text-lg lg:text-xl">
                {activeDept}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 active:bg-slate-200 transition-colors
              h-7 w-7 text-xs
              sm:h-8 sm:w-8 sm:text-sm">
            ✕
          </button>
        </div>

        {/* ── SCROLLABLE BODY ── */}
        <div className="overflow-y-auto flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 space-y-3 sm:space-y-5 lg:space-y-6">

          {/* Description */}
          <p className="text-slate-600 leading-relaxed
            text-[11px] sm:text-sm lg:text-base">
            {activeText}
          </p>

          {/* Info boxes — 2 col */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {/* Care & Services */}
            <div className="rounded-lg sm:rounded-xl border border-slate-100 bg-slate-50
              p-2.5 sm:p-4 lg:p-5">
              <p className="font-bold uppercase tracking-[0.1em] text-[#F04E30] leading-none
                text-[8px] sm:text-[11px] lg:text-xs
                mb-1.5 sm:mb-3">
                CARE & SERVICES
              </p>
              <ul className="space-y-1 sm:space-y-2 lg:space-y-2.5">
                {careItems.map((item) => (
                  <li key={item} className="flex items-start gap-1 sm:gap-1.5">
                    <span className="text-[#F04E30] flex-shrink-0 leading-snug
                      text-[9px] sm:text-sm">•</span>
                    <span className="text-slate-600 leading-snug
                      text-[9px] sm:text-xs lg:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Appointments */}
            <div className="rounded-lg sm:rounded-xl border border-slate-100 bg-slate-50
              p-2.5 sm:p-4 lg:p-5">
              <p className="font-bold uppercase tracking-[0.1em] text-[#F04E30] leading-none
                text-[8px] sm:text-[11px] lg:text-xs
                mb-1.5 sm:mb-3">
                APPOINTMENTS
              </p>
              <ul className="space-y-1 sm:space-y-2 lg:space-y-2.5">
                {apptItems.map((item) => (
                  <li key={item} className="flex items-start gap-1 sm:gap-1.5">
                    <span className="text-[#F04E30] flex-shrink-0 leading-snug
                      text-[9px] sm:text-sm">•</span>
                    <span className="text-slate-600 leading-snug
                      text-[9px] sm:text-xs lg:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA — stacked */}
          <div className="border-t border-slate-100 flex flex-col
            pt-3 sm:pt-4 lg:pt-5
            gap-2 sm:gap-3
            pb-1">
            <button
              type="button"
              onClick={onBook}
              className="w-full bg-[#F04E30] hover:bg-[#d54428] active:bg-[#c03d22] text-white font-bold rounded-xl transition-colors uppercase tracking-[0.1em]
                text-xs sm:text-sm lg:text-base
                py-2.5 sm:py-3.5 lg:py-4">
              BOOK APPOINTMENT
            </button>
            <button
              type="button"
              onClick={onCall}
              className="w-full border border-[#F04E30]/50 text-[#F04E30] font-bold rounded-xl hover:bg-orange-50 active:bg-orange-100 transition-colors uppercase tracking-[0.1em]
                text-xs sm:text-sm lg:text-base
                py-2.5 sm:py-3.5 lg:py-4">
              REQUEST A CALL
            </button>
            <p className="text-slate-400 text-center leading-snug mt-0.5
              text-[8px] sm:text-[10px] lg:text-xs">
              Our team will confirm doctor availability & suitable timing.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

/* ================== MAIN COMPONENT ================== */
const DepartmentGrid = () => {
  const [activeDept, setActiveDept] = useState(null);
  const [callOpen, setCallOpen] = useState(false);
  const navigate = useNavigate();

  const activeText = activeDept ? departmentDetails[activeDept] : "";
  const activeMeta = activeDept ? departments.find((d) => d.name === activeDept) : null;
  const goToAppointment = () => navigate("/appointment");

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-10 sm:py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-slate-300/35 blur-3xl" />
        <div className="absolute right-[-40px] bottom-[-40px] h-56 w-56 rounded-full bg-slate-400/25 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center rounded-full border border-[#F04E30]/30 bg-white/90 px-4 py-1 shadow-sm">
            <h2 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#F04E30]">
              CENTRES OF EXCELLENCE
            </h2>
          </span>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-[0.12em] sm:tracking-[0.16em]">
            OUR MEDICAL SPECIALITIES
          </h1>
          <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-slate-300" />
          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Multi-disciplinary hospital services designed to provide complete care – from early diagnosis to advanced treatment and rehabilitation.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCallOpen(true)}
              className="rounded-md bg-[#F04E30] hover:bg-[#d54428] px-4 py-2 text-[11px] font-semibold text-white transition uppercase tracking-[0.12em]">
              REQUEST A CALL
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group relative flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200 bg-white/95 p-3 sm:p-4 lg:p-5 text-left shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,23,42,0.14)]"
            >
              <div>
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="flex-shrink-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200">
                    <span className="text-base sm:text-xl">{dept.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-slate-900 uppercase leading-tight">{dept.name}</h3>
                    <p className="text-[9px] sm:text-[11px] text-slate-500 leading-tight mt-0.5">{dept.desc}</p>
                  </div>
                </div>
                <p className="hidden sm:block mt-1 text-[10px] sm:text-[11px] text-slate-600 line-clamp-2 sm:line-clamp-3">
                  {departmentDetails[dept.name] || "Specialised care with experienced consultants and modern equipment."}
                </p>
                <ul className="hidden sm:block mt-2 sm:mt-3 space-y-1 text-[10px] sm:text-[11px] text-slate-500">
                  <li><span className="font-semibold uppercase">• Specialist-led OPD & IPD services</span></li>
                  <li>• Integrated diagnostics and in-house pharmacy support</li>
                  <li>• Assistance for insurance and cashless facilities (as applicable)</li>
                </ul>
              </div>
              <div className="mt-3 sm:mt-4 flex gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setActiveDept(dept.name)}
                  className="flex-1 border border-slate-300 bg-slate-50 text-[9px] sm:text-[11px] font-semibold text-slate-800 py-1.5 sm:py-2 rounded-md sm:rounded-lg hover:bg-slate-100 transition-colors uppercase tracking-[0.08em] sm:tracking-[0.12em]">
                  DETAILS
                </button>
                <button
                  type="button"
                  onClick={goToAppointment}
                  className="flex-1 bg-[#F04E30] hover:bg-[#d54428] text-[9px] sm:text-[11px] font-semibold text-white py-1.5 sm:py-2 rounded-md sm:rounded-lg transition-colors uppercase tracking-[0.08em] sm:tracking-[0.12em]">
                  BOOK
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DetailsModal
        activeDept={activeDept}
        activeMeta={activeMeta}
        activeText={activeText}
        onClose={() => setActiveDept(null)}
        onBook={() => { setActiveDept(null); goToAppointment(); }}
        onCall={() => setCallOpen(true)}
      />

      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </section>
  );
};

export default DepartmentGrid;