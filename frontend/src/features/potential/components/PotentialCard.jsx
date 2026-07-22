import {
    MapPin,
    ArrowRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function PotentialCard({

    id,
    image,
    title,
    category,
    location,
    description,

}) {

    return (

        <article
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >

            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Category */}

                <span
                    className="absolute top-5 left-5 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >

                    {category}

                </span>

            </div>

            {/* Content */}

            <div className="p-7">

                {/* Title */}

                <h3
                    className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition"
                >

                    {title}

                </h3>

                {/* Location */}

                <div
                    className="flex items-center gap-2 mt-4 text-gray-500"
                >

                    <MapPin
                        size={18}
                        className="text-green-700"
                    />

                    <span>

                        {location}

                    </span>

                </div>

                {/* Description */}

                <p
                    className="mt-5 text-gray-600 leading-7"
                >

                    {description}

                </p>

                {/* Button */}

                <NavLink
                    to={`/potensi/${id}`}
                    className="inline-flex items-center gap-2 mt-8 font-semibold text-green-700 hover:gap-4 transition-all duration-300"
                >

                    Lihat Detail

                    <ArrowRight size={18} />

                </NavLink>

            </div>

        </article>

    );

}