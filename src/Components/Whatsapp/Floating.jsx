import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialFloatingIcons() {
  // Single WhatsApp number (wa.me format)
  const WHATSAPP_NUMBER = "919827198000"; // +91 98271 98000

  // Social links
  const INSTAGRAM_URL = "https://www.instagram.com/aarogyaraipur/?hl=en";
  const FACEBOOK_URL =
    "https://www.facebook.com/AarogyaHospitalRaipurCG/mentions/";

  const message = "Hello Aarogya Hospital, I need assistance.";
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed left-4 bottom-6 z-50 flex flex-col gap-3">
      
      {/* WhatsApp */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-md transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white w-5 h-5" />
      </a>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full shadow-md transition-transform hover:scale-110"
        aria-label="Visit Instagram"
      >
        <FaInstagram className="text-white w-5 h-5" />
      </a>

      {/* Facebook */}
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-md transition-transform hover:scale-110"
        aria-label="Visit Facebook"
      >
        <FaFacebookF className="text-white w-5 h-5" />
      </a>

    </div>
  );
}