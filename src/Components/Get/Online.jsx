import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ✅ NUMBERS */
const PHONE_1_TEL = "+918120012121"; // 81200 12121
const PHONE_2_TEL = "+919827198000"; // 98271 98000

// ✅ WhatsApp (wa.me format without +)
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
          Call us for slot availability, fees, and consultation confirmation.
        </p>

        <div className="grid gap-2">
          <a
            href={`tel:${PHONE_1_TEL}`}
            className="w-full text-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition uppercase"
          >
            CALL 81200 12121
          </a>

          <a
            href={`tel:${PHONE_2_TEL}`}
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
  WHATSAPP MODAL (SEND)
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
          Choose a WhatsApp number to send your request.
        </p>

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
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full text-center rounded-md border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition uppercase"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

const VirtualConsultationPage = () => {
  const navigate = useNavigate();
  const [callOpen, setCallOpen] = useState(false);

  // ✅ WhatsApp modal state
  const [waOpen, setWaOpen] = useState(false);
  const [waMessage, setWaMessage] = useState("");

  // ✅ form state (design/content same, only value/onChange added)
  const [form, setForm] = useState({
    patientName: "",
    age: "",
    mobile: "",
    city: "",
    specialty: "",
    consultType: "New Consultation",
    mode: "Video Call",
    preferredDate: "",
    timeSlot: "",
    concern: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `Hello Aarogya Hospital,

I want to book a virtual consultation.

Patient Name: ${form.patientName}
Age: ${form.age || "N/A"}
Mobile Number: ${form.mobile}
City: ${form.city || "N/A"}

Department / Specialty: ${form.specialty || "N/A"}
Consultation Type: ${form.consultType || "N/A"}
Mode: ${form.mode || "N/A"}

Preferred Date: ${form.preferredDate || "N/A"}
Preferred Time Slot: ${form.timeSlot || "N/A"}

Concern: ${form.concern?.trim() ? form.concern.trim() : "N/A"}

Please confirm slot availability and consultation fees.`;

    setWaMessage(msg);
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
            BOOK A VIRTUAL CONSULTATION
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            Consult Aarogya Hospital doctors from the comfort of your home via
            video or audio call. Simple, safe and convenient.
          </p>

          {/* small highlights */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px]">
            <span className="px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600">
              Same-day slots (subject to availability)
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700">
              Video / Audio consultation
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
              Digital prescription on WhatsApp / Email
            </span>
          </div>

          {/* QUICK CALL CHIPS */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <a
              href={`tel:${PHONE_1_TEL}`}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 81200 12121
            </a>
            <a
              href={`tel:${PHONE_2_TEL}`}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 98271 98000
            </a>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1.2fr] gap-6">
          {/* Left info / steps */}
          <section className="space-y-4">
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                How virtual consultation works
              </h2>
              <ol className="list-decimal list-inside text-xs text-gray-700 space-y-1">
                <li>Fill your basic details and health concern.</li>
                <li>Select preferred specialty, date and time slot.</li>
                <li>Our team confirms your appointment on call / WhatsApp.</li>
                <li>Join the video / audio call link sent to you.</li>
                <li>Get e-prescription and further advice from doctor.</li>
              </ol>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-xs text-gray-700 space-y-2">
              <p className="font-semibold text-gray-900">
                When is virtual consultation suitable?
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Mild to moderate symptoms (fever, cough, body ache, stomach
                  issues, etc.)
                </li>
                <li>Follow-up after a previous hospital visit</li>
                <li>Review of ongoing treatment or reports</li>
                <li>Chronic disease follow-up (diabetes, BP, thyroid, etc.)</li>
              </ul>
              <p className="text-[11px] text-orange-600 mt-1">
                In case of emergency (severe chest pain, breathlessness, loss of
                consciousness, major injury etc.), please visit Emergency
                directly instead of online consultation.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm text-xs text-emerald-800">
              <p className="font-semibold text-emerald-900">
                YOUR CONSULTATION IS PRIVATE
              </p>
              <p className="mt-1">
                All virtual consultations are done by Aarogya Hospital doctors.
                Your information is kept confidential and secure.
              </p>
            </div>

            {/* LEFT CTA CARD */}
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase">
                    Need quick help?
                  </p>
                  <p className="text-[11px] text-gray-600">
                    Talk to our team to confirm slots and fees.
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
              BOOK YOUR VIRTUAL APPOINTMENT
            </h2>
            <p className="text-[11px] text-gray-500 mb-4">
              Fill in your details below. Our team will call you to confirm the
              exact time and share the meeting link.
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
                    name="patientName"
                    required
                    value={form.patientName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
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
                    name="mobile"
                    required
                    value={form.mobile}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              {/* Consultation details */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Department / Specialty
                </label>
                <select
                  name="specialty"
                  value={form.specialty}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                >
                  <option value="">Select specialty</option>
                  <option>General Physician</option>
                  <option>Cardiology (Heart)</option>
                  <option>Neurology (Brain & Nerves)</option>
                  <option>Orthopaedics (Bone & Joint)</option>
                  <option>Paediatrics (Child Specialist)</option>
                  <option>Gastroenterology</option>
                  <option>Dermatology (Skin)</option>
                  <option>Psychiatry / Mental Health</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Consultation Type
                  </label>
                  <select
                    name="consultType"
                    value={form.consultType}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option>New Consultation</option>
                    <option>Follow-up Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Mode
                  </label>
                  <select
                    name="mode"
                    value={form.mode}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option>Video Call</option>
                    <option>Audio Call</option>
                  </select>
                </div>
              </div>

              {/* Date & time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    name="timeSlot"
                    value={form.timeSlot}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option value="">Select time slot</option>
                    <option>09:00 AM – 11:00 AM</option>
                    <option>11:00 AM – 01:00 PM</option>
                    <option>02:00 PM – 04:00 PM</option>
                    <option>04:00 PM – 06:00 PM</option>
                    <option>06:00 PM – 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Concern */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Briefly describe your concern
                </label>
                <textarea
                  rows={3}
                  name="concern"
                  value={form.concern}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Main symptoms, duration, any diagnosis or treatment already started..."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-0.5"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                />
                <p className="text-[10px] text-gray-600">
                  I understand that this is a virtual consultation and not a
                  substitute for emergency care. I agree to receive calls /
                  messages from Aarogya Hospital regarding my appointment.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
              >
                BOOK VIRTUAL CONSULTATION
              </button>
            </form>
          </section>
        </div>
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

export default VirtualConsultationPage;