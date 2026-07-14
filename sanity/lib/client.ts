import { createClient } from 'next-sanity';

// هنحط القيم مباشرة هنا عشان نتخطى مشكلة الـ .env مؤقتاً ونشغل الموقع فوراً
export const client = createClient({
  projectId: 'xcrcr109', 
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});