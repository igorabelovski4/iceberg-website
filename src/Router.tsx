import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouteConstants } from "./constants";

import { HomePage } from "./pages/Home.page";
import { ProductPage } from "./pages/Product.page";
import { PricingPage } from "./pages/Pricing.page";
import { FaqPage } from "./pages/Faq.page";
import { TeamPage } from "./pages/Team.page";
import { SchoolsPage } from "./pages/Schools.page";
import PrivacyPage from "./pages/Privacy.page";

import { Layout } from "@/components";
import { ROUTE_POLICY } from "./constants/route";

const {
  ROUTE_LANDING,
  ROUTE_PRODUCT,
  ROUTE_PRICING,
  ROUTE_FAQ,
  ROUTE_TEAM,
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
        path: ROUTE_PRICING,
        element: <PricingPage />,
      },
      {
        path: ROUTE_FAQ,
        element: <FaqPage />,
      },
      {
        path: ROUTE_TEAM,
        element: <TeamPage />,
      },
      {
        path: ROUTE_SCHOOLS,
        element: <SchoolsPage />,
      },
      {
        path: ROUTE_POLICY,
        element: <PrivacyPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
