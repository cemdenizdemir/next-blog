import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// export function middleware(request: NextRequest) {
//   const headers = new Headers(request.headers);
//   headers.set("x-current-path", request.nextUrl.pathname);
//   console.log(" --- -- middleware -- asdf");
//   return NextResponse.next({ headers });

//   // return createMiddleware(routing);
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|tr)/:path*"],
};
