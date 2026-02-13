import React from "react";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId) => {
    // Agar home page par nahi ho, pehle home par jao
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      // Thoda delay taaki home render ho jaye, phir scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already home par ho to direct scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-100 text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top call-to-action */}
        <div className="mb-8 flex flex-col items-start justify-between gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              AAROGYA SUPER SPECIALITY HOSPITAL
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Super Speciality Hospital in Shankar Nagar, Raipur. For
              appointments or general enquiries, please call or send us a
              message.
            </p>
          </div>
          <a
            href="tel:+917714044115"
            className="inline-flex items-center gap-2 rounded-full bg-[#F04E30] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#F04E30]/30 hover:bg-[#d54428]"
          >
            <FiPhoneCall className="text-sm" />
            <span>Call: 0771 4044115 / 4265115</span>
          </a>
        </div>

        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1 – About & social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              AAROGYA SUPER SPECIALITY HOSPITAL
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Aarogya Hospital is a super speciality hospital located in Shankar
              Nagar, Raipur, Chhattisgarh, providing advanced, ethical and
              patient-focused care with experienced consultants and modern
              facilities.
            </p>

            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-800">Follow us</p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition hover:border-[#F04E30]/50 hover:text-[#F04E30]"
                >
                  <FiFacebook className="text-sm" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition hover:border-pink-400 hover:text-pink-500"
                >
                  <FiInstagram className="text-sm" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition hover:border-[#F04E30]/50 hover:text-[#F04E30]"
                >
                  <FiLinkedin className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 – Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
              {/* HOME */}
              <li>
                <Link
                  to="/"
                  className="hover:text-[#F04E30]"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  HOME
                </Link>
              </li>

              {/* ABOUT section (home page ke andar id="about") */}
              <li>
                <button
                  type="button"
                  onClick={() => handleScrollToSection("about")}
                  className="cursor-pointer bg-transparent p-0 text-left text-slate-600 hover:text-[#F04E30]"
                >
                  ABOUT US
                </button>
              </li>

              {/* DEPARTMENTS page */}
              <li>
                <Link
                  to="/departments"
                  className="hover:text-[#F04E30]"
                >
                  DEPARTMENTS
                </Link>
              </li>

              {/* SERVICES page */}
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#F04E30]"
                >
                  SERVICES
                </Link>
              </li>

              {/* APPOINTMENT page */}
              <li>
                <Link
                  to="/appointment"
                  className="hover:text-[#F04E30]"
                >
                  BOOK APPOINTMENT
                </Link>
              </li>

              {/* CONTACT section (home page ke andar id="contact") */}
              <li>
                {/* <button
                  type="button"
                  onClick={() => handleScrollToSection("contact")}
                  className="cursor-pointer bg-transparent p-0 text-left text-slate-600 hover:text-[#F04E30]"
                >
                  CONTACT US
                </button> */}
              </li>
            </ul>
          </div>

          {/* Column 3 – Contact & timings */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Contact &amp; Timings
            </h3>

            <div className="mt-3 space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-[2px] text-slate-500" />
                <p>
                  Aarogya Hospital – Super Speciality Hospital
                  <br />
                  On the road from Shankar Nagar to Avantibai Chowk (Lodhipara),
                  <br />
                  Shankar Nagar, Raipur, Chhattisgarh, India
                </p>
              </div>

              <div className="flex items-start gap-2">
                <FiPhoneCall className="mt-[2px] text-slate-500" />
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+917714044115"
                    className="font-semibold text-slate-900 hover:text-[#F04E30]"
                  >
                    0771 4044115
                  </a>
                  {"  , "}
                  <a
                    href="tel:+917714265115"
                    className="font-semibold text-slate-900 hover:text-[#F04E30]"
                  >
                    0771 4265115
                  </a>
                  <br />
                  Mobile:{" "}
                  <a
                    href="tel:+919827198000"
                    className="font-semibold text-slate-900 hover:text-[#F04E30]"
                  >
                    +91 98271 98000
                  </a>
                  <br />

                  Mobile:{" "}
                  <a
                    href="tel:+919827198000"
                    className="font-semibold text-slate-900 hover:text-[#F04E30]"
                  >
                    +91 81200 12121
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <FiMail className="mt-[2px] text-slate-500" />
                <p>
                  Email:{" "}
                  <a
                    href="mailto:aarogyahospital2018@gmail.com"
                    className="text-slate-800 hover:text-[#F04E30]"
                  >
                    aarogyahospital2018@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-2">
                <FiClock className="mt-[2px] text-slate-500" />
                <p>
                  OPD / Visiting Hours:
                  <br />
                  <span className="text-slate-500">
                    Please call to confirm OPD and visiting timings.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-slate-200 pt-4 text-[11px] text-slate-600">
          <div className="flex flex-col items-center gap-2 text-center">
            <p>
              © {year}{" "}
              <span className="font-semibold text-slate-900">
                AAROGYA HOSPITAL - SUPER SPECIALITY HOSPITAL
              </span>
              . All rights reserved.
            </p>

            <p className="text-[12px] text-slate-500">
              Website designed by{" "}
              <a
                href="https://spadvertising.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F04E30] hover:text-[#d54428]"
              >
                SP ADVERTISING
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;