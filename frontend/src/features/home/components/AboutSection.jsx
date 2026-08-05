import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import village from "../../../assets/images/village.jpg";

export default function AboutSection({ profile }) {

    return (

        <section
            className="py-24 bg-gray-50"
            data-aos="fade-up"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Gambar Desa */}

                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >

                        <img
                            src={profile?.hero_image || village}
                            alt={profile?.village_name || "Desa"}
                            className="w-full h-auto rounded-2xl shadow-xl object-cover"
                        />

                    </div>

                    {/* Informasi Desa */}

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >

                        <SectionTitle
                            subtitle="Tentang Desa"
                            title={profile?.village_name || "Desa Panca Tunggal"}
                            description={`Mengenal lebih dekat ${profile?.village_name || "Desa Panca Tunggal"} yang berada di Kecamatan ${profile?.district || "-"}, Kabupaten ${profile?.regency || "-"}, Provinsi ${profile?.province || "-"}.`}
                        />

                        <p className="text-gray-600 leading-8">

                            {profile?.about}

                        </p>

                        <div
                            className="mt-10"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            <Button to="/profil">

                                Lihat Profil Desa

                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}