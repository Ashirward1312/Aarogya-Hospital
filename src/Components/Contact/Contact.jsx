import React, { useMemo, useState } from "react";
import { FiPhoneCall, FiMapPin, FiClock, FiSend } from "react-icons/fi";

/* -----------------------------
WHATSAPP CONFIG
(wa.me me + nahi aata)
----------------------------- */
const WHATSAPP_1 = "919827198000"; // +91 98271 98000
const WHATSAPP_2 = "918120012121"; // +91 81200 12121

/* -----------------------------
WHATSAPP MODAL (2 NUMBERS)
----------------------------- */
const WhatsAppModal = ({ open, onClose, message }) => {
  if (!open) return null;

  const openWhatsApp = (number) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-slate-900 uppercase">
            SEND ON WHATSAPP
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="h-7 w-7 flex items-center justify-center rounded-full border border-slate-200 text-xs text-slate-500 hover:bg-slate-50"
          >
            ×
          </button>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 mb-4">
          <p className="text-[11px] font-semibold text-slate-500 uppercase mb-1">
            Preview
          </p>
          <pre className="whitespace-pre-wrap text-[11px] text-slate-700 leading-relaxed">
            {message}
          </pre>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <button
            type="button"
            onClick={() => openWhatsApp(WHATSAPP_1)}
            className="w-full rounded-md bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700 transition uppercase"
          >
            WhatsApp 98271 98000
          </button>

          <button
            type="button"
            onClick={() => openWhatsApp(WHATSAPP_2)}
            className="w-full rounded-md border border-green-200 bg-white px-4 py-2 text-xs font-semibold text-green-700 hover:bg-green-50 transition uppercase"
          >
            WhatsApp 81200 12121
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  //  Meta Title + Meta Description + Canonical + OG (added)
  React.useEffect(() => {
    const pageTitle = "Book Consultation | Aarogya Hospital Shankar Nagar Raipur";

    const descriptionContent =
      "Contact Aarogya Hospital in Raipur for appointments, medical consultation, and emergency healthcare services. Call now or visit our hospital.";

    const canonicalUrl = "https://www.aarogyahospitalraipur.com/contact";

    document.title = pageTitle;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", descriptionContent);

    //  Canonical Tag (CONTACT)
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    //  Open Graph (OG)
    const setOg = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOg("og:type", "website");
    setOg("og:url", "https://www.aarogyahospitalraipur.com/contact");
    setOg("og:title", "Book Consultation | Aarogya Hospital Shankar Nagar Raipur");
    setOg("og:description", "Contact Aarogya Hospital in Raipur for appointments, medical consultation, and emergency healthcare services. Call now or visit our hospital.");
    setOg(
      "og:image",
      "https://www.aarogyahospitalraipur.com/assets/logo1-BEkNzzrJ.jpg"
    );
    setOg("og:site_name", "Aarogya Hospital Raipur");
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // WhatsApp modal states
  const [waOpen, setWaOpen] = useState(false);

  const waMessage = useMemo(() => {
    return `Hello Aarogya Hospital,

I want to contact you.

NAME: ${formData.fullName}
MOBILE: ${formData.phone}
EMAIL: ${formData.email || "N/A"}

MESSAGE:
${formData.message}`;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setWaOpen(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 overflow-hidden">
      {/* Soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#F04E30]/18 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-60px] h-64 w-64 rounded-full bg-slate-400/25 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F04E30]/30 bg-white/90 px-4 py-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F04E30]" />
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#F04E30] uppercase">
              AAROGYA HOSPITAL – RAIPUR
            </p>
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            CONTACT US
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            For appointments, general queries or feedback, fill the form below
            or connect with us directly on the numbers given.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1fr] gap-8 lg:gap-10 items-start">
          {/* LEFT: Form card */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">
                SEND US A MESSAGE
              </h3>
              {submitted && (
                <span className="text-[11px] text-emerald-600 font-semibold">
                  Request received
                </span>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.12em]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#F04E30] focus:border-[#F04E30]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.12em]">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#F04E30] focus:border-[#F04E30]"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.12em]">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#F04E30] focus:border-[#F04E30]"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-[0.12em]">
                  Message / Concern
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#F04E30] focus:border-[#F04E30] resize-vertical"
                  placeholder="Appointment request, health concern or any specific query..."
                />
              </div>

              {/* Submit + small note */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F04E30] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm shadow-[#F04E30]/40 hover:bg-[#d54428] focus:outline-none focus:ring-2 focus:ring-[#F04E30] focus:ring-offset-1 focus:ring-offset-slate-50"
                >
                  <FiSend className="text-base" />
                  <span>SEND MESSAGE</span>
                </button>
                <p className="text-[10px] text-slate-500">
                  This form is for non‑emergency queries only. For urgent care,
                  please call the hospital directly.
                </p>
              </div>
            </form>
          </div>

          {/* RIGHT: Info + Map */}
          <div className="space-y-5">
            {/* Contact info card */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F04E30]/10 text-[#F04E30]">
                  <FiPhoneCall className="text-base" />
                </span>
                <span>HOSPITAL CONTACT DETAILS</span>
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="mt-0.5">
                    <FiPhoneCall className="text-lg text-[#F04E30]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em] mb-1">
                      Contact Numbers
                    </p>

                    <p className="font-semibold text-slate-900">
                      <a
                        href="tel:+917714044115"
                        className="text-[#F04E30] hover:underline"
                      >
                        0771 4044115
                      </a>
                      <span className="text-slate-400"> , </span>
                      <a
                        href="tel:+917714265115"
                        className="text-[#F04E30] hover:underline"
                      >
                        0771 4265115
                      </a>
                    </p>

                    <p className="mt-2 text-sm">
                      <span className="text-slate-600">Mobile: </span>
                      <a
                        href="tel:+919827198000"
                        className="font-semibold text-[#F04E30] hover:underline"
                      >
                        +91 98271 98000
                      </a>
                      <span className="text-slate-400"> , </span>
                      <a
                        href="tel:+918120012121"
                        className="font-semibold text-[#F04E30] hover:underline"
                      >
                        +91 81200 12121
                      </a>
                    </p>

                    {/* WhatsApp quick links */}
                    <p className="mt-2 text-[12px]">
                      <span className="text-slate-600">WhatsApp: </span>
                      <a
                        href={`https://wa.me/${WHATSAPP_1}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-emerald-700 hover:underline"
                      >
                        98271 98000
                      </a>
                      <span className="text-slate-400"> , </span>
                      <a
                        href={`https://wa.me/${WHATSAPP_2}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-emerald-700 hover:underline"
                      >
                        81200 12121
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="mt-0.5">
                    <FiMapPin className="text-lg text-slate-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em] mb-1">
                      Address
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Road from Shankar Nagar to Avantibai Chowk (Lodhipara),
                      <br />
                      <span className="font-semibold">
                        Shankar Nagar, Raipur, Chhattisgarh, India
                      </span>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="mt-0.5">
                    <FiClock className="text-lg text-slate-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.14em] mb-1">
                      OPD / Visiting Hours
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Please call the hospital to confirm OPD schedules, doctor
                      availability and visiting timings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map card */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden">
              <p className="px-4 py-2.5 text-[11px] font-semibold text-[#F04E30] border-b border-slate-200 bg-slate-50 uppercase tracking-[0.16em]">
                Location Map
              </p>
              <div className="h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.40124538080124!2d81.6622531739687!3d21.254839115280692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd6f16e2ac29%3A0x739a132e13d1f0c8!2sAarogya%20Hospital%20%26%20Test%20Tube%20Baby%20Center!5e0!3m2!1sen!2sin!4v1767352740242!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aarogya Hospital – Super Speciality Hospital Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-[11px] text-slate-500 max-w-2xl mx-auto">
          Messages submitted through this form are checked during working hours.
          For emergency or urgent medical help, please use the phone numbers
          above or visit the hospital emergency directly.
        </p>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        open={waOpen}
        onClose={() => setWaOpen(false)}
        message={waMessage}
      />
    </section>
  );
};

export default ContactSection;