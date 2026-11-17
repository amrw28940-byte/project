"use client";

import dynamic from "next/dynamic";
import config from "../../../sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false }
);

export default function StudioPage() {
  return (
    <div dir="ltr" className="fixed inset-0 z-[99999] bg-slate-950 overflow-auto">
      <NextStudio config={config} />
    </div>
  );
}