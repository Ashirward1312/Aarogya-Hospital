// // Example: src/Components/Get/Get.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// /* ---------------------------------------------
//    FULL WEBFORM LINK (yahan apna real URL daalna)
// --------------------------------------------- */
// const WEBFORM_URL = "https://your-webform-url-here.com"; // TODO: replace with actual webform link

// /* ---------------------------------------------
//    CATEGORIES
// --------------------------------------------- */

// const categories = [
//   { id: "all", label: "All Package" },
//   { id: "holistic", label: "Holistic Well Being" },
//   { id: "heart", label: "Heart Health" },
//   { id: "diabetes", label: "Diabetes" },
//   { id: "male", label: "Male" },
//   { id: "female", label: "Female" },
//   { id: "50plus", label: "50 Plus" },
// ];

// /* ---------------------------------------------
//    MASTER LIST: ALL PACKAGES (Medanta -> Aarogya Hospital)
// --------------------------------------------- */

// const allPackages = [
//   { name: "Advanced Lung Screening", tests: 5, consults: 1, price: 2999 },
//   { name: "Anemia Screening package", tests: 17, consults: 1, price: 5600 },
//   { name: "Cardio Predict package", tests: 17, consults: 4, price: 9300 },
//   { name: "Comprehensive Lung Screening", tests: 4, consults: 0, price: 2500 },
//   { name: "Cyber City Basic Health Check", tests: 13, consults: 1, price: 2800 },
//   {
//     name: "Cyber City Diabetes Package - Basic",
//     tests: 13,
//     consults: 2,
//     price: 5100,
//   },
//   {
//     name: "Cyber City Executive Health Check - Men",
//     tests: 18,
//     consults: 2,
//     price: 5500,
//   },
//   {
//     name: "Cyber City Executive Health Check - Women",
//     tests: 18,
//     consults: 2,
//     price: 5500,
//   },
//   {
//     name: "Cyber City Whole Body Check - Men",
//     tests: 33,
//     consults: 4,
//     price: 16000,
//   },
//   {
//     name: "Cyber City Whole Body Check - Women",
//     tests: 33,
//     consults: 4,
//     price: 16000,
//   },
//   { name: "Fertility Panel - Advance", tests: 11, consults: 2, price: 5299 },
//   { name: "Fertility Panel-Basic", tests: 8, consults: 2, price: 5099 },
//   { name: "Heart Check - Advance", tests: 15, consults: 1, price: 3999 },
//   { name: "Heart Check - Basic", tests: 13, consults: 1, price: 1999 },
//   {
//     name: "Jones Lang Lasalle Emp. Coverage",
//     tests: 13,
//     consults: 2,
//     price: 400,
//   },
//   {
//     name: "Lung Health Check Package",
//     tests: 13,
//     consults: 3,
//     price: 7500,
//   },
//   {
//     name: "Aarogya Hospital Advance Care Plan",
//     tests: 14,
//     consults: 2,
//     price: 4150,
//   },
//   {
//     name: "Aarogya Hospital Basic Health Check",
//     tests: 12,
//     consults: 1,
//     price: 3800,
//   },
//   {
//     name: "Aarogya Hospital Comprehensive Care Package",
//     tests: 19,
//     consults: 5,
//     price: 8600,
//   },
//   {
//     name: "Aarogya Hospital Diabetes Package - Advanced",
//     tests: 27,
//     consults: 2,
//     price: 12500,
//   },
//   {
//     name: "Aarogya Hospital Diabetes Package - Basic",
//     tests: 13,
//     consults: 2,
//     price: 5500,
//   },
//   {
//     name: "Aarogya Hospital Executive Whole Body Check (Men)",
//     tests: 31,
//     consults: 7,
//     price: 19000,
//   },
//   {
//     name: "Aarogya Hospital Executive Whole Body Check (Women)",
//     tests: 31,
//     consults: 7,
//     price: 19000,
//   },
//   {
//     name: "Aarogya Hospital Healthy Heart",
//     tests: 18,
//     consults: 3,
//     price: 7550,
//   },
//   {
//     name: "Aarogya Hospital Hypertension Check - Advance",
//     tests: 19,
//     consults: 2,
//     price: 15200,
//   },
//   {
//     name: "Aarogya Hospital Hypertension check - Basic",
//     tests: 18,
//     consults: 2,
//     price: 9000,
//   },
//   {
//     name: "Aarogya Hospital Post PTCA/CABG/Valve Follow up",
//     tests: 16,
//     consults: 1,
//     price: 5500,
//   },
//   {
//     name: "Aarogya Hospital Whole Body Package (Men)",
//     tests: 36,
//     consults: 8,
//     price: 25000,
//   },
//   {
//     name: "Aarogya Hospital Whole Body Package (Women)",
//     tests: 36,
//     consults: 8,
//     price: 25000,
//   },
//   {
//     name: "Aarogya Hospital Years to Life (Men)",
//     tests: 31,
//     consults: 7,
//     price: 28000,
//   },
//   {
//     name: "Aarogya Hospital Years to Life (Women)",
//     tests: 31,
//     consults: 7,
//     price: 28000,
//   },
//   {
//     name: "Mediclinic Healthy Heart",
//     tests: 19,
//     consults: 3,
//     price: 7550,
//   },
//   {
//     name: "Mediclinic Hypertension Check - Basic",
//     tests: 16,
//     consults: 2,
//     price: 6500,
//   },
//   { name: "Menopausal Health Package", tests: 5, consults: 1, price: 2999 },
//   {
//     name: "Mid Day Total Package- Female",
//     tests: 38,
//     consults: 1,
//     price: 11000,
//   },
//   {
//     name: "Mid Day Total Package- Male",
//     tests: 37,
//     consults: 1,
//     price: 11000,
//   },
//   {
//     name: "Mid Day Vital Package-Female",
//     tests: 21,
//     consults: 1,
//     price: 6000,
//   },
//   {
//     name: "Mid-Day Vital Package-Male",
//     tests: 21,
//     consults: 1,
//     price: 6000,
//   },
//   { name: "PCOS Health Check Package", tests: 11, consults: 2, price: 4999 },
//   {
//     name: "Preconception Health Check Package",
//     tests: 11,
//     consults: 1,
//     price: 5899,
//   },
//   {
//     name: "Pre-Travel Health Check Advance < 50yrs",
//     tests: 27,
//     consults: 3,
//     price: 9999,
//   },
//   {
//     name: "Pre-Travel Health Check Advance > 50yrs",
//     tests: 23,
//     consults: 3,
//     price: 20999,
//   },
//   {
//     name: "Pre-Travel Health Check Basic",
//     tests: 20,
//     consults: 1,
//     price: 4999,
//   },
//   {
//     name: "Tax Saver Advance Package-Female",
//     tests: 26,
//     consults: 1,
//     price: 4999,
//   },
//   {
//     name: "Tax Saver Advance Package-Male",
//     tests: 26,
//     consults: 1,
//     price: 4999,
//   },
//   {
//     name: "Tax Saver Basic Package",
//     tests: 15,
//     consults: 1,
//     price: 2499,
//   },
//   { name: "True Fit Check - Advance", tests: 23, consults: 4, price: 8200 },
//   { name: "True Fit Check - Basic", tests: 16, consults: 3, price: 5400 },
//   { name: "TrueFit Lite Package", tests: 15, consults: 3, price: 4800 },
//   {
//     name: "Vaccination Package for food handlers - Contractual Staff",
//     tests: 17,
//     consults: 2,
//     price: 150,
//   },
//   {
//     name: "Women Hormone Health Check Package - 20 to 40 Years",
//     tests: 18,
//     consults: 3,
//     price: 4990,
//   },
//   {
//     name: "Women Hormone Health Check Package - 40+ Years",
//     tests: 19,
//     consults: 3,
//     price: 5390,
//   },
// ];

// /* ---------------------------------------------
//    CATEGORY -> PACKAGE NAMES
// --------------------------------------------- */

// const categoryPackages = {
//   holistic: [
//     "Cyber City Basic Health Check",
//     "Cyber City Executive Health Check - Men",
//     "Cyber City Executive Health Check - Women",
//     "Cyber City Whole Body Check - Men",
//     "Cyber City Whole Body Check - Women",
//     "Aarogya Hospital Advance Care Plan",
//     "Aarogya Hospital Basic Health Check",
//     "Aarogya Hospital Comprehensive Care Package",
//     "Aarogya Hospital Executive Whole Body Check (Men)",
//     "Aarogya Hospital Executive Whole Body Check (Women)",
//     "Aarogya Hospital Whole Body Package (Men)",
//     "Aarogya Hospital Whole Body Package (Women)",
//     "Aarogya Hospital Years to Life (Men)",
//     "Aarogya Hospital Years to Life (Women)",
//     "Pre-Travel Health Check Advance < 50yrs",
//     "Pre-Travel Health Check Advance > 50yrs",
//     "Pre-Travel Health Check Basic",
//     "Tax Saver Advance Package-Female",
//     "Tax Saver Advance Package-Male",
//     "Tax Saver Basic Package",
//     "True Fit Check - Advance",
//     "True Fit Check - Basic",
//     "TrueFit Lite Package",
//   ],

//   heart: [
//     "Cardio Predict package",
//     "Heart Check - Advance",
//     "Heart Check - Basic",
//     "Aarogya Hospital Healthy Heart",
//     "Aarogya Hospital Hypertension Check - Advance",
//     "Aarogya Hospital Hypertension check - Basic",
//     "Aarogya Hospital Post PTCA/CABG/Valve Follow up",
//     "Mediclinic Healthy Heart",
//     "Mediclinic Hypertension Check - Basic",
//   ],

//   diabetes: [
//     "Cyber City Diabetes Package - Basic",
//     "Jones Lang Lasalle Emp. Coverage",
//     "Aarogya Hospital Diabetes Package - Advanced",
//     "Aarogya Hospital Diabetes Package - Basic",
//   ],

//   male: [
//     "Anemia Screening package",
//     "Cardio Predict package",
//     "Cyber City Basic Health Check",
//     "Cyber City Diabetes Package - Basic",
//     "Cyber City Executive Health Check - Men",
//     "Cyber City Whole Body Check - Men",
//     "Lung Health Check Package",
//     "Aarogya Hospital Advance Care Plan",
//     "Aarogya Hospital Basic Health Check",
//     "Aarogya Hospital Comprehensive Care Package",
//     "Aarogya Hospital Diabetes Package - Advanced",
//     "Aarogya Hospital Diabetes Package - Basic",
//     "Aarogya Hospital Executive Whole Body Check (Men)",
//     "Aarogya Hospital Healthy Heart",
//     "Aarogya Hospital Hypertension Check - Advance",
//     "Aarogya Hospital Hypertension check - Basic",
//     "Aarogya Hospital Post PTCA/CABG/Valve Follow up",
//     "Aarogya Hospital Whole Body Package (Men)",
//     "Aarogya Hospital Years to Life (Men)",
//     "Mediclinic Healthy Heart",
//     "Mediclinic Hypertension Check - Basic",
//     "Mid Day Total Package- Male",
//     "Mid-Day Vital Package-Male",
//     "Pre-Travel Health Check Advance < 50yrs",
//     "Pre-Travel Health Check Advance > 50yrs",
//     "Pre-Travel Health Check Basic",
//     "True Fit Check - Advance",
//     "True Fit Check - Basic",
//     "TrueFit Lite Package",
//   ],

//   female: [
//     "Advanced Lung Screening",
//     "Anemia Screening package",
//     "Cardio Predict package",
//     "Comprehensive Lung Screening",
//     "Cyber City Basic Health Check",
//     "Cyber City Diabetes Package - Basic",
//     "Cyber City Executive Health Check - Women",
//     "Cyber City Whole Body Check - Women",
//     "Fertility Panel - Advance",
//     "Fertility Panel-Basic",
//     "Lung Health Check Package",
//     "Aarogya Hospital Advance Care Plan",
//     "Aarogya Hospital Basic Health Check",
//     "Aarogya Hospital Comprehensive Care Package",
//     "Aarogya Hospital Diabetes Package - Advanced",
//     "Aarogya Hospital Diabetes Package - Basic",
//     "Aarogya Hospital Executive Whole Body Check (Women)",
//     "Aarogya Hospital Healthy Heart",
//     "Aarogya Hospital Hypertension Check - Advance",
//     "Aarogya Hospital Hypertension check - Basic",
//     "Aarogya Hospital Post PTCA/CABG/Valve Follow up",
//     "Aarogya Hospital Whole Body Package (Women)",
//     "Aarogya Hospital Years to Life (Women)",
//     "Mediclinic Healthy Heart",
//     "Mediclinic Hypertension Check - Basic",
//     "Menopausal Health Package",
//     "Mid Day Total Package- Female",
//     "Mid Day Vital Package-Female",
//     "PCOS Health Check Package",
//     "Preconception Health Check Package",
//     "Pre-Travel Health Check Advance < 50yrs",
//     "Pre-Travel Health Check Advance > 50yrs",
//     "Pre-Travel Health Check Basic",
//     "True Fit Check - Advance",
//     "True Fit Check - Basic",
//     "TrueFit Lite Package",
//     "Women Hormone Health Check Package - 20 to 40 Years",
//   ],

//   "50plus": [
//     "Aarogya Hospital Years to Life (Men)",
//     "Aarogya Hospital Years to Life (Women)",
//     "Women Hormone Health Check Package - 40+ Years",
//   ],
// };

// /* ---------------------------------------------
//    SMALL BOOKING FORM MODAL
// --------------------------------------------- */

// const BookPackageFormModal = ({ pkg, onClose }) => {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     age: "",
//     date: "",
//   });

//   if (!pkg) return null;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 👉 Yahan API ke liye jagah hai
//     // TODO: apni API ka URL aur payload yahan add karo
//     /*
//     try {
//       const res = await fetch("https://api.your-backend.com/webform/health-check", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           packageName: pkg.name,
//           name: form.name,
//           mobile: form.mobile,
//           age: form.age,
//           date: form.date,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }

//       // const data = await res.json();
//       alert("Your booking request has been submitted successfully.");
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("There was a problem submitting your request. Please try again.");
//     }
//     */

//     // Abhi ke liye simple alert
//     alert(
//       `Booking request submitted for:\n${pkg.name}\nName: ${form.name}\nMobile: ${form.mobile}`
//     );

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
//       <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-5">
//         <div className="flex items-center justify-between mb-3">
//           <h3 className="text-sm font-semibold text-gray-900">
//             Book Health Check Package
//           </h3>
//           <button
//             type="button"
//             onClick={onClose}
//             className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50"
//           >
//             ×
//           </button>
//         </div>

//         <p className="text-xs text-gray-600 mb-3">
//           You are booking:{" "}
//           <span className="font-semibold text-gray-900">{pkg.name}</span>
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-3 text-xs">
//           <div>
//             <label className="block text-gray-600 mb-1">Patient Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={form.name}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="block text-gray-600 mb-1">Mobile Number</label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 required
//                 value={form.mobile}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1">Age</label>
//               <input
//                 type="number"
//                 name="age"
//                 min="0"
//                 value={form.age}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-600 mb-1">
//               Preferred Date (for checkup)
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={form.date}
//               onChange={handleChange}
//               className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
//             />
//           </div>

//           <p className="text-[10px] text-gray-500">
//             Our team will call you to confirm time slot and any fasting / prep
//             instructions based on the package.
//           </p>

//           <button
//             type="submit"
//             className="w-full mt-1 rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition-colors"
//           >
//             SUBMIT BOOKING REQUEST
//           </button>
//         </form>

//         {/* Webform link */}
//         <div className="mt-4 border-t border-gray-100 pt-3 text-[11px] text-gray-600">

//         </div>
//       </div>
//     </div>
//   );
// };

// /* ---------------------------------------------
//    SIMPLE CARD COMPONENT
// --------------------------------------------- */

// const PackageCard = ({ pkg, onBook }) => {
//   return (
//     <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between">
//       <div>
//         <h3 className="text-sm font-semibold text-gray-900">{pkg.name}</h3>
//         <p className="mt-1 text-xs text-gray-600">
//           {pkg.tests} tests · {pkg.consults} doctor consults
//         </p>
//       </div>

//       <div className="mt-4 flex items-center justify-between">
//         <div>
//           <p className="text-xs text-gray-500">Starting at</p>
//           <p className="text-lg font-bold text-gray-900">
//             ₹{pkg.price.toLocaleString("en-IN")}
//           </p>
//         </div>
//         <button
//           type="button"
//           onClick={() => onBook(pkg)}
//           className="px-3 py-2 text-xs font-medium rounded-md bg-orange-500 text-white hover:bg-orange-600 transition"
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// /* ---------------------------------------------
//    PAGE COMPONENT
// --------------------------------------------- */

// const HealthCheckPackagesPage = () => {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [bookingPackage, setBookingPackage] = useState(null);
//   const navigate = useNavigate();

//   const displayedPackages =
//     activeCategory === "all"
//       ? allPackages
//       : allPackages.filter((pkg) =>
//           (categoryPackages[activeCategory] || []).includes(pkg.name)
//         );

//   const activeCatLabel =
//     categories.find((c) => c.id === activeCategory)?.label || "All Package";

//   const handleBookClick = (pkg) => {
//     setBookingPackage(pkg);
//   };

//   const closeBookingForm = () => {
//     setBookingPackage(null);
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Back button */}
//         <button
//           type="button"
//           onClick={() => navigate(-1)}
//           className="mb-6 text-xl text-gray-500 hover:text-gray-700"
//         >
//           ← BACK
//         </button>

//         {/* Heading */}
//         <header className="text-center mb-6">
//           <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
//             AAROGYA HOSPITAL HEALTH CHECK PACKAGES
//           </h1>
//           <p className="mt-2 text-sm text-gray-600">
//             Simple preventive health check packages for every age and need.
//           </p>
//         </header>

//         {/* Simple filter section */}
//         <section className="mb-6">
//           <div className="flex flex-wrap justify-center gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 type="button"
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={`px-3 py-1.5 text-xs rounded-full border transition ${
//                   activeCategory === cat.id
//                     ? "bg-orange-500 text-white border-orange-500"
//                     : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
//                 }`}
//               >
//                 {cat.label}
//               </button>
//             ))}
//           </div>
//         </section>

//         {/* Simple CTA */}
//         <section className="mb-6 text-center">
//           <p className="text-xs text-gray-600">
//             Confused kaun sa package sahi hai? Hum aapko guide karenge.
//           </p>
//           <button
//             type="button"
//             className="mt-2 inline-flex items-center justify-center rounded-md border border-orange-300 bg-white px-4 py-2 text-xs font-medium text-orange-600 hover:bg-orange-50 transition"
//           >
//             Request a Call Back
//           </button>
//         </section>

//         {/* Results + grid */}
//         <section>
//           <p className="mb-3 text-xs text-gray-600 text-center">
//             Showing{" "}
//             <span className="font-semibold text-gray-900">
//               {displayedPackages.length}
//             </span>{" "}
//             packages
//             {activeCategory !== "all" && (
//               <>
//                 {" "}
//                 for <span className="font-semibold">{activeCatLabel}</span>
//               </>
//             )}
//           </p>

//           {displayedPackages.length === 0 ? (
//             <div className="mx-auto max-w-md rounded-lg border border-dashed border-gray-300 bg-white p-4 text-center text-sm text-gray-500">
//               Packages for this category will be available soon.
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
//               {displayedPackages.map((pkg) => (
//                 <PackageCard key={pkg.name} pkg={pkg} onBook={handleBookClick} />
//               ))}
//             </div>
//           )}
//         </section>
//       </div>

//       {/* Booking form modal */}
//       {bookingPackage && (
//         <BookPackageFormModal pkg={bookingPackage} onClose={closeBookingForm} />
//       )}
//     </main>
//   );
// };

// export default HealthCheckPackagesPage;
// src/Components/Get/Get.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------------------------------------
  ONLY 2 PLANS (FILTER)
--------------------------------------------- */
const filters = [
  { id: "all", label: "ALL PLANS" },
  { id: "basic", label: "BASIC PLAN" },
  { id: "advance", label: "ADVANCE PLAN" },
];

/* ---------------------------------------------
  PACKAGES (NAMES IN CAPS)
  - NO TEST COUNT
  - DOCTOR NAMES ADDED AS YOU SAID
  - FULL BODY CHECKUP INCLUDES: DM CARDIO, MEDICINE+ORTHO, PREVENTIVE CARDIO, HYPERTENSION
--------------------------------------------- */
const allPackages = [
  // BASIC
  {
    id: "general-basic",
    name: "GENERAL BODY CHECKUP",
    plan: "basic",
    doctors: ["DR. CHIRAG AGRAWAL"],
    price: 999,
    includes: ["GENERAL HEALTH SCREENING", "BASIC BLOOD PROFILE", "VITALS REVIEW"],
  },
  {
    id: "lung-basic",
    name: "LUNG CHECKUP",
    plan: "basic",
    doctors: ["DR. PANKAJ MOTGHARE"],
    price: 1499,
    includes: ["RESPIRATORY SCREENING", "BASIC LUNG ASSESSMENT"],
  },
  {
    id: "bone-basic",
    name: "BONE CHECKUP",
    plan: "basic",
    doctors: ["DR. DEEPAK AGRAWAL"],
    price: 1299,
    includes: ["BONE & JOINT REVIEW", "POSTURE / PAIN ASSESSMENT"],
  },

  // ADVANCE
  {
    id: "full-body-advance",
    name: "FULL BODY CHECKUP",
    plan: "advance",
    doctors: ["DR. CHIRAG AGRAWAL", "DR. DEEPAK AGRAWAL"],
    price: 4999,
    highlight: "BEST VALUE",
    includes: [
      "DM CARDIO (INCLUDED)",
      "MEDICINE + ORTHO (INCLUDED)",
      "PREVENTIVE CARDIO (INCLUDED)",
      "HYPERTENSION CHECKUP (INCLUDED)",
    ],
  },
  {
    id: "dm-cardio",
    name: "DM CARDIO PACKAGE",
    plan: "advance",
    doctors: ["DR. CHIRAG AGRAWAL"],
    price: 3499,
    note: "INCLUDED IN FULL BODY CHECKUP (ADVANCE)",
    includes: ["DIABETES + HEART RISK REVIEW", "FOLLOW-UP GUIDANCE"],
  },
  {
    id: "medicine-ortho",
    name: "MEDICINE + ORTHO CHECKUP",
    plan: "advance",
    doctors: ["DR. CHIRAG AGRAWAL", "DR. DEEPAK AGRAWAL"],
    price: 2199,
    note: "INCLUDED IN FULL BODY CHECKUP (ADVANCE)",
    includes: ["PHYSICIAN REVIEW", "ORTHO REVIEW"],
  },
  {
    id: "preventive-cardio",
    name: "PREVENTIVE CARDIO CHECKUP",
    plan: "advance",
    doctors: ["DR. CHIRAG AGRAWAL"],
    price: 2499,
    note: "INCLUDED IN FULL BODY CHECKUP (ADVANCE)",
    includes: ["HEART PREVENTION SCREENING", "LIFESTYLE GUIDANCE"],
  },
  {
    id: "hypertension",
    name: "HYPERTENSION CHECKUP",
    plan: "advance",
    doctors: ["DR. CHIRAG AGRAWAL"],
    price: 1999,
    note: "INCLUDED IN FULL BODY CHECKUP (ADVANCE)",
    includes: ["BP REVIEW", "RISK MANAGEMENT GUIDANCE"],
  },
  {
    id: "infertility",
    name: "INFERTILITY PACKAGE",
    plan: "advance",
    doctors: ["DR. PREETI AGRAWAL"],
    price: 5599,
    includes: ["FERTILITY CONSULTATION", "BASIC EVALUATION PLAN"],
  },
];

/* ---------------------------------------------
  CALL REQUEST MODAL
--------------------------------------------- */
const CallRequestModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
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

        <p className="text-xs text-gray-600 mb-3">
          Call us and our team will guide you to the right package.
        </p>

        <div className="grid grid-cols-1 gap-2">
          <a
            href="tel:812001212"
            className="w-full text-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition uppercase"
          >
            CALL 812001212
          </a>
          <a
            href="tel:9827198000"
            className="w-full text-center rounded-md border border-orange-300 bg-white px-4 py-2 text-xs font-semibold text-orange-600 hover:bg-orange-50 transition uppercase"
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

/* ---------------------------------------------
  BOOK + DEMO PAYMENT MODAL
--------------------------------------------- */
const BookAndPayModal = ({ pkg, onClose }) => {
  const [form, setForm] = useState({ name: "", mobile: "", date: "" });
  if (!pkg) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handlePayDemo = (e) => {
    e.preventDefault();
    alert(
      `DEMO BOOKING + PAYMENT\n\nPACKAGE: ${pkg.name}\nPLAN: ${pkg.plan.toUpperCase()}\nDOCTOR(S): ${pkg.doctors.join(
        ", "
      )}\nAMOUNT: ₹${pkg.price}\n\nPATIENT NAME: ${form.name}\nMOBILE: ${
        form.mobile
      }\nDATE: ${form.date || "NOT SELECTED"}`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            BOOK & PAY
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-200 text-xs text-gray-500 hover:bg-gray-50"
          >
            ×
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 mb-3">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs text-gray-600 uppercase">SELECTED PACKAGE</p>
              <p className="text-sm font-semibold text-gray-900 uppercase">
                {pkg.name}
              </p>
              <p className="mt-1 text-[11px] text-gray-500 uppercase">
                PLAN: {pkg.plan}
              </p>
            </div>

            <p className="text-sm font-bold text-gray-900">
              ₹{pkg.price.toLocaleString("en-IN")}
            </p>
          </div>

          <p className="mt-2 text-xs text-gray-700">
            <span className="font-semibold text-gray-900 uppercase">
              DOCTOR(S):
            </span>{" "}
            {pkg.doctors.join(", ")}
          </p>

          {pkg.includes?.length > 0 && (
            <ul className="mt-2 text-[11px] text-gray-600 list-disc pl-5">
              {pkg.includes.map((x) => (
                <li key={x} className="uppercase">
                  {x}
                </li>
              ))}
            </ul>
          )}
        </div>

        <form onSubmit={handlePayDemo} className="space-y-3 text-xs">
          <div>
            <label className="block text-gray-600 mb-1 uppercase">
              PATIENT NAME
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 uppercase">
              MOBILE NUMBER
            </label>
            <input
              type="tel"
              name="mobile"
              required
              value={form.mobile}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 uppercase">
              PREFERRED DATE
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition-colors uppercase"
          >
            PAY ₹{pkg.price.toLocaleString("en-IN")} (DEMO)
          </button>

          <p className="text-[10px] text-gray-500">
            Demo only. Replace with Razorpay/Stripe later.
          </p>
        </form>
      </div>
    </div>
  );
};

/* ---------------------------------------------
  CARD
--------------------------------------------- */
const PackageCard = ({ pkg, onBook }) => {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            {pkg.name}
          </h3>

          {pkg.highlight && (
            <span className="shrink-0 rounded-full bg-orange-100 text-orange-700 border border-orange-200 px-2 py-1 text-[10px] font-semibold uppercase">
              {pkg.highlight}
            </span>
          )}
        </div>

        <p className="mt-2 text-[11px] text-gray-500 uppercase">
          PLAN: <span className="font-semibold">{pkg.plan}</span>
        </p>

        <p className="mt-2 text-xs text-gray-700">
          <span className="font-semibold text-gray-900 uppercase">
            DOCTOR(S):
          </span>{" "}
          {pkg.doctors.join(", ")}
        </p>

        {pkg.note && (
          <p className="mt-2 text-[11px] text-orange-700 uppercase">
            {pkg.note}
          </p>
        )}

        {pkg.includes?.length > 0 && (
          <ul className="mt-3 text-[11px] text-gray-600 list-disc pl-5">
            {pkg.includes.map((x) => (
              <li key={x} className="uppercase">
                {x}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase">STARTING AT</p>
          <p className="text-lg font-bold text-gray-900">
            ₹{pkg.price.toLocaleString("en-IN")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onBook(pkg)}
          className="px-3 py-2 text-xs font-medium rounded-md bg-orange-500 text-white hover:bg-orange-600 transition uppercase"
        >
          BOOK & PAY
        </button>
      </div>
    </div>
  );
};

/* ---------------------------------------------
  PAGE
--------------------------------------------- */
const HealthCheckPackagesPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [callOpen, setCallOpen] = useState(false);

  const displayedPackages = useMemo(() => {
    if (activeFilter === "all") return allPackages;
    return allPackages.filter((p) => p.plan === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP ROW */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-xl text-gray-500 hover:text-gray-700 uppercase"
          >
            ← BACK
          </button>

          <button
            type="button"
            onClick={() => setCallOpen(true)}
            className="rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition uppercase"
          >
            REQUEST A CALL
          </button>
        </div>

        {/* HEADING */}
        <header className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 uppercase">
            HEALTH CHECKUP PACKAGES
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Choose BASIC or ADVANCE plan and book instantly.
          </p>
        </header>

        {/* SIMPLE FILTER */}
        <section className="mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs rounded-full border transition uppercase ${
                  activeFilter === f.id
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* RESULTS */}
        <p className="mb-3 text-xs text-gray-600 text-center uppercase">
          SHOWING{" "}
          <span className="font-semibold text-gray-900">
            {displayedPackages.length}
          </span>{" "}
          PACKAGES
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
          {displayedPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBook={setSelectedPkg} />
          ))}
        </div>
      </div>

      {/* MODALS */}
      {selectedPkg && (
        <BookAndPayModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}

      <CallRequestModal open={callOpen} onClose={() => setCallOpen(false)} />
    </main>
  );
};

export default HealthCheckPackagesPage;