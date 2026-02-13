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
import Cradiac from "./Components/Quick/Cradiac.jsx";
import AppointmentPage from "./Components/Book/Book.jsx";
import Get from "./Components/Get/Get.jsx";
import Second from "./Components/Get/Second.jsx";
import Online from "./Components/Get/Online.jsx";
import Booktest from "./Components/Get/Booktest.jsx";
import Homecare from "./Components/Get/Homecare.jsx";
import Radiology from "./Components/Get/Radiology.jsx";

/* -------- ScrollToTop: har route change pe top pe le jao -------- */

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // yaha smooth chahiye to behavior: "smooth" kar sakte ho
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return children;
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Quick />
      <Special />
      <WhatsAppIcon />
      <FloatingSocials />
      <Equip />
      <DirectorsSection />
      <Cradiac />
      <Mission />
      <About />
      <Faq />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      {/* ScrollToTop wrapper */}
      <ScrollToTop>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Departments / Doctors */}
          <Route path="/departments" element={<DepartmentsSection />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Appointment page */}
          <Route path="/appointment" element={<AppointmentPage />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Health Check Packages */}
          <Route path="/health-check-packages" element={<Get />} />

          {/* Second Opinion */}
          <Route path="/second-opinion" element={<Second />} />

          {/* Virtual Consultation */}
          <Route path="/virtual-consultation" element={<Online />} />

          {/* Book a Test */}
          <Route path="/book-test" element={<Booktest />} />

          {/* Homecare Services */}
          <Route path="/homecare-services" element={<Homecare />} />

          {/* Radiology Services */}
          <Route path="/radiology" element={<Radiology />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;