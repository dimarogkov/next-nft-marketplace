import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { PATHS } from './src/variables';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });

    if (!token && request.nextUrl.pathname === PATHS.CONNECT_WALLET) {
        return NextResponse.redirect(new URL(PATHS.SIGN_IN, request.url));
    }

    if (!token && request.nextUrl.pathname === PATHS.PROFILE) {
        return NextResponse.redirect(new URL(PATHS.SIGN_IN, request.url));
    }

    if (!token && request.nextUrl.pathname === PATHS.FOLLOWING) {
        return NextResponse.redirect(new URL(PATHS.SIGN_IN, request.url));
    }

    if (!token && request.nextUrl.pathname === PATHS.SETTINGS) {
        return NextResponse.redirect(new URL(PATHS.SIGN_IN, request.url));
    }

    if (token && request.nextUrl.pathname === PATHS.SIGN_IN) {
        return NextResponse.redirect(new URL(PATHS.HOME, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [PATHS.SIGN_IN, PATHS.CONNECT_WALLET, PATHS.PROFILE, PATHS.FOLLOWING, PATHS.SETTINGS],
};
