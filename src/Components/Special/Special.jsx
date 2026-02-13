// // src/pages/DepartmentGrid.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ⬅ add this

// // SVG ICONS as normal image imports
// // import kidneyIcon from "../images/kidney.svg";
// // import liverIcon from "../images/liver.svg";

// /* ================== DEPARTMENTS ================== */

// const departments = [
//   { name: "Cardiac Care", desc: "Advanced heart & vascular care", icon: "❤️" },
//   { name: "Oncology (Cancer Care)", desc: "Comprehensive oncology services", icon: "🎗️" },
//   { name: "Neurology", desc: "Brain & spine specialists", icon: "🧠" },
//   { name: "Gastro Sciences", desc: "Digestive & liver care", icon: "🩺" },
//   { name: "Orthopaedics", desc: "Bone & joint care", icon: "🦴" },

//   // KIDNEY – use SVG
//   // {
//   //   name: "Renal Care",
//   //   desc: "Kidney care & dialysis",
//   //   icon: "kidney-svg",
//   // },

//   // // LIVER – use SVG
//   // {
//   //   name: "Liver Transplant",
//   //   desc: "Advanced liver transplant program",
//   //   icon: "liver-svg",
//   // },

//   // { name: "Bone Marrow Transplant", desc: "Haematology & BMT services", icon: "🧬" },
//   // { name: "Lung Transplant", desc: "Advanced lung transplant care", icon: "🌬️" },
//   // { name: "Chest Surgery", desc: "Thoracic surgery services", icon: "🫁" },
//   { name: "Gynaecology & Oncology", desc: "Women’s cancer care", icon: "👩" },
//   { name: "Paediatric Care", desc: "Specialised child healthcare", icon: "👶" },
//   { name: "Obstetrics & Gynaecology", desc: "Maternity & women health", icon: "🤰" },
//   { name: "Emergency", desc: "24×7 emergency & trauma care", icon: "🚑" },
//   { name: "ENT, Head & Neck", desc: "ENT & head-neck care", icon: "👂" },
//   { name: "Plastic & Reconstructive", desc: "Plastic & cosmetic surgery", icon: "🩹" },
//   { name: "Internal Medicine", desc: "Comprehensive adult care", icon: "🩺" },
//   { name: "Respiratory & Sleep Medicine", desc: "Lung & sleep disorders", icon: "😴" },
//   { name: "Peripheral Vascular", desc: "Blood vessel care", icon: "🩸" },
//   // { name: "Endocrinology & Diabetes", desc: "Hormone & diabetes care", icon: "🧪" },
//   { name: "Rheumatology & Immunology", desc: "Joint & autoimmune care", icon: "🛡️" },
//   { name: "Radiology & Imaging", desc: "Advanced diagnostic imaging", icon: "🖥️" },
//   { name: "Ophthalmology", desc: "Eye care services", icon: "👁️" },
//   { name: "Critical Care", desc: "ICU & intensive monitoring", icon: "🏥" },
//   // { name: "Dermatology", desc: "Skin, hair & nail care", icon: "🧴" },
//   { name: "Dentistry", desc: "Dental & oral care", icon: "🦷" },
//   { name: "Dietetics & Nutrition", desc: "Clinical nutrition plans", icon: "🥗" },
//   { name: "Lab & Pathology", desc: "Diagnostic lab services", icon: "🧫" },
// ];

// /* ================== DETAILS ================== */

// const departmentDetails = {
//   "Cardiac Care":
//     "Comprehensive cardiac services including angioplasty, bypass surgery and 24×7 cardiac emergency care.",
//   "Cancer Care":
//     "Medical, surgical and radiation oncology supported by advanced technology.",
//   "Neurology":
//     "Brain, spine and nerve care using modern neuro-navigation techniques.",
//   "Gastro Sciences":
//     "Advanced GI care including liver transplant and minimally invasive surgery.",
//   Orthopaedics:
//     "Joint replacement, sports injury and spine care with faster recovery.",
//   // "Renal Care":
//   //   "Kidney transplant, dialysis and nephrology services.",
//   // "Liver Transplant":
//   //   "High success rate living donor liver transplant program.",
//   // "Bone Marrow Transplant":
//   //   "Autologous and allogenic bone marrow transplant services.",
//   // "Lung Transplant":
//   //   "Single & double lung transplant with ECMO support.",
//   // "Chest Surgery":
//   //   "Thoracic surgeries using minimally invasive techniques.",
//   "Gynaecology & Oncology":
//     "Advanced women’s cancer treatment and fertility care.",
//   "Paediatric Care":
//     "Dedicated child care with PICU and paediatric specialists.",
//   "Obstetrics & Gynaecology":
//     "High-risk pregnancy care with NICU support.",
//   Emergency:
//     "24×7 trauma and emergency services following golden-hour protocols.",
//   "ENT, Head & Neck":
//     "ENT surgeries including cochlear implants and head & neck cancer care.",
//   "Plastic & Reconstructive":
//     "Cosmetic, burns and reconstructive surgeries.",
//   "Internal Medicine":
//     "Comprehensive care for adult medical conditions and chronic diseases.",
//   "Respiratory & Sleep Medicine":
//     "Treatment of asthma, COPD and sleep apnea disorders.",
//   "Peripheral Vascular":
//     "Management of varicose veins and peripheral vascular disease.",
//   // "Endocrinology & Diabetes":
//   //   "Thyroid disorders and advanced diabetes management.",
//   "Rheumatology & Immunology":
//     "Autoimmune and inflammatory joint disorder treatments.",
//   "Radiology & Imaging":
//     "CT, MRI, PET-CT and ultrasound imaging services.",
//   Ophthalmology:
//     "Cataract, retina and vision correction services.",
//   "Critical Care":
//     "Advanced ICU with multi-disciplinary critical care team.",
//   // Dermatology:
//   //   "Medical and cosmetic dermatology for skin, hair and nails.",
//   Dentistry:
//     "Root canal, implants, cosmetic dentistry and orthodontics.",
//   "Dietetics & Nutrition":
//     "Personalised diet and clinical nutrition planning.",
//   "Lab & Pathology":
//     "NABL accredited diagnostic laboratory services.",
// };

// /* ================== COMPONENT ================== */

// const DepartmentGrid = () => {
//   const [activeDept, setActiveDept] = useState(null);
//   const navigate = useNavigate(); // ⬅ useNavigate hook

//   const activeText = activeDept ? departmentDetails[activeDept] : "";
//   const activeMeta = activeDept
//     ? departments.find((d) => d.name === activeDept)
//     : null;

//   const renderIcon = (dept) => {
//     if (dept.icon === "kidney-svg") {
//       return <img src={kidneyIcon} alt="Renal care icon" className="h-5 w-5" />;
//     }
//     if (dept.icon === "liver-svg") {
//       return <img src={liverIcon} alt="Liver transplant icon" className="h-5 w-5" />;
//     }
//     return <span className="text-xl">{dept.icon}</span>;
//   };

//   // common handler: appointment page pe le jaane ke liye
//   const goToAppointment = () => {
//     navigate("/appointment");
//   };

//   return (
//     <section className="relative w-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 overflow-hidden">
//       {/* soft background shapes */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-slate-300/35 blur-3xl" />
//         <div className="absolute right-[-40px] bottom-[-40px] h-56 w-56 rounded-full bg-slate-400/25 blur-3xl" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="inline-flex items-center rounded-full border border-[#F04E30]/30 bg-white/90 px-4 py-1 shadow-sm">
//             <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F04E30]">
//               CENTRES OF EXCELLENCE
//             </h2>
//           </span>
//           <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-[0.16em]">
//             OUR MEDICAL SPECIALITIES
//           </h1>
//           <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-slate-300" />
//           <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
//             Multi-disciplinary hospital services designed to provide complete
//             care – from early diagnosis to advanced treatment and rehabilitation.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {departments.map((dept) => (
//             <div
//               key={dept.name}
//               className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/95 p-5 text-left shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
//             >
//               <div>
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200">
//                     {renderIcon(dept)}
//                   </div>
//                   <div>
//                     <h3 className="text-sm font-semibold text-slate-900 uppercase">
//                       {dept.name}
//                     </h3>
//                     <p className="text-[11px] text-slate-500">{dept.desc}</p>
//                   </div>
//                 </div>

//                 <p className="mt-2 text-[11px] text-slate-600 line-clamp-3">
//                   {departmentDetails[dept.name] ||
//                     "Specialised care with experienced consultants and modern equipment."}
//                 </p>

//                 <ul className="mt-3 space-y-1 text-[11px] text-slate-500">
//                   <li>
//                     <span className="font-semibold uppercase">
//                       • Specialist-led OPD & IPD services
//                     </span>
//                   </li>
//                   <li>• Integrated diagnostics and in-house pharmacy support</li>
//                   <li>• Assistance for insurance and cashless facilities (as applicable)</li>
//                 </ul>
//               </div>

//               {/* CTA row inside card */}
//               <div className="mt-4 flex gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setActiveDept(dept.name)}
//                   className="flex-1 border border-slate-300 bg-slate-50 text-[11px] font-semibold text-slate-800 py-2 rounded-lg hover:bg-slate-100 transition-colors uppercase tracking-[0.12em]"
//                 >
//                   VIEW DETAILS
//                 </button>
//                 <button
//                   type="button"
//                   onClick={goToAppointment} // ⬅ appointment page
//                   className="flex-1 bg-[#F04E30] hover:bg-[#d54428] text-[11px] font-semibold text-white py-2 rounded-lg transition-colors uppercase tracking-[0.12em]"
//                 >
//                   BOOK APPOINTMENT
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {activeDept && activeMeta && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl max-w-3xl w-full mx-4 shadow-[0_24px_70px_rgba(15,23,42,0.50)] border border-slate-200 overflow-hidden">
//             {/* Header */}
//             <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200">
//                   {renderIcon(activeMeta)}
//                 </div>
//                 <div>
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
//                     DEPARTMENT DETAILS
//                   </p>
//                   <h3 className="text-base md:text-lg font-bold text-slate-900 uppercase">
//                     {activeDept}
//                   </h3>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setActiveDept(null)}
//                 className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-500 hover:bg-slate-100"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Body */}
//             <div className="px-5 py-5 space-y-5 text-sm text-slate-700">
//               <p>{activeText}</p>

//               <div className="grid gap-4 md:grid-cols-2 text-[12px]">
//                 <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
//                     CARE & SERVICES
//                   </p>
//                   <ul className="space-y-1.5">
//                     <li>Out-patient and in-patient care led by experienced specialists.</li>
//                     <li>Support from diagnostics (laboratory and imaging) as required.</li>
//                     <li>Pre‑procedure evaluation and post‑procedure follow‑up plans.</li>
//                   </ul>
//                 </div>
//                 <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
//                   <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
//                     APPOINTMENTS & SUPPORT
//                   </p>
//                   <ul className="space-y-1.5">
//                     <li>Prior appointment is advised for planned visits and reviews.</li>
//                     <li>Emergency and ICU cases are triaged and seen on priority.</li>
//                     <li>The front-desk team can guide you about doctors and timings.</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setActiveDept(null);
//                     goToAppointment(); // ⬅ modal se bhi appointment page pe
//                   }}
//                   className="w-full bg-[#F04E30] hover:bg-[#d54428] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors uppercase tracking-[0.14em]"
//                 >
//                   BOOK APPOINTMENT FOR {activeDept.toUpperCase()}
//                 </button>
//                 <p className="text-[11px] text-slate-500 text-center">
//                   Our hospital team will contact you to confirm doctor availability
//                   and a suitable time as per your condition.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default DepartmentGrid;


// src/pages/DepartmentGrid.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================== CALL MODAL ================== */
const CallModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            REQUEST A CALL
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
          Call us for doctor availability, OPD timings and appointment guidance.
        </p>

        <div className="grid gap-2">
          <a
            href="tel:812001212"
            className="w-full text-center rounded-md bg-[#F04E30] px-4 py-2 text-xs font-semibold text-white hover:bg-[#d54428] transition uppercase"
          >
            CALL 812001212
          </a>

          <a
            href="tel:9827198000"
            className="w-full text-center rounded-md border border-[#F04E30]/40 bg-white px-4 py-2 text-xs font-semibold text-[#F04E30] hover:bg-orange-50 transition uppercase"
          >
            CALL 9827198000
          </a>
        </div>

        <p className="mt-3 text-[10px] text-gray-500">
          Available during hospital working hours.
        </p>
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
  { name: "Gynaecology & Oncology", desc: "Women’s cancer care", icon: "👩" },
  { name: "Paediatric Care", desc: "Specialised child healthcare", icon: "👶" },
  { name: "Obstetrics & Gynaecology", desc: "Maternity & women health", icon: "🤰" },
  { name: "Emergency", desc: "24×7 emergency & trauma care", icon: "🚑" },
  { name: "ENT, Head & Neck", desc: "ENT & head-neck care", icon: "👂" },
  { name: "Plastic & Reconstructive", desc: "Plastic & cosmetic surgery", icon: "🩹" },
  { name: "Internal Medicine", desc: "Comprehensive adult care", icon: "🩺" },
  { name: "Respiratory & Sleep Medicine", desc: "Lung & sleep disorders", icon: "😴" },
  { name: "Peripheral Vascular", desc: "Blood vessel care", icon: "🩸" },
  // { name: "Rheumatology & Immunology", desc: "Joint & autoimmune care", icon: "🛡️" },
  { name: "Radiology & Imaging", desc: "Advanced diagnostic imaging", icon: "🖥️" },
  { name: "Ophthalmology", desc: "Eye care services", icon: "👁️" },
  { name: "Critical Care", desc: "ICU & intensive monitoring", icon: "🏥" },
  { name: "Dentistry", desc: "Dental & oral care", icon: "🦷" },
  { name: "Dietetics & Nutrition", desc: "Clinical nutrition plans", icon: "🥗" },
  { name: "Lab & Pathology", desc: "Diagnostic lab services", icon: "🧫" },
];

/* ================== DETAILS ================== */

const departmentDetails = {
  "Cardiac Care":
    "Comprehensive cardiac services including angioplasty, bypass surgery and 24×7 cardiac emergency care.",
  "Cancer Care":
    "Medical, surgical and radiation oncology supported by advanced technology.",
  "Neurology":
    "Brain, spine and nerve care using modern neuro-navigation techniques.",
  "Gastro Sciences":
    "Advanced GI care including liver transplant and minimally invasive surgery.",
  Orthopaedics:
    "Joint replacement, sports injury and spine care with faster recovery.",
  "Gynaecology & Oncology":
    "Advanced women’s cancer treatment and fertility care.",
  "Paediatric Care":
    "Dedicated child care with PICU and paediatric specialists.",
  "Obstetrics & Gynaecology":
    "High-risk pregnancy care with NICU support.",
  Emergency:
    "24×7 trauma and emergency services following golden-hour protocols.",
  "ENT, Head & Neck":
    "ENT surgeries including cochlear implants and head & neck cancer care.",
  "Plastic & Reconstructive":
    "Cosmetic, burns and reconstructive surgeries.",
  "Internal Medicine":
    "Comprehensive care for adult medical conditions and chronic diseases.",
  "Respiratory & Sleep Medicine":
    "Treatment of asthma, COPD and sleep apnea disorders.",
  "Peripheral Vascular":
    "Management of varicose veins and peripheral vascular disease.",
  // "Rheumatology & Immunology":
  //   "Autoimmune and inflammatory joint disorder treatments.",
  "Radiology & Imaging":
    "CT, MRI, PET-CT and ultrasound imaging services.",
  Ophthalmology:
    "Cataract, retina and vision correction services.",
  "Critical Care":
    "Advanced ICU with multi-disciplinary critical care team.",
  Dentistry:
    "Root canal, implants, cosmetic dentistry and orthodontics.",
  "Dietetics & Nutrition":
    "Personalised diet and clinical nutrition planning.",
  "Lab & Pathology":
    "NABL accredited diagnostic laboratory services.",
};

/* ================== COMPONENT ================== */

const DepartmentGrid = () => {
  const [activeDept, setActiveDept] = useState(null);
  const [callOpen, setCallOpen] = useState(false);

  const navigate = useNavigate();

  const activeText = activeDept ? departmentDetails[activeDept] : "";
  const activeMeta = activeDept
    ? departments.find((d) => d.name === activeDept)
    : null;

  const renderIcon = (dept) => {
    return <span className="text-xl">{dept.icon}</span>;
  };

  const goToAppointment = () => {
    navigate("/appointment");
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 overflow-hidden">
      {/* soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-slate-300/35 blur-3xl" />
        <div className="absolute right-[-40px] bottom-[-40px] h-56 w-56 rounded-full bg-slate-400/25 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-[#F04E30]/30 bg-white/90 px-4 py-1 shadow-sm">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F04E30]">
              CENTRES OF EXCELLENCE
            </h2>
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-[0.16em]">
            OUR MEDICAL SPECIALITIES
          </h1>

          <div className="mx-auto mt-3 h-[2px] w-24 rounded-full bg-slate-300" />

          <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Multi-disciplinary hospital services designed to provide complete
            care – from early diagnosis to advanced treatment and rehabilitation.
          </p>

          {/* CALL BUTTON (TOP) */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCallOpen(true)}
              className="rounded-md bg-[#F04E30] hover:bg-[#d54428] px-4 py-2 text-[11px] font-semibold text-white transition uppercase tracking-[0.12em]"
            >
              REQUEST A CALL
            </button>

            {/* quick call chips */}
            {/* <a
              href="tel:812001212"
              className="text-[11px] px-3 py-2 rounded-md bg-white/90 border border-slate-200 text-slate-700 hover:bg-white transition"
            >
              CALL: 812001212
            </a>
            <a
              href="tel:9827198000"
              className="text-[11px] px-3 py-2 rounded-md bg-white/90 border border-slate-200 text-slate-700 hover:bg-white transition"
            >
              CALL: 9827198000
            </a> */}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/95 p-5 text-left shadow-[0_14px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.16)]"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 border border-slate-200">
                    {renderIcon(dept)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase">
                      {dept.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{dept.desc}</p>
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-slate-600 line-clamp-3">
                  {departmentDetails[dept.name] ||
                    "Specialised care with experienced consultants and modern equipment."}
                </p>

                <ul className="mt-3 space-y-1 text-[11px] text-slate-500">
                  <li>
                    <span className="font-semibold uppercase">
                      • Specialist-led OPD & IPD services
                    </span>
                  </li>
                  <li>• Integrated diagnostics and in-house pharmacy support</li>
                  <li>
                    • Assistance for insurance and cashless facilities (as
                    applicable)
                  </li>
                </ul>
              </div>

              {/* CTA row inside card */}
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveDept(dept.name)}
                  className="flex-1 border border-slate-300 bg-slate-50 text-[11px] font-semibold text-slate-800 py-2 rounded-lg hover:bg-slate-100 transition-colors uppercase tracking-[0.12em]"
                >
                  VIEW DETAILS
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
          ))}
        </div>
      </div>

      {/* DETAILS MODAL */}
      {activeDept && activeMeta && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-3xl w-full mx-4 shadow-[0_24px_70px_rgba(15,23,42,0.50)] border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200">
                  {renderIcon(activeMeta)}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    DEPARTMENT DETAILS
                  </p>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 uppercase">
                    {activeDept}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveDept(null)}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-500 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5 space-y-5 text-sm text-slate-700">
              <p>{activeText}</p>

              <div className="grid gap-4 md:grid-cols-2 text-[12px]">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                    CARE & SERVICES
                  </p>
                  <ul className="space-y-1.5">
                    <li>
                      Out-patient and in-patient care led by experienced
                      specialists.
                    </li>
                    <li>Support from diagnostics (laboratory and imaging) as required.</li>
                    <li>Pre‑procedure evaluation and post‑procedure follow‑up plans.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2">
                    APPOINTMENTS & SUPPORT
                  </p>
                  <ul className="space-y-1.5">
                    <li>Prior appointment is advised for planned visits and reviews.</li>
                    <li>Emergency and ICU cases are triaged and seen on priority.</li>
                    <li>The front-desk team can guide you about doctors and timings.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveDept(null);
                    goToAppointment();
                  }}
                  className="w-full bg-[#F04E30] hover:bg-[#d54428] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors uppercase tracking-[0.14em]"
                >
                  BOOK APPOINTMENT FOR {activeDept.toUpperCase()}
                </button>

                {/* EXTRA: CALL BUTTON INSIDE MODAL */}
                <button
                  type="button"
                  onClick={() => setCallOpen(true)}
                  className="w-full border border-[#F04E30]/40 bg-white text-[#F04E30] text-sm font-semibold py-2.5 rounded-lg hover:bg-orange-50 transition-colors uppercase tracking-[0.14em]"
                >
                  REQUEST A CALL
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Our hospital team will contact you to confirm doctor availability
                  and a suitable time as per your condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALL MODAL */}
      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </section>
  );
};

export default DepartmentGrid;