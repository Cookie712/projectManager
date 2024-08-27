import { useRef } from 'react'

import Input from './Input.jsx'
import Modal from './Modal.jsx'

import { useContext } from 'react'
import { Projects } from '../store/projectsProvider.jsx'

export default function NewProject() {
    const modal = useRef()

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    const { addProject, cancelAddProject } = useContext(Projects)

    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open()
            return
        }

        addProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className="text-lg font-semibold text-gray-700 my-4">
                    Invalid Input
                </h2>

                <p className="text-gray-600 mb-4">
                    Please make sure you provide a valid value
                </p>
            </Modal>
            <div className="w-full max-w-xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-md">
                <menu className="flex items-center justify-end gap-4 mb-6">
                    <li>
                        <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={cancelAddProject}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div className="space-y-4">
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}
