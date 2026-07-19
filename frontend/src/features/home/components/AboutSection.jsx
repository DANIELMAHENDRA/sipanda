import { Link } from "react-router-dom";
import SectionTitle from "../../../components/common/SectionTitle";
import village from "../../../assets/images/village.jpg";
import Button from "../../../components/common/Button";

export default function AboutSection() {

    return (

        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <img
                            src={village}
                            alt="Desa Panca Tunggal"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />

                    </div>

                    <div>

                        <SectionTitle
                            subtitle="Tentang Desa"
                            title="Desa Panca Tunggal"
                        />

                        <p className="text-gray-600 leading-8">

                            Desa Panca Tunggal merupakan salah satu desa di Kecamatan Merbau Mataram yang memiliki potensi besar di bidang pertanian, perkebunan, UMKM dan pemberdayaan masyarakat.

                        </p>

                        <p className="text-gray-600 leading-8 mt-5">

                            Website SIPANDA dibangun sebagai media informasi resmi desa sehingga masyarakat dapat memperoleh informasi dengan cepat, transparan, dan akurat.

                        </p>

                        <Button
                            to="/profil"
                        >
                            Lihat Profil Desa
                        </Button>

                    </div>

                </div>

            </div>

        </section>

    );

}