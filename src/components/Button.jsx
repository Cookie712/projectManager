export default function Button({ children, className, ...props }) {
    return (
        <button
            className={`px-4 py-2 text-sm rounded-md ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
