import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <>

  


  
<footer className="Footer d-flex flex-wrap justify-content-between align-items-center py-4  border-top ">
<h3 className="col-md-4 mb-0 text-body-secondary">© 2024 Mangaladitya Chatterjee  </h3>

   <a href="/"> 
    <img src="../image/images (1).png" alt="" id='FooterImg' />  </a>

    <ul className="nav col-md-4 ml-3 ">
    <li className="nav-item "><Link to="/" className="nav-link px-2 text-body-secondary"><strong>  Home</strong></Link></li>
      <li className="nav-item"><Link to="/education" className="nav-link px-2 text-body-secondary"><strong>  Educational Background</strong></Link></li>
      <li className="nav-item"><Link to="/skills" className="nav-link px-2 text-body-secondary"><strong>  Skills</strong></Link></li>
      <li className="nav-item"><Link to="/projects" className="nav-link px-2 text-body-secondary"><strong>  Projects</strong></Link></li>
      
    </ul>
  </footer>


   </>
  )
}

export default Footer