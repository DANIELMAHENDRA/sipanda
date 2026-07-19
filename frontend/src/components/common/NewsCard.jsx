import Card from "./Card";
import Button from "./Button";

export default function NewsCard({
    image,
    title,
    date,
    category,
    description,
}) {
    return (
        <Card>

            <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover"
            />

            <div className="p-6">

                <div className="flex justify-between text-sm text-gray-500">

                    <span>{category}</span>

                    <span>{date}</span>

                </div>

                <h3 className="text-xl font-bold mt-4">
                    {title}
                </h3>

                <p className="text-gray-600 mt-4">
                    {description}
                </p>

                <div className="mt-6">

                    <Button variant="secondary">
                        Baca Selengkapnya
                    </Button>

                </div>

            </div>

        </Card>
    );
}