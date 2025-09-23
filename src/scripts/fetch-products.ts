// Node script to fetch products from Fake Store API at build/dev time
// Usage: ts-node src/scripts/fetch-products.ts (or add an npm script)
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

async function main() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  // Normalize to our Product shape where possible
  const mapped = data.map((p: any) => ({
    id: String(p.id),
    name: p.title,
    price: Number(p.price),
    image: p.image,
    category: p.category,
    description: p.description || '',
    rating: p.rating?.rate || 4.3,
    reviews: p.rating?.count || 50,
    inStock: true,
    tags: [p.category]
  }));
  const out = path.join(process.cwd(), 'src', 'data');
  await mkdir(out, { recursive: true });
  await writeFile(path.join(out, 'products.json'), JSON.stringify(mapped, null, 2));
  console.log(`Saved ${mapped.length} products.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


