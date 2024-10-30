import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import axios from "axios"
import Products from "./Pages/Products"
import Blogs from "./Pages/Blogs"
import Cart from "./Pages/Cart"
import BlogDetail from "./Pages/BlogDetail"

async function fetchData(url){
  let data = await axios.get(url)
  return data.data
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader:()=> fetchData("https://fakestoreapi.com/products?limit=5")
        },
        {
          path: "/products",
          element:<Products/>,
          loader:()=> fetchData("https://fakestoreapi.com/products")
        }
        ,
        {
          path: "/blogs",
          element:<Blogs/>,
          loader:()=> fetchData("https://jsonplaceholder.typicode.com/posts")
        },
        {
          path: "/blogs/:id",
          element:<BlogDetail/>,
        },
        {
          path: "/cart",
          element:<Cart/>,
        }
      ]
    }

  ])

  const AllRoutes = () => {
    return (
  
      <RouterProvider router={router}></RouterProvider>
    )
  }
  
  export default AllRoutes