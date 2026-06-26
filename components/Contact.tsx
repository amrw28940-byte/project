"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-black w-full py-24 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* العنوان */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-white mb-12 text-center"
        >
          تواصل معنا
        </motion.h2>
        
        {/* نموذج التواصل (يأخذ العرض بالكامل) */}
        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full space-y-6" 
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="text" 
            placeholder="الاسم" 
            className="w-full p-6 rounded-2xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-lg" 
          />
          <input 
            type="email" 
            placeholder="الايميل" 
            className="w-full p-6 rounded-2xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-lg" 
          />
          <textarea 
            placeholder="الخدمة المطلوبة" 
            rows={5}
            className="w-full p-6 rounded-2xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-lg" 
          ></textarea>
          
          <button className="w-full bg-green-600 text-white font-black py-5 rounded-2xl text-xl hover:bg-green-500 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-green-900/20">
            أرسل
          </button>
        </motion.form>
      </div>
    </section>
  );
}