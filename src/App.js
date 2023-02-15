import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Pages/User/Login'
import Signup from "./Pages/User/Signup";
import Index from "./Pages/User/Index";
import Cart from "./Pages/User/Cart";
import Checkout from "./Pages/User/Checkout";
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
    {
      path: "/checkout",
      element: <Checkout/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
