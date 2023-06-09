import React from "react";



const Navbar= ()=> {
    return(
        <>
            <nav className="navbar  navbar-expand-sm  navbar-dark bg-dark sticky-top">
                <div className="container ">
                    <a className="navbar-brand text-white" href="#">Start Boostrap</a>
                    <form className="d-flex  ">
                        <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link text-secondary" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-secondary">Contact</a>
                            </li>
                        </ul>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
    
}

export default Navbar
