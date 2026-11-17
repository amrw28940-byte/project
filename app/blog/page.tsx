import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../sanity/lib/client";
import {
  FaCalendarAlt,
  FaClock,
  FaArrowLeft,
  FaTag,
  FaBookOpen,
  FaWhatsapp,
} from "react-icons/fa";

export const revalidate = 60; // تحديث تلقائي للمقالات كل 60 ثانية

export const metadata: Metadata = {
  title: "المدونة التقنية ودليل الـ SEO | استوديو م. عمرو سالم الرقمي",
  description:
    "مقالات وشروحات متخصصة في تطوير المواقع بـ Next.js وووردبريس ومتاجر شوبيفاي وأسرار تصدر نتائج البحث الأولى في جوجل (SEO) بقلم م. عمرو محمد السيد.",
  alternates: {
    canonical: "/blog",
  },
};

async function getPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      category,
      readingTime,
      publishedAt
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section
      className="min-h-screen pt-36 pb-24 px-4 sm:px-8 md:px-16 relative z-10 text-slate-900"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* ترويسة صفحة المدونة */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-4 shadow-sm">
            <FaBookOpen className="text-emerald-700 w-4 h-4" />
            <span>المدونة التقنية والتسويقية — استوديو م. عمرو سالم</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-5 leading-tight">
            أحدث المقالات في{" "}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-4 underline-offset-8">
              هندسة الويب والـ SEO
            </span>
          </h1>

          <p className="text-slate-700 font-bold text-base sm:text-lg leading-relaxed">
            شروحات عملية ودراسات حالة حقيقية في تطوير المواقع السريعة، المتاجر الإلكترونية، وتصدر الصفحة الأولى في محركات البحث.
          </p>
        </div>

        {/* حالة عدم وجود مقالات بعد */}
        {posts.length === 0 ? (
          <div className="bg-white border-4 border-emerald-500 rounded-3xl p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              لوحة تحكم المدونة جاهزة لنشر مقالاتك! 🚀
            </h2>
            <p className="text-slate-700 font-bold mb-8 leading-relaxed">
              لم تقم بنشر أي مقالات حتى الآن. ادخل إلى لوحة تحكم Sanity Studio وأضف أول مقال ليظهر هنا تلقائياً:
            </p>
            <Link
              href="/studio"
              title="الدخول إلى لوحة تحكم المدونة"
              className="inline-flex items-center gap-3 bg-emerald-800 hover:bg-emerald-900 text-white font-black px-8 py-4 rounded-2xl border-2 border-emerald-500 transition-all shadow-md"
            >
              <span>افتح لوحة تحكم Sanity Studio</span>
              <FaArrowLeft className="w-4 h-4 text-emerald-300" />
            </Link>
          </div>
        ) : (
          /* شبكة عرض كروت المقالات */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => {
              const imageUrl = post.mainImage
                ? urlFor(post.mainImage).width(800).height(500).url()
                : "/logo.webp";
              const imageAlt = post.mainImage?.alt || post.title;
              const imageTitle = post.mainImage?.title || post.title;

              return (
                <article
                  key={post._id}
                  className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300"
                >
                  <div>
                    <Link
                      href={`/blog/${post.slug}`}
                      title={post.title}
                      className="block relative h-60 w-full bg-slate-100 border-b-4 border-emerald-500 overflow-hidden"
                    >
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        title={imageTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {post.category && (
                        <span className="absolute top-3 right-3 bg-slate-900/95 text-emerald-300 border border-emerald-400 px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md">
                          <FaTag className="w-3 h-3" />
                          <span>{post.category}</span>
                        </span>
                      )}
                    </Link>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-600 mb-3">
                        {post.publishedAt && (
                          <span className="flex items-center gap-1.5">
                            <FaCalendarAlt className="text-emerald-700" />
                            {new Date(post.publishedAt).toLocaleDateString("ar-EG", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        )}
                        {post.readingTime && (
                          <span className="flex items-center gap-1.5">
                            <FaClock className="text-emerald-700" />
                            <span>{post.readingTime} دقائق للقراءة</span>
                          </span>
                        )}
                      </div>

                      <Link href={`/blog/${post.slug}`} title={post.title}>
                        <h2 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-3 leading-snug">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-slate-700 font-bold text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-emerald-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      title={`اقرأ مقال: ${post.title}`}
                      className="w-full bg-slate-900 hover:bg-emerald-800 text-white font-black text-xs sm:text-sm py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <span>اقرأ المقال كاملاً</span>
                      <FaArrowLeft className="w-3.5 h-3.5 text-emerald-400" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* بانر استشارة سريعة أسفل المدونة */}
        <div className="mt-20 bg-slate-900 text-white border-4 border-emerald-500 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              هل تبحث عن فريق تقني ينفذ لك موقعاً يتصدر نتائج جوجل؟
            </h2>
            <p className="text-slate-300 font-bold text-sm sm:text-base">
              تحدث مباشرة مع م. عمرو سالم للحصول على خطة تقنية وتسويقية مخصصة لمشروعك.
            </p>
          </div>
          <a
            href="https://wa.me/201020347946"
            target="_blank"
            rel="noopener noreferrer"
            title="تواصل عبر واتساب الآن"
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-2.5 whitespace-nowrap transition-transform hover:-translate-y-0.5 shadow-lg"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>اطلب استشارتك المجانية الآن</span>
          </a>
        </div>
      </div>
    </section>
  );
}