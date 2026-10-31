"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function FloatingSocials() {
  const socials = [
    { icon: <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />, link: "https://wa.me/201020347946", color: "bg-emerald-600 hover:bg-emerald-500" },
    { icon: <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />, link: "https://www.facebook.com/nadersalm123", color: "bg-emerald-700 hover:bg-emerald-600" },
    { icon: <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />, link: "https://www.linkedin.com/in/amr-salem-5765b0401/", color: "bg-teal-700 hover:bg-teal-600" },
    { icon: <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />, link: "#", color: "bg-emerald-800 hover:bg-emerald-700" },
    { icon: <FaYoutube className="w-4 h-4 md:w-5 md:h-5" />, link: "#", color: "bg-teal-800 hover:bg-teal-700" },
  ];

  return (
    /* تم استخدام right-4 و right-6 لضمان انتقال الأيقونات للجانب الأيمن تماماً */
    <div className="fixed right-4 bottom-6 md:right-6 md:bottom-10 z-50 flex flex-col gap-2 md:gap-3">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.12, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`${social.color} p-2 md:p-2.5 rounded-full text-white border-[1.5px] md:border-2 border-emerald-300 shadow-[0_6px_15px_rgba(0,0,0,0.15)] md:shadow-[0_8px_20px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform duration-200`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}