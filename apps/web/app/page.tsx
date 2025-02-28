
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>Hello Everyone! Welcome to the show!</h1>
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
