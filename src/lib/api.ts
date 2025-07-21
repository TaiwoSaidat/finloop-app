import { UsersProp, UsersProps } from "@/types/dashboard";

export async function getUsers() {
  // const res = await fetch(`${process.env.MOCKAPI_URL}users/`, {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}users/`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json() as any ;
    return data as UsersProp[] ;
  } else {
    throw new Error("Network response was not ok");
  }
}
