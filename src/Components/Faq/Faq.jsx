import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I book an OPD appointment at Aarogya Hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book an OPD appointment at Aarogya Hospital through our official website or by contacting the hospital directly. The OPD / Appointment section on the website provides information about doctor availability and consultation timings. You can call the listed contact numbers to schedule an appointment at your preferred time."
      }
    },
    {
      "@type": "Question",
      name: "Which payment methods are accepted at Aarogya Hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aarogya Hospital, Raipur accepts both cash and cashless payments. You can make payments using cash, debit cards, credit cards, UPI, or internet banking depending on your convenience."
      }
    },
    {
      "@type": "Question",
      name: "Is health insurance mandatory for treatment at Aarogya Hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, health insurance is not mandatory. Patients can pay hospital expenses directly. However, if you have a valid health insurance policy, you may check with the hospital billing desk for cashless treatment or reimbursement options."
      }
    },
    {
      "@type": "Question",
      name: "What rights does a patient have in a hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Patients have several important rights during their treatment in a hospital, including: Right to receive medical care during emergencies, Access to their medical records and reports, Non-discrimination in medical treatment, Right to privacy and confidentiality, Right to give informed consent before any procedure."
      }
    },
    {
      "@type": "Question",
      name: "What documents should I bring when visiting the hospital for treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When visiting the hospital for treatment, you should carry the following documents: A valid photo ID (Aadhaar Card, Driving License, Voter ID, Passport, etc.), Previous medical records or investigation reports (if available), Health insurance card or policy documents (if you plan to use insurance), Contact details of a family member or attendant for emergency communication."
      }
    }
  ]
};

const FAQ_ITEMS = [
  {
    question: "How can I book an OPD appointment at Aarogya Hospital?",
    answer: (
      <>
        You can book an OPD appointment at Aarogya Hospital through our
        official website or by contacting the hospital directly.
      </>
    )
  },
  {
    question: "Which payment methods are accepted at Aarogya Hospital?",
    answer: (
      <>
        Aarogya Hospital accepts cash, debit cards, credit cards, UPI,
        and internet banking.
      </>
    )
  },
  {
    question: "Is health insurance mandatory for treatment at Aarogya Hospital?",
    answer: (
      <>
        No, health insurance is not mandatory. Patients can pay directly
        or use insurance if available.
      </>
    )
  },
  {
    question: "What rights does a patient have in a hospital?",
    answer: (
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Right to receive medical care during emergencies</li>
        <li>Access to their medical records</li>
        <li>Non-discrimination in treatment</li>
        <li>Right to privacy</li>
        <li>Right to informed consent</li>
      </ul>
    )
  },
  {
    question: "What documents should I bring when visiting the hospital?",
    answer: (
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>Valid photo ID</li>
        <li>Previous medical records</li>
        <li>Health insurance card (if applicable)</li>
        <li>Emergency contact details</li>
      </ul>
    )
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <>
      {/* FAQ Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="faq"
        className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200"
      >
        <div className="mx-auto max-w-5xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F04E30]">
              FAQs
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Find quick answers to common questions about OPD appointments,
              payments, insurance, and hospital visits at Aarogya Hospital,
              Raipur.
            </p>
          </div>

          <div className="mt-8 space-y-3 sm:space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">
                      {item.question}
                    </span>

                    <FiChevronDown
                      className={`shrink-0 text-lg text-[#F04E30] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 sm:px-5 sm:py-4 sm:text-sm">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
};

export default FaqSection;