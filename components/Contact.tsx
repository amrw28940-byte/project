"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaCogs,
  FaCheckCircle,
  FaPaperPlane,
  FaCommentDots,
  FaShieldAlt,
  FaBolt,
  FaGlobe
} from "react-icons/fa";

export default function Contact() {
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("تصميم وتطوير موقع Next.js");
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const whatsappNumber = "201020347946";
  const primaryPhone = "01020347946";
  const secondaryPhone = "01017741283";

  const servicesList = [
    "تصميم وتطوير موقع Next.js",
    "تصميم موقع شركة تعريفي (Corporate)",
    "تصميم متجر إلكتروني متكامل (E-Commerce)",
    "تصميم صفحة هبوط إعلانية (Landing Page)",
    "تصميم وإنتاج فيديو بالذكاء الاصطناعي (AI Video)",
    "تصميم وتطوير متجر شوبيفاي (Shopify)",
    "تصميم وتطوير موقع ووردبريس (WordPress)",
    "تحسين محركات البحث وتصدر جوجل (SEO)",
    "استشارة تقنية أو مشروع برمجة خاصة"
  ];

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError("يرجى إدخال الاسم، رقم الهاتف، والبريد الإلكتروني لإتمام الطلب.");
      return;
    }

    setFormError("");

    const formattedMessage = `مرحباً م. عمرو، لدي طلب مشروع جديد عبر الموقع:
----------------------------------
👤 *الاسم:* ${fullName}
📱 *رقم الهاتف:* ${phone}
📧 *البريد الإلكتروني:* ${email}
🚀 *الخدمة المطلوبة:* ${selectedService}
📝 *تفاصيل إضافية:* ${projectNotes.trim() ? projectNotes : "لا توجد ملاحظات إضافية"}
----------------------------------
أرجو التواصل معي لمناقشة التفاصيل وعرض السعر.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact-section"
      aria-labelledby="contact-heading"
      className="relative w-full py-24 px-4 sm:px-8 md:px-16 overflow-hidden bg-[#f5f7f5] border-t-4 border-b-4 border-emerald-500 text-slate-900"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-4 shadow-sm">
            <FaWhatsapp className="text-emerald-700 w-4 h-4" />
            <span>تواصل مباشر واستشارة مجانية لمشروعك</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 leading-tight"
          >
            اختر خدمتك وتواصل معنا عبر{" "}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-4 underline-offset-8">
              الواتساب المباشر
            </span>
          </h2>

          <p className="text-slate-700 font-bold text-base sm:text-lg leading-relaxed">
            سجل بياناتك واختر الخدمة المطلوبة، وسيتم تحويل طلبك تلقائياً إلى محادثة الواتساب المباشرة مع م. عمرو سالم للرد عليك فوراً:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* العمود الأول: النموذج الذكي */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl border-4 border-emerald-500 p-6 sm:p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b-2 border-emerald-100 pb-5 mb-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    نموذج طلب خدمة وعرض سعر فوري
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
                    تنتقل البيانات تلقائياً في رسالة منسقة إلى رقم الواتساب {primaryPhone}
                  </p>
                </div>
                <div className="bg-emerald-50 p-3.5 rounded-2xl border-2 border-emerald-500 text-emerald-700 hidden sm:flex">
                  <FaWhatsapp className="w-7 h-7" />
                </div>
              </div>

              <form onSubmit={handleWhatsappSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-fullname-input"
                      className="block font-black text-slate-900 text-sm mb-2"
                    >
                      الاسم الكامل أو الشركة <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-fullname-input"
                        name="fullName"
                        type="text"
                        required
                        aria-label="الاسم الكامل أو الشركة"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="اكتب اسمك الكريم..."
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                      />
                      <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-700 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone-input"
                      className="block font-black text-slate-900 text-sm mb-2"
                    >
                      رقم الهاتف / الجوال <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-phone-input"
                        name="phone"
                        type="tel"
                        required
                        aria-label="رقم الهاتف أو الجوال"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010xxxxxxx / +9665xxxxxxx"
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                        dir="ltr"
                        style={{ textAlign: "right" }}
                      />
                      <FaPhoneAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-700 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email-input"
                      className="block font-black text-slate-900 text-sm mb-2"
                    >
                      البريد الإلكتروني (Email) <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-email-input"
                        name="email"
                        type="email"
                        required
                        aria-label="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                        dir="ltr"
                        style={{ textAlign: "right" }}
                      />
                      <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-700 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* عنصر الـ Select المربوط بالكامل مع الـ Label لحل تحذير Lighthouse */}
                  <div>
                    <label
                      id="service-select-label"
                      htmlFor="contact-service-select"
                      className="block font-black text-slate-900 text-sm mb-2"
                    >
                      اختر الخدمة المطلوبة <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service-select"
                        name="selectedService"
                        aria-label="اختر الخدمة المطلوبة"
                        aria-labelledby="service-select-label"
                        title="اختر الخدمة المطلوبة"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all cursor-pointer"
                      >
                        {servicesList.map((srv, idx) => (
                          <option key={idx} value={srv} className="font-bold text-slate-900">
                            {srv}
                          </option>
                        ))}
                      </select>
                      <FaCogs className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-700 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block font-black text-slate-700 text-xs mb-2">
                    أو اضغط مباشرة على الخدمة المطلوبة:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((srv, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedService(srv)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all border-2 flex items-center gap-1.5 cursor-pointer ${
                          selectedService === srv
                            ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-sm"
                            : "bg-[#f5f7f5] text-slate-800 border-emerald-200 hover:border-emerald-400"
                        }`}
                      >
                        <FaCheckCircle
                          className={`w-3 h-3 ${
                            selectedService === srv ? "text-emerald-400" : "text-slate-400"
                          }`}
                        />
                        <span>{srv}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-notes-textarea"
                    className="block font-black text-slate-900 text-sm mb-2"
                  >
                    نبذة سريعة عن مشروعك (اختياري)
                  </label>
                  <div className="relative">
                    <textarea
                      id="contact-notes-textarea"
                      name="projectNotes"
                      rows={3}
                      aria-label="نبذة سريعة عن مشروعك"
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="اكتب أي تفاصيل إضافية عن نشاطك التجاري..."
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all resize-none"
                    />
                    <FaCommentDots className="absolute right-4 top-4 text-emerald-700 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                {formError && (
                  <div className="bg-amber-50 border-2 border-amber-500 text-amber-900 px-4 py-3 rounded-xl text-xs sm:text-sm font-black">
                    ⚠️ {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-black text-base sm:text-lg py-4 px-8 rounded-2xl shadow-lg border-2 border-emerald-500 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <FaWhatsapp className="w-6 h-6 text-emerald-300" />
                  <span>إرسال البيانات وفتح محادثة الواتساب الآن</span>
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* العمود الثاني: بطاقة بيانات التواصل المباشر والمميزات (بدون خريطة) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="bg-slate-900 text-white rounded-3xl border-4 border-emerald-500 p-7 sm:p-9 shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-emerald-500 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full mb-4">
                  AMR SALEM DIGITAL STUDIO
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  استوديو م. عمرو سالم الرقمي
                </h3>
                <p className="text-slate-300 font-bold text-sm leading-relaxed mb-6">
                  تواصل مباشر مع المؤسس والمطور الرئيسي لمناقشة مشروعك ووضع الخطة الهندسية والتسويقية الأنسب لنجاحك.
                </p>

                <div className="space-y-4 text-sm sm:text-base font-bold mb-6">
                  {/* العنوان */}
                  <div className="flex items-start gap-3.5 bg-slate-800/90 p-4 rounded-2xl border border-emerald-500/40">
                    <FaMapMarkerAlt className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">العنوان والمقر:</span>
                      <p className="text-white font-black">
                        العجمي، الهانوفيل، الإسكندرية، مصر 📍
                      </p>
                    </div>
                  </div>

                  {/* أرقام التواصل */}
                  <div className="flex items-start gap-3.5 bg-slate-800/90 p-4 rounded-2xl border border-emerald-500/40">
                    <FaPhoneAlt className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <span className="text-xs text-slate-400 block mb-1.5">
                        أرقام الاتصال المباشر والواتساب:
                      </span>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <a
                          href={`tel:${primaryPhone}`}
                          title="اتصال هاتفي مباشر بالرقم الأول"
                          className="text-emerald-400 hover:text-white transition-colors font-black text-xl tracking-wide"
                          dir="ltr"
                        >
                          {primaryPhone}
                        </a>
                        <a
                          href={`tel:${secondaryPhone}`}
                          title="اتصال هاتفي مباشر بالرقم الثاني"
                          className="text-teal-300 hover:text-white transition-colors font-black text-xl tracking-wide"
                          dir="ltr"
                        >
                          {secondaryPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* الأسواق المخدومة */}
                  <div className="flex items-start gap-3.5 bg-slate-800/90 p-4 rounded-2xl border border-emerald-500/40">
                    <FaGlobe className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs text-slate-400 block mb-0.5">نطاق خدماتنا الإقليمي:</span>
                      <p className="text-white font-black text-xs sm:text-sm">
                        🇪🇬 مصر • 🇸🇦 السعودية • 🇦🇪 الإمارات • 🇰🇼 الكويت
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* زر واتساب سريع أسفل الكارت */}
              <div className="pt-5 border-t border-slate-800">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "مرحباً م. عمرو، أرغب في استشارة مجانية لمشروع جديد."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="تحدث معنا مباشرة عبر واتساب"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-lg text-sm sm:text-base"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  <span>محادثة واتساب فورية: {primaryPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}