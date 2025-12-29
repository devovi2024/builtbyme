CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"tag_line" varchar(255) NOT NULL,
	"website_url" varchar(255) NOT NULL,
	"tags" jsonb NOT NULL,
	"vote_count" integer DEFAULT 0 NOT NULL,
	"status" varchar(50) DEFAULT 'pending' NOT NULL,
	"submitted_by" varchar(255) NOT NULL,
	"user_id" varchar(255),
	"organization_id" varchar(255),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approved_at" timestamp with time zone,
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE INDEX "products_status_index" ON "products" USING btree ("status");--> statement-breakpoint
CREATE INDEX "products_organization_id_index" ON "products" USING btree ("organization_id");