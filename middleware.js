import { NextResponse } from "next/server";

export default async function sessionValidator(req) {
  const sessionCookie = req.cookies.get("session");
  const url = req.url;

  console.log(req.cookies.has("session"));

  if (!sessionCookie) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  }
  if (url === "/") {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/",
};
