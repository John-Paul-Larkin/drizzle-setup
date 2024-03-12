import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("testr GET request received");
  //   const result = await db.select().from(users);
  //   return 'dasfsd';
  return NextResponse.json("hello jp");
}
