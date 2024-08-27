import NewProject from './components/NewProject.jsx'
import NoProjectSelected from './components/NoProjectSelected.jsx'
import ProjectsSidebar from './components/ProjectsSidebar.jsx'
import SelectedProject from './components/SelectedProject.jsx'
import { Projects } from './store/projectsProvider.jsx'

import { useContext } from 'react'

function App() {
    const { projects } = useContext(Projects)

    const selectedProject = projects.projects.find(
        project => project.id === projects.selectedProjectId
    )

    let content = <SelectedProject project={selectedProject} />

    if (projects.selectedProjectId === null) {
        content = <NewProject />
    } else if (projects.selectedProjectId === undefined) {
        content = <NoProjectSelected />
    }

    return (
        <main className="min-h-screen p-10 flex gap-10 bg-gray-50">
            <ProjectsSidebar />
            {content}
        </main>
    )
}

export default App
