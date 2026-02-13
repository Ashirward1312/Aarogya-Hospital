import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiPhoneCall, FiCalendar, FiMenu, FiX } from "react-icons/fi";
import logo from "../images/logo1.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "HOME", path: "/", sectionId: null },
    { label: "ABOUT", path: "/", sectionId: "about" },
    { label: "DOCTORS", path: "/departments", sectionId: null },
    { label: "SERVICES", path: "/services", sectionId: null },
    { label: "CONTACT", path: "/contact", sectionId: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (link) => {
    if (location.pathname !== link.path) {
      navigate(link.path);
      setOpen(false);
      setTimeout(() => {
        if (link.sectionId) {
          scrollToSection(link.sectionId);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 80);
    } else {
      setOpen(false);
      if (link.sectionId) {
        scrollToSection(link.sectionId);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300
        ${
          isScrolled
            ? "bg-white/70 border-slate-200 shadow-sm"
            : "bg-white/95 border-slate-200 shadow-md"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.75rem] sm:px-6">
        {/* LEFT: Logo + name */}
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 sm:gap-4"
        >
          {/* Logo block */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100">
            <img
              src={logo}
              alt="AAROGYA Hospital"
              className="h-12 w-12 object-contain"
            />
          </div>

          <div className="leading-tight">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-[#F04E30]">
              AAROGYA
            </p>
            <p className="text-[13px] font-bold uppercase tracking-[0.20em] text-slate-900">
              HOSPITAL
            </p>
            <p className="hidden text-[10px] text-slate-500 sm:block">
              Super Speciality Hospital, Raipur
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV + CTAs */}
        <nav className="hidden items-center gap-6 md:flex">
          {/* Nav links */}
          <div className="flex items-center gap-5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className="group relative pb-1 transition-colors hover:text-[#F04E30]"
              >
                {item.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 mx-auto h-[1px] w-0 bg-[#F04E30] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="ml-5 flex items-center gap-3">
            <a
              href="tel:+919827198000"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-700 transition hover:border-[#F04E30]/60 hover:bg-slate-50 hover:text-slate-900"
            >
              <FiPhoneCall className="text-xs text-[#F04E30]" />
              <span className="uppercase tracking-[0.16em]">
                98271 98000
              </span>
            </a>

            <Link
              to="/appointment"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F04E30] to-[#d54428] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm shadow-[#F04E30]/30 transition hover:from-[#d54428] hover:to-[#c33b22] hover:-translate-y-[1px]"
            >
              <FiCalendar className="text-sm" />
              <span>APPOINTMENT</span>
            </Link>
          </div>
        </nav>

        {/* MOBILE: Call + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+919827198000"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            title="Call AAROGYA Hospital"
          >
            <FiPhoneCall className="text-base" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          >
            {open ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-3 shadow-md md:hidden">
          <nav className="flex flex-col gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-700">
            {navLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className="rounded-md px-2 py-2 text-left transition hover:bg-slate-50 hover:text-[#F04E30]"
              >
                {item.label}
              </button>
            ))}

            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <a
                href="tel:+919827198000"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-medium text-slate-700 hover:bg-slate-50"
              >
                <FiPhoneCall className="text-sm text-[#F04E30]" />
                <span>CALL: 98271 98000</span>
              </a>

              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F04E30] to-[#d54428] text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm shadow-[#F04E30]/30 hover:from-[#d54428] hover:to-[#c33b22]"
              >
                <FiCalendar className="text-sm" />
                <span>APPOINTMENT</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;