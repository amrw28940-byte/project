import type { Metadata } from "next";
import ProjectsShowcaseClient from "./ProjectsShowcaseClient";
export const metadata: Metadata = {
  title: "سابقة الأعمال والمشاريع الحية | استوديو م. عمرو سالم الرقمي",
  description:
    "تصفح معرض الأعمال التفاعلي لمهندس عمرو سالم: مواقع شركات، منصات Next.js فائقة السرعة، مواقع سياحية، مصانع، ومتاجر إلكترونية متصدرة لنتائج جوجل.",
  openGraph: {
    title: "معرض الأعمال التفاعلي | استوديو م. عمرو سالم الرقمي",
    description:
      "نماذج حقيقية وحية لمواقع ومتاجر إلكترونية تم تصميمها وتطويرها وتهيئتها لمحركات البحث SEO.",
    type: "website",
  },
};

export default function ProjectsPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "سابقة أعمال استوديو م. عمرو سالم الرقمي",
    description:
      "معرض أعمال تصميم وتطوير المواقع الإلكترونية، تطبيقات Next.js، المتاجر الإلكترونية، وتحسين محركات البحث SEO.",
    url: "https://www.amrsalm.com/projects",
    creator: {
      "@type": "Person",
      name: "م. عمرو سالم",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <ProjectsShowcaseClient />
    </>
  );
}