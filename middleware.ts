import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });

    if (!token && request.nextUrl.pathname === '/connect-wallet') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (!token && request.nextUrl.pathname === '/profile') {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (token && request.nextUrl.pathname === '/sign-in') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/sign-in', '/connect-wallet', '/profile'],
};
