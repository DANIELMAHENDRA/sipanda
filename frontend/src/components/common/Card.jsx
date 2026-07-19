export default function Card({ children, className = "" }) {
    return (
        <div
            className={`
                bg-white
                rounded-2xl
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                overflow-hidden
                ${className}
            `}
        >
            {children}
        </div>
    );
}