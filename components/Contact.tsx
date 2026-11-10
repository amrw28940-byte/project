"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaCogs,
  FaCheckCircle,
  FaCommentDots,
  FaPaperPlane,
  FaShieldAlt,
  FaBolt,
  FaClock
} from "react-icons/fa";

export default function ContactSection() {
  // حالات حقول النموذج (Form States)
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("تصميم وتطوير موقع Next.js");
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  // رقم الواتساب المعتمد (بدون أصفار زائدة)
  const whatsappNumber = "201020347946";
  const displayPhone = "01020347946";

  // قائمة الخدمات المتاحة للاختيار السريع
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

  // دالة إرسال البيانات تلقائياً إلى الواتساب
  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError("يرجى إدخال الاسم، رقم الهاتف، والبريد الإلكتروني لإتمام الطلب.");
      return;
    }

    setFormError("");

    // تنسيق الرسالة التلقائية التي ستصلك على الواتساب
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

    // فتح الواتساب في نافذة جديدة تلقائياً
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact-section"
      className="py-24 px-4 md:px-10 bg-slate-900 text-white border-t-4 border-b-4 border-emerald-500 relative overflow-hidden"
      dir="rtl"
    >
      {/* خلفية الشبكة الهندسية الخفيفة */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* توهج زمردي خلفي */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان السكشن */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400 px-4 py-1.5 rounded-full text-xs md:text-sm font-black inline-block mb-4">
            ابدأ مشروعك الرقمي الآن في خطوة واحدة
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            اختر خدمتك وأرسل بياناتك مباشرة عبر <span className="text-emerald-400">الواتساب</span>
          </h2>
          <p className="text-slate-300 font-bold text-base md:text-lg leading-relaxed">
            املأ بياناتك واختر الخدمة التي تحتاجها، وسيتم تحويل طلبك تلقائياً في رسالة منظمة إلى الواتساب المباشر للرد عليك فوراً باستشارة مجانية وعرض سعر مخصص:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* العمود الأيمن: نموذج التواصل التفاعلي الذكي */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white text-slate-900 rounded-3xl border-4 border-emerald-500 p-6 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center justify-between border-b-2 border-emerald-100 pb-5 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                  نموذج طلب خدمة وعرض سعر فوري
                </h3>
                <p className="text-xs md:text-sm text-slate-600 font-bold mt-1">
                  جميع البيانات تنتقل تلقائياً لمحادثة الواتساب المباشرة مع م. عمرو سالم
                </p>
              </div>
              <div className="bg-emerald-100 p-3.5 rounded-2xl border-2 border-emerald-500 text-emerald-700 hidden sm:block">
                <FaWhatsapp className="w-8 h-8" />
              </div>
            </div>

            <form onSubmit={handleWhatsappSubmit} className="space-y-6">
              {/* الصف الأول: الاسم ورقم الهاتف */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* حقل الاسم */}
                <div>
                  <label className="block font-black text-slate-900 text-sm mb-2">
                    الاسم الكامل أو اسم الشركة <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: محمد أحمد / شركة الأندلس"
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                    />
                    <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                  </div>
                </div>

                {/* حقل رقم الهاتف */}
                <div>
                  <label className="block font-black text-slate-900 text-sm mb-2">
                    رقم الهاتف / الجوال (مع كود الدولة) <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="مثال: 010xxxxxxx أو +9665xxxxxxx"
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                      dir="ltr"
                      style={{ textAlign: "right" }}
                    />
                    <FaPhoneAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* الصف الثاني: البريد الإلكتروني والقائمة المنسدلة للخدمة */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* حقل البريد الإلكتروني */}
                <div>
                  <label className="block font-black text-slate-900 text-sm mb-2">
                    البريد الإلكتروني (Email) <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all"
                      dir="ltr"
                      style={{ textAlign: "right" }}
                    />
                    <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
                  </div>
                </div>

                {/* القائمة المنسدلة لاختيار الخدمة */}
                <div>
                  <label className="block font-black text-slate-900 text-sm mb-2">
                    اختر الخدمة المطلوبة <span className="text-emerald-600">*</span>
                  </label>
                  <div className="relative">
                    <select
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
                    <FaCogs className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* أزرار اختيار سريع للخدمة (Quick Selection Chips) */}
              <div>
                <span className="block font-black text-slate-700 text-xs mb-2.5">
                  أو اضغط مباشرة على الخدمة المطلوبة لتحديدها:
                </span>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((srv, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setSelectedService(srv)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all border-2 flex items-center gap-1.5 ${
                        selectedService === srv
                          ? "bg-slate-900 text-emerald-400 border-emerald-500 shadow-md scale-[1.02]"
                          : "bg-[#f5f7f5] text-slate-700 border-emerald-200 hover:border-emerald-400"
                      }`}
                    >
                      <FaCheckCircle
                        className={`w-3.5 h-3.5 ${
                          selectedService === srv ? "text-emerald-400" : "text-slate-400"
                        }`}
                      />
                      <span>{srv}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* حقل تفاصيل أو ملاحظات إضافية (اختياري) */}
              <div>
                <label className="block font-black text-slate-900 text-sm mb-2">
                  نبذة سريعة عن مشروعك أو استفسارك (اختياري)
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="اكتب أي تفاصيل إضافية عن نشاطك التجاري أو الدولة المستهدفة..."
                    className="w-full bg-[#f5f7f5] border-2 border-emerald-300 focus:border-emerald-600 focus:bg-white rounded-2xl py-3.5 pr-11 pl-4 text-sm font-black text-slate-900 outline-none transition-all resize-none"
                  />
                  <FaCommentDots className="absolute right-4 top-4 text-emerald-600 w-4 h-4" />
                </div>
              </div>

              {/* تنبيه في حالة نسيان حقل أساسي */}
              {formError && (
                <div className="bg-amber-50 border-2 border-amber-500 text-amber-900 px-4 py-3 rounded-xl text-xs md:text-sm font-black">
                  ⚠️ {formError}
                </div>
              )}

              {/* زر الإرسال الفوري للواتساب */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base md:text-lg py-4 px-8 rounded-2xl shadow-[0_12px_25px_-5px_rgba(16,185,129,0.45)] border-2 border-emerald-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <FaWhatsapp className="w-7 h-7" />
                <span>إرسال البيانات وفتح محادثة الواتساب الآن</span>
                <FaPaperPlane className="w-4 h-4 mr-1" />
              </button>
            </form>
          </motion.div>

          {/* العمود الأيسر: معاينة حية للرسالة + معلومات التواصل المباشر */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* كارت المعاينة الحية لرسالة الواتساب */}
            <div className="bg-slate-800 border-4 border-emerald-500 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
                <span className="text-xs font-black text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  معاينة رسالتك التلقائية للواتساب
                </span>
                <span className="text-xs font-mono text-slate-400" dir="ltr">
                  {displayPhone}
                </span>
              </div>

              <div className="bg-slate-900 rounded-2xl p-4 border border-emerald-500/40 text-xs md:text-sm space-y-2.5 font-bold text-slate-200">
                <p className="text-emerald-300 font-black">
                  مرحباً م. عمرو، لدي طلب مشروع جديد:
                </p>
                <p>
                  👤 <span className="text-slate-400">الاسم:</span>{" "}
                  <span className="text-white font-black">{fullName || "---"}</span>
                </p>
                <p>
                  📱 <span className="text-slate-400">الهاتف:</span>{" "}
                  <span className="text-white font-black" dir="ltr">{phone || "---"}</span>
                </p>
                <p>
                  📧 <span className="text-slate-400">الإيميل:</span>{" "}
                  <span className="text-white font-black" dir="ltr">{email || "---"}</span>
                </p>
                <p>
                  🚀 <span className="text-slate-400">الخدمة:</span>{" "}
                  <span className="text-emerald-400 font-black">{selectedService}</span>
                </p>
                {projectNotes && (
                  <p>
                    📝 <span className="text-slate-400">التفاصيل:</span>{" "}
                    <span className="text-white">{projectNotes}</span>
                  </p>
                )}
              </div>
            </div>

            {/* كارت مميزات التواصل المباشر */}
            <div className="bg-slate-800 border-2 border-emerald-500/60 rounded-3xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/40 text-emerald-400 mt-0.5">
                  <FaBolt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base">رد فوري واستشارة مجانية</h4>
                  <p className="text-xs text-slate-300 font-bold leading-relaxed mt-1">
                    نتلقى طلبك فوراً على الواتساب ونقوم بدراسته والرد عليك بخطة عمل واضحة وعرض سعر دقيق.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/40 text-emerald-400 mt-0.5">
                  <FaShieldAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base">خصوصية وأمان تام لبياناتك</h4>
                  <p className="text-xs text-slate-300 font-bold leading-relaxed mt-1">
                    بيانات مشروعك وفكرتك التجارية في أمان تام وتناقش بشكل مباشر مع م. عمرو سالم.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-slate-900 p-3 rounded-xl border border-emerald-500/40 text-emerald-400 mt-0.5">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-white text-base">تواصل مباشر: {displayPhone}</h4>
                  <p className="text-xs text-slate-300 font-bold leading-relaxed mt-1">
                    متاحون للرد على استفسارات عملائنا في مصر، السعودية، الإمارات، والكويت على مدار الساعة.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}