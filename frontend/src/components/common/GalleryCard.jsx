export default function GalleryCard({
    image,
    title,
}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">

            <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            <div
                className="
                    absolute inset-0
                    bg-black/50
                    opacity-0
                    group-hover:opacity-100
                    transition
                    flex
                    items-end
                    p-6
                "
            >

                <h3 className="text-white text-xl font-semibold">
                    {title}
                </h3>

            </div>

        </div>
    );
}