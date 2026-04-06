// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiPhoneCall, FiCalendar, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../images/logo1.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "HOME", path: "/", sectionId: null },
    { label: "ABOUT", path: "/", sectionId: "about" },
    { label: "DOCTORS", path: "/doctors", sectionId: null },
    { label: "SERVICES", path: "/services", sectionId: null },
    { label: "CONTACT", path: "/contact", sectionId: "contact" },
  ];

  /* SCROLL EFFECT */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL TO SECTION */

  const scrollToSection = (sectionId) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(sectionId);

    if (el) {
      const yOffset = -90;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  /* NAV CLICK */

  const handleNavClick = (link) => {
    if (location.pathname !== link.path) {
      navigate(link.path);
      setOpen(false);

      setTimeout(() => {
        scrollToSection(link.sectionId);
      }, 120);
    } else {
      setOpen(false);
      scrollToSection(link.sectionId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300
        ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src={logo}
                alt="Aarogya Hospital"
                className="h-12 w-12 object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-[#F04E30]">
                AAROGYA
              </p>

              <p className="text-[13px] font-bold uppercase tracking-[0.20em] text-black">
                HOSPITAL
              </p>

              <p className="hidden text-[10px] text-slate-600 sm:block">
                Super Speciality Hospital, Raipur
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-7 md:flex">

            <div className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.18em] text-black">
              {navLinks.map((item) => (
                <div key={item.label} className="group relative">
                  {item.subLinks ? (
                    <div className="flex items-center gap-1 cursor-pointer pb-1 transition hover:text-[#F04E30]">
                      {item.label} <FiChevronDown />
                      <div className="absolute top-full left-1/2 -mt-1 hidden w-48 -translate-x-1/2 pt-2 group-hover:block transition-all duration-300">
                        <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-xl backdrop-blur-xl">
                          {item.subLinks.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() => handleNavClick(sub)}
                              className="block w-full rounded-lg px-4 py-2.5 text-left text-[10px] font-semibold tracking-wider text-slate-700 transition hover:bg-slate-50 hover:text-[#F04E30]"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="group relative pb-1 transition hover:text-[#F04E30]"
                    >
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#F04E30] transition-all group-hover:w-full"></span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT SIDE BUTTONS */}

            <div className="ml-4 flex items-center gap-3">

              {/* CALL */}

              <a
                href="tel:+919827198000"
                className="flex items-center gap-2 rounded-full 
                bg-gradient-to-r from-[#F04E30] to-[#d54428] 
                px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white 
                shadow-md transition-all duration-300"
              >
                <FiPhoneCall className="text-sm" />
                <span>CALL : 98271 98000</span>
              </a>

              {/* APPOINTMENT */}

              <Link
                to="/appointment"
                className="flex h-9 items-center gap-2 rounded-full bg-gradient-to-r from-[#F04E30] to-[#d54428] px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow"
              >
                <FiCalendar />
                APPOINTMENT
              </Link>
            </div>
          </nav>

          {/* MOBILE BUTTONS */}

          <div className="flex items-center gap-2 md:hidden">

            <a
              href="tel:+919827198000"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-black"
            >
              <FiPhoneCall />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-black"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}

        {open && (
          <div className="border-t bg-white px-4 py-4 shadow-md md:hidden">

            <nav className="flex flex-col gap-2 text-[12px] uppercase tracking-[0.14em] text-black">

              {navLinks.map((item) => (
                <div key={item.label}>
                  {item.subLinks ? (
                    <>
                      <div className="px-3 py-2 text-slate-400 text-[10px] font-bold tracking-widest">
                        {item.label}
                      </div>
                      <div className="ml-3 flex flex-col gap-1 border-l-2 border-slate-100">
                        {item.subLinks.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleNavClick(sub)}
                            className="rounded-md px-4 py-2 text-left text-black hover:bg-slate-50"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="rounded-md px-3 py-2 text-left text-black hover:bg-slate-100"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#F04E30] py-2 text-white"
              >
                <FiCalendar />
                APPOINTMENT
              </Link>

            </nav>
          </div>
        )}
      </header>

      {/* PAGE OFFSET */}

      <div className="h-[88px]" />
    </>
  );
};

export default Header;