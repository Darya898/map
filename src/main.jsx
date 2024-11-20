import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import {routerData} from "./config/RouterConfig.jsx";
const router=createBrowserRouter(routerData);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense fallback={<div>...Loading</div>}>
        <RouterProvider router={router} />
        </Suspense>
    </StrictMode>,
)

