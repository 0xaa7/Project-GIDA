import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Home, Product, Products } from "./Pages";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/products/:id",
        element: <Products />
      },
      {
        path:"/product/:id",
        element: <Product />
      },

    ]
  },
]);


function App() {
  return (
    
    <div className="App">
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;