import { getNotionDB } from "@app/utils/fetch-notion";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(request: NextRequest) {
  const data = await getNotionDB()
  return NextResponse.json({ result: "success", data: data.results });
}
