import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import CardDetails from "./Components/CardDetails/CardDetails";
import MovieContextProvide from "./Context/MoviesContext.js";
import FullNowPlaying from "./Components/FullNowPlaying/FullNowPlaying";
import { Suspense, lazy } from "react";
function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}
let HomeLazy = lazy(() => delayForDemo(import("./Components/Home/Home")));
// let CardDetailslazy = lazy(() => delayForDemo(import("./Components/CardDetails/CardDetails")));
// let FullNowLazy = lazy(() => delayForDemo(import("./Components/FullNowPlaying/FullNowPlaying")));
let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeLazy /> },
      { path: "/carddetails", element: <CardDetails /> },
      { path: "*", element: <NotFound /> },
      { path: "/fullnowplaying", element: <FullNowPlaying /> },
    ],
  },
]);

function App() {
  return (
    <Suspense
      fallback={
        <div className="bg-dark vw-100 justify-content-center  vh-100 d-flex align-items-center">
          <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            className="wheel-and-hamster"
          >
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </div>
      }
    >
      <MovieContextProvide>
        <RouterProvider router={routers} />
      </MovieContextProvide>
     </Suspense>
  );
}

export default App;
