import { useEffect } from "react";
import AOS from "aos";

import AppRoutes from "./routes/AppRoutes";

function App() {

    useEffect(() => {

        AOS.init({

            duration: 900,

            easing: "ease-in-out",

            once: true,

            offset: 100,

        });

    }, []);

    return <AppRoutes />;

}

export default App;