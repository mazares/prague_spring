import ConstellationCanvas from "./components/GraphCanvas";
import RootLayout from "./components/RootLayout";
import { useThemeStore } from "./store/themeStore";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  const { theme } = useThemeStore();
  return (
    <div className={`grid ${theme} h-screen  place-content-center`}>
      <RouterProvider router={router} />
      <ConstellationCanvas />
    </div>
  );
}

export default App;
