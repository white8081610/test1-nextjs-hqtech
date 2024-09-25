import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Проверяем, есть ли токен в localStorage
  const accessToken = req.cookies.get('accessToken')?.value;

  console.log(`Middleware: Pathname: ${pathname}, AccessToken: ${accessToken}`);

  if (pathname === '/login' && accessToken) {
    // Если пользователь уже авторизован, перенаправляем на главную страницу
    console.log('Middleware: User is logged in, redirecting to /home');
    return NextResponse.redirect(new URL('/home', req.url));
  }

  if (pathname !== '/login' && !accessToken) {
    // Если пользователь не авторизован и пытается получить доступ к защищенным страницам, перенаправляем на страницу входа
    console.log('Middleware: User is not logged in, redirecting to /login');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/home', '/my-info', '/'],
};