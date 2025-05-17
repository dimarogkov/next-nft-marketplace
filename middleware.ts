import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { PATHS } from './src/variables';
import { EnumTabs } from './src/types/enums';

const protectedPaths = [PATHS.CONNECT_WALLET, PATHS.PROFILE, PATHS.FOLLOWING, PATHS.SETTINGS];

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });
    const { pathname } = request.nextUrl;
    const isTestAccount = token?.name === 'Sam Altman';

    if (!token && protectedPaths.includes(pathname)) {
        return NextResponse.redirect(new URL(PATHS.SIGN_IN, request.url));
    }

    if (token && pathname === PATHS.SIGN_IN) {
        return NextResponse.redirect(new URL(PATHS.HOME, request.url));
    }

    if (token && isTestAccount && pathname === '/sam_altman') {
        return NextResponse.redirect(
            new URL(`${PATHS.PROFILE}?tab=${EnumTabs.NFTs}&${PATHS.PARAMS.PAGE}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [PATHS.SIGN_IN, ...protectedPaths, '/sam_altman'],
};
