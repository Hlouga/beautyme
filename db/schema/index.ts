import {
       pgTable, 
        uuid, 
        text, 
        timestamp,
        date, 
        boolean, 
        integer, 
        jsonb, 
        numeric, 
        smallint, 
        bigserial, 
        index, 
        uniqueIndex 
      } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// --- USERS ---
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
   dateOfBirth: date("date_of_birth"),
  role: text("role").notNull().default("client"), // 'client', 'provider', 'admin'
  acceptedTermsAt: timestamp("accepted_terms_at", { withTimezone: true }),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  roleIdx: index("role_idx").on(table.role),
}));

// --- PROVIDER PROFILES ---
export const providerProfiles = pgTable("provider_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  slug: text("slug").notNull().unique(),
  displayName: text("display_name").notNull(),
  ownerName: text("owner_name"),  
  profileImageKey: text("profile_image_key"),
  category: text("category").notNull(),
  bio: text("bio"),
  city: text("city").notNull(),
  region: text("region"),
  country: text("country").notNull(),
  latitude: numeric("latitude", { precision: 9, scale: 6 }),
  longitude: numeric("longitude", { precision: 9, scale: 6 }),
  phone: text("phone"),
  emailPublic: text("email_public"),
  websiteUrl: text("website_url"),
  instagramUrl: text("instagram_url"),
  hours: jsonb("hours").$type<Record<string, { isOpen: boolean; open: string; close: string }>>(),

  showOwnerName: boolean("show_owner_name").default(true).notNull(),
  showPhone: boolean("show_phone").default(true).notNull(),
  showEmail: boolean("show_email").default(true).notNull(),
  showInstagram: boolean("show_instagram").default(true).notNull(),
  showWebsite: boolean("show_website").default(true).notNull(),
  isPublished: boolean("is_published").default(false).notNull(),
  isVerified: boolean("is_verified").default(false).notNull(),
  moderationStatus: text("moderation_status").default("pending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex("slug_idx").on(table.slug),
  categoryCityIdx: index("category_city_idx").on(table.category, table.city),
  publishedIdx: index("published_idx").on(table.isPublished),
}));

// --- SERVICES ---
export const services = pgTable("services", {
  id: uuid("id").primaryKey().defaultRandom(),
  providerProfileId: uuid("provider_profile_id").notNull().references(() => providerProfiles.id, { onDelete: "cascade" }),
  category: text("category").notNull().default("hairdresser"),
  name: text("name").notNull(),
  description: text("description"),
  priceRange: text("price_range"),
  imageKey: text("image_key"), 
  durationMinutes: integer("duration_minutes"),
  displayOrder: integer("display_order").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  profileIdx: index("service_profile_idx").on(table.providerProfileId),
}));

// --- PORTFOLIO ITEMS ---
export const portfolioItems = pgTable("portfolio_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  providerProfileId: uuid("provider_profile_id").notNull().references(() => providerProfiles.id, { onDelete: "cascade" }),
  imageKey: text("image_key").notNull(),
  caption: text("caption"),
  altText: text("alt_text"),
  displayOrder: integer("display_order").default(0).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  profileOrderIdx: index("portfolio_profile_order_idx").on(table.providerProfileId, table.displayOrder),
}));

// --- REVIEWS ---
export const reviews = pgTable("reviews", {
  id: uuid("id").primaryKey().defaultRandom(),
  providerProfileId: uuid("provider_profile_id").notNull().references(() => providerProfiles.id, { onDelete: "cascade" }),
  reviewerUserId: uuid("reviewer_user_id").notNull().references(() => users.id),
  rating: smallint("rating").notNull(), // 1 to 5
  body: text("body"),
  moderationStatus: text("moderation_status").default("pending").notNull(), // pending, approved, rejected
  providerReply: text("provider_reply"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  profileStatusIdx: index("review_profile_status_idx").on(table.providerProfileId, table.moderationStatus),
  // A user can only leave one review per provider
  uniqueReviewIdx: uniqueIndex("unique_review_idx").on(table.providerProfileId, table.reviewerUserId),
}));

export const providerProfilesRelations = relations(providerProfiles, ({ many }) => ({
  services: many(services),
  portfolioItems: many(portfolioItems),
  reviews: many(reviews), // <-- Add this line
}));

export const portfolioItemsRelations = relations(portfolioItems, ({ one }) => ({
  providerProfile: one(providerProfiles, {
    fields: [portfolioItems.providerProfileId],
    references: [providerProfiles.id],
  }),
}));

export const servicesRelations = relations(services, ({ one }) => ({
  providerProfile: one(providerProfiles, {
    fields: [services.providerProfileId],
    references: [providerProfiles.id],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  providerProfile: one(providerProfiles, {
    fields: [reviews.providerProfileId],
    references: [providerProfiles.id],
  }),
  reviewer: one(users, {
    fields: [reviews.reviewerUserId],
    references: [users.id],
  }),
}));