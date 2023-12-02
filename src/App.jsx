import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Sources from "./pages/Sources/Sources";
import SingleArticle from "./pages/Sources/SingleArticle";
import DisplayMeteoSites from "./components/meteoSite/SearchMeteoAPI";
import Navbar from "./components/navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sources",
        children: [
          {
            path: "",
            element: <Sources />,
          },
          {
            path: ":id",
            element: <SingleArticle />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "meteoLaunchpadSite",
        element: <DisplayMeteoSites />,
      },
    ],
  },
]);

function PageError() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Une erreur est survenue</h1>
    </>
  );
}

function Root() {
  return (
    <div className="container_general">
      <header>
        <Navbar />
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="containerPage">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
