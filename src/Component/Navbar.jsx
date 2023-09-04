import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top" data-aos="fade-down">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width={40} /></a>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <i className="fa-solid fa-bars-staggered"></i>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item fw-bold">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex text-center" role="search" id="inner">
                            <Link to="Signup.jsx">Login</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
