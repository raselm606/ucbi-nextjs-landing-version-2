import { partnetData } from "@/lib/mock-data/partner";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    posts: partnetData,
  });
}