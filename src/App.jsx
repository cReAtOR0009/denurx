import { useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";
import OneSignal from 'react-onesignal';
import PageLayout from "./Layout/PageLayout";
import { baseUrl } from "../config";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "3091448a-311f-4769-89f9-2b8842405645"
    });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path={`${baseUrl}`} element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path={`${baseUrl}/services`} element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
