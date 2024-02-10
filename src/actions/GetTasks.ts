import { API_BASE_URL } from "@/lib/Constants";
import { DbTask } from "@/types/Task";

export default async function getAllTasks() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  const res = await fetch(`${API_BASE_URL}/tasks`, { cache: "no-store" });
  const tasks: DbTask[] = await res.json();
  return tasks;
}