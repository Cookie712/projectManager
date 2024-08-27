import noProjectImage from '../assets/no-projects.png'
import Button from './Button.jsx'

import { useContext } from 'react'
import { Projects } from '../store/projectsProvider.jsx'

export default function NoProjectSelected() {
    const { startAddProject } = useContext(Projects)

    return (
        <div className="mt-32 text-center w-2/3 mx-auto">
            <img
                src={noProjectImage}
                alt="An empty task list"
                className="w-20 h-20 object-contain mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                No Project Selected
            </h2>
            <p className="text-gray-500 mb-6">
                Select a project or get started with a new one
            </p>
            <Button
                onClick={startAddProject}
                className="mt-6 bg-blue-600 text-white hover:bg-blue-500"
            >
                Create new project
            </Button>
        </div>
    )
}
