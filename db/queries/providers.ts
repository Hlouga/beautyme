import { db } from "@/db";
import { providerProfiles, reviews } from "@/db/schema";
import { and, eq, ilike, or, desc } from "drizzle-orm"; // Ensure you have these imports

export async function getProviderBySlug(slug: string) {
  try {
    const profile = await db.query.providerProfiles.findFirst({
      where: eq(providerProfiles.slug, slug),
      with: {
        services: {
          orderBy: (services, { asc }) => [asc(services.displayOrder)],
        },
        portfolioItems: true,
        reviews: { // <-- Add this block
          where: eq(reviews.moderationStatus, "approved"),
          orderBy: [desc(reviews.createdAt)],
          with: {
            reviewer: true, // This pulls in the user data (name, email)
          }
        },
      },
    });
    return profile;
  } catch (error) {
    console.error("Error fetching provider:", error);
    return null;
  }
}


export async function getPublishedProviders({
  query,
  category,
  city,
}: {
  query?: string;
  category?: string;
  city?: string;
}) {
  try {
    const conditions = [
      eq(providerProfiles.isPublished, true),
      eq(providerProfiles.moderationStatus, "approved"),
    ];

    // Filter by Category
    if (category && category !== "all") {
      conditions.push(eq(providerProfiles.category, category));
    }

    // Filter by City (case-insensitive)
    if (city) {
      conditions.push(ilike(providerProfiles.city, `%${city}%`));
    }

    // Search by Name or Bio
    if (query) {
      conditions.push(
        or(
          ilike(providerProfiles.displayName, `%${query}%`),
          ilike(providerProfiles.bio, `%${query}%`)
        )!
      );
    }

    return await db.query.providerProfiles.findMany({
      where: and(...conditions),
      with: {
        portfolioItems: {
          where: (items, { eq }) => eq(items.isFeatured, true),
          limit: 1,
        },
      },
      orderBy: (providerProfiles, { desc }) => [desc(providerProfiles.createdAt)],
    });
  } catch (error) {
    console.error("Error fetching providers:", error);
    return [];
  }
}