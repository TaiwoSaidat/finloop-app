import { UsersProp, UsersProps } from "@/types/dashboard";

export async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}users/`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (res.ok) {
    const data = (await res.json()) as any;
    return data as UsersProp[];
  } else {
    throw new Error("Network response was not ok");
  }
}

export async function getUserById(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${id}`
    );

    if (!res.ok) throw new Error("Failed to fetch user");

    const data: any = await res.json();
    return data;
  } catch (error) {
    console.log("err:", error);
    throw new Error("Network response was not ok");
  }
}
// : Promise<UsersProp>
