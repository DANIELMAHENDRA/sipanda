import { ChevronRight, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroProfile({ profile }) {

    return (

        <section
            className="relative h-[70vh] min-h-[500px] flex items-center bg-cover bg-center"
            style={{
                backgroundImage: profile?.hero_image
                    ? `url(${profile.hero_image})`
                    : "linear-gradient(to right,#166534,#15803d)",
            }}
        >

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/60"></div>

            {/* Decoration */}

            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-green-400/20 blur-3xl"></div>

            {/* Content */}

            <div className="relative max-w-7xl mx-auto px-6 w-full">

                {/* Breadcrumb */}

                <div
                    data-aos="fade-right"
                    className="flex items-center gap-2 text-green-200 text-sm mb-6"
                >

                    <NavLink
                        to="/"
                        className="hover:text-white transition"
                    >
                        Beranda
                    </NavLink>

                    <ChevronRight size={16} />

                    <span className="text-white">
                        Profil Desa
                    </span>

                </div>

                {/* Badge */}

                <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="inline-flex items-center gap-2 bg-green-600/80 backdrop-blur-md text-white px-5 py-2 rounded-full mb-8"
                >

                    <MapPin size={18} />

                    {profile?.district || "Kecamatan"},
                    {profile?.regency || "Kabupaten"}

                </div>

                {/* Title */}

                <h1
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
                >

                    Profil
                    <br />

                    {profile?.village_name || "Desa Panca Tunggal"}

                </h1>

                {/* Description */}

                <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="mt-8 text-lg text-gray-200 leading-8 max-w-3xl"
                >

                    Mengenal lebih dekat
                    <strong className="text-white">
                        {" "}
                        {profile?.village_name || "Desa Panca Tunggal"}
                    </strong>
                    , yang berada di Kecamatan
                    <strong className="text-white">
                        {" "}
                        {profile?.district || "Merbau Mataram"}
                    </strong>
                    , Kabupaten
                    <strong className="text-white">
                        {" "}
                        {profile?.regency || "Lampung Selatan"}
                    </strong>
                    , Provinsi
                    <strong className="text-white">
                        {" "}
                        {profile?.province || "Lampung"}
                    </strong>
                    .

                </p>

            </div>

        </section>

    );

}