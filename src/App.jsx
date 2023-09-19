import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Product from "./routes/Product";
import About from "./routes/About";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <Home /> },
        { path: "/service", element: <Service /> },
        { path: "/product", element: <Product /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/sign-up", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
