import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Pages/User/Login'
import Signup from "./Pages/User/Signup";
import Index from "./Pages/User/Index";
import Cart from "./Pages/User/Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/newUser",
      element: <Signup/>,
    },
    {
      path: "/items",
      element: <Index/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
