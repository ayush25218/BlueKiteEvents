import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://frontend-pearl-six-1n89aq3m9j.vercel.app/sitemap.xml',
  };
}
