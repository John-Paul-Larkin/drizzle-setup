import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  console.log("GET request received");
//   const result = await db.select().from(users).where(eq(users.id,2));

const result = await db.query.users.findFirst({
    with:{
        profile:true
    }

})



  return new Response(JSON.stringify(result));
}
