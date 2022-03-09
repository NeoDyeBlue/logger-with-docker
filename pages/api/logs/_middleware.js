import { NextResponse } from "next/server";
// import * as logger from "../../../lib/logger";

export async function middleware(req) {
  // logger.info(req, 200, "api get");
  return NextResponse.next();
}
