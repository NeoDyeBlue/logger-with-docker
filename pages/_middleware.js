// import * as logger from "../lib/logger";
import Test from "../lib/test";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // await logger.info(req, 200, "middleware");
  Test();
  console.log(req.url);
  return NextResponse.next();
}
