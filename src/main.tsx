import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import CartsPage from "./pages/CartsPage.tsx";

const router = createBrowserRouter(([{
    path: '', element: <MainLayouts/>,
    children: [{path: 'users', element: <UsersPage/>,
        children: [{path: ':id/carts', element: <CartsPage/>}]}]
}]))

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
