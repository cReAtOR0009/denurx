import { useEffect } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router-dom";
// import OneSignal from 'react-onesignal';
import PageLayout from "./Layout/PageLayout";
import { baseUrl } from "../config";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    const OneSignal = window.OneSignal;
    OneSignal.push(() => {
      OneSignal.init({
        appId: "3091448a-311f-4769-89f9-2b8842405645",
        promptOptions: {
          slidedown: {
            enabled: true,
            actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
            acceptButtonText: "OMG YEEEEESS!",
            cancelButtonText: "NAHHH",
            categories: {
              tags: [
                {
                  tag: "react",
                  label: "ReactJS",
                },
                {
                  tag: "angular",
                  label: "Angular",
                },
                {
                  tag: "vue",
                  label: "VueJS",
                },
                {
                  tag: "js",
                  label: "JavaScript",
                }
              ]
            }
          }
        },
        welcomeNotification: {
          title: "One Signal",
          message: "Thanks for subscribing!",
        }
      });

      // Automatically subscribe to the new_app_version tag
      OneSignal.sendTag("new_app_version", "new_app_version", (tagsSent) => {
        console.log('new_app_version TAG SENT', tagsSent);
      });
    });
  }, []);

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path={baseUrl} element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path={`${baseUrl}/services`} element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
