import NewTask from './NewTask.jsx'
import { useContext } from 'react'
import { Projects } from '../store/projectsProvider.jsx'

export default function Tasks() {
    const { projects, deleteTask } = useContext(Projects)

    return (
        <section>
            <h2 className="text-lg font-semibold text-gray-700 mb-6">Tasks</h2>
            <NewTask />
            {projects.tasks.length === 0 && (
                <p className="text-gray-600 mt-6">
                    This project does not have any tasks yet.
                </p>
            )}
            {projects.tasks.length > 0 && (
                <ul className="space-y-4 mt-8">
                    {projects.tasks.map(task => (
                        <li
                            key={task.id}
                            className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
                        >
                            <span className="text-gray-700">{task.text}</span>
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => deleteTask(task.id)}
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
