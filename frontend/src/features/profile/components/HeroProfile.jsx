import useProfile from "../../../hooks/useProfile";

export default function HeroProfile() {

    const {
        profile,
        loading,
    } = useProfile();

    if (loading) {

        return (

            <section className="bg-green-700 text-white py-28">

                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold">
                        Memuat...
                    </h1>

                </div>

            </section>

        );

    }

    return (

        <section
            className="relative text-white py-28 bg-cover bg-center"
            style={{
                backgroundImage: profile.hero_image
                    ? `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${profile.hero_image})`
                    : "linear-gradient(to right, #15803d, #166534)"
            }}
        >

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-5xl font-bold">

                    Profil {profile.village_name}

                </h1>

                <p className="mt-5 text-lg max-w-3xl leading-8">

                    Mengenal lebih dekat {profile.village_name},
                    yang berada di Kecamatan {profile.district},
                    Kabupaten {profile.regency},
                    Provinsi {profile.province}.

                </p>

            </div>

        </section>

    );

}