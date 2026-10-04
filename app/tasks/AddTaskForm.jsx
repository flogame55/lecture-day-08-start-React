"use client"
import { addTask } from "./actions";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="mt-2 p-2 bg-blue-500 text-white rounded">
            {pending ? 'Adding...' : 'Add Task'}
        </button>
    )
}

const AddTaskForm = () => {
    const [state, formAction] = useActionState(addTask, null)
    return (
        <form action={formAction}>
            <div>
                <input
                    name="title"
                    className="border p-2 w-full"
                    placeholder="Add a new task" />
                <SubmitButton />
            </div>
            {state?.error && (
                <div className="text-red-500">{state.error}</div>
            )}
        </form>
    )
}
export default AddTaskForm;