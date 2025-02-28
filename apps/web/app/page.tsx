
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>Welcome to Production Server</h1>
      First name: 
      {user?.username}
      <br />
      password: 
      {user?.password}
    </div>
  );
}
