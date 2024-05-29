
import { Outlet } from 'react-router-dom'


import Footer from './MyComponent/Footer'

import Navbar from './MyComponent/Navbar'


function App() {
  

  return (
    <>
    <Navbar></Navbar>
    
   <Outlet></Outlet>


    <Footer></Footer>


   
    </>
  )
}

export default App
