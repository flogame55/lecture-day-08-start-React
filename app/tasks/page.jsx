import { getTasks } from '@/lib/taskStore'
import AddTaskForm from './AddTaskForm'
import { removeTask } from './actions'

// Server Component — ยังไม่มี form เชื่อม action (⌨️ บล็อก 1.2 เพิ่ม <form action={addTask}>)
export default function TasksPage() {
  const tasks = getTasks()

  return (
    <div className="p-6 max-w-md">
      <AddTaskForm />
      <ul className="mt-4">
        {tasks.map(t => <li key={t.id}>{t.title}
          <form action={removeTask} className="inline-block ml-2 p-2">
            <input type="hidden" name="id" value={t.id} />
            <button type="submit" className="text-white bg-red-500 px-2 py-1 rounded">ลบ</button>
          </form>
        </li>)}
      </ul>
    </div>
  )
}
