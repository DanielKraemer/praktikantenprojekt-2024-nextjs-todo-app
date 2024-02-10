import { revalidatePath } from "next/cache";

export default function revalidateTasks() {
  revalidatePath('/tasks');
}