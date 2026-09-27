import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const decodedValue = atob(authValue);
    const [user, pwd] = decodedValue.split(':');

    // You can change the username and password here
    if (user === 'admin' && pwd === 'brc123') {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Apply this middleware to all routes except Next.js internals
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
