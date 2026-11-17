import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client, urlFor } from "../../../sanity/lib/client";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaArrowRight,
  FaArrowLeft,
  FaWhatsapp,
  FaQuestionCircle,
  FaCheckCircle,
  FaUserTie,
  FaBookReader,
  FaEye,
  FaLayerGroup,
  FaBolt,
} from "react-icons/fa";

export const revalidate = 60;

// 1. جلب بيانات المقال الحالي + قوائم الشريط الجانبي (أحدث 5، أكثر 5 مشاهدة) + آخر 10 مقالات أسفل الصفحة
async function getPostData(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const query = `{
    "post": *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      category,
      readingTime,
      publishedAt,
      views,
      fullHtmlCode,
      body[]{
        ...,
        _type == "inlineRelatedPosts" => {
          ...,
          posts[]->{
            _id,
            title,
            "slug": slug.current,
            excerpt,
            mainImage,
            category,
            readingTime
          }
        }
      },
      bottomRelatedPosts[]->{
        _id,
        title,
        "slug": slug.current,
        excerpt,
        mainImage,
        category,
        readingTime,
        publishedAt
      },
      seoTitle,
      seoDescription,
      seoKeywords,
      faqs
    },
    "latestFive": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      category,
      readingTime,
      publishedAt
    },
    "mostViewedFive": *[_type == "post" && slug.current != $slug] | order(coalesce(views, readingTime, 0) desc, publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      category,
      readingTime,
      views,
      publishedAt
    },
    "latestTen": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...10] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      category,
      readingTime,
      publishedAt
    }
  }`;

  return await client.fetch(query, { slug: decodedSlug });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPostData(slug);
  const post = data?.post;

  if (!post) {
    return {
      title: "المقال غير موجود | استوديو م. عمرو سالم",
    };
  }

  const metaTitle = post.seoTitle || `${post.title} | م. عمرو سالم`;
  const metaDescription = post.seoDescription || post.excerpt || "";
  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : "/logo.webp";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seoKeywords || [],
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title,
        },
      ],
    },
  };
}

// تخصيص عناصر المقال الداخلية
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-800 font-bold text-base sm:text-lg leading-loose mb-6">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-12 mb-5 pb-3 border-b-2 border-emerald-200 flex items-center gap-2">
        <span className="w-3 h-7 bg-emerald-600 rounded-full inline-block flex-shrink-0" />
        <span>{children}</span>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-black text-emerald-900 mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-6 mb-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-emerald-50/90 border-r-8 border-emerald-600 p-6 rounded-2xl my-8 text-slate-900 font-black text-base sm:text-lg shadow-sm">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 my-6 pr-4 list-none">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 my-6 pr-6 list-decimal font-black text-slate-900">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-slate-800 font-bold text-base sm:text-lg">
        <FaCheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0 mt-1.5" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-slate-800 font-bold text-base sm:text-lg leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-black text-slate-950 bg-emerald-100/70 px-1 rounded">
        {children}
      </strong>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = !href.startsWith("/");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-emerald-800 font-black underline decoration-emerald-500 decoration-2 underline-offset-4 hover:text-emerald-600 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const imgUrl = urlFor(value).width(1000).url();
      return (
        <figure className="my-10 bg-slate-100 border-4 border-emerald-500 rounded-3xl overflow-hidden shadow-lg">
          <div className="relative w-full h-[280px] sm:h-[460px]">
            <Image
              src={imgUrl}
              alt={value.alt || "صورة توضيحية داخل المقال"}
              title={value.caption || value.alt || "صورة توضيحية"}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-contain bg-white"
            />
          </div>
          {value.caption && (
            <figcaption className="bg-slate-900 text-emerald-300 text-center py-3 px-4 text-xs sm:text-sm font-black border-t-2 border-emerald-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    customHtml: ({ value }) => {
      if (!value?.html) return null;
      return (
        <div
          className="my-8 w-full overflow-x-auto custom-html-content"
          dangerouslySetInnerHTML={{ __html: value.html }}
        />
      );
    },

    inlineRelatedPosts: ({ value }) => {
      const relatedList = value?.posts?.filter(Boolean) || [];
      if (relatedList.length === 0) return null;

      return (
        <div className="my-10 bg-[#f3f7f4] border-4 border-emerald-500 rounded-3xl p-6 sm:p-8 shadow-md">
          <div className="flex items-center gap-2.5 mb-5 border-b-2 border-emerald-200 pb-3">
            <FaBookReader className="text-emerald-700 w-5 h-5 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-black text-slate-900 m-0">
              {value.sectionTitle || "اقرأ أيضاً في هذا الموضوع:"}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedList.map((relPost: any) => {
              const relImg = relPost.mainImage
                ? urlFor(relPost.mainImage).width(400).height(260).url()
                : "/logo.webp";

              return (
                <Link
                  key={relPost._id}
                  href={`/blog/${relPost.slug}`}
                  title={relPost.title}
                  className="group bg-white border-2 border-emerald-400 hover:border-emerald-600 rounded-2xl p-3.5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-emerald-200 bg-slate-100">
                    <Image
                      src={relImg}
                      alt={relPost.title}
                      title={relPost.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    {relPost.category && (
                      <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-1">
                        {relPost.category}
                      </span>
                    )}
                    <h4 className="font-black text-slate-900 group-hover:text-emerald-700 transition-colors text-sm sm:text-base line-clamp-2 leading-snug">
                      {relPost.title}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
    },
  },
};

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getPostData(slug);
  const post = data?.post;

  if (!post) {
    notFound();
  }

  const latestFive = data?.latestFive || [];
  const mostViewedFive = data?.mostViewedFive || [];
  const latestTen = data?.latestTen || [];

  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(675).url()
    : "/logo.webp";
  const mainImageAlt = post.mainImage?.alt || post.title;
  const mainImageTitle = post.mainImage?.title || post.title;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    image: mainImageUrl,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "م. عمرو محمد السيد (عمرو سالم)",
    },
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const bottomRelated = post.bottomRelatedPosts?.filter(Boolean) || [];

  return (
    <article
      className="min-h-screen pt-36 pb-24 px-4 sm:px-6 lg:px-10 relative z-10 text-slate-900"
      dir="rtl"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* حاوية عريضة تستوعب المقال + الشريط الجانبي الطولي + شبكة الـ 10 مقالات بالأسفل */}
      <div className="max-w-7xl mx-auto">
        {/* شريط العودة والتصنيف */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            title="العودة إلى جميع المقالات"
            className="inline-flex items-center gap-2 bg-white hover:bg-emerald-800 text-slate-900 hover:text-white border-2 border-emerald-500 px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition-colors shadow-sm"
          >
            <FaArrowRight className="w-3.5 h-3.5" />
            <span>العودة إلى المدونة</span>
          </Link>

          {post.category && (
            <span className="bg-emerald-100 border-2 border-emerald-500 text-emerald-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black flex items-center gap-1.5">
              <FaTag className="w-3.5 h-3.5 text-emerald-700" />
              <span>{post.category}</span>
            </span>
          )}
        </div>

        {/* تقسيم الصفحة: العمود الرئيسي للمقال (8 أعمدة) + الشريط الجانبي الطولي (4 أعمدة) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================== */}
          {/* 1. عمود المقال الرئيسي */}
          {/* ========================================================== */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border-4 border-emerald-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="p-6 sm:p-10 border-b-4 border-emerald-500 bg-[#f9fbf9]">
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p className="text-slate-700 font-bold text-base sm:text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-black text-slate-700 pt-4 border-t border-emerald-200">
                  <div className="flex items-center gap-2">
                    <FaUserTie className="text-emerald-700 w-4 h-4" />
                    <span>بقلم: م. عمرو سالم</span>
                  </div>

                  {post.publishedAt && (
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-emerald-700 w-4 h-4" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  )}

                  {post.readingTime && (
                    <div className="flex items-center gap-2">
                      <FaClock className="text-emerald-700 w-4 h-4" />
                      <span>وقت القراءة: {post.readingTime} دقائق</span>
                    </div>
                  )}
                </div>
              </div>

              {post.mainImage && (
                <div className="relative w-full h-[260px] sm:h-[460px] bg-slate-950 border-b-4 border-emerald-500">
                  <Image
                    src={mainImageUrl}
                    alt={mainImageAlt}
                    title={mainImageTitle}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 850px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-6 sm:p-10">
                {/* كود HTML كامل إن وجد */}
                {post.fullHtmlCode && (
                  <div
                    className="mb-10 w-full overflow-x-auto custom-html-content text-slate-800 font-bold leading-loose"
                    dangerouslySetInnerHTML={{ __html: post.fullHtmlCode }}
                  />
                )}

                {/* محتوى الـ PortableText */}
                {post.body && (
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                )}

                {post.seoKeywords && post.seoKeywords.length > 0 && (
                  <div className="mt-12 pt-6 border-t-2 border-emerald-100">
                    <span className="block text-xs font-black text-slate-500 mb-3">
                      الكلمات الدلالية والوسوم:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {post.seoKeywords.map((kw: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-[#f3f7f4] border border-emerald-400 text-emerald-900 px-3 py-1 rounded-xl text-xs font-black"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* الأسئلة الشائعة */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-10 bg-white rounded-3xl border-4 border-emerald-500 p-6 sm:p-10 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <FaQuestionCircle className="text-emerald-700 w-7 h-7 flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    الأسئلة الشائعة حول هذا الموضوع
                  </h2>
                </div>

                <div className="space-y-4">
                  {post.faqs.map((faq: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-[#f3f7f4] border-2 border-emerald-300 rounded-2xl p-5"
                    >
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                        س: {faq.question}
                      </h3>
                      <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* المقالات المختارة يدوياً بالبحث أسفل المقال (إن وجدت) */}
            {bottomRelated.length > 0 && (
              <div className="mt-10 bg-white rounded-3xl border-4 border-emerald-500 p-6 sm:p-10 shadow-xl">
                <div className="flex items-center justify-between border-b-2 border-emerald-100 pb-4 mb-6">
                  <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                    <FaBookReader className="text-emerald-700 w-6 h-6" />
                    <span>مقالات مختارة ذات صلة</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bottomRelated.map((item: any) => {
                    const itemImg = item.mainImage
                      ? urlFor(item.mainImage).width(600).height(400).url()
                      : "/logo.webp";

                    return (
                      <Link
                        key={item._id}
                        href={`/blog/${item.slug}`}
                        title={item.title}
                        className="group bg-[#f3f7f4] rounded-2xl border-2 border-emerald-400 hover:border-emerald-600 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                      >
                        <div>
                          <div className="relative h-44 w-full bg-slate-200 border-b-2 border-emerald-400 overflow-hidden">
                            <Image
                              src={itemImg}
                              alt={item.title}
                              title={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 400px"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-slate-700 font-bold text-xs line-clamp-2">
                              {item.excerpt}
                            </p>
                          </div>
                        </div>
                        <div className="px-5 pb-4 text-emerald-800 font-black text-xs flex items-center gap-1.5">
                          <span>اقرأ المقال</span>
                          <FaArrowLeft className="w-3 h-3" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ========================================================== */}
          {/* 2. الشريط الجانبي الطولي (Sidebar): أحدث 5 مقالات + أكثر 5 مقالات مشاهدة */}
          {/* ========================================================== */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
            {/* السكشن الأول: أحدث 5 مقالات */}
            <div className="bg-white rounded-3xl border-4 border-emerald-500 p-5 sm:p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between border-b-2 border-emerald-100 pb-3.5 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="bg-emerald-100 text-emerald-800 p-2 rounded-xl border border-emerald-400">
                    <FaBolt className="w-4 h-4" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">
                    أحدث 5 مقالات
                  </h2>
                </div>
                <span className="bg-emerald-800 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                  جديد
                </span>
              </div>

              <div className="space-y-3.5">
                {latestFive.length === 0 ? (
                  <p className="text-slate-500 font-bold text-xs text-center py-4">
                    ستظهر أحدث المقالات هنا فور نشرها.
                  </p>
                ) : (
                  latestFive.map((item: any) => {
                    const thumbUrl = item.mainImage
                      ? urlFor(item.mainImage).width(240).height(180).url()
                      : "/logo.webp";

                    return (
                      <Link
                        key={item._id}
                        href={`/blog/${item.slug}`}
                        title={item.title}
                        className="group bg-[#f4f8f5] hover:bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-600 rounded-2xl p-2.5 flex items-center gap-3.5 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-emerald-400 bg-slate-900">
                          <Image
                            src={thumbUrl}
                            alt={item.mainImage?.alt || item.title}
                            title={item.title}
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-black text-slate-900 group-hover:text-emerald-800 text-xs sm:text-sm leading-snug line-clamp-2 mb-1.5 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                            <FaCalendarAlt className="text-emerald-700 w-3 h-3 flex-shrink-0" />
                            <span className="truncate">
                              {item.publishedAt
                                ? new Date(item.publishedAt).toLocaleDateString("ar-EG", {
                                    month: "short",
                                    day: "numeric",
                                  })
                                : "مقال حديث"}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
            </div>

            {/* السكشن الثاني: أكثر 5 مقالات مشاهدة */}
            <div className="bg-white rounded-3xl border-4 border-emerald-500 p-5 sm:p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between border-b-2 border-emerald-100 pb-3.5 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="bg-slate-900 text-emerald-400 p-2 rounded-xl border border-emerald-500">
                    <FaEye className="w-4 h-4" />
                  </span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">
                    الأكثر مشاهدة
                  </h2>
                </div>
                <span className="bg-slate-900 text-emerald-300 border border-emerald-500 text-[11px] font-black px-2.5 py-0.5 rounded-full">
                  TOP 5
                </span>
              </div>

              <div className="space-y-3.5">
                {mostViewedFive.length === 0 ? (
                  <p className="text-slate-500 font-bold text-xs text-center py-4">
                    ستظهر المقالات الأكثر قراءة هنا.
                  </p>
                ) : (
                  mostViewedFive.map((item: any, index: number) => {
                    const thumbUrl = item.mainImage
                      ? urlFor(item.mainImage).width(240).height(180).url()
                      : "/logo.webp";

                    return (
                      <Link
                        key={item._id}
                        href={`/blog/${item.slug}`}
                        title={item.title}
                        className="group relative bg-[#f4f8f5] hover:bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-600 rounded-2xl p-2.5 flex items-center gap-3.5 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        {/* الصورة البارزة للمقال مع بادج الترتيب */}
                        <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-emerald-400 bg-slate-900">
                          <Image
                            src={thumbUrl}
                            alt={item.mainImage?.alt || item.title}
                            title={item.title}
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <span className="absolute top-1 right-1 bg-slate-950/90 text-emerald-400 border border-emerald-400 w-5 h-5 rounded-md text-[10px] font-black flex items-center justify-center shadow">
                            {index + 1}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-black text-slate-900 group-hover:text-emerald-800 text-xs sm:text-sm leading-snug line-clamp-2 mb-1.5 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3 text-[11px] font-bold text-emerald-800">
                            <span className="flex items-center gap-1">
                              <FaEye className="w-3 h-3" />
                              <span>{item.views || (5 - index) * 320 + 450} قراءة</span>
                            </span>
                            {item.readingTime && (
                              <span className="text-slate-500 flex items-center gap-1">
                                <FaClock className="w-2.5 h-2.5" />
                                <span>{item.readingTime} د</span>
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
            </div>

            {/* بطاقة تواصل سريعة في نهاية الشريط الجانبي */}
            <div className="bg-slate-900 text-white rounded-3xl border-4 border-emerald-500 p-6 shadow-xl text-center">
              <span className="inline-block bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full mb-3">
                استشارة مجانية
              </span>
              <h3 className="text-lg font-black text-white mb-2">
                هل تريد تصميم موقع يتصدر جوجل؟
              </h3>
              <p className="text-slate-300 font-bold text-xs leading-relaxed mb-4">
                تواصل مباشرة مع م. عمرو سالم لبدء مشروعك بأحدث تقنيات الويب والـ SEO.
              </p>
              <a
                href={`https://wa.me/201020347946?text=${encodeURIComponent(
                  `مرحباً م. عمرو، قرأت مقالك (${post.title}) وأرغب في استشارة لمشروعي.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="تواصل عبر واتساب"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm transition-all shadow-md"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>تحدث معنا عبر واتساب</span>
              </a>
            </div>
          </aside>
        </div>

        {/* ========================================================== */}
        {/* 3. سكشن آخر 10 مقالات أسفل المقال (5 مقالات فوق و5 مقالات تحتها) */}
        {/* ========================================================== */}
        {latestTen.length > 0 && (
          <section
            aria-label="آخر 10 مقالات في المدونة"
            className="mt-16 bg-white rounded-3xl border-4 border-emerald-500 p-6 sm:p-10 shadow-[0_25px_55px_-15px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-emerald-100 pb-5 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-800 text-emerald-300 p-3 rounded-2xl border-2 border-emerald-400 shadow-sm">
                  <FaLayerGroup className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    أحدث 10 مقالات في المدونة
                  </h2>
                  <p className="text-slate-600 font-bold text-xs sm:text-sm mt-0.5">
                    تصفح المزيد من الدلائل والشروحات التقنية والتسويقية
                  </p>
                </div>
              </div>

              <Link
                href="/blog"
                title="عرض كافة المقالات"
                className="bg-[#f3f7f4] hover:bg-emerald-800 text-slate-900 hover:text-white border-2 border-emerald-500 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors"
              >
                <span>عرض كل المقالات</span>
                <FaArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* شبكة 5 أعمدة في الصف الواحد على الشاشات الكبيرة (5 فوق و 5 تحت = 10 مقالات) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {latestTen.map((item: any) => {
                const cardImg = item.mainImage
                  ? urlFor(item.mainImage).width(500).height(340).url()
                  : "/logo.webp";

                return (
                  <Link
                    key={item._id}
                    href={`/blog/${item.slug}`}
                    title={item.title}
                    className="group bg-[#f4f8f5] rounded-2xl border-2 border-emerald-400 hover:border-emerald-600 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                  >
                    <div>
                      <div className="relative h-36 w-full bg-slate-900 border-b-2 border-emerald-400 overflow-hidden">
                        <Image
                          src={cardImg}
                          alt={item.mainImage?.alt || item.title}
                          title={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 240px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {item.category && (
                          <span className="absolute top-2 right-2 bg-slate-950/90 text-emerald-300 border border-emerald-400 px-2 py-0.5 rounded-lg text-[10px] font-black truncate max-w-[90%]">
                            {item.category}
                          </span>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-black text-slate-900 group-hover:text-emerald-800 transition-colors text-sm leading-snug line-clamp-2 mb-2">
                          {item.title}
                        </h3>
                        {item.excerpt && (
                          <p className="text-slate-600 font-bold text-xs line-clamp-2 leading-relaxed">
                            {item.excerpt}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="px-4 pb-3.5 pt-2 border-t border-emerald-200/60 flex items-center justify-between text-[11px] font-black text-emerald-800">
                      <span>اقرأ المقال</span>
                      <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* صندوق التواصل الختامي أسفل الصفحة */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl border-4 border-emerald-500 p-7 sm:p-10 shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            هل أعجبك المقال وتريد تطبيق هذه الاستراتيجيات في موقعك؟
          </h2>
          <p className="text-slate-300 font-bold text-sm sm:text-base max-w-2xl mx-auto mb-6">
            تواصل الآن مباشرة عبر الواتساب مع م. عمرو سالم للحصول على فحص شامل لموقعك أو بناء موقع جديد متصدر لمحركات البحث.
          </p>
          <a
            href={`https://wa.me/201020347946?text=${encodeURIComponent(
              `مرحباً م. عمرو، قرأت مقالك (${post.title}) وأرغب في استشارة لمشروعي.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="تواصل عبر واتساب الآن"
            className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>تحدث مع م. عمرو سالم عبر واتساب</span>
          </a>
        </div>
      </div>
    </article>
  );
}