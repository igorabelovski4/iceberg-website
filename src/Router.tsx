import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteConstants } from "./constants";

import { HomePage } from "./pages/Home.page";
import { ProductPage } from "./pages/Product.page";
import { MembershipPage } from "./pages/Membership.page";
import { FaqPage } from "./pages/Faq.page";
import { SchoolsPage } from "./pages/Schools.page";

import { Layout } from "@/components";

const {
  ROUTE_LANDING,
  ROUTE_PRODUCT,
  ROUTE_MEMBERSHIP,
  ROUTE_FAQ,
  ROUTE_SCHOOLS,
} = RouteConstants;

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_LANDING,
        element: <HomePage />,
      },
      {
        path: ROUTE_PRODUCT,
        element: <ProductPage />,
      },
      {
        path: ROUTE_MEMBERSHIP,
        element: <MembershipPage />,
      },
      {
        path: ROUTE_FAQ,
        element: <FaqPage />,
      },
      {
        path: ROUTE_SCHOOLS,
        element: <SchoolsPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
