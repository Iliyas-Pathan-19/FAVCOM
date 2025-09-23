import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data', 'wishlist.json');

async function readWishlist() {
  try {
    const s = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(s);
  } catch {
    return [];
  }
}

async function writeWishlist(items: any) {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  await fs.writeFile(dataPath, JSON.stringify(items, null, 2), 'utf-8');
}

export async function GET() {
  const items = await readWishlist();
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const body = await req.json();
  await writeWishlist(body);
  return NextResponse.json({ ok: true });
}


