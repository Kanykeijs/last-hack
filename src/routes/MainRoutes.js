import React from "react";
import { Route, Routes } from "react-router-dom";
import Children from "../components/ children/ Children";
import Fund from "../components/Fund/Fund";
import Login from "../components/Login";
import NursingHouse from "../components/nursinghouse/NursingHouse";
import Register from "../components/Registr";
import HomePage from "../pages/HomaPage/HomePage";
import MedicinePage from "../pages/medicine/MedicinePage";
import CreditCard from "react-credit-cards";
import Homeless from "../components/homeless/Homeless";
import Pets from "../components/pets/Pets";
import Donate from "../components/donate/Donate";
import Partners from "../components/partners/Partners";
import Volunteers from "../components/volunteers/Volunteers";
// import Petss from "../components/pets/Petss";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/medicine",
      element: <MedicinePage />,
      id: 2,
    },
    {
      link: "/deti",
      element: <Children />,
      id: 3,
    },

    {
      link: "/nursingHouse",
      element: <NursingHouse />,
      id: 4,
    },
    {
      link: "/funde",
      element: <Fund />,
      id: 5,
    },
    {
      link: "/register",
      element: <Register />,
      id: 6,
    },
    {
      link: "/login",
      element: <Login />,
      id: 7,
    },
    {
      link: "/card",
      element: <CreditCard />,
      id: 8,
    },
    {
      link: "/homeless",
      element: <Homeless />,
      id: 9,
    },
    {
      link: "/pets",
      element: <Pets />,
      id: 10,
    },
    {
      link: "sdelat-pozhertvovanie",
      element: <Donate />,
      id: 11,
    },
    {
      link: "partners",
      element: <Partners />,
      id: 12,
    },
    {
      link: "volunteers",
      element: <Volunteers />,
      id: 13,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
