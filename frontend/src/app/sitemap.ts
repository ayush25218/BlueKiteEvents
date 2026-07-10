import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://frontend-pearl-six-1n89aq3m9j.vercel.app';
  const routes = [
    '',
    '/about',
    '/services',
    '/events',
    '/gallery',
    '/contact',
    '/charity',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
