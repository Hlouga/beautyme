import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { providerProfiles } from "@/db/schema";
import { eq, and, ilike } from "drizzle-orm";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query || query.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const results = await db.query.providerProfiles.findMany({
      where: and(
        eq(providerProfiles.isPublished, true),
        eq(providerProfiles.moderationStatus, "approved"),
        ilike(providerProfiles.displayName, `%${query}%`)
      ),
      columns: {
        id: true,
        displayName: true,
        slug: true,
      },
      limit: 5,
    });

    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}