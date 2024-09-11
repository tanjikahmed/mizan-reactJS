import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/main-logo.png";

const Footer = () => {
    return (
        <div className='footerWrrapper'>
            <div className="container">
                <div className="footerContent">
                    <form >
                        <div className="flex items-center  justify-center flex-col gap-4 pb-6">
                            <div className="logo text-center pb-5">
                                <NavLink to={'/'}>
                                    <img className='w-20' src={logo} alt="" />
                                </NavLink>
                            </div>

                            <div className="socialMedia text-white flex gap-8">
                                <a href="https://www.linkedin.com/in/tahfeezmizan/" target="_blank">
                                    <i className="fa-brands fa-linkedin-in mb-4"></i>
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://twitter.com/tahfeezmizan" target="_blank">
                                    <FaTwitter />
                                </a>
                                <a href="https://github.com/tahfeezmizan" target="_blank">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/tahfeezmizan64/" target="_blank">
                                    <i className="fa-brands fa-instagram mb-4"></i>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </form>

                    <div className="footerNav">
                        <li className="nav-item px-3">
                            <a className="nav-link Footerlink" href="aboutpage.html">About</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link Footerlink" href="services.html">Services</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link Footerlink" href="portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link Footerlink" href="#">Testimonial</a>
                        </li>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;