import { Link } from "react-router-dom";

export default function Button({
    children,
    to,
    onClick,
    variant = "primary",
    type = "button",
    className = "",
}) {

    const baseStyle =
        "inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold transition-all duration-300";

    const variants = {

        primary:
            "bg-green-700 text-white hover:bg-green-800 shadow hover:shadow-lg",

        outline:
            "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white",

        white:
            "bg-white text-green-700 hover:bg-gray-100 shadow",

        danger:
            "bg-red-600 text-white hover:bg-red-700",

    };

    const style = `${baseStyle} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link
                to={to}
                className={style}
            >
                {children}
            </Link>
        );
    }

    return (

        <button
            type={type}
            onClick={onClick}
            className={style}
        >
            {children}
        </button>

    );

}