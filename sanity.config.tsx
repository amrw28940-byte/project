"use client";

import React from "react";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

// تصميم لوجو مخصص يظهر أعلى لوحة التحكم
function StudioLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 8px" }}>
      <span
        style={{
          backgroundColor: "#10b981",
          color: "#022c22",
          fontWeight: 900,
          padding: "4px 10px",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        AMR SALEM
      </span>
      <span style={{ fontWeight: 800, color: "#10b981", fontSize: "15px" }}>
        لوحة تحكم المدونة والـ SEO
      </span>
    </div>
  );
}

// شريط علوي مخصص للوحة التحكم فيه زر للرجوع للموقع وزر لفتح المدونة
function CustomStudioNavbar(props: any) {
  return (
    <div>
      <div
        dir="rtl"
        style={{
          backgroundColor: "#0f172a",
          borderBottom: "3px solid #10b981",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              backgroundColor: "#059669",
              color: "#fff",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            استوديو م. عمرو محمد السيد الرقمي
          </span>
          <span style={{ fontSize: "14px", fontWeight: "bold", color: "#cbd5e1" }}>
            إدارة المقالات، الصور، وتصدر محركات البحث (SEO)
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="/blog"
            target="_blank"
            style={{
              backgroundColor: "#10b981",
              color: "#022c22",
              padding: "6px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            معاينة صفحة المدونة ↗
          </a>
          <a
            href="/"
            style={{
              backgroundColor: "#1e293b",
              color: "#ffffff",
              border: "1px solid #10b981",
              padding: "6px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            العودة للموقع الرئيسي ←
          </a>
        </div>
      </div>
      {/* عرض شريط أدوات Sanity الأصلي أسفل الشريط المخصص */}
      {props.renderDefault(props)}
    </div>
  );
}

export default defineConfig({
  basePath: "/studio",
  name: "Amr_Salem_Digital_Studio_CMS",
  title: "لوحة تحكم مدونة م. عمرو سالم",
  projectId: projectId || "ttlise72",
  dataset: dataset || "production",
  schema,
  studio: {
    components: {
      logo: StudioLogo,
      navbar: CustomStudioNavbar,
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("إدارة محتوى الموقع")
          .items([
            S.listItem()
              .title("📝 مقالات المدونة (Blog Posts)")
              .child(S.documentTypeList("post").title("جميع المقالات")),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});