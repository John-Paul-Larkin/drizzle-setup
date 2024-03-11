import { db } from "@/server/db";
import { users } from "@/server/db/schema";


export async function Get() {


  const result = await db.select().from(users)
  
//   res.status(200).json(result);
  return new Response(JSON.stringify(result))


}