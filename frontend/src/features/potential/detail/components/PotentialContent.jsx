import {
    Quote,
    TrendingUp,
    Leaf,
    Users,
} from "lucide-react";

export default function PotentialContent({ potential }) {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Cover */}

                <img
                    data-aos="zoom-in"
                    src={
                        potential.cover_image ||
                        potential.thumbnail ||
                        "https://placehold.co/1200x700?text=Potensi+Desa"
                    }
                    alt={potential.title}
                    className="w-full rounded-3xl shadow-xl object-cover"
                />

                {/* Content */}

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

                        {potential.quote && (

                            <p className="italic text-2xl leading-10 text-gray-800">

                                "{potential.quote}"

                            </p>

                        )}

                        {potential.quote_author && (

                            <p className="mt-6 font-semibold text-green-700">

                                — {potential.quote_author}

                            </p>

                        )}

                    </div>

                )}

                {/* Statistics */}

                {potential.statistics?.length > 0 && (

                    <div
                        data-aos="fade-up"
                        className="grid md:grid-cols-3 gap-6 my-20"
                    >

                        {potential.statistics
                            .filter(item => item.title || item.value)
                            .map((item, index) => (

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

            </div>

        </section>

    );

}