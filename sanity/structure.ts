import { SEOPane } from 'sanity-plugin-seo-pane';

// تأكد من وجود كلمة export هنا
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('المقالات'),
    ]);

// وتأكد من وجود كلمة export هنا أيضاً
export const getDefaultDocumentNode = (S: any, { schemaType }: any) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form().title('التحرير'),
      S.view
        .component(SEOPane)
        .options({
          seoTitle: 'seoTitle',
          seoDescription: 'seoDescription',
          previewUrl: (doc: any) => `http://localhost:3000/blog/${doc.slug?.current}`,
        })
        .title('SEO'),
    ]);
  }
  return S.document().views([S.view.form()]);
};