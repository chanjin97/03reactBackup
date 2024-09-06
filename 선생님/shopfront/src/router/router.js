import { createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";
import productRouter from "./productRouter";
import memberRouter from "./memberRouter";

const Loading = <div className="bg-red-500">Loading.....</div>;
const MainPage = lazy(() => import("../layouts/pages/MainPage"));
const AboutPage = lazy(() => import("../layouts/pages/AboutPage"));
const ProductPage = lazy(() => import("../layouts/pages/product/ProductPage"));

const root = createBrowserRouter([
  {
    path: "",
    // element: <MainPage />,
    element: (
      <Suspense fallback={Loading}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "product",
    element: (
      <Suspense fallback={Loading}>
        <ProductPage />
      </Suspense>
    ),
    children: productRouter(),
  },
  {
    path: "member",
    children: memberRouter(),
  },
]);

export default root;
