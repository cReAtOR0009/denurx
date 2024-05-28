import {createBrowserRouter, Route, RouterProvider, createRoutesFromChildren } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";

import Home from "./pages/Home";
import NotFound from "./pages/404";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/denurx" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;
}

export default App;
