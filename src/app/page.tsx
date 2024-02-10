"use client";

import NewTask from "@/components/NewTask";
import { TaskSkeleton } from "@/components/Task";
import TaskList from "@/components/TaskList";
import { Suspense } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-left p-24">
      <NewTask />
      <h2
        className="
          font-bold
          font-spedionorange
          text-left
          border-b-2
          border-spedionorange
          pb-2
          mb-2
        "
      >Aktuelle Aufgaben</h2>
      <Suspense fallback={<TaskSkeleton />}>
        <TaskList />
      </Suspense>
    </main>
  );
}
