import React from 'react'

function Header() {
    return (
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    
    <ul class="navbar-nav">
      <li class="nav-item">
        {/* <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a> */}
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        {/* <a href="#" class="nav-link">Contact</a> */}
      </li>
    </ul>

   
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"></input>
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item dropdown">
        {/* <a class="nav-link" data-toggle="dropdown" href="#"> */}
          {/* <i class="far fa-comments"></i> */}
        {/* </a> */}
      </li>
      
      <li class="nav-item dropdown">
        {/* <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
        </a> */}
      </li>
    </ul>
  </nav>
    )
}

export default Header
