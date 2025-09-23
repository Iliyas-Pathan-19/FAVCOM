import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data', 'cart.json');

async function readCart() {
  try {
    const s = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(s);
  } catch {
    return [];
  }
}

async function writeCart(items: any) {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  await fs.writeFile(dataPath, JSON.stringify(items, null, 2), 'utf-8');
}

export async function GET() {
  const cart = await readCart();
  return NextResponse.json(cart);
}

export async function POST(req: Request) {
  const body = await req.json();
  await writeCart(body);
  return NextResponse.json({ ok: true });
}


