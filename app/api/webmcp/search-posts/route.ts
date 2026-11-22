import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() || "";

  try {
    const query = q
      ? `*[_type == "post" && (title match $q || excerpt match $q || category match $q)] | order(publishedAt desc)[0...6] {
          title,
          "slug": slug.current,
          excerpt,
          category,
          publishedAt
        }`
      : `*[_type == "post"] | order(publishedAt desc)[0...6] {
          title,
          "slug": slug.current,
          excerpt,
          category,
          publishedAt
        }`;

    const posts = await client.fetch(query, q ? { q: `*${q}*` } : {});

    return NextResponse.json({
      count: posts.length,
      posts: posts.map((p: any) => ({
        title: p.title,
        category: p.category || "عام",
        excerpt: p.excerpt || "",
        url: `https://www.amrsalm.com/blog/${p.slug}`,
      })),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ أثناء البحث في المقالات" },
      { status: 500 }
    );
  }
}