import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ_ITEMS = [
  {
    question: "How can I book an OPD appointment with Aarogya Hospital?",
    answer: (
      <>
        On the Aarogya Hospital page or our official website, you will find an
        OPD / Appointment section where the consultation timings of the
        hospital are mentioned. This section also contains the contact details
        of the hospital so that you can consult Aarogya Hospital doctors for
        your medical issues. You can call the mentioned numbers and book a
        preferred OPD appointment slot at Aarogya Hospital.
      </>
    ),
  },
  {
    question: "Which modes of payment are accepted at Aarogya Hospital?",
    answer: (
      <>
        Aarogya Hospital, Raipur accepts payments in both cash and cashless /
        online forms. You can make your payment in cash or using online modes
        such as debit card, credit card, UPI and internet banking.
      </>
    ),
  },
  {
    question: "Is insurance mandatory for admission to Aarogya Hospital?",
    answer: (
      <>
        No, insurance is not mandatory for admission. You can choose to pay the
        hospital expenses out of your own pocket. If you have a valid health
        insurance policy, you may check with the hospital billing desk for
        applicable cashless or reimbursement options.
      </>
    ),
  },
  {
    question: "What is a patient entitled to in a hospital?",
    answer: (
      <>
        Patients have the following basic rights in a hospital:
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Medical care during emergency</li>
          <li>Access to medical records and reports</li>
          <li>Non‑discrimination in treatment</li>
          <li>Right to privacy and confidentiality</li>
          <li>Informed consent before procedures</li>
        </ul>
      </>
    ),
  },
  {
    question: "What general documents do I need for hospital admission?",
    answer: (
      <>
        You should carry:
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            A valid photo identification proof (e.g. Aadhaar, Driver&apos;s
            License, Voter ID, Passport, etc.)
          </li>
          <li>Previous medical records and investigation reports (if any)</li>
          <li>
            Health insurance card / policy documents (if you wish to use
            insurance)
          </li>
          <li>
            Contact details of a close family member / attendant for emergency
            communication
          </li>
        </ul>
      </>
    ),
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-16 sm:py-20 border-t border-slate-200"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading – centered */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F04E30]">
            FAQs
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Find quick answers to common questions about OPD appointments,
            payments, insurance and admission at Aarogya Hospital, Raipur.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-8 space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                {/* Question row */}
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

                {/* Answer */}
                {isOpen && (
                  <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 sm:px-5 sm:py-4 sm:text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[11px] text-slate-600">
          If your query is not listed here, please call{" "}
          <a
            href="tel:+919827198000"
            className="font-semibold text-[#F04E30] hover:text-[#d54428]"
          >
            +91 98271 98000
          </a>{" "}
          or use the contact form on this website.
        </p>
      </div>
    </section>
  );
};

export default FaqSection;