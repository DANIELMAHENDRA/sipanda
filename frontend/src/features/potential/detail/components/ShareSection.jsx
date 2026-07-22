import {
    Link2,
    Share2,
    Copy,
    Check,
} from "lucide-react";

import { useState } from "react";

export default function ShareSection() {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Gagal menyalin link:", error);
        }
    };

    return (
        <section className="py-20 bg-white border-t">

            <div className="max-w-5xl mx-auto px-6">

                <div
                    data-aos="fade-up"
                    className="
                        bg-green-50
                        rounded-3xl
                        p-8
                        md:p-10
                        flex
                        flex-col
                        lg:flex-row
                        items-center
                        justify-between
                        gap-8
                    "
                >

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">

                            <Share2
                                size={28}
                                className="text-green-700"
                            />

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Bagikan Potensi Desa
                            </h2>

                        </div>

                        <p className="text-gray-600 leading-8 max-w-xl">

                            Bantu sebarkan informasi mengenai potensi
                            unggulan Desa Panca Tunggal agar semakin
                            dikenal oleh masyarakat luas dan menjadi
                            inspirasi pengembangan desa lainnya.

                        </p>

                    </div>

                    {/* Right - Share Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">

                        {/* Facebook */}
                        <button
                            type="button"
                            aria-label="Bagikan ke Facebook"
                            title="Bagikan ke Facebook"
                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-blue-600
                                hover:bg-blue-700
                                transition
                                duration-300
                                flex
                                items-center
                                justify-center
                                text-white
                                font-bold
                                text-lg
                                shadow-lg
                                hover:scale-105
                            "
                        >
                            f
                        </button>

                        {/* Twitter / X */}
                        <button
                            type="button"
                            aria-label="Bagikan ke Twitter"
                            title="Bagikan ke Twitter"
                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-sky-500
                                hover:bg-sky-600
                                transition
                                duration-300
                                flex
                                items-center
                                justify-center
                                text-white
                                font-bold
                                text-lg
                                shadow-lg
                                hover:scale-105
                            "
                        >
                            X
                        </button>

                        {/* Instagram */}
                        <button
                            type="button"
                            aria-label="Bagikan ke Instagram"
                            title="Bagikan ke Instagram"
                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-pink-600
                                hover:bg-pink-700
                                transition
                                duration-300
                                flex
                                items-center
                                justify-center
                                text-white
                                font-bold
                                text-lg
                                shadow-lg
                                hover:scale-105
                            "
                        >
                            ◎
                        </button>

                        {/* Copy Link */}
                        <button
                            type="button"
                            onClick={handleCopyLink}
                            aria-label="Salin tautan halaman"
                            title="Salin tautan halaman"
                            className="
                                w-14
                                h-14
                                rounded-full
                                bg-green-700
                                hover:bg-green-800
                                transition
                                duration-300
                                flex
                                items-center
                                justify-center
                                text-white
                                shadow-lg
                                hover:scale-105
                            "
                        >
                            {copied ? (
                                <Check size={22} />
                            ) : (
                                <Link2 size={22} />
                            )}
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}