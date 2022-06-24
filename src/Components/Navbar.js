import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" >Navbar</a>
        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="container-fluid">
       <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-secondary" type="submit">Search</button>
       </form>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              
              
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <Link to="/postdata">Postdata</Link> 
              <Link to="/getdata">Getdata</Link>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar
