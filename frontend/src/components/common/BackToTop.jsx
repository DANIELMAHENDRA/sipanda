import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible);

        return () => {
            window.removeEventListener("scroll", toggleVisible);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back To Top"
            className={`
                fixed
                bottom-8
                right-8
                z-[999]
                w-14
                h-14
                rounded-full
                bg-green-600
                text-white
                shadow-xl
                hover:bg-green-700
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
                ${
                    visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5 pointer-events-none"
                }
            `}
        >
            <ChevronUp
                size={26}
                className="mx-auto"
            />
        </button>
    );
}