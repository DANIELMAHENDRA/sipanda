import { Link } from "react-router-dom";

export default function Button({
    children,
    to,
    variant = "primary",
}) {
    const base =
        "inline-block px-6 py-3 rounded-lg transition font-semibold";

    const styles = {
        primary:
            "bg-green-700 text-white hover:bg-green-800",

        secondary:
            "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
    };

    if (to) {
        return (
            <Link
                to={to}
                className={`${base} ${styles[variant]}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <button className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
}