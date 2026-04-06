// src/Components/BookTest/BookTestPage.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const commonTests = [
  "CBC (Complete Blood Count)",
  "Fasting Blood Sugar (FBS)",
  "PP Blood Sugar",
  "HbA1c",
  "Lipid Profile",
  "Liver Function Test (LFT)",
  "Kidney Function Test (KFT)",
  "Thyroid Profile (T3, T4, TSH)",
  "Vitamin D",
  "Vitamin B12",
  "Urine Routine",
  "Complete Urine Examination",
];

// ✅ WhatsApp numbers (wa.me format without +)
const WHATSAPP_1 = "919827198000"; // +91 98271 98000
const WHATSAPP_2 = "918120012121"; // +91 81200 12121

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
          Call us for test pricing, fasting instructions, and time-slot
          confirmation.
        </p>

        <div className="grid gap-2">
          <a
            href="tel:+918120012121"
            className="w-full text-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition uppercase"
          >
            CALL 81200 12121
          </a>

          <a
            href="tel:+919827198000"
            className="w-full text-center rounded-md border border-orange-300 bg-white px-4 py-2 text-xs font-semibold text-orange-600 hover:bg-orange-50 transition uppercase"
          >
            CALL 98271 98000
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
  WHATSAPP MODAL (2 numbers)
--------------------------------------------- */
const WhatsAppModal = ({ open, onClose, message }) => {
  if (!open) return null;

  const openWhatsApp = (number) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase">
            SEND ON WHATSAPP
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
          Dono numbers par bhejna ho to dono buttons ek-ek karke click kar do.
        </p>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 mb-4">
          <p className="text-[11px] font-semibold text-gray-500 uppercase mb-1">
            Preview
          </p>
          <pre className="whitespace-pre-wrap text-[11px] text-gray-800 leading-relaxed">
            {message}
          </pre>
        </div>

        <div className="grid gap-2">
          <button
            type="button"
            onClick={() => openWhatsApp(WHATSAPP_1)}
            className="w-full text-center rounded-md bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700 transition uppercase"
          >
            WHATSAPP 98271 98000
          </button>

          <button
            type="button"
            onClick={() => openWhatsApp(WHATSAPP_2)}
            className="w-full text-center rounded-md border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-700 hover:bg-green-50 transition uppercase"
          >
            WHATSAPP 81200 12121
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition uppercase"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

const BookTestPage = () => {
  const navigate = useNavigate();
  const [callOpen, setCallOpen] = useState(false);

  // ✅ WhatsApp modal state
  const [waOpen, setWaOpen] = useState(false);
  const [waMessage, setWaMessage] = useState("");

  // ✅ form state (so message can be generated)
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    mobile: "",
    city: "",
    collectionType: "Home Sample Collection",
    preferredDate: "",
    otherTests: "",
    notes: "",
    consent: false,
  });

  const [selectedTests, setSelectedTests] = useState([]);

  const toggleTest = (test) => {
    setSelectedTests((prev) =>
      prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const cleanList = (arr) => arr.filter(Boolean).join(", ");

  const whatsappText = useMemo(() => {
    const testsLine =
      selectedTests.length > 0 ? cleanList(selectedTests) : "N/A";

    return `Hello Aarogya Hospital,

I want to book a lab test.

PATIENT NAME: ${form.patientName}
AGE: ${form.age || "N/A"}
MOBILE: ${form.mobile}
CITY/AREA: ${form.city || "N/A"}

COLLECTION TYPE: ${form.collectionType}
PREFERRED DATE: ${form.preferredDate || "N/A"}

COMMON TESTS: ${testsLine}

OTHER TESTS (TYPED): ${form.otherTests?.trim() ? form.otherTests.trim() : "N/A"}

ADDITIONAL INFO: ${form.notes?.trim() ? form.notes.trim() : "N/A"}

Please confirm pricing, fasting instructions and time slot.`;
  }, [form, selectedTests]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.consent) return; // safety
    setWaMessage(whatsappText);
    setWaOpen(true);
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
            BOOK A LAB TEST
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Book common blood tests, health check reports and more at Aarogya
            Hospital. Choose from popular tests or type your own test names.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px]">
            <span className="px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600">
              Home sample collection available*
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700">
              NABL / NABH associated labs
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
              Reports shared on WhatsApp / Email
            </span>
          </div>

          {/* Quick call links */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <a
              href="tel:+918120012121"
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 81200 12121
            </a>
            <a
              href="tel:+919827198000"
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 98271 98000
            </a>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1.2fr] gap-6">
          {/* Left info block */}
          <section className="space-y-4">
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Popular tests at Aarogya Hospital
              </h2>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                <li>Routine health check tests (CBC, sugar, thyroid, etc.)</li>
                <li>Cholesterol and heart-related tests (Lipid profile)</li>
                <li>Liver and kidney function tests</li>
                <li>Diabetes monitoring (FBS / PP / HbA1c)</li>
                <li>Vitamin levels (Vitamin D, B12, etc.)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-xs text-gray-700 space-y-2">
              <p className="font-semibold text-gray-900">
                How test booking works
              </p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Select tests from the list or type your own tests.</li>
                <li>Choose home collection or visit lab option.</li>
                <li>Our team calls you to confirm date, time and pricing.</li>
                <li>Sample is collected and reports are shared digitally.</li>
              </ol>
              <p className="text-[11px] text-orange-600 mt-1">
                For urgent / emergency situations, please visit the hospital
                directly instead of only booking tests online.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm text-xs text-emerald-800">
              <p className="font-semibold text-emerald-900">
                ACCURATE AND RELIABLE REPORTS
              </p>
              <p className="mt-1">
                Tests are conducted in quality controlled labs associated with
                Aarogya Hospital. All processes follow standard medical
                guidelines.
              </p>
            </div>

            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase">
                    Need help selecting tests?
                  </p>
                  <p className="text-[11px] text-gray-600">
                    Talk to our team for guidance and pricing.
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

          {/* Right: booking form */}
          <section className="rounded-xl border border-orange-100 bg-white p-5 shadow-md">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">
              BOOK YOUR TEST
            </h2>
            <p className="text-[11px] text-gray-500 mb-4">
              Form submit करने के बाद WhatsApp पर message भेजने का option आएगा.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Patient details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Patient Name
                  </label>
                  <input
                    name="patientName"
                    value={form.patientName}
                    onChange={handleChange}
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Enter patient name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Age
                  </label>
                  <input
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    type="number"
                    min="0"
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. 35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Mobile Number
                  </label>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    type="tel"
                    required
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="e.g. 98xxxxxx00"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    City / Area
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    type="text"
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                    placeholder="Raipur / Shankar Nagar..."
                  />
                </div>
              </div>

              {/* Collection type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Collection Type
                  </label>
                  <select
                    name="collectionType"
                    value={form.collectionType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option>Home Sample Collection</option>
                    <option>Visit Lab / Hospital</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Preferred Date
                  </label>
                  <input
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    type="date"
                    className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              {/* Common tests (checkboxes) */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Select common tests (optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto border border-gray-200 rounded-md p-2 bg-slate-50/60">
                  {commonTests.map((test) => (
                    <label
                      key={test}
                      className="flex items-center gap-2 text-[11px] text-gray-700"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTests.includes(test)}
                        onChange={() => toggleTest(test)}
                        className="h-3.5 w-3.5"
                      />
                      <span>{test}</span>
                    </label>
                  ))}
                </div>
                <p className="mt-1 text-[10px] text-gray-500">
                  You can select one or more tests from this list.
                </p>
              </div>

              {/* Custom tests */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Other tests (type here)
                </label>
                <textarea
                  name="otherTests"
                  value={form.otherTests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Example: Serum Iron, CRP, D-Dimer, etc..."
                />
                <p className="mt-1 text-[10px] text-gray-500">
                  Write exact test names as written on your prescription for
                  accurate booking.
                </p>
              </div>

              {/* Extra notes */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Any additional information (optional)
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={2}
                  className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Fasting/non-fasting, morning/evening preference, etc..."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  type="checkbox"
                  className="mt-0.5"
                  required
                />
                <p className="text-[10px] text-gray-600">
                  I agree to receive calls / messages from Aarogya Hospital
                  regarding my test booking, pricing and confirmation.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
              >
                SEND ON WHATSAPP
              </button>
            </form>
          </section>
        </div>

        <p className="mt-4 text-[10px] text-gray-400 text-center">
          *Home collection available in selected areas only. Final confirmation
          will be shared by Aarogya Hospital team.
        </p>
      </div>

      {/* MODALS */}
      <CallModal open={callOpen} onClose={() => setCallOpen(false)} />
      <WhatsAppModal
        open={waOpen}
        onClose={() => setWaOpen(false)}
        message={waMessage}
      />
    </main>
  );
};

export default BookTestPage;