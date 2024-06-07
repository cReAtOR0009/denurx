import {createBrowserRouter, Route, RouterProvider, createRoutesFromChildren } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Services from "./pages/Services";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/denurx" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/denurx/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;
}

export default App;
