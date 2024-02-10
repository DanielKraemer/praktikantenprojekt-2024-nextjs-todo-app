"use server";

import { API_BASE_URL } from "@/lib/Constants";
import { DbTask } from "@/types/Task";
import revalidateTasks from "./Revalidate";

const editTask = async (task: DbTask) => {
  await fetch(`${API_BASE_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  revalidateTasks();
}

export default editTask;