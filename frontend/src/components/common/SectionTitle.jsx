export default function SectionTitle({
    subtitle,
    title,
    description,
}) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="uppercase tracking-widest text-green-700 font-semibold">
                {subtitle}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
                {title}
            </h2>

            {description && (
                <p className="text-gray-600 mt-5 leading-8">
                    {description}
                </p>
            )}

        </div>
    );
}