import { User } from "@/types/user";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/users");
  const users: User[] = await res.json();

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={`user-${user.id}`}>
            <h1>{user.name}</h1>
            <div>ID: {user.id}</div>
          </div>
        );
      })}
    </div>
  );
}
