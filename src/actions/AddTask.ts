"use server";

import { API_BASE_URL } from "@/lib/Constants";
import { BaseTask } from "@/types/Task";
import revalidateTasks from "./Revalidate";

const addTask = async (formData: FormData) => {

  const title = formData.get("new-task-title");
  const newTask: BaseTask = {
    title: title as string,
    description: '',
    dueDate: '',
    doneAt: '',
    createdAt: new Date().toISOString(),
  }

  try {
    await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    revalidateTasks();
  } catch (e) {}
}

export default addTask;