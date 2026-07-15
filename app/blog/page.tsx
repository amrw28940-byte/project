<<<<<<< HEAD
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
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* شبكة المربعات الهندسية الخلفية الموحدة للموقع */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 30, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 30, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* هالة حمراء للتوهج الخلفي */}
      <div 
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 0, 30, 0.04) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      {/* الهيدر خارج نطاق الـ RTL لضمان ثبات ترتيبه */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* المحتوى الرئيسي للمدونة مع تطبيق اتجاه النص العربي والخلفية الجديدة */}
      <div className="relative z-10 py-16 px-6 md:px-12 font-sans" dir="rtl">
        <div className="max-w-6xl mx-auto">
          
          {/* رأس الصفحة */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-wide">
              مدونة خدماتنا
            </h1>
            <p className="text-gray-900 font-extrabold text-lg max-w-xl mx-auto">
              اكتشف أحدث المقالات، النصائح، والشروحات الحصرية المكتوبة لك خصيصاً.
            </p>
          </div>

          {/* شبكة عرض المقالات */}
          {posts.length === 0 ? (
            <div className="text-center text-black bg-white/95 backdrop-blur-sm py-20 border-4 border-dashed border-[#ff001e] rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]">
              <p className="text-2xl font-black mb-4">لا توجد مقالات منشورة حالياً.</p>
              <p className="text-lg text-gray-750 font-bold">توجه إلى لوحة التحكم واكتب مقالك الأول ليظهر هنا فوراً!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article 
                  key={post.slug} 
                  /* كروت ببرواز أحمر عريض، حواف دائرية 3xl، وظل أسود قوي وعميق */
                  className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border-4 border-[#ff001e] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full"
                >
                  {/* صورة المقال (باستخدام وسم img الأصلي الخاص بك لضمان العمل فورا) */}
                  {post.imageUrl && (
                    <div className="relative h-52 overflow-hidden bg-gray-50 border-b-4 border-[#ff001e]">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  )}

                  {/* تفاصيل الكارت */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-gray-950 font-black mb-4 border-b-2 border-gray-100 pb-3">
                      {post.authorName && (
                        <span className="flex items-center gap-1">
                          <span className="text-[#ff001e]">●</span> {post.authorName}
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

                    <h2 className="text-2xl font-black mb-4 text-black group-hover:text-[#ff001e] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <div className="mt-auto pt-4">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-[#ff001e] font-black inline-flex items-center gap-2 hover:text-red-700 transition-colors text-lg group/btn"
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
=======
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
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* شبكة المربعات الهندسية الخلفية الموحدة للموقع */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 30, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 30, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* هالة حمراء للتوهج الخلفي */}
      <div 
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 0, 30, 0.04) 0%, transparent 75%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(100px)",
        }}
      />

      {/* الهيدر خارج نطاق الـ RTL لضمان ثبات ترتيبه */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* المحتوى الرئيسي للمدونة مع تطبيق اتجاه النص العربي والخلفية الجديدة */}
      <div className="relative z-10 py-16 px-6 md:px-12 font-sans" dir="rtl">
        <div className="max-w-6xl mx-auto">
          
          {/* رأس الصفحة */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-wide">
              مدونة خدماتنا
            </h1>
            <p className="text-gray-900 font-extrabold text-lg max-w-xl mx-auto">
              اكتشف أحدث المقالات، النصائح، والشروحات الحصرية المكتوبة لك خصيصاً.
            </p>
          </div>

          {/* شبكة عرض المقالات */}
          {posts.length === 0 ? (
            <div className="text-center text-black bg-white/95 backdrop-blur-sm py-20 border-4 border-dashed border-[#ff001e] rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]">
              <p className="text-2xl font-black mb-4">لا توجد مقالات منشورة حالياً.</p>
              <p className="text-lg text-gray-750 font-bold">توجه إلى لوحة التحكم واكتب مقالك الأول ليظهر هنا فوراً!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article 
                  key={post.slug} 
                  /* كروت ببرواز أحمر عريض، حواف دائرية 3xl، وظل أسود قوي وعميق */
                  className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border-4 border-[#ff001e] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full"
                >
                  {/* صورة المقال (باستخدام وسم img الأصلي الخاص بك لضمان العمل فورا) */}
                  {post.imageUrl && (
                    <div className="relative h-52 overflow-hidden bg-gray-50 border-b-4 border-[#ff001e]">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  )}

                  {/* تفاصيل الكارت */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-gray-950 font-black mb-4 border-b-2 border-gray-100 pb-3">
                      {post.authorName && (
                        <span className="flex items-center gap-1">
                          <span className="text-[#ff001e]">●</span> {post.authorName}
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

                    <h2 className="text-2xl font-black mb-4 text-black group-hover:text-[#ff001e] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    <div className="mt-auto pt-4">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-[#ff001e] font-black inline-flex items-center gap-2 hover:text-red-700 transition-colors text-lg group/btn"
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
>>>>>>> d7a18c653bb66d05c695841018946e9b1e0e7cb5
}