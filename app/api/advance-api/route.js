import { advanceData, advanceSectionData } from "@/lib/mock-data/advancing";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    section: advanceSectionData,
    posts: advanceData,
  });
}