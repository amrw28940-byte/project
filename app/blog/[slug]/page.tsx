import Header from '@/components/Header';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image'; // 1. تأكد من استيراد دالة urlFor
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4 text-black">{children}</h2>,
    normal: ({ children }) => <p className="mb-4 text-zinc-700 leading-relaxed text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc mr-8 mb-6 text-zinc-700 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal mr-8 mb-6 text-zinc-700 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  // 2. الجزء السحري لإظهار الصور داخل المقال
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <img
          src={urlFor(value).url()}
          alt="صورة من المقال"
          className="rounded-2xl shadow-lg w-full h-auto"
        />
      </div>
    ),
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const query = `{
    "post": *[_type == "post" && slug.current == $slug][0]{ title, body, "imageUrl": mainImage.asset->url, "authorName": author->name },
    "latestPosts": *[_type == "post"] | order(_createdAt desc)[0...10]{ title, slug, "imageUrl": mainImage.asset->url }
  }`;

  const data = await client.fetch(query, { slug });
  const { post, latestPosts } = data;

  if (!post) return <div className="text-black text-center py-20">عذراً، المقال غير موجود!</div>;

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <div className="py-10 px-6" dir="rtl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <article className="lg:col-span-2">
            <h1 className="text-5xl font-black mb-6 leading-tight text-black">{post.title}</h1>
            
            {post.imageUrl && (
              <div className="w-full h-auto mb-8 bg-zinc-100 rounded-3xl overflow-hidden">
                <img src={post.imageUrl} className="w-full h-auto object-contain" alt={post.title} />
              </div>
            )}

            <div className="prose prose-lg max-w-none text-zinc-800">
              <PortableText value={post.body} components={components} />
            </div>
          </article>

          <aside className="space-y-10">
            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
              <h3 className="text-xl font-bold mb-6 border-b border-zinc-200 pb-2">أحدث المقالات</h3>
              {latestPosts.slice(0, 5).map((p: any) => (
                <Link key={p.slug.current} href={`/blog/${p.slug.current}`} className="flex gap-4 mb-4 hover:opacity-75 items-center">
                  <img src={p.imageUrl} className="w-20 h-16 object-cover rounded-lg" />
                  <span className="font-semibold text-sm text-black">{p.title}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <section className="max-w-6xl mx-auto mt-20 border-t border-zinc-100 pt-10">
          <h3 className="text-2xl font-bold mb-8 text-black">مقالات أخرى قد تهمك</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {latestPosts.slice(5, 10).map((p: any) => (
              <Link key={p.slug.current} href={`/blog/${p.slug.current}`} className="group">
                <img src={p.imageUrl} className="w-full h-32 object-cover rounded-xl mb-3" />
                <p className="font-medium text-sm text-zinc-700">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}