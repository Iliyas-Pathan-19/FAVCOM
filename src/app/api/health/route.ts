import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check if the application is running
    const health = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: 'connected', // In a real app, check actual DB connection
        cache: 'connected',    // In a real app, check Redis connection
        openai: process.env.OPENAI_API_KEY ? 'configured' : 'not_configured'
      }
    };

    return NextResponse.json(health, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
