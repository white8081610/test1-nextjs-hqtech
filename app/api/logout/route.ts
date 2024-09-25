import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('Logging out...');

  // Очищаем куки с токеном
  const response = NextResponse.json({ message: 'Logged out successfully' });
  response.cookies.set('accessToken', '', { maxAge: 0, path: '/' });
  response.cookies.set('refreshToken', '', { maxAge: 0, path: '/' });

  return response;
}