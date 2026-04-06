import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  // single WhatsApp number (wa.me format without +)
  const WHATSAPP_NUMBER = "919827198000"; // +91 98271 98000

  // optional prefilled message
  const message = "Hello Aarogya Hospital, I need assistance.";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 bottom-6 z-50 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-md transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white w-5 h-5" />
    </a>
  );
}