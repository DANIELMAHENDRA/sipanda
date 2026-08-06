export default function LatestNews({ news }) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">

                Berita Terbaru

            </h2>

            <div className="space-y-4">

                {

                    news.length === 0

                        ? (

                            <p className="text-gray-500">

                                Belum ada berita.

                            </p>

                        )

                        : (

                            news.map((item) => (

                                <div
                                    key={item.id}
                                    className="border-b pb-3"
                                >

                                    <h4 className="font-semibold">

                                        {item.title}

                                    </h4>

                                    <p className="text-sm text-gray-500">

                                        {item.created_at}

                                    </p>

                                </div>

                            ))

                        )

                }

            </div>

        </div>

    );

}