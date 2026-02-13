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
          Call us to understand the process, fees and how to share your reports.
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

const SecondOpinionPage = () => {
  const navigate = useNavigate();
  const [callOpen, setCallOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your second opinion request has been submitted.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
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
            GET A SECOND OPINION
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            Unsure about a diagnosis or treatment plan? Get a clear second
            opinion from Aarogya Hospital specialists, in simple language.
          </p>

          {/* QUICK CALL CHIPS */}
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

        {/* Main content: left info + right form */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1.2fr] gap-6">
          {/* Left: info / highlights */}
          <section className="space-y-4">
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                When should you ask for a second opinion?
              </h2>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                <li>Major surgery or long-term treatment suggested</li>
                <li>Cancer, heart disease, brain or spine related issues</li>
                <li>Confusion between two different diagnoses</li>
                <li>Symptoms persist even after treatment</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-xs text-gray-700 space-y-1">
              <p className="font-semibold text-gray-900">
                What you will receive:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Review of your case by Aarogya Hospital specialist</li>
                <li>Clear written opinion in simple language</li>
                <li>Suggested treatment options and next steps</li>
                <li>Option for follow-up video consultation</li>
              </ul>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm text-xs text-emerald-800">
              <p className="font-semibold text-emerald-900">Your data is safe</p>
              <p className="mt-1">
                All medical information shared with Aarogya Hospital is kept
                confidential and used only for clinical review.
              </p>
            </div>

            {/* LEFT CTA CARD */}
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase">
                    Need help?
                  </p>
                  <p className="text-[11px] text-gray-600">
                    Call our team to understand the process.
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

          {/* Right: simple form */}
          <section className="rounded-xl border border-orange-100 bg-white p-5 shadow-md">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">
              REQUEST A SECOND OPINION
            </h2>
            <p className="text-[11px] text-gray-500 mb-4">
              Fill basic details. Our team will call you, understand your case
              and guide you on how to share your reports.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
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
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Department / Specialty
                </label>
                <select className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400">
                  <option value="">Select specialty</option>
                  <option>Cardiology (Heart)</option>
                  <option>Oncology (Cancer)</option>
                  <option>Neurology (Brain & Nerves)</option>
                  <option>Orthopaedics (Bone & Joint)</option>
                  <option>Gastroenterology</option>
                  <option>Nephrology (Kidney)</option>
                  <option>General Medicine</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Briefly describe your concern
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Diagnosis received, suggested treatment, your questions..."
                />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-0.5" required />
                <p className="text-[10px] text-gray-600">
                  I agree to share my medical information with Aarogya Hospital
                  specialists for the purpose of second opinion.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
              >
                REQUEST SECOND OPINION
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* CALL MODAL */}
      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
    </main>
  );
};

export default SecondOpinionPage;