import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ParallaxBg from "../pages/ParallaxBg/ParallaxBg";
import Error404 from "../pages/Error404/Error404";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ParallaxBg />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};
