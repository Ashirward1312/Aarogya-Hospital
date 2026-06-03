import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import HeroSection from "./Components/Hero/Hero.jsx";
import DepartmentsSection from "./Components/Cat/Cat.jsx";
import Services from "./Components/Services/Services.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";
import Faq from "./Components/Faq/Faq.jsx";
import Mission from "./Components/About/Mission.jsx";
import Equip from "./Components/About/Equip.jsx";
import DirectorsSection from "./Components/Services/Director.jsx";
import WhatsAppIcon from "./Components/Whatsapp/Whatsapp.jsx";
import FloatingSocials from "./Components/Whatsapp/Floating.jsx";
import Special from "./Components/Special/Special.jsx";
import Quick from "./Components/Quick/Quick.jsx";
import AppointmentPage from "./Components/Book/Book.jsx";
import Get from "./Components/Get/Get.jsx";
import Second from "./Components/Get/Second.jsx";
import Online from "./Components/Get/Online.jsx";
import Booktest from "./Components/Get/Booktest.jsx";
import Homecare from "./Components/Get/Homecare.jsx";
import Radiology from "./Components/Get/Radiology.jsx";
import AboutCardiologyPage from "./Components/Quick/Heart.jsx";
import AboutSurgeryPage from "./Components/Quick/Surgen.jsx";
import Gynaecology from "./Components/Quick/Gyna.jsx";
import Orthopedics from "./Components/Quick/Ortho.jsx";
import Department from "./Components/Department/Department.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";


/* -------- ScrollToTop -------- */

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return children;
};

/* -------- Home Page Layout -------- */

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Quick />

      <About />
      <Special />
      <DirectorsSection />


      <Equip />
      <Mission />
      <Faq />
    </>
  );
};

/* -------- Main App -------- */

function App() {
  return (
    // ✅ overflow-x-hidden added here
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      <Header />

      <ScrollToTop>
        <Routes>

          {/* Home */}
          <Route path="/" element={<HomePage />} />

           {/* Doctors */}
          <Route path="/doctors" element={<DepartmentsSection />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Departments */}
          <Route path="/departments" element={<Department />} />


          {/* Appointment */}
          <Route path="/appointment" element={<AppointmentPage />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Health Check */}
          <Route path="/health-check-packages" element={<Get />} />

          {/* Second Opinion */}
          <Route path="/second-opinion" element={<Second />} />

          {/* Virtual Consultation */}
          <Route path="/virtual-consultation" element={<Online />} />

          {/* Book Test */}
          <Route path="/book-test" element={<Booktest />} />

          {/* Homecare */}
          <Route path="/homecare-services" element={<Homecare />} />

          {/* Radiology */}
          <Route path="/radiology" element={<Radiology />} />

          {/* Heart Department */}
          <Route path="/departments/best-cardiology-and-heart-hospital-in-raipur" element={<AboutCardiologyPage />} />
          <Route path="/departments/general-laparoscopy-surgery-hospital-in-raipur" element={<AboutSurgeryPage />} />
          <Route path="/departments/gynaecology-hospital-in-raipur" element={<Gynaecology />} />
          <Route path="/departments/orthopedics-hospital-in-raipur" element={<Orthopedics />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </ScrollToTop>

      <WhatsAppIcon />
      <FloatingSocials />
      <Footer />
    </div>
  );
}

export default App;