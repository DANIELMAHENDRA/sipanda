import { Link } from "react-router-dom";

export default function MenuItem({

    icon: Icon,

    title,

    path,

    active = false,

}) {

    return (

        <Link

            to={path}

            className={`

                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition-all
                duration-200

                ${active
                    ? "bg-green-600 text-white shadow"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }

            `}

        >

            <Icon size={20} />

            <span className="font-medium">

                {title}

            </span>

        </Link>

    );

}