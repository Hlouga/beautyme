import { MetadataRoute } from 'next';
import { db } from '@/db';
import { providerProfiles } from '@/db/schema';
import { eq, and } from 'drizzle-orm';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Replace with your actual production URL later
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // Fetch all published providers
  const providers = await db.query.providerProfiles.findMany({
    where: and(
      eq(providerProfiles.isPublished, true),
      eq(providerProfiles.moderationStatus, 'approved')
    ),
    columns: { slug: true, updatedAt: true },
  });

  const providerUrls: MetadataRoute.Sitemap = providers.map((provider) => ({
    url: `${baseUrl}/providers/${provider.slug}`,
    lastModified: provider.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for-providers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...providerUrls,
  ];
}