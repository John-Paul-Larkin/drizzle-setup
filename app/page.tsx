import { Get } from "./api/user/route";

export default async function Home() {
  const returnValue = await Get();
  const data = await returnValue.json();
  console.log("data", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data[0].phone}</div>
    </main>
  );
}
