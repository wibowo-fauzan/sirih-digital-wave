import React from 'react';
import { Link } from 'react-router-dom';
import Logowave from '../assets/image/logo-sirih-digital-wave.png';

const Footer = () => {
    return (
        <div className="position-relative mt-5 pt-5">
            <div className="container">
                <div className="card bg-gradient-primary z-index-3 overflow-hidden">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8 mx-auto text-center">
                                <h3 className="text-white">Be the first who see the news</h3>
                                <p className="text-white opacity-8 mb-5 pe-5">
                                    Your company may not be in the software business,
                                    but eventually, a software company will be in your business.
                                </p>
                                <div className="row">
                                    <div className="col-sm-5 ms-auto">
                                        <div className="input-group">
                                            <input type="text" className="form-control mb-sm-0 mb-2" placeholder="Email Here..."/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 me-auto text-start">
                                        <button type="button" className="btn bg-white w-100 mb-0 h-100 position-relative z-index-2">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer pb-5 pt-10 bg-light mt-n8 position-relative">
                <div className="position-absolute w-100 z-inde-1 top-0 mt-n3">
                    <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>wave-down</title>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g fill="#FFFFFF" fillRule="nonzero">
                                <g id="wave-down">
                                    <path
                                        d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z"
                                        id="Path-Copy-2"
                                        transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) ">
                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                        <a className="navbar-brand font-weight-bolder ms-sm-3 text-center" href="" target="_blank"> 
                            <img src={Logowave} className="img-fluid" width="200" height="auto" alt="logo digital sirih" /> 
                        </a>
                    </div>
                        <div className="col-lg-6 text-center">
                            <ul className="nav flex-row align-items-center mb-5 mt-sm-0 justify-content-center">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" target="_blank">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link"  target="_blank">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link"  target="_blank">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Support" className="nav-link"  target="_blank">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                            <p className="mb-0">
                                Copyright © {new Date().getFullYear()} Sirih Digital Wave.
                            </p>
                        </div>
                        <div className="col-lg-3 text-end">
                            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                <span className="fab fa-dribbble text-lg"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                <span className="fab fa-twitter text-lg"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="text-secondary me-xl-4 me-4">
                                <span className="fab fa-pinterest text-lg"></span>
                            </a>
                            <a href="javascript:;" target="_blank" className="text-secondary">
                                <span className="fab fa-github text-lg"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;