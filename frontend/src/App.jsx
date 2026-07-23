import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/common/BackToTop";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-in-out",
            once: true,
            offset: 100,
        });

        // Refresh AOS ketika komponen telah dirender
        AOS.refresh();
    }, []);

    return (
        <>
            <AppRoutes />
            <BackToTop />
        </>
    );
}

export default App;