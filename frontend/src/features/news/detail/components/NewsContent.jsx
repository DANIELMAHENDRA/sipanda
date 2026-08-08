import {
    Quote,
    Tag,
    CalendarDays,
    Newspaper,
} from "lucide-react";

export default function NewsContent({ news }) {

    const tags = news?.category
        ? [news.category]
        : [];

    return (

        <section className="py-16 md:py-20 lg:py-24 bg-white">

            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Cover Image */}

                {news?.thumbnail && (

                    <div
                        data-aos="zoom-in"
                        className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl"
                    >

                        <img
                            src={news.thumbnail}
                            alt={news.title}
                            className="
                                w-full
                                h-[240px]
                                sm:h-[320px]
                                md:h-[420px]
                                lg:h-[500px]
                                object-cover
                            "
                        />

                        {/* Image Overlay */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>

                    </div>

                )}

                {/* Article Header */}

                <div
                    data-aos="fade-up"
                    className="mt-10 md:mt-12"
                >

                    {/* Category */}

                    <div className="flex flex-wrap items-center gap-3 mb-6">

                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">

                            <Newspaper size={16} />

                            {news?.category || "Berita Desa"}

                        </span>

                        {news?.published_at && (

                            <span className="inline-flex items-center gap-2 text-sm text-gray-500">

                                <CalendarDays size={16} />

                                {news.published_at}

                            </span>

                        )}

                    </div>

                    {/* Title */}

                    <h2 className="
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        font-bold
                        text-gray-900
                        leading-tight
                    ">

                        {news?.title}

                    </h2>

                    {/* Description */}

                    {news?.description && (

                        <p className="
                            mt-6
                            text-base
                            md:text-lg
                            text-gray-600
                            leading-8
                            max-w-4xl
                        ">

                            {news.description}

                        </p>

                    )}

                </div>

                {/* Divider */}

                <div className="my-10 md:my-12 h-px bg-gray-200"></div>

                {/* Article Content */}

                <article
                    data-aos="fade-up"
                    className="
                        prose
                        prose-base
                        sm:prose-lg
                        max-w-none

                        prose-headings:text-gray-900
                        prose-headings:font-bold
                        prose-headings:leading-tight

                        prose-p:text-gray-700
                        prose-p:leading-8

                        prose-a:text-green-700
                        prose-a:font-semibold
                        prose-a:no-underline
                        hover:prose-a:underline

                        prose-strong:text-gray-900

                        prose-blockquote:border-green-600
                        prose-blockquote:bg-green-50
                        prose-blockquote:text-gray-700

                        prose-img:rounded-2xl
                        prose-img:shadow-lg

                        prose-li:text-gray-700
                    "
                    dangerouslySetInnerHTML={{
                        __html: news?.content,
                    }}
                />

                {/* Quote */}

                <div
                    data-aos="fade-up"
                    className="
                        relative
                        my-14
                        md:my-16
                        overflow-hidden
                        rounded-2xl
                        bg-gradient-to-br
                        from-green-50
                        to-emerald-50
                        border
                        border-green-100
                        p-7
                        sm:p-9
                        md:p-10
                    "
                >

                    {/* Decoration */}

                    <div className="
                        absolute
                        -top-10
                        -right-10
                        w-32
                        h-32
                        rounded-full
                        bg-green-200/30
                    "></div>

                    <div className="relative">

                        <div className="
                            w-14
                            h-14
                            rounded-2xl
                            bg-green-700
                            flex
                            items-center
                            justify-center
                            mb-6
                        ">

                            <Quote
                                className="text-white"
                                size={28}
                            />

                        </div>

                        <p className="
                            text-xl
                            sm:text-2xl
                            md:text-3xl
                            italic
                            leading-9
                            md:leading-10
                            text-gray-800
                            font-medium
                        ">

                            "Informasi yang transparan merupakan langkah awal menuju pelayanan publik yang lebih baik."

                        </p>

                        <div className="mt-6 flex items-center gap-3">

                            <div className="w-10 h-1 rounded-full bg-green-700"></div>

                            <p className="font-semibold text-green-700">

                                Pemerintah Desa

                            </p>

                        </div>

                    </div>

                </div>

                {/* Tags */}

                {tags.length > 0 && (

                    <div
                        data-aos="fade-up"
                        className="
                            pt-8
                            border-t
                            border-gray-200
                        "
                    >

                        <div className="flex flex-wrap items-center gap-4">

                            <div className="flex items-center gap-2 text-gray-700 font-semibold">

                                <Tag
                                    size={20}
                                    className="text-green-700"
                                />

                                <span>

                                    Kategori

                                </span>

                            </div>

                            <div className="flex flex-wrap gap-2">

                                {tags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-green-100
                                            text-green-700
                                            text-sm
                                            font-semibold
                                            border
                                            border-green-200
                                        "
                                    >

                                        {tag}

                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </section>

    );
}