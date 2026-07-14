import { createClient } from 'next-sanity';
import Link from 'next/link';
import Header from '@/components/Header'; // استيراد الهيدر

// إعداد عميل سانتي للاتصال بقاعدة البيانات السحابية
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xcrcr109',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

// دالة جلب المقالات من سانتي
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "authorName": author->name
  }`;
  
  const posts = await client.fetch(query);
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* الهيدر خارج نطاق الـ RTL لضمان ثبات ترتيبه */}
      <Header />

      {/* المحتوى الرئيسي للمدونة مع تطبيق اتجاه النص العربي */}
      <div className="py-16 px-6 md:px-12 font-sans" dir="rtl">
        <div className="max-w-6xl mx-auto">
          
          {/* رأس الصفحة */}
          <div className="text-center mb-20">
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              اكتشف أحدث المقالات، النصائح، والشروحات الحصرية المكتوبة لك خصيصاً.
            </p>
          </div>

          {/* شبكة عرض المقالات */}
          {posts.length === 0 ? (
            <div className="text-center text-zinc-500 py-20 border border-dashed border-zinc-800 rounded-3xl">
              <p className="text-xl mb-4">لا توجد مقالات منشورة حالياً.</p>
              <p className="text-sm text-zinc-600">توجه إلى لوحة التحكم واكتب مقالك الأول ليظهر هنا فوراً!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article 
                  key={post.slug} 
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-orange-500/40 transition-all duration-300 group flex flex-col h-full hover:shadow-[0_10px_30px_rgba(249,115,22,0.05)]"
                >
                  {/* صورة المقال */}
                  {post.imageUrl && (
                    <div className="relative h-52 overflow-hidden bg-zinc-800">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent"></div>
                    </div>
                  )}

                  {/* تفاصيل الكارت */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 border-b border-zinc-800/50 pb-3">
                      {post.authorName && (
                        <span className="flex items-center gap-1">
                          <span className="text-orange-500">●</span> {post.authorName}
                        </span>
                      )}
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('ar-EG', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <div className="mt-auto pt-4">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-orange-500 font-bold inline-flex items-center gap-2 hover:text-orange-400 transition-colors text-sm group/btn"
                      >
                        اقرأ المزيد 
                        <span className="group-hover/btn:-translate-x-1 transition-transform duration-200">←</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}