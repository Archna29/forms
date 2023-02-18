import React from 'react'

const navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
  <img src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" alt="Bootstrap" width="100"></img> 

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ml-3">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-dark fw-semibold" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item text-dark fw-semibold" href="/">form approval</a></li>
            <li><a className="dropdown-item text-dark fw-semibold" href="/">SheetGod</a></li>
      
            <li><a className="dropdown-item text-dark fw-semibold" href="/">Signature</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" aria-current="page" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold" href="/">Guides</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-dark fw-semibold">Templates</a>
        </li>
      </ul>
      <form className="d-flex me-auto" role="search">
      <button className="btn1  " type="submit">Install Now</button>
      <button className="btn2 " type="submit">Boloforms Premium</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default navbar