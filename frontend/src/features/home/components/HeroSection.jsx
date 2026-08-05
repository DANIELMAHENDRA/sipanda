import Button from "../../../components/common/Button";

export default function HeroSection({ profile }) {

    return (

        <section
            className="bg-slate-100 min-h-[85vh] flex items-center"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <p
                    className="text-green-700 font-semibold uppercase tracking-widest"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Website Resmi {profile?.village_name}
                </p>

                <h1
                    className="text-6xl font-bold mt-5 leading-tight"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Selamat Datang di
                    <br />

                    <span className="text-green-700">
                        {profile?.village_name}
                    </span>

                </h1>

                <p
                    className="mt-8 text-lg text-gray-600 max-w-2xl"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    {profile?.about}

                </p>

                <div
                    className="mt-10 flex flex-wrap gap-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >

                    <Button to="/profil">
                        Profil Desa
                    </Button>

                    <Button
                        to="/berita"
                        variant="outline"
                    >
                        Berita Desa
                    </Button>

                </div>

            </div>

        </section>

    );

}