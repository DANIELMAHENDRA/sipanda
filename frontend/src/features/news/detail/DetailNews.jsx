import { useParams } from "react-router-dom";

import HeroDetailNews from "./components/HeroDetailNews";
import NewsContent from "./components/NewsContent";
import RelatedNews from "./components/RelatedNews";
import CTASection from "./components/CTASection";

import useNews from "../../../hooks/useNews";
import useNewsDetail from "../../../hooks/useNewsDetail";

export default function DetailNews() {

    const { id } = useParams();

    // Detail berita
    const {
        news,
        loading,
        error,
    } = useNewsDetail(id);

    // Semua berita
    const {
        news: allNews,
        loading: loadingNews,
    } = useNews();

    // Berita terkait
    const relatedNews = news
        ? allNews
              .filter((item) => item.id !== news.id)
              .slice(0, 3)
        : [];

    if (loading) {

        return (

            <div className="py-32 text-center">

                Memuat berita...

            </div>

        );

    }

    if (error || !news) {

        return (

            <div className="py-32 text-center text-red-500">

                Berita tidak ditemukan.

            </div>

        );

    }

    return (

        <>

            <HeroDetailNews
                news={news}
            />

            <NewsContent
                news={news}
            />

            <RelatedNews
                news={relatedNews}
                loading={loadingNews}
            />

            <CTASection />

        </>

    );

}