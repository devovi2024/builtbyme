import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
  jsonb,
  index,
} from "drizzle-orm/pg-core";

// ======== Products =========
export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),

    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),

    tagLine: varchar("tag_line", { length: 255 }).notNull(),
    websiteUrl: varchar("website_url", { length: 255 }).notNull(),

    tags: jsonb("tags").$type<string[]>().notNull(),
    voteCount: integer("vote_count").default(0).notNull(),


    // Metadata
    status: varchar("status", { length: 50 }).default("pending").notNull(),

    submittedBy: varchar("submitted_by", { length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }),
    organizationId: varchar("organization_id", { length: 255 }),

    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),

    approvedAt: timestamp("approved_at", { withTimezone: true }),
  },
  (table) => ({
    statusIndex: index("products_status_index").on(table.status),
    organizationIdIndex: index("products_organization_id_index").on(
      table.organizationId
    ),
  })
);
