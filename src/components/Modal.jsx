import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

import Button from './Button.jsx'

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog
            ref={dialog}
            className="backdrop:bg-gray-800/90 p-6 rounded-lg shadow-lg"
        >
            {children}
            <form method="dialog" className="mt-6 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal
