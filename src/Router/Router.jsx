import { createBrowserRouter } from "react-router";
import Main from "../components/Main/Main";
import Surprise from "../pages/Surprise";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Main
    },
    {
        path: '/surprise',
        Component: Surprise
    }
])