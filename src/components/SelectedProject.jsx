import Tasks from './Tasks.jsx'
import { useContext } from 'react'
import { Projects } from '../store/projectsProvider.jsx'

export default function SelectedProject({ project }) {
    const { deleteProject } = useContext(Projects)

    const formattedDate = new Date(project.dueDate).toLocaleDateString(
        'en-US',
        {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }
    )

    return (
        <div className="w-full p-6 bg-white shadow-md rounded-lg">
            <header className="border-b-2 border-gray-200 pb-4 mb-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-gray-700">
                        {project.title}
                    </h1>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={deleteProject}
                    >
                        Delete
                    </button>
                </div>
                <p className="text-sm text-gray-500">{formattedDate}</p>
                <p className="mt-4 text-gray-600 whitespace-pre-wrap">
                    {project.description}
                </p>
            </header>
            <Tasks />
        </div>
    )
}
