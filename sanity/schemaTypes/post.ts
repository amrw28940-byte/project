import React from 'react'
import { defineField, defineType, useFormValue } from 'sanity'
import { projectId, dataset } from '../env'

// مكون ذكي يولد رابط الصورة المباشر مع زر نسخ فوري لاستخدامه داخل كود الـ HTML
function ImageUrlCopier(props: any) {
  const { renderDefault, path } = props
  const parentPath = path.slice(0, -1)
  const imageValue = useFormValue(parentPath) as any
  const assetRef = imageValue?.asset?._ref

  let directUrl = ''
  if (assetRef) {
    // تحويل مرجع Sanity إلى رابط CDN مباشر
    const parts = assetRef.split('-')
    if (parts.length === 4) {
      directUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${parts[1]}-${parts[2]}.${parts[3]}`
    }
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    alert(`تم نسخ ${label} بنجاح!`)
  }

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '10px' } },
    renderDefault(props),
    directUrl
      ? React.createElement(
          'div',
          {
            dir: 'rtl',
            style: {
              backgroundColor: '#064e3b',
              border: '2px solid #10b981',
              padding: '12px',
              borderRadius: '10px',
              color: '#ffffff',
              fontSize: '13px',
            },
          },
          React.createElement(
            'div',
            { style: { fontWeight: 'bold', marginBottom: '6px', color: '#6ee7b7' } },
            '✅ رابط الصورة المباشر جاهز للاستخدام في كود الـ HTML:'
          ),
          React.createElement('input', {
            type: 'text',
            readOnly: true,
            value: directUrl,
            dir: 'ltr',
            style: {
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid #047857',
              backgroundColor: '#022c22',
              color: '#a7f3d0',
              fontFamily: 'monospace',
              fontSize: '12px',
              marginBottom: '8px',
            },
          }),
          React.createElement(
            'div',
            { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } },
            React.createElement(
              'button',
              {
                type: 'button',
                onClick: () => copyToClipboard(directUrl, 'رابط الصورة'),
                style: {
                  backgroundColor: '#10b981',
                  color: '#022c22',
                  fontWeight: 900,
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                },
              },
              '📋 نسخ الرابط المباشر'
            ),
            React.createElement(
              'button',
              {
                type: 'button',
                onClick: () =>
                  copyToClipboard(
                    `<img src="${directUrl}" alt="${imageValue?.alt || ''}" title="${imageValue?.alt || ''}" class="w-full rounded-2xl my-6 shadow-lg" loading="lazy" />`,
                    'وسم الصورة <img>'
                  ),
                style: {
                  backgroundColor: '#0f172a',
                  color: '#34d399',
                  fontWeight: 'bold',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: '1px solid #10b981',
                  cursor: 'pointer',
                },
              },
              '💻 نسخ كود <img> جاهز'
            )
          )
        )
      : React.createElement(
          'div',
          { style: { fontSize: '12px', color: '#94a3b8' } },
          'ارفع الصورة أولاً ليظهر لك رابطها المباشر هنا تلقائياً...'
        )
  )
}

export const postType = defineType({
  name: 'post',
  title: 'مقالات المدونة (Blog Posts)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'عنوان المقال الرئيسي (H1)',
      type: 'string',
      validation: (Rule) => Rule.required().error('عنوان المقال مطلوب'),
    }),
    defineField({
      name: 'slug',
      title: 'رابط المقال (Slug URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('رابط المقال مطلوب (اضغط Generate)'),
    }),
    defineField({
      name: 'excerpt',
      title: 'ملخص قصير للمقال (يظهر في كارت المدونة)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'mainImage',
      title: 'الصورة البارزة للمقال',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'النص البديل للصورة (ALT Text للـ SEO)',
          validation: (Rule) => Rule.required().error('النص البديل مهم جداً للـ SEO'),
        },
        {
          name: 'title',
          type: 'string',
          title: 'عنوان الصورة (Image Title)',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'تصنيف المقال',
      type: 'string',
      options: {
        list: [
          { title: 'تحسين محركات البحث (SEO)', value: 'تحسين محركات البحث (SEO)' },
          { title: 'تطوير مواقع Next.js', value: 'تطوير مواقع Next.js' },
          { title: 'تطوير ووردبريس', value: 'تطوير ووردبريس' },
          { title: 'متاجر شوبيفاي والتجارة الإلكترونية', value: 'متاجر شوبيفاي' },
          { title: 'صفحات الهبوط ومعدل التحويل CRO', value: 'صفحات الهبوط CRO' },
          { title: 'الذكاء الاصطناعي في التسويق', value: 'الذكاء الاصطناعي' },
        ],
      },
      initialValue: 'تحسين محركات البحث (SEO)',
    }),
    defineField({
      name: 'readingTime',
      title: 'وقت القراءة المتوقع (بالدقائق)',
      type: 'number',
      initialValue: 5,
    }),
    defineField({
      name: 'publishedAt',
      title: 'تاريخ النشر',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    // =========================================================================
    // 1. مخزن رفع الصور لاستخراج الروابط المباشرة واستخدامها في كود الـ HTML
    // =========================================================================
    defineField({
      name: 'htmlImagesGallery',
      title: '🖼️ رافع الصور لاستخراج الروابط (للاستخدام داخل كود الـ HTML)',
      description: 'ارفع أي صورة هنا وسيظهر لك رابطها المباشر فوراً مع زر نسخ لتضعه في كود الـ HTML الخاص بك',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'وصف الصورة (Alt) واستخراج الرابط',
              components: {
                input: ImageUrlCopier,
              },
            },
          ],
        },
      ],
    }),

    // =========================================================================
    // 2. خيار كتابة المقال بالكامل بكود HTML حر (اختياري)
    // =========================================================================
    defineField({
      name: 'fullHtmlCode',
      title: '💻 كود HTML كامل للمقال (اختياري)',
      description: 'إذا أردت تصميم وبناء المقال بالكامل بكود HTML مخصص، الصق الكود هنا مباشرة.',
      type: 'text',
      rows: 12,
    }),

    // =========================================================================
    // 3. محتوى المقال التفاعلي (يدعم الفقرات + إدراج HTML + إدراج مقالات بالبحث)
    // =========================================================================
    defineField({
      name: 'body',
      title: 'محتوى المقال التفصيلي (يمكنك دمج النصوص مع أكواد HTML ومقالات سابقة)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'فقرة عادية', value: 'normal' },
            { title: 'عنوان رئيسي H2', value: 'h2' },
            { title: 'عنوان فرعي H3', value: 'h3' },
            { title: 'عنوان فرعي H4', value: 'h4' },
            {
              title: 'اقتباس مميز',
              value: 'blockquote',
              component: (props: { children: React.ReactNode }) =>
                React.createElement(
                  'blockquote',
                  {
                    style: {
                      borderRight: '4px solid #10b981',
                      paddingRight: '12px',
                      margin: '8px 0',
                      fontStyle: 'italic',
                      color: '#64748b',
                    },
                  },
                  props.children
                ),
            },
          ],
        },
        {
          type: 'image',
          title: 'صورة داخل المقال',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'النص البديل للصورة (ALT)',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'وصف أسفل الصورة',
            },
          ],
        },
        // بلوك إدراج كود HTML مخصص في أي مكان وسط المقال
        {
          type: 'object',
          name: 'customHtml',
          title: '💻 إدراج كود HTML مخصص هنا',
          fields: [
            {
              name: 'html',
              title: 'اكتب أو الصق كود الـ HTML (يدعم الجداول، الأزرار، الفيديوهات، والصور)',
              type: 'text',
              rows: 8,
            },
          ],
          preview: {
            select: {
              html: 'html',
            },
            prepare({ html }) {
              return {
                title: '💻 بلوك كود HTML مخصص',
                subtitle: html ? html.substring(0, 60) + '...' : 'كود فارغ',
              }
            },
          },
        },
        // بلوك إدراج مقالات قديمة بالبحث في أي مكان وسط المقال
        {
          type: 'object',
          name: 'inlineRelatedPosts',
          title: '🔗 إدراج مقالات سابقة (ابحث بالاسم وأضفها هنا)',
          fields: [
            {
              name: 'sectionTitle',
              title: 'عنوان البلوك (مثال: اقرأ أيضاً / مقالات ذات صلة)',
              type: 'string',
              initialValue: 'اقرأ أيضاً في هذا الموضوع:',
            },
            {
              name: 'posts',
              title: 'ابحث عن المقال بالاسم واختره',
              type: 'array',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'post' }],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'sectionTitle',
              posts: 'posts',
            },
            prepare({ title, posts }) {
              const count = posts ? posts.length : 0
              return {
                title: `🔗 ${title || 'مقالات مقترحة داخل المقال'}`,
                subtitle: `تم اختيار (${count}) مقالات للعرض في هذا المكان`,
              }
            },
          },
        },
      ],
    }),

    // =========================================================================
    // 4. سكشن مقالات مقترحة ثابت أسفل المقال بالبحث المباشر
    // =========================================================================
    defineField({
      name: 'bottomRelatedPosts',
      title: '📚 مقالات ذات صلة تظهر أسفل المقال (ابحث باسم المقال واختره)',
      description: 'اكتب اسم أي مقال قديم في خانة البحث واضغط عليه ليظهر في سكشن شيك أسفل المقال',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    }),

    // =========================================================================
    // 5. إعدادات السيو المتقدمة (SEO & Schema Settings)
    // =========================================================================
    defineField({
      name: 'seoTitle',
      title: 'عنوان السيو في جوجل (Meta Title)',
      description: 'اتركه فارغاً لاستخدام عنوان المقال تلقائياً، أو اكتب عنواناً مخصصاً لجذب النقرات',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'وصف السيو في جوجل (Meta Description)',
      description: 'الوصف التسويقي الذي يظهر تحت اسم موقعك في نتائج بحث جوجل',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'seoKeywords',
      title: 'الكلمات المفتاحية المستهدفة (Keywords)',
      description: 'أضف الكلمات المفتاحية التي يستهدفها المقال (اضغط Enter بعد كل كلمة)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'faqs',
      title: 'الأسئلة الشائعة للمقال (تظهر كـ FAQ Schema في جوجل)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'السؤال', type: 'string' },
            { name: 'answer', title: 'الإجابة', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
  ],
})