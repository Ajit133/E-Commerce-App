import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Toast from './components/Toast/Toast';

const Layout = ()=>{
  return(
    <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer />
        <Toast />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path:"/",
        element : <Home />,
      },
      {
        path:"/products/:id",
        element : <Products/>,
      },
      {
        path:"/product/:id",
        element:<Product />
      },
      {
        path:"/checkout",
        element:<Checkout />
      }
    ]
  },
  
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>  
  )
}

export default App
