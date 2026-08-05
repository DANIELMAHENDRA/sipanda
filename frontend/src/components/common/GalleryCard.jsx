import Button from "./Button";

export default function GalleryCard({
    image,
    title,
}) {

    return (

        <div className="group relative overflow-hidden rounded-2xl shadow-lg">

            <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    flex
                    flex-col
                    justify-end
                    p-6
                "
            >

                <h3 className="text-white text-xl font-bold line-clamp-2">

                    {title}

                </h3>

                <div className="mt-4">

                    <Button
                        to="/galeri"
                        variant="secondary"
                    >

                        Lihat Galeri

                    </Button>

                </div>

            </div>

        </div>

    );

}