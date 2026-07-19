import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import village from "../../../assets/images/village.jpg";

export default function AboutSection() {

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
                            src={village}
                            alt="Desa Panca Tunggal"
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
                            title="Desa Panca Tunggal"
                            description="Mengenal lebih dekat Desa Panca Tunggal sebagai desa yang terus berkembang menuju pelayanan publik yang modern, transparan, dan berbasis digital."
                        />

                        <p className="text-gray-600 leading-8">

                            Desa Panca Tunggal merupakan salah satu desa di Kecamatan
                            Merbau Mataram, Kabupaten Lampung Selatan yang memiliki
                            potensi besar pada sektor pertanian, perkebunan, UMKM,
                            peternakan, serta pemberdayaan masyarakat.

                        </p>

                        <p className="text-gray-600 leading-8 mt-5">

                            Website SIPANDA dibangun sebagai media informasi resmi desa
                            yang bertujuan memberikan pelayanan informasi kepada masyarakat
                            secara cepat, transparan, akurat, serta mudah diakses kapan saja.

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