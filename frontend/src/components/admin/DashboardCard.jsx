export default function DashboardCard({

    title,

    value,

    color = "green",

}) {

    return (

        <div
            className="
                bg-white
                rounded-xl
                shadow-sm
                border
                border-gray-100
                p-6
            "
        >

            <p
                className="
                    text-sm
                    text-gray-500
                "
            >

                {title}

            </p>

            <h2
                className={`
                    mt-3
                    text-4xl
                    font-bold
                    text-${color}-600
                `}
            >

                {value}

            </h2>

        </div>

    );

}