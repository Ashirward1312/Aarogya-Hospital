import React, { useState, useEffect } from "react";
import {
  FiUser,
  FiPhoneCall,
  FiCalendar,
  FiClock,
  FiSend,
  FiActivity,
  FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    department: "",
    customDepartment: "",
    doctorPreference: "",
    date: "",
    timeSlot: "",
    customTimeSlot: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      department:
        formData.department === "other" && formData.customDepartment
          ? formData.customDepartment
          : formData.department,
      timeSlot:
        formData.timeSlot === "custom" && formData.customTimeSlot
          ? formData.customTimeSlot
          : formData.timeSlot,
    };

    console.log("Appointment request:", payload);

    alert(
      "Your appointment request has been submitted. We will contact you shortly."
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-[#F04E30]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-slate-300/35 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-40 h-px bg-gradient-to-r from-transparent via-[#F04E30]/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Back to home */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-md shadow-slate-100 backdrop-blur-sm transition-all duration-200 hover:-translate-x-[2px] hover:border-[#F04E30] hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-200"
        >
          <FiArrowLeft className="text-sm text-[#F04E30]" />
          <span>Back to Home</span>
        </Link>

        {/* Header card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:p-7">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F04E30]/20 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F04E30]/18 blur-3xl" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#F04E30]/30 bg-[#F04E30]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F04E30]">
                Book an Appointment
              </p>
              <h1 className="mt-4 text-2xl font-semibold uppercase tracking-[0.18em] text-slate-900 sm:text-[26px]">
                Schedule Your Visit at Aarogya Hospital
              </h1>
              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                Share your details and preferred date &amp; time. Our team will
                review your request and confirm your appointment over call or
                message as per doctor availability.
              </p>
            </div>

            <div className="mt-2 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-3 py-2.5 sm:max-w-xs">
              <div className="mt-[2px] flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600 ring-1 ring-red-200">
                <FiActivity className="text-base" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-red-700">
                  Emergency?
                </p>
                <p className="mt-1 text-[11px] text-red-600">
                  For any medical emergency, please do not use this form.
                  Contact the hospital emergency numbers directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-6 lg:p-7">
            {/* top gradient bar */}
            <div className="absolute inset-x-6 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-[#F04E30] via-[#F04E30] to-[#d54428]" />

            <form onSubmit={handleSubmit} className="mt-3 space-y-5 text-xs">
              {/* Section title */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Patient Details
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Please provide accurate contact details so our team can
                    reach you without any delay.
                  </p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-[10px] text-slate-600 ring-1 ring-slate-200">
                  Fields marked as required must be filled
                </div>
              </div>

              {/* Patient details */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="group">
                  <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <FiUser className="text-[13px] text-[#F04E30]" />
                    <span>Full Name</span>
                    <span className="ml-1 text-[10px] font-normal text-slate-500">
                      (Required)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter patient's full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  />
                </div>

                <div className="group">
                  <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <FiPhoneCall className="text-[13px] text-[#F04E30]" />
                    <span>Mobile Number</span>
                    <span className="ml-1 text-[10px] font-normal text-slate-500">
                      (Required)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 98765 43210"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  />
                </div>
              </div>

              {/* Email + Department */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="group">
                  <label className="mb-1.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <span>Email</span>
                    <span className="text-[10px] font-normal text-slate-500">
                      Optional
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  />
                </div>

                <div className="group">
                  <label className="mb-1.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <span>Department</span>
                    <span className="text-[10px] font-normal text-slate-500">
                      Required
                    </span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  >
                    <option value="">Select department</option>
                    <option value="gyne">
                      Obstetrics, Gynecology &amp; Infertility
                    </option>
                    <option value="ivf">IVF &amp; Test Tube Baby</option>
                    <option value="surgery">
                      Laparoscopic &amp; General Surgery
                    </option>
                    <option value="medicine">Internal Medicine</option>
                    <option value="ortho">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="other">Other (type manually)</option>
                  </select>

                  {formData.department === "other" && (
                    <input
                      type="text"
                      name="customDepartment"
                      value={formData.customDepartment}
                      onChange={handleChange}
                      required
                      placeholder="Write department name"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                    />
                  )}
                </div>
              </div>

              {/* Doctor + Date + Time */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="group">
                  <label className="mb-1.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <span>Doctor Preference</span>
                    <span className="text-[10px] font-normal text-slate-500">
                      Optional
                    </span>
                  </label>
                  <input
                    type="text"
                    name="doctorPreference"
                    value={formData.doctorPreference}
                    onChange={handleChange}
                    placeholder="Any specific doctor name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  />
                </div>

                <div className="group">
                  <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <FiCalendar className="text-[13px] text-[#F04E30]" />
                    <span>Preferred Date</span>
                    <span className="ml-1 text-[10px] font-normal text-slate-500">
                      Required
                    </span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  />
                </div>

                <div className="group">
                  <label className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                    <FiClock className="text-[13px] text-[#F04E30]" />
                    <span>Preferred Time Slot</span>
                    <span className="ml-1 text-[10px] font-normal text-slate-500">
                      Required
                    </span>
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                  >
                    <option value="">Select time slot</option>
                    <option value="morning">
                      09:00 AM – 11:00 AM (Morning)
                    </option>
                    <option value="midday">11:00 AM – 02:00 PM</option>
                    <option value="evening">
                      05:00 PM – 08:00 PM (Evening)
                    </option>
                    <option value="custom">Custom time (type manually)</option>
                  </select>

                  {formData.timeSlot === "custom" && (
                    <input
                      type="text"
                      name="customTimeSlot"
                      value={formData.customTimeSlot}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 03:30 PM – 04:00 PM"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                    />
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="mb-1.5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors duration-200 group-focus-within:text-[#F04E30]">
                  <span>Brief Description / Concern</span>
                  <span className="text-[10px] font-normal text-slate-500">
                    Required
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Briefly describe your concern, symptoms or reason for visit..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-[12px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:-translate-y-[1px] focus:border-[#F04E30] focus:bg-white focus:ring-1 focus:ring-[#F04E30]/60"
                />
              </div>

              {/* Note + Submit */}
              <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-[10px] text-slate-500">
                  Appointment requests are subject to doctor availability. Our
                  team will contact you via phone/SMS to confirm exact time and
                  consulting doctor. Please keep your phone reachable.
                </p>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#F04E30] via-[#F04E30] to-[#d54428] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#F04E30]/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#F04E30]/60 focus:outline-none focus:ring-2 focus:ring-[#F04E30]/70 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-white/50 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-10 group-hover:opacity-100" />

                  <FiSend className="text-sm transition-transform duration-300 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
                  <span>SUBMIT REQUEST</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentPage;