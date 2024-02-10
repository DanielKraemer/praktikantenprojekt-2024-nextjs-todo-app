import addTask from "@/actions/AddTask";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";
import { DocumentPlusIcon } from "@heroicons/react/16/solid";

export default function NewTask()  {
  const taskTitlePattern = "[\ a-zA-Z0-9]{5,}";
  const ref = useRef<HTMLFormElement>(null);

  const formAction = async (formData: FormData) => {
    ref.current?.reset();
    await addTask(formData);
  }

  return <form
      action={formAction}
      ref={ref}
      className="w-full mb-10"
    >
    <label htmlFor="new-task-title" className="block">
      <span className="text-gray-100">
        <DocumentPlusIcon className="h-5 w-5 inline-block text mr-1 -mt-1" />
        Let&apos;s add a new task
      </span>
      <input
        id="new-task-title"
        name="new-task-title"
        type="text"
        placeholder="New task title"
        pattern={taskTitlePattern}
        required
        className="peer
          my-4
          p-2
          block
          w-full
          rounded-md
          border
          border-transparent
          shadow-sm
          focus:border-spedionorange
          focus:ring
          focus:ring-spedionorange
          focus:ring-opacity-50
          bg-transparent
        "
      ></input>
      <p className="hidden peer-invalid:inline-block bg-red-700 p-2 rounded font-light">
        Enter a valid task title!
      </p>
    </label>
    <SubmitButton />
  </form>
}