import Button from './Button.jsx'
import { useContext } from 'react'
import { Projects } from '../store/projectsProvider.jsx'

export default function ProjectsSidebar() {
    const { startAddProject, selectProject, projects } = useContext(Projects)

    return (
        <aside className="w-80 px-6 py-8 bg-white text-gray-800 shadow-lg rounded-lg">
            <h2 className="mb-6 font-bold text-lg uppercase text-gray-700">
                Your Projects
            </h2>
            <div>
                <Button
                    onClick={startAddProject}
                    className="mb-6 w-full text-white bg-blue-600 hover:bg-blue-500"
                >
                    + Add Project
                </Button>
            </div>
            <ul className="space-y-2">
                {projects.projects.map(project => {
                    let cssClasses =
                        'block w-full text-left px-4 py-2 rounded-lg'

                    if (project.id === projects.selectedProjectId) {
                        cssClasses += ' bg-blue-100 text-blue-700'
                    } else {
                        cssClasses += ' text-gray-600 hover:bg-gray-100'
                    }

                    return (
                        <li key={project.id}>
                            <button
                                className={cssClasses}
                                onClick={() => selectProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
