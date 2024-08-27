import { createContext, useReducer } from 'react'

export const Projects = createContext({
    projects: {},
    addTask: () => {},
    deleteTask: () => {},
    selectProject: () => {},
    startAddProject: () => {},
    cancelAddProject: () => {},
    addProject: () => {},
    deleteProject: () => {}
})

function projectsReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK': {
            const taskId = Math.random()
            const newTask = {
                text: action.payload.text,
                projectId: state.selectedProjectId,
                id: taskId
            }

            return {
                ...state,
                tasks: [newTask, ...state.tasks]
            }
        }
        case 'DELETE_TASK': {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        }
        case 'SELECT_PROJECT': {
            return {
                ...state,
                selectedProjectId: action.payload.id
            }
        }
        case 'START_ADD_PROJECT': {
            return {
                ...state,
                selectedProjectId: null
            }
        }
        case 'CANCEL_ADD_PROJECT': {
            return {
                ...state,
                selectedProjectId: undefined
            }
        }
        case 'ADD_PROJECT': {
            const projectId = Math.random()
            const newProject = {
                ...action.payload.projectData,
                id: projectId
            }

            return {
                ...state,
                selectedProjectId: undefined,
                projects: [...state.projects, newProject]
            }
        }
        case 'DELETE_PROJECT': {
            return {
                ...state,
                selectedProjectId: undefined,
                projects: state.projects.filter(
                    project => project.id !== state.selectedProjectId
                )
            }
        }
        default:
            return state
    }
}

export default function ProjectsProvider({ children }) {
    const [projectsState, dispatch] = useReducer(projectsReducer, {
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    })

    function handleAddTask(text) {
        dispatch({ type: 'ADD_TASK', payload: { text } })
    }

    function handleDeleteTask(id) {
        dispatch({ type: 'DELETE_TASK', payload: { id } })
    }

    function handleSelectProject(id) {
        dispatch({ type: 'SELECT_PROJECT', payload: { id } })
    }

    function handleStartAddProject() {
        dispatch({ type: 'START_ADD_PROJECT' })
    }

    function handleCancelAddProject() {
        dispatch({ type: 'CANCEL_ADD_PROJECT' })
    }

    function handleAddProject(projectData) {
        dispatch({ type: 'ADD_PROJECT', payload: { projectData } })
    }

    function handleDeleteProject() {
        dispatch({ type: 'DELETE_PROJECT' })
    }

    return (
        <Projects.Provider
            value={{
                projects: projectsState,
                addTask: handleAddTask,
                deleteTask: handleDeleteTask,
                selectProject: handleSelectProject,
                startAddProject: handleStartAddProject,
                cancelAddProject: handleCancelAddProject,
                addProject: handleAddProject,
                deleteProject: handleDeleteProject
            }}
        >
            {children}
        </Projects.Provider>
    )
}
