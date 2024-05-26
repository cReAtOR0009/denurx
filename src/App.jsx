import {createBrowserRouter, Route, RouterProvider, createRoutesFromChildren } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";

import Home from "./pages/Home";
import Waitlist from "./pages/Waitlist";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/denurx" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/denurx/waitlist" element={<Waitlist />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />;
  
  // return (
  //   <>
  //   <Home />
  //   <Waitlist />
  //   </>
  // );
}

export default App;
