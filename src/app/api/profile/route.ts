import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data', 'profile.json');

async function readProfile() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return { 
      id: '1', 
      name: 'John Doe', 
      email: 'john.doe@example.com', 
      phone: '+91 98765 43210',
      dateOfBirth: '1990-01-01',
      address: '123 Main Street, Mumbai, Maharashtra 400001',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', 
      orders: [] 
    };
  }
}

async function writeProfile(profile: any) {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  await fs.writeFile(dataPath, JSON.stringify(profile, null, 2), 'utf-8');
}

export async function GET() {
  const profile = await readProfile();
  return NextResponse.json(profile);
}

export async function POST(req: Request) {
  const body = await req.json();
  const current = await readProfile();
  const updated = { ...current, ...body };
  await writeProfile(updated);
  return NextResponse.json(updated);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const updated = { ...body };
  await writeProfile(updated);
  return NextResponse.json(updated);
}


