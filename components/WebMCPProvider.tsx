"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WebMCPProvider() {
  const router = useRouter();

  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext || typeof modelContext.registerTool !== "function") {
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    // 1. أداة البحث في مقالات المدونة
    modelContext.registerTool(
      {
        name: "search_blog_articles",
        description:
          "البحث في مقالات مدونة م. عمرو سالم حول Next.js، ووردبريس، شوبيفاي، وتحسين محركات البحث SEO/GEO.",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description:
                "كلمة البحث (مثل: Next.js أو SEO أو ووردبريس). اتركها فارغة لجلب أحدث المقالات.",
            },
          },
        },
        execute: async ({ query = "" }) => {
          try {
            const res = await fetch(
              `/api/webmcp/search-posts?q=${encodeURIComponent(query)}`
            );
            const data = await res.json();
            return {
              content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
            };
          } catch {
            return {
              isError: true,
              content: [{ type: "text", text: "تعذر الاتصال بقاعدة المقالات." }],
            };
          }
        },
      },
      { signal }
    );

    // 2. أداة عرض خدمات الاستوديو
    modelContext.registerTool(
      {
        name: "get_studio_services",
        description:
          "عرض قائمة الخدمات التي يقدمها استوديو م. عمرو سالم الرقمي في تصميم المواقع والمتاجر والـ SEO.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        execute: async () => {
          const services = [
            {
              name: "تطوير مواقع Next.js سريعة ومتقدمة",
              details: "بناء مواقع وتطبيقات ويب مخصصة بأعلى أداء وCore Web Vitals.",
            },
            {
              name: "تطوير مواقع ومتاجر ووردبريس وشوبيفاي",
              details: "تصميم وتطوير متاجر إلكترونية احترافية مهيأة لزيادة المبيعات.",
            },
            {
              name: "تحسين محركات البحث (SEO & GEO)",
              details: "تهيئة المواقع لتصدر نتائج جوجل والظهور في إجابات الذكاء الاصطناعي.",
            },
          ];
          return {
            content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
          };
        },
      },
      { signal }
    );

    // 3. أداة تجهيز رابط استشارة واتساب مخصص
    modelContext.registerTool(
      {
        name: "request_whatsapp_consultation",
        description:
          "إنشاء رابط واتساب مباشر للتواصل مع م. عمرو سالم وطلب استشارة أو عرض سعر لمشروع.",
        inputSchema: {
          type: "object",
          properties: {
            serviceType: {
              type: "string",
              description: "نوع الخدمة المطلوبة (موقع Next.js، متجر، SEO، إلخ).",
            },
            projectSummary: {
              type: "string",
              description: "ملخص سريع عن المشروع المطلوب.",
            },
          },
          required: ["serviceType"],
        },
        execute: async ({ serviceType, projectSummary = "" }) => {
          const message = `مرحباً م. عمرو، أرغب في استشارة بخصوص: ${serviceType}. ${projectSummary}`.trim();
          const whatsappUrl = `https://wa.me/201020347946?text=${encodeURIComponent(
            message
          )}`;
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    status: "ready",
                    whatsappUrl,
                    note: "يمكن للمستخدم الضغط على الرابط للتواصل المباشر عبر واتساب.",
                  },
                  null,
                  2
                ),
              },
            ],
          };
        },
      },
      { signal }
    );

    // 4. أداة التنقل السريع داخل صفحات الموقع
    modelContext.registerTool(
      {
        name: "navigate_site",
        description: "الانتقال إلى صفحة معينة داخل موقع م. عمرو سالم.",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "المسار المطلوب (مثال: / أو /blog).",
            },
          },
          required: ["path"],
        },
        execute: async ({ path }) => {
          if (!path.startsWith("/")) {
            return {
              isError: true,
              content: [{ type: "text", text: "المسار يجب أن يبدأ بـ /" }],
            };
          }
          router.push(path);
          return {
            content: [{ type: "text", text: `تم الانتقال إلى الصفحة: ${path}` }],
          };
        },
      },
      { signal }
    );

    return () => {
      controller.abort();
    };
  }, [router]);

  return null;
}