import {
    Quote,
    Tag,
    TrendingUp,
    Leaf,
    Users,
} from "lucide-react";

export default function PotentialContent({ potential }) {

    const tags = potential.tags ?? [];

    const galleries = potential.gallery ?? [];

    return (

        <section className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Cover */}

                <img
                    data-aos="zoom-in"
                    src={potential.cover_image || potential.thumbnail}
                    alt={potential.title}
                    className="w-full rounded-3xl shadow-xl object-cover"
                />

                {/* Artikel */}

                <div
                    data-aos="fade-up"
                    className="mt-12 space-y-8 text-lg leading-9 text-gray-700"
                >

                    <div
                        dangerouslySetInnerHTML={{
                            __html: potential.content,
                        }}
                    />

                </div>

                {/* Quote */}

                {(potential.quote || potential.quote_author) && (

                    <div
                        data-aos="fade-up"
                        className="my-16 bg-green-50 border-l-8 border-green-700 rounded-r-3xl p-10"
                    >

                        <Quote
                            size={42}
                            className="text-green-700 mb-6"
                        />

                        <p className="italic text-2xl leading-10 text-gray-800">

                            "{potential.quote}"

                        </p>

                        <p className="mt-6 font-semibold text-green-700">

                            — {potential.quote_author}

                        </p>

                    </div>

                )}

                {/* Statistik */}

                {potential.statistics?.length > 0 && (

                    <div
                        data-aos="fade-up"
                        className="grid md:grid-cols-3 gap-6 my-20"
                    >

                        {potential.statistics.map((item, index) => (

                            <div
                                key={index}
                                className="bg-green-50 rounded-3xl p-8 text-center"
                            >

                                {index % 3 === 0 && (
                                    <Leaf
                                        size={42}
                                        className="mx-auto text-green-700 mb-5"
                                    />
                                )}

                                {index % 3 === 1 && (
                                    <Users
                                        size={42}
                                        className="mx-auto text-green-700 mb-5"
                                    />
                                )}

                                {index % 3 === 2 && (
                                    <TrendingUp
                                        size={42}
                                        className="mx-auto text-green-700 mb-5"
                                    />
                                )}

                                <h3 className="text-4xl font-bold text-green-700">

                                    {item.value}

                                </h3>

                                <p className="mt-3 text-gray-600">

                                    {item.title}

                                </p>

                            </div>

                        ))}

                    </div>

                )}

                {/* Gallery */}

                {galleries.length > 0 && (

                    <div
                        data-aos="fade-up"
                        className="mt-20"
                    >

                        <h2 className="text-3xl font-bold mb-8">

                            Dokumentasi Potensi

                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">

                            {galleries.map((image, index) => (

                                <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    className="rounded-2xl h-64 w-full object-cover shadow-lg hover:scale-105 transition duration-300"
                                />

                            ))}

                        </div>

                    </div>

                )}

                {/* Tags */}

                {tags.length > 0 && (

                    <div
                        data-aos="fade-up"
                        className="mt-20 flex flex-wrap items-center gap-4"
                    >

                        <Tag
                            size={22}
                            className="text-green-700"
                        />

                        {tags.map((tag, index) => (

                            <span
                                key={index}
                                className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium"
                            >

                                {tag}

                            </span>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );

}