"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: "2015", clicks: 24000, impressions: 26000, position: 36000 },
  { year: "2016", clicks: 9000, impressions: 27000, position: 32000 },
  { year: "2017", clicks: 14000, impressions: 17000, position: 24000 },
  { year: "2018", clicks: 4000, impressions: 22000, position: 28000 },
  { year: "2019", clicks: 7500, impressions: 11000, position: 19000 },
  { year: "2020", clicks: 5000, impressions: 12500, position: 16000 },
];

export default function StatsChart() {
  return (
    <section className="py-24 px-6 bg-sky-950 text-white">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* جزء الشرح (أصبح الآن في اليسار) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-black mb-8">نستخدم الإحصاءات لتقدير قيمة النتائج</h2>
          <div className="space-y-6 text-sky-100">
            <p><strong className="text-cyan-400">النـقرات:</strong> هي عدد المرات اللي المستخدم ضغط فيها على رابط موقعك من نتائج البحث.</p>
            <p><strong className="text-blue-400">الظهـور:</strong> هو عدد المرات اللي موقعك ظهر فيها في نتائج البحث سواء انضغط عليه أو لا.</p>
            <p><strong className="text-indigo-500">معدل موضع الإعلان:</strong> هو متوسط ترتيب ظهور صفحتك في نتائج البحث مقارنة بباقي المواقع.</p>
          </div>
        </motion.div>

        {/* جزء الرسم البياني (أصبح الآن في اليمين) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-96 w-full bg-white/5 p-6 rounded-3xl border border-white/10"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="year" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: "#0c4a6e", border: "none", borderRadius: "10px" }} />
              <Area type="monotone" dataKey="position" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
              <Area type="monotone" dataKey="impressions" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.3} />
              <Area type="monotone" dataKey="clicks" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}