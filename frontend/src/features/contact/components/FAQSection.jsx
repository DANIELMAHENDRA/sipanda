import { useState } from "react";

import {
    HelpCircle,
    Plus,
    Minus,
} from "lucide-react";

export default function FAQSection() {

    const faqs = [

        {
            question: "Bagaimana cara mengurus surat pengantar di Kantor Desa?",
            answer:
                "Masyarakat dapat datang langsung ke Kantor Desa Panca Tunggal dengan membawa dokumen yang diperlukan sesuai jenis surat yang akan diurus. Petugas akan membantu proses administrasi hingga selesai.",
        },

        {
            question: "Kapan jam pelayanan Kantor Desa?",
            answer:
                "Jam pelayanan berlangsung pada hari Senin hingga Jumat pukul 08.00–15.00 WIB, Sabtu pukul 08.00–12.00 WIB, sedangkan hari Minggu dan hari libur nasional kantor tutup.",
        },

        {
            question: "Apakah pelayanan administrasi dikenakan biaya?",
            answer:
                "Sebagian besar pelayanan administrasi desa tidak dipungut biaya sesuai dengan ketentuan yang berlaku. Apabila terdapat biaya resmi, masyarakat akan diinformasikan secara terbuka.",
        },

        {
            question: "Bagaimana cara menyampaikan kritik dan saran?",
            answer:
                "Kritik dan saran dapat disampaikan melalui formulir kontak pada website ini, melalui email resmi desa, atau datang langsung ke Kantor Desa Panca Tunggal.",
        },

        {
            question: "Apakah website SIPANDA menyediakan informasi kegiatan desa?",
            answer:
                "Ya. Website SIPANDA menyediakan informasi mengenai berita desa, kegiatan pemerintahan, potensi desa, galeri dokumentasi, serta berbagai pengumuman resmi lainnya.",
        },

    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {

        setActiveIndex(
            activeIndex === index ? null : index
        );

    };

    return (

        <section className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}

                <div
                    data-aos="fade-up"
                    className="text-center mb-16"
                >

                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

                        <HelpCircle size={18} />

                        Frequently Asked Questions

                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-6">

                        Pertanyaan yang Sering Diajukan

                    </h2>

                    <p className="mt-5 text-gray-600 leading-8 max-w-3xl mx-auto">

                        Berikut beberapa pertanyaan yang paling sering
                        ditanyakan masyarakat mengenai pelayanan
                        Pemerintah Desa Panca Tunggal.

                    </p>

                </div>

                {/* Accordion */}

                <div className="space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                        >

                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-8 py-6 bg-white hover:bg-green-50 transition"
                            >

                                <span className="text-left font-semibold text-lg text-gray-900">

                                    {faq.question}

                                </span>

                                {activeIndex === index ? (

                                    <Minus
                                        className="text-green-700"
                                        size={22}
                                    />

                                ) : (

                                    <Plus
                                        className="text-green-700"
                                        size={22}
                                    />

                                )}

                            </button>

                            {activeIndex === index && (

                                <div className="px-8 pb-6">

                                    <p className="text-gray-600 leading-8">

                                        {faq.answer}

                                    </p>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}