import { client, urlFor } from "../sanity/lib/client";
import BlogMarqueeClient, { type BlogPostCard } from "./BlogMarqueeClient";

export default async function BlogMarqueeSection() {
  let posts: BlogPostCard[] = [];

  try {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...10] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      category,
      publishedAt
    }`;

    const rawPosts = await client.fetch(query, {}, { next: { revalidate: 60 } });

    posts = rawPosts.map((post: any) => ({
      _id: post._id,
      title: post.title,
      slug: post.slug,
      imageUrl: post.mainImage
        ? urlFor(post.mainImage)
            .width(680)
            .height(420)
            .auto("format")
            .quality(80)
            .url()
        : "/logo.webp",
      imageAlt: post.mainImage?.alt || post.title,
      category: post.category,
      publishedAt: post.publishedAt,
    }));
  } catch (error) {
    console.error("Error fetching blog posts for marquee:", error);
  }

  return <BlogMarqueeClient posts={posts} />;
}