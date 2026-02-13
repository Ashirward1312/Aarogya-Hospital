import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------------------------------------------
  CALL MODAL
--------------------------------------------- */
const CallModal = ({ open, onClose }) => {
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

        <p className="text-xs text-gray-600 mb-4">
          Call us for homecare availability, staff options, pricing and start
          date confirmation.
        </p>

        <div className="grid gap-2">
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

const HomecareServicesPage = () => {
  const navigate = useNavigate();
  const [callOpen, setCallOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your homecare service request has been submitted.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP BAR: BACK + REQUEST A CALL */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-xl text-gray-500 hover:text-gray-700"
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

        {/* Header - centered */}
        <header className="mb-10 text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-orange-600 uppercase">
            Aarogya Hospital
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900">
            HOMECARE SERVICES AT HOME
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Nursing care, attendants, physiotherapy and more – delivered at your
            home by Aarogya Hospital homecare team.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px]">
            <span className="px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600">
              Trained & verified staff
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700">
              Nursing, attendants, physio & more
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
              Coverage in selected areas
            </span>
          </div>

          {/* QUICK CALL CHIPS (looks good + optional) */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <a
              href="tel:812001212"
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 812001212
            </a>
            <a
              href="tel:9827198000"
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 9827198000
            </a>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1.2fr] gap-6">
          {/* Left: info blocks */}
          <section className="space-y-4">
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Types of homecare services we provide
              </h2>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                <li>Nursing care at home (injections, dressings, IV, etc.)</li>
                <li>Trained attendant / caretaker for daily support</li>
                <li>Physiotherapy at home (exercise, rehab)</li>
                <li>Doctor visit at home (where available)</li>
                <li>Home sample collection for lab tests</li>
                <li>Medical equipment on rent (bed, oxygen, etc.)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-xs text-gray-700 space-y-2">
              <p className="font-semibold text-gray-900">
                Who can benefit from homecare?
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Post-surgery patients needing support at home</li>
                <li>Elderly parents needing help in daily activities</li>
                <li>Stroke / paralysis / cancer / long-term illness</li>
                <li>Patients who find it difficult to travel to hospital</li>
              </ul>
              <p className="text-[11px] text-orange-600 mt-1">
                For emergency or very critical conditions, please visit
                Emergency directly instead of only booking homecare.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm text-xs text-emerald-800">
              <p className="font-semibold text-emerald-900">
                QUALITY & SAFETY AT HOME
              </p>
              <p className="mt-1">
                Aarogya Hospital homecare follows standard protocols for
                hygiene, infection control and patient safety. Staff is
                verified and trained as per hospital guidelines.
              </p>
            </div>

            {/* LEFT CTA CARD */}
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase">
                    Need quick guidance?
                  </p>
                  <p className="text-[11px] text-gray-600">
                    Talk to our coordinator for options and pricing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCallOpen(true)}
                  className="shrink-0 rounded-md border border-orange-300 bg-white px-3 py-2 text-xs font-semibold text-orange-600 hover:bg-orange-50 transition uppercase"
                >
                  CALL
                </button>
              </div>
            </div>
          </section>

          {/* Right: request form */}
          <section className="rounded-xl border border-orange-100 bg-white p-5 shadow-md">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">
              REQUEST HOMECARE SERVICE
            </h2>
            <p className="text-[11px] text-gray-500 mb-4">
              Share patient details and type of service required. Our homecare
              coordinator will call you to explain options and pricing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Patient details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Mobile Number (Primary Caregiver)
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    City / Area
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Full Address / Landmark
                </label>
                <textarea
                  rows={2}
                  required
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="House no, street, landmark, locality..."
                />
              </div>

              {/* Service details */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Type of Homecare Service
                </label>
                <select
                  required
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                >
                  <option value="">Select service</option>
                  <option>Nursing Care at Home</option>
                  <option>Trained Attendant / Caretaker</option>
                  <option>Physiotherapy at Home</option>
                  <option>Doctor Visit at Home</option>
                  <option>Home Sample Collection</option>
                  <option>Medical Equipment on Rent</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Support Needed For
                  </label>
                  <select className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400">
                    <option>24 x 7 (Round the clock)</option>
                    <option>Day Shift Only</option>
                    <option>Night Shift Only</option>
                    <option>Few Hours in a Day</option>
                    <option>Not sure, need guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr,0.8fr] gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Expected Duration
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      className="w-20 rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                      placeholder="e.g. 10"
                    />
                    <select className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400">
                      <option>Days</option>
                      <option>Weeks</option>
                      <option>Months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Condition / notes */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Patient condition / brief history
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Diagnosis, main issues (e.g. post-surgery, stroke, dementia, cancer, bed-ridden, etc.)"
                />
              </div>

              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Any special instructions (optional)
                </label>
                <textarea
                  rows={2}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Language preference, male/female staff, timing preference, etc."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5" required />
                <p className="text-[10px] text-gray-600">
                  I agree to receive calls / messages from Aarogya Hospital
                  regarding homecare services, pricing and availability.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
              >
                REQUEST HOMECARE SERVICE
              </button>
            </form>
          </section>
        </div>

        <p className="mt-4 text-[10px] text-gray-400 text-center">
          Homecare services are available in selected locations only. Final
          confirmation will be shared by Aarogya Hospital homecare team.
        </p>
      </div>

      {/* CALL MODAL */}
      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </main>
  );
};

export default HomecareServicesPage;