import { NextResponse } from "next/server";
import { User } from "@/types/user";

export async function GET(request: Request) {
  const users: User[] = [
    { id: 1, name: "hoge" },
    { id: 2, name: "fuga" },
  ];
  return NextResponse.json(users);
}
