"use client";
import React, { useEffect, useState } from 'react';
import { getAllPosts } from '@/lib/wordpress';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPosts();
      setPosts(data || []);
      setLoading(false);
    }
    fetchData();
  }, []);

  const snowflakes = Array.from({ length: 60 }).map((_, i) => ({ 
    id: i, left: `${Math.random() * 100}%`, size: `${Math.random() * 5 + 3}px`, 
    delay: `${Math.random() * 12}s`, duration: `${Math.random() * 10 + 7}s`, 
    opacity: Math.random() * 0.6 + 0.4 
  }));

  return (
    // الخلفية الزرقاء الأصلية ثابتة هنا
    <main className="relative min-h-screen bg-gradient-to-tr from-[#06b6d4] via-[#0ea5e9] to-[#38bdf8] overflow-x-hidden pt-10 pb-20">
      
      {/* تأثير الثلج كما هو */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {snowflakes.map((snow) => (
          <div 
            key={snow.id} 
            className="absolute bg-white rounded-full animate-snow" 
            style={{ 
              top: "-20px", left: snow.left, width: snow.size, height: snow.size, 
              opacity: snow.opacity, animationDelay: snow.delay, animationDuration: snow.duration 
            }} 
          />
        ))}
      </div>

      {/* المحتوى - بدون الهيدر لتجنب التكرار */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-black text-white text-center mb-16">أحدث المقالات</h1>
        
        {loading ? (
          <p className="text-center text-white">جاري تحميل المقالات...</p>
        ) : posts.length === 0 ? (
          <p className="text-center text-white">لا توجد مقالات لعرضها حالياً.</p>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <a href={`/blog/${post.slug}`} key={post.slug} className="group block h-full">
                <div className="bg-white border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-amber-400 transition-all duration-300 h-full shadow-lg">
                  {post.featuredImage?.node?.sourceUrl && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage.node.sourceUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-black mb-3 group-hover:text-amber-700 transition">
                      {post.title}
                    </h2>
                    <div 
                      className="text-gray-900 text-sm font-medium line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }} 
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        .animate-snow { animation: snowFall 10s linear infinite; }
        @keyframes snowFall { to { transform: translateY(105vh); } }
      `}</style>
    </main>
  );
}