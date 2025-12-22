import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Mens   from './components/Mens';
import Women from './components/Women';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



  const router = createBrowserRouter([
    {
      path:"/",
      element:<>
      <Header/>
      <Mens/>
      <Footer/>
      </>
    },
    {
      path:"/Women",
      element:<>
      <Header/>
      <Women/>
      <Footer/>
      </>
    },
  ])


  const App = () => {
  return <RouterProvider router={router}/>; 
  
}
export default App;