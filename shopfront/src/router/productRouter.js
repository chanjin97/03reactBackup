import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div className="bg-red-500">Loading.....</div>;
const ProductList = lazy(() => import("../layouts/pages/product/ListPage"));
const ProductAdd = lazy(() => import("../layouts/pages/product/AddPage"));

const productRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <ProductList />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <ProductAdd />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate to="list" replace={true} />,
    },
  ];
};

export default productRouter;
