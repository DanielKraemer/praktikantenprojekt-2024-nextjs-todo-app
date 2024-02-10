export type BaseTask = {
  title: string,
  description: string,
  createdAt: string,
  dueDate: string,
  doneAt: string,
}

export type DbTask = BaseTask & {
  id: string,
}