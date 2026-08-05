import {
    Link2,
    Share2,
    Check,
} from "lucide-react";

import { useState } from "react";

export default function ShareSection() {

    const [copied, setCopied] = useState(false);

    const currentUrl = window.location.href;

    const handleShare = async () => {

        if (navigator.share) {

            try {

                await navigator.share({

                    title: "Potensi Desa Panca Tunggal",

                    text: "Lihat informasi potensi Desa Panca Tunggal.",

                    url: currentUrl,

                });

            } catch {

                // user cancel

            }

        } else {

            handleCopyLink();

        }

    };

    const handleCopyLink = async () => {

        try {

            await navigator.clipboard.writeText(currentUrl);

            setCopied(true);

            setTimeout(() => {

                setCopied(false);

            }, 2000);

        } catch (err) {

            console.error(err);

        }

    };

    return (

        <section className="py-20 bg-white border-t">

            <div className="max-w-5xl mx-auto px-6">

                <div
                    data-aos="fade-up"
                    className="bg-green-50 rounded-3xl p-10 flex flex-col lg:flex-row justify-between items-center gap-8"
                >

                    <div>

                        <div className="flex items-center gap-3">

                            <Share2
                                className="text-green-700"
                            />

                            <h2 className="text-3xl font-bold">

                                Bagikan Potensi Desa

                            </h2>

                        </div>

                        <p className="mt-4 text-gray-600 leading-8">

                            Bantu sebarkan informasi mengenai potensi Desa
                            Panca Tunggal kepada masyarakat.

                        </p>

                    </div>

                    <div className="flex gap-4">

                        <button
                            onClick={handleShare}
                            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 transition"
                        >

                            <Share2 size={20}/>

                            Bagikan

                        </button>

                        <button
                            onClick={handleCopyLink}
                            className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 py-3 rounded-full flex items-center gap-3 transition"
                        >

                            {copied ? (
                                <Check size={20}/>
                            ) : (
                                <Link2 size={20}/>
                            )}

                            {copied ? "Tersalin" : "Salin Link"}

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}