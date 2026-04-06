import React from "react";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiArrowUpRight,
} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Social
  const INSTAGRAM_URL = "https://www.instagram.com/aarogyaraipur/?hl=en";
  const FACEBOOK_URL =
    "https://www.facebook.com/AarogyaHospitalRaipurCG/mentions/";

  // WhatsApp (wa.me)
  const WHATSAPP_1 = "919827198000"; // +91 98271 98000
  const WHATSAPP_2 = "918120012121"; // +91 81200 12121

  const handleScrollToSection = (sectionId) => {
    const scroll = () => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scroll, 180);
    } else {
      scroll();
    }
  };

  const Brand = "#F04E30";

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-800">
      {/* Top CTA bar (simple + premium) */}
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 border-b border-slate-200 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-bold tracking-wide text-slate-900">
                AAROGYA SUPER SPECIALITY HOSPITAL
              </h2>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-600">
                Super Speciality Hospital in Shankar Nagar, Raipur. For
                appointments or enquiries, call us or message on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917714044115"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: Brand }}
              >
                <FiPhoneCall className="text-sm" />
                Call: 0771 4044115
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-orange-200 hover:bg-orange-50"
              >
                WhatsApp
                <FiArrowUpRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About + Social */}
          <div>
            <div className="text-sm font-bold text-slate-900">
              Aarogya Hospital
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              A super speciality hospital in Shankar Nagar, Raipur, providing
              advanced, ethical and patient-focused care with experienced
              consultants and modern facilities.
            </p>

            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-800">Follow</div>
              <div className="mt-2 flex items-center gap-2">
                <SocialIcon
                  href={FACEBOOK_URL}
                  label="Facebook"
                  icon={<FiFacebook className="text-sm" />}
                  hoverClass="hover:border-orange-200 hover:text-[#F04E30]"
                />
                <SocialIcon
                  href={INSTAGRAM_URL}
                  label="Instagram"
                  icon={<FiInstagram className="text-sm" />}
                  hoverClass="hover:border-orange-200 hover:text-[#F04E30]"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-sm font-bold text-slate-900">Quick Links</div>
            <ul className="mt-3 space-y-2 text-xs text-slate-600">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-[#F04E30]"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => handleScrollToSection("about")}
                  className="text-left transition hover:text-[#F04E30]"
                >
                  About Us
                </button>
              </li>

              <li>
                <Link to="/doctors" className="transition hover:text-[#F04E30]">
                  Doctors
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-[#F04E30]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/appointment"
                  className="transition hover:text-[#F04E30]"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-bold text-slate-900">
              Contact & Timings
            </div>

            <div className="mt-3 space-y-3 text-xs text-slate-700">
              <Row
                icon={<FiMapPin className="mt-[2px] text-slate-500" />}
                title="Address"
              >
                Aarogya Hospital – Super Speciality Hospital
                <br />
                Shankar Nagar to Avantibai Chowk (Lodhipara),
                <br />
                Raipur, Chhattisgarh, India
              </Row>

              <Row
                icon={<FiPhoneCall className="mt-[2px] text-slate-500" />}
                title="Phone / WhatsApp"
              >
                <a
                  href="tel:+917714044115"
                  className="font-semibold text-slate-900 transition hover:text-[#F04E30]"
                >
                  0771 4044115
                </a>
                {" , "}
                <a
                  href="tel:+917714265115"
                  className="font-semibold text-slate-900 transition hover:text-[#F04E30]"
                >
                  0771 4265115
                </a>
                <br />
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 transition hover:text-[#F04E30]"
                >
                  98271 98000
                </a>
                {" , "}
                <a
                  href={`https://wa.me/${WHATSAPP_2}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 transition hover:text-[#F04E30]"
                >
                  81200 12121
                </a>
              </Row>

              <Row
                icon={<FiMail className="mt-[2px] text-slate-500" />}
                title="Email"
              >
                <a
                  href="mailto:aarogyahospital2018@gmail.com"
                  className="transition hover:text-[#F04E30]"
                >
                  aarogyahospital2018@gmail.com
                </a>
              </Row>

              <Row
                icon={<FiClock className="mt-[2px] text-slate-500" />}
                title="OPD / Visiting"
              >
                Please call to confirm OPD and visiting timings.
              </Row>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-5 text-[11px] text-slate-600">
          <div className="flex flex-col items-center gap-2 text-center">
            <p>
              © {year}{" "}
              <span className="font-semibold text-slate-900">
                AAROGYA HOSPITAL - SUPER SPECIALITY HOSPITAL
              </span>
              . All rights reserved.
            </p>

            <p className="text-[11px] text-slate-500">
              Website designed by{" "}
              <a
                href="https://spadvertising.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F04E30] transition hover:opacity-90"
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

function SocialIcon({ href, label, icon, hoverClass }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition ${hoverClass}`}
    >
      {icon}
    </a>
  );
}

function Row({ icon, title, children }) {
  return (
    <div className="flex items-start gap-2.5">
      {icon}
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="mt-0.5 leading-relaxed text-slate-600">{children}</div>
      </div>
    </div>
  );
}

export default Footer;