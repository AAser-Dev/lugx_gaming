import Contact from './Components/Contact/Contact';
import Product from './Components/Product/Product';
import Layout from './Components/Layout/Layout';
import Our from './Components/Our/Our';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
export default function App() {
  let paths = createBrowserRouter([
   {path:"" , element:<Layout/>,children:[
    {path:"our shop" , element:<Our/>},
    {path:"product" , element:<Product/>},
    {path:"contact" , element:<Contact/>},
    {index:true , element:<Home/>}
   ]}

  ])
  return (
    <>
        <RouterProvider router={paths}></RouterProvider>
    </>
  );
}


