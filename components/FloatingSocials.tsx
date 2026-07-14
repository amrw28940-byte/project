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
    <div className="fixed right-6 bottom-10 z-50 flex flex-col gap-4">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, x: -5 }}
          whileTap={{ scale: 0.95 }}
          /* تم إضافة برواز أحمر، حواف دائرية كاملة، وظل قوي جداً لمنح الأزرار بروزاً نيون ضخماً */
          className={`${social.color} p-3 rounded-full text-white border-4 border-[#ff001e] shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex items-center justify-center transition-transform duration-200`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}