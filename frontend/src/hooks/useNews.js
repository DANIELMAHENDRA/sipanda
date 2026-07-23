import newsData from "../data/newsData";

export default function useNews() {

    const featuredNews = newsData.find(
        (item) => item.featured
    );

    const latestNews = newsData.slice(0, 6);

    return {

        news: newsData,

        featuredNews,

        latestNews,

    };
}