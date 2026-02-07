import { blogData, blogSectionData } from "@/lib/mock-data/blog";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    section: blogSectionData,
    posts: blogData,
  });
}