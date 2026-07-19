import Button from "../../../components/common/Button";

export default function CTASection() {
    return (
        <section className="py-24 bg-green-700 text-white">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold">
                    Ingin Mengenal Desa Lebih Dekat?
                </h2>

                <p className="mt-4 text-lg">
                    Hubungi Pemerintah Desa untuk mendapatkan informasi lebih lanjut.
                </p>

                <div className="mt-8">
                    <Button to="/kontak">
                        Hubungi Kami
                    </Button>
                </div>

            </div>

        </section>
    );
}