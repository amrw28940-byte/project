"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function FloatingSocials() {
  const socials = [
    { icon: <FaWhatsapp size={24} />, link: "https://wa.me/201020347946", color: "bg-green-500" },
    { icon: <FaFacebook size={24} />, link: "#", color: "bg-blue-600" },
    { icon: <FaLinkedin size={24} />, link: "#", color: "bg-blue-700" },
    { icon: <FaInstagram size={24} />, link: "#", color: "bg-pink-600" },
    { icon: <FaYoutube size={24} />, link: "#", color: "bg-red-600" },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          whileHover={{ scale: 1.2, x: -5 }}
          className={`${social.color} p-3 rounded-full text-white shadow-lg transition-colors`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}