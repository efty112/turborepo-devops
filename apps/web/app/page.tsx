
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <hr />
      Name: 
      {user?.username}
      <br />
      password: 
      {user?.password}
      <hr />
    </div>
  );
}
