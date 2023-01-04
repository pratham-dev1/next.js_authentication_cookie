import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const jwtToken =  req.cookies.get('token')
  const url = req.nextUrl.clone();
  const path = url.pathname;

  console.log(url)

  // if (path.startsWith('/images/')) {
  //   return NextResponse.next()
  // }

  // if (path.startsWith('/api/')) {
  //   return NextResponse.next()
  // }

  // if (!jwtToken) {
  //   console.log("iamine")
  //   url.pathname = "/"
  //   return NextResponse.rewrite(url);
  // }

  // if (jwtToken) {
  //   if (url.pathname === "/") {
  //     url.pathname = "/home";
  //     return NextResponse.rewrite(url);
  //   }
  //   return NextResponse.next();
  // }

 
}
// export const config = {
//   matcher: '/'
// }