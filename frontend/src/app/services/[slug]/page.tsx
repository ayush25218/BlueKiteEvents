import React from "react";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return [
    { slug: "corporate-events" },
    { slug: "music-concerts" },
    { slug: "sports-events" },
    { slug: "comedy-shows" },
    { slug: "social-celebrations" },
    { slug: "themed-parties" },
    { slug: "stage-shows" },
  ];
}

export default async function ServiceDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  return <ServiceDetailClient slug={slug} />;
}
