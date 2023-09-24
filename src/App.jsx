// eslint-disable-next-line no-unused-vars
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/home/Home";
import Service from "./routes/Service";
import Product from "./routes/product/Product";
import About from "./routes/About";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import { AppProvider, ProductProvider } from "./store/Provider";
import DetailProduct from "./routes/DetailProduct/DetailProduct";
import Payment from "./routes/payment/Payment";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: "/service", element: <Service /> },
        { path: "/product", element: <Product /> },
        { path: "/product/:productId", element: <DetailProduct /> },
        { path: "/payment", element: <Payment /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/sign-up", element: <SignUp /> },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ProductProvider>
  );
}

export default App;
