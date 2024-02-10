import editTask from "@/actions/EditTask";
import { DbTask } from "@/types/Task";

export default function Task({ task }: { task: DbTask })  {
  const key = `task-${task.id}`;
  const done = (task.doneAt && task.doneAt.trim() !== '') ? true : false;

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    const isDone = target.type === 'checkbox' ? target.checked : target.value;

    const doneAt = (isDone) ? new Date().toISOString() : '';

    task.doneAt = doneAt;
    editTask(task);
  }

  return <div key={key} className="block w-full bg-spedionorange text-black border border-2 border-spedionorange rounded my-4">
    <div className="my-2 p-2">
      <label htmlFor={`checkbox-${key}`} className="inline-flex items-center">
        <input
          id={`checkbox-${key}`}
          type="checkbox"
          checked={done}
          onChange={handleInputChange}
          className="
          "
        />
        <span className="ml-2">{task.title}</span>
      </label>
    </div>
  </div>
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function Skeleton() {
  return <div className={`block w-full bg-gray-950 border border-transparent rounded my-4 ${shimmer}`}>
    <div className="my-2 p-6"></div>
  </div>
}

export function TaskSkeleton() {
  return <>
    <div className="space-y-8">
      <Skeleton />
      <Skeleton />
    </div>
  </>
}