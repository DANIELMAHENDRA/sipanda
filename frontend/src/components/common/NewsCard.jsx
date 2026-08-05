import Card from "./Card";
import Button from "./Button";

export default function NewsCard({

    image,

    title,

    date,

    category,

    description,

    to,

}) {

    return (

        <Card>

            <img
                src={image || "/images/no-image.png"}
                alt={title}
                className="w-full h-56 object-cover"
            />

            <div className="p-6">

                <div className="flex justify-between text-sm text-gray-500">

                    <span>

                        {category}

                    </span>

                    <span>

                        {date}

                    </span>

                </div>

                <h3 className="text-xl font-bold mt-4 line-clamp-2">

                    {title}

                </h3>

                <p className="text-gray-600 mt-4 line-clamp-3">

                    {description}

                </p>

                <div className="mt-6">

                    <Button
                        to={to}
                        variant="secondary"
                    >

                        Baca Selengkapnya

                    </Button>

                </div>

            </div>

        </Card>

    );

}