import { DbTask } from "@/types/Task";
import Task from "./Task";
import getAllTasks from "@/actions/GetTasks";

export default async function TaskList()  {
  const tasks: DbTask[] = await getAllTasks();

  return <>
    {tasks.filter((task: DbTask) => task.doneAt.trim() === '').map((task: DbTask) => {
        return <Task task={task} key={task.id}/>
      })}
  </>
}