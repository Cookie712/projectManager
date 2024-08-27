import { useState, useContext } from 'react'
import { Projects } from '../store/projectsProvider'

export default function NewTask() {
    const { addTask } = useContext(Projects)
    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return
        }
        addTask(enteredTask)
        setEnteredTask('')
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-3 py-2 border border-gray-300 rounded-lg"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className="px-4 py-2 text-white bg-green-600 hover:bg-green-500 rounded-lg"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    )
}
