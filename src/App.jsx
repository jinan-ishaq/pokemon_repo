import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/Root";
import PokemonDetails from "./pages/PokemonDetails";
import PokemonList from "./pages/PokemonList";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <PokemonList />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonDetails />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
