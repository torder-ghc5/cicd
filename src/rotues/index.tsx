import { Routes, Route } from "react-router-dom";

import FirstPage from "../pages/First";
import SecondPage from "../pages/Second";
import ThirdPage from "../pages/Third";

function RouterProvider() {
    return (
        <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/second" element={<SecondPage />} />
            <Route path="/third" element={<ThirdPage />} />
        </Routes>
    )
};

export default RouterProvider;