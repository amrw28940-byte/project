"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaArrowLeft,
  FaPause,
  FaPlay,
  FaTag,
  FaCalendarAlt,
} from "react-icons/fa";

export interface BlogPostCard {
  _id: string;
  title: string;
  slug: string;
  imageUrl: string;
  imageAlt: string;
  category?: string;
  publishedAt?: string;
}

export default function BlogMarqueeClient({
  posts,
}: {
  posts: BlogPostCard[];
}) {
  const [isPaused, setIsPaused] = useState(false);

  if (!posts || posts.length === 0) return null;

  // تكرار المصفوفة لضمان استمرارية الحركة بسلاسة حتى لو كان عدد المقالات قليلاً
  const repeatedPosts =
    posts.length < 4 ? [...posts, ...posts, ...posts, ...posts] : [...posts, ...posts];

  const renderCard = (post: BlogPostCard, index: number, isDuplicate = false) => (
    <Link
      key={`${post._id}-${isDuplicate ? "dup" : "main"}-${index}`}
      href={`/blog/${post.slug}`}
      title={post.title}
      dir="rtl"
      className="flex-shrink-0 w-[300px] sm:w-[340px] group bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.14)] hover:shadow-[0_25px_55px_-10px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
    >
      {/* الصورة البارزة للمقال مع unoptimized للتحميل المباشر من Sanity CDN */}
      <div className="relative h-52 w-full bg-slate-900 border-b-4 border-emerald-500 overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={isDuplicate ? `${post.imageAlt} - عرض إضافي` : post.imageAlt}
          title={post.title}
          fill
          unoptimized
          sizes="(max-width: 640px) 300px, 340px"
          loading="lazy"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {post.category && (
          <span className="absolute top-3 right-3 bg-slate-950/90 text-emerald-300 border border-emerald-400 px-3 py-1 rounded-xl text-[11px] font-black flex items-center gap-1.5 shadow-md">
            <FaTag className="w-2.5 h-2.5" />
            <span>{post.category}</span>
          </span>
        )}
      </div>

      {/* عنوان المقال والتاريخ */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <h3 className="font-black text-slate-900 group-hover:text-emerald-800 transition-colors text-base sm:text-lg leading-snug line-clamp-2 mb-4">
          {post.title}
        </h3>

        <div className="pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-black">
          <span className="text-slate-600 flex items-center gap-1.5">
            <FaCalendarAlt className="text-emerald-700 w-3 h-3" />
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("ar-EG", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "مقال حديث"}
          </span>

          <span className="text-emerald-800 flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
            <span>اقرأ المقال</span>
            <FaArrowLeft className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <section
      id="latest-blog"
      aria-labelledby="blog-marquee-heading"
      className="relative w-full overflow-hidden bg-[#f5f7f5] py-20 border-b-4 border-emerald-500 text-slate-900"
      dir="rtl"
    >
      <style>{`
        @keyframes blogMarqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-blog-marquee {
          display: flex;
          width: max-content;
          animation: blogMarqueeScroll 45s linear infinite;
        }
        .animate-blog-marquee:hover,
        .animate-blog-marquee.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* ترويسة القسم */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-right">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full font-black text-xs sm:text-sm mb-3 shadow-sm">
            <FaBookOpen className="text-emerald-700 w-4 h-4" />
            <span>أحدث مقالات المدونة</span>
          </div>

          <h2
            id="blog-marquee-heading"
            className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight"
          >
            دليلك العملي في{" "}
            <span className="text-emerald-700 underline decoration-emerald-400 decoration-4 underline-offset-8">
              تطوير المواقع والـ SEO
            </span>
          </h2>
        </div>

        {/* أزرار التحكم وتصفح كل المقالات */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "تشغيل شريط المقالات" : "إيقاف شريط المقالات مؤقتاً"}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 border-2 border-emerald-500 px-4 py-2.5 rounded-xl text-xs font-black transition-all shadow-sm cursor-pointer"
          >
            {isPaused ? (
              <>
                <FaPlay className="w-3 h-3" />
                <span>تشغيل الشريط</span>
              </>
            ) : (
              <>
                <FaPause className="w-3 h-3" />
                <span>إيقاف مؤقت</span>
              </>
            )}
          </button>

          <Link
            href="/blog"
            title="تصفح جميع المقالات"
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white border-2 border-emerald-500 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all shadow-sm"
          >
            <span>كل المقالات</span>
            <FaArrowLeft className="w-3.5 h-3.5 text-emerald-300" />
          </Link>
        </div>
      </div>

      {/* الشريط المتحرك لكروت المقالات */}
      <div className="relative w-full z-10 py-3" dir="ltr">
        <div className={`animate-blog-marquee gap-6 px-4 ${isPaused ? "paused" : ""}`}>
          {repeatedPosts.map((post, idx) => renderCard(post, idx, false))}
          {repeatedPosts.map((post, idx) => renderCard(post, idx, true))}
        </div>
      </div>
    </section>
  );
}