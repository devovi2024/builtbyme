import { drizzle } from 'drizzle-orm/neon-http';
import "dotenv/config";
import { products } from "./schema";
import { allProducts } from "./data";
import { db } from '.';

async function main() {
  console.log(" Seeding DB...");

  await db.delete(products);
  console.log(" Cleared products table");

  for (const product of allProducts) {
    await db.insert(products).values({
      name: product.name,
      slug: product.slug,
      tagLine: product.tagLine,
      websiteUrl: product.websiteUrl,
      tags: product.tags,
      voteCount: product.voteCount ?? 0,
      status: product.status,
      submittedBy: product.submittedBy,
      approvedAt: product.approvedAt,
    });

    console.log(` Inserted: ${product.name}`);
  }

  const inserted = await db.select().from(products);

  console.log(` Done! Inserted ${inserted.length} products`);
  inserted.forEach((p) =>
    console.log(`- ${p.name} (${p.slug}) → ${p.voteCount} votes`)
  );
}

main()
  .catch((err) => {
    console.error(" Seeding failed:", err);
  })
  .finally(() => process.exit());
