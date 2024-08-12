import { useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import PageLayout from "./Layout/PageLayout";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Services from "./pages/Services";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path={"/"} element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path={`/services`} element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
