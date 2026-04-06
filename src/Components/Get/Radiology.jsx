import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const scanTypes = [
  { id: "ct", label: "CT", detail: "CT Brain, CT Chest, CT Abdomen, etc." },
  { id: "mri", label: "MRI", detail: "MRI Brain, Spine, Joints, etc." },
  {
    id: "ultrasound",
    label: "ULTRASOUND",
    detail: "Abdomen, Pelvis, Pregnancy, etc.",
  },
  { id: "mammo", label: "MAMMOGRAPHY", detail: "Breast screening & evaluation" },
  { id: "xray", label: "X-RAY", detail: "Chest, Spine, Limbs, Joints, etc." },
  { id: "dexa", label: "DEXA", detail: "Bone mineral density" },
  {
    id: "heart",
    label: "HEART SCANS",
    detail: "ECHO, CT Coronary, Stress tests",
  },
  {
    id: "vascular",
    label: "VASCULAR SCANS",
    detail: "Doppler, arterial & venous scans",
  },
  { id: "all", label: "ALL SCANS & IMAGING", detail: "Other radiology services" },
];

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
          Call us for scan availability, preparation instructions, pricing and slot
          confirmation.
        </p>

        <div className="grid gap-2">
          <a
            href={`tel:${PHONE_1_TEL}`}
            className="w-full text-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition uppercase"
          >
            CALL 812001212
          </a>
          <a
            href={`tel:${PHONE_2_TEL}`}
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

const RadiologyServicesPage = () => {
  const navigate = useNavigate();
  const [callOpen, setCallOpen] = useState(false);

  // ✅ WhatsApp modal state
  const [waOpen, setWaOpen] = useState(false);
  const [waMessage, setWaMessage] = useState("");

  // ✅ Form state (no design/content change, only value/onChange + visibility fix)
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [cityArea, setCityArea] = useState("");

  const [scanType, setScanType] = useState("");
  const [scanNames, setScanNames] = useState("");

  const [preferredDate, setPreferredDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const [hasPrescription, setHasPrescription] = useState("Yes");
  const [pregnancyStatus, setPregnancyStatus] = useState("No");

  const [additionalInfo, setAdditionalInfo] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const scanTypeLabel =
      scanTypes.find((s) => s.id === scanType)?.label || "N/A";

    const message = `Hello Aarogya Hospital,

I want to book a scan / imaging.

Patient Name: ${patientName}
Age: ${age || "N/A"}
Mobile Number: ${mobile}
City / Area: ${cityArea || "N/A"}

Scan Type: ${scanTypeLabel}
Exact scan name(s) as per prescription: ${scanNames?.trim() ? scanNames.trim() : "N/A"}

Preferred Date: ${preferredDate || "N/A"}
Preferred Time Slot: ${timeSlot || "N/A"}

Do you have a doctor's prescription?: ${hasPrescription || "N/A"}
Is patient pregnant / possibly pregnant?: ${pregnancyStatus || "N/A"}

Any additional information: ${additionalInfo?.trim() ? additionalInfo.trim() : "N/A"}

Please confirm slot, preparation instructions and pricing.`;

    setWaMessage(message);
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
            RADIOLOGY (2D ECHO), SCANS & IMAGING
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
            CT, MRI, Ultrasound, Mammography, X-Ray, DEXA, Heart and Vascular
            scans – book all your imaging tests at Aarogya Hospital.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px]">
            <span className="px-3 py-1 rounded-full bg-white border border-orange-200 text-orange-600">
              Advanced imaging machines
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-emerald-700">
              Experienced radiologists
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
              Digital reports & films
            </span>
          </div>

          {/* QUICK CALL CHIPS */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <a
              href={`tel:${PHONE_1_TEL}`}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 812001212
            </a>
            <a
              href={`tel:${PHONE_2_TEL}`}
              className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              CALL: 9827198000
            </a>
          </div>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,1.2fr] gap-6">
          {/* Left info blocks */}
          <section className="space-y-4">
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Scans and imaging available
              </h2>
              <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                <li>CT Scans – Brain, Chest, Abdomen, Angiography and more</li>
                <li>MRI – Brain, Spine, Joints, Abdomen, Pelvis, etc.</li>
                <li>Ultrasound – Abdomen, Pelvis, Pregnancy scans, others</li>
                <li>Mammography – Breast screening and diagnostic scans</li>
                <li>X-Ray – Chest, spine, limbs, joints and routine studies</li>
                <li>DEXA – Bone mineral density for osteoporosis check</li>
                <li>Heart scans – Echo, CT Coronary, Stress echo (as per setup)</li>
                <li>Vascular scans – Arterial/venous Doppler and related tests</li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm text-xs text-gray-700 space-y-2">
              <p className="font-semibold text-gray-900">Before you book a scan</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Carry your doctor&apos;s prescription and old reports.</li>
                <li>
                  Inform if you have metal implants, pacemaker or pregnancy
                  (important for MRI / X-Ray / CT).
                </li>
                <li>
                  For some scans you may need fasting or special preparation –
                  our team will guide you.
                </li>
                <li>
                  Contrast scans (CT/MRI) may need blood tests for kidney
                  function as per doctor&apos;s advice.
                </li>
              </ul>
              <p className="text-[11px] text-orange-600 mt-1">
                In case of emergency (severe injury, stroke symptoms, major
                accident, etc.), please go directly to Emergency instead of
                only booking online.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 shadow-sm text-xs text-emerald-800">
              <p className="font-semibold text-emerald-900">
                CLEAR IMAGES, CLEAR REPORTS
              </p>
              <p className="mt-1">
                All scans are done on calibrated machines, and reports are
                prepared by experienced radiologists. Soft copies and films /
                CDs are provided as per requirement.
              </p>
            </div>

            {/* LEFT CTA CARD */}
            <div className="rounded-xl border border-orange-100 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-900 uppercase">
                    Need help choosing the right scan?
                  </p>
                  <p className="text-[11px] text-gray-600">
                    Call our team for guidance and preparation instructions.
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
            <h2 className="text-sm font-semibold text-gray-900 mb-1">BOOK A SCAN</h2>
            <p className="text-[11px] text-gray-500 mb-4">
              Select scan type, and type the exact scan name as per your
              doctor&apos;s prescription. Our team will confirm slot and
              preparation instructions.
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
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
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
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    City / Area
                  </label>
                  <input
                    type="text"
                    value={cityArea}
                    onChange={(e) => setCityArea(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
              </div>

              {/* Scan type grid */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Select scan type (you can select one)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {scanTypes.map((scan) => (
                    <label
                      key={scan.id}
                      className="flex items-start gap-2 rounded-md border border-gray-200 bg-slate-50/70 px-2 py-1.5 text-[11px] text-gray-700 hover:border-orange-300 hover:bg-orange-50/60 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="scanType"
                        value={scan.id}
                        checked={scanType === scan.id}
                        onChange={(e) => setScanType(e.target.value)}
                        className="mt-0.5 h-3.5 w-3.5"
                        required
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-[11px]">
                          {scan.label}
                        </p>
                        <p className="text-[10px] text-gray-500">{scan.detail}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Scan name typing */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Exact scan name(s) as per prescription
                </label>
                <textarea
                  rows={3}
                  required
                  value={scanNames}
                  onChange={(e) => setScanNames(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Example: CT Brain Plain, MRI Lumbar Spine with contrast, Ultrasound Whole Abdomen, X-Ray Chest PA View, etc."
                />
                <p className="mt-1 text-[10px] text-gray-500">
                  Please write all scans recommended by your doctor. If unsure,
                  mention &quot;Need help to understand prescription&quot;.
                </p>
              </div>

              {/* Date & time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option value="">Select time slot</option>
                    <option>08:00 AM – 10:00 AM</option>
                    <option>10:00 AM – 12:00 PM</option>
                    <option>12:00 PM – 02:00 PM</option>
                    <option>02:00 PM – 04:00 PM</option>
                    <option>04:00 PM – 06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Prescription info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Do you have a doctor&apos;s prescription?
                  </label>
                  <select
                    value={hasPrescription}
                    onChange={(e) => setHasPrescription(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option>Yes</option>
                    <option>No, need guidance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] text-gray-600 mb-1">
                    Is patient pregnant / possibly pregnant?
                  </label>
                  <select
                    value={pregnancyStatus}
                    onChange={(e) => setPregnancyStatus(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option>No</option>
                    <option>Yes</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>

              {/* Additional notes */}
              <div>
                <label className="block text-[11px] text-gray-600 mb-1">
                  Any additional information (optional)
                </label>
                <textarea
                  rows={2}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
                  placeholder="Diabetes, kidney issues, previous contrast reaction, difficulty lying down, etc."
                />
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-0.5"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <p className="text-[10px] text-gray-600">
                  I agree to receive calls / messages from Aarogya Hospital
                  regarding my scan booking, preparation instructions, pricing
                  and confirmation.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-1 inline-flex items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition"
              >
                REQUEST BOOKING
              </button>
            </form>
          </section>
        </div>

        <p className="mt-4 text-[10px] text-gray-400 text-center">
          Final slot, pricing and preparation instructions will be confirmed by
          Aarogya Hospital radiology team based on your doctor&apos;s
          prescription and scan type.
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

export default RadiologyServicesPage;