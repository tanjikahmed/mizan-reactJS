import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/main-logo.png';
import { Button } from '@headlessui/react';
import { FaPaperPlane } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative shadow bg-HeaderBG">
            <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex gap-3">
                        <img className="w-auto h-6 sm:h-7" src={logo} alt="Logo" />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex py-6 lg:hidden">
                        <button
                            onClick={handleToggleOpen}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu">
                            {isOpen ? (
                                <div className="text-white text-2xl"><RxCross1 /></div>
                            ) : (
                                <div className="text-white text-2xl"><FaBarsStaggered /></div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute bg-HeaderBG inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-base-100 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="text-white font-Montserrat uppercase text-base font-medium flex flex-col lg:items-center lg:flex-row lg:mx-6">
                        <Link to="/" className="my-2 transition-colors duration-300 transform hover:text-primaryTextColor md:mx-4 md:my-0">Home</Link>
                        <Link to="/" className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-primaryTextColor md:mx-4 md:my-0">About</Link>
                        <Link to="" className="my-2 transition-colors duration-300 transform dark:text-gray-200 hover:text-primaryTextColor md:mx-4 md:my-0">Services</Link>
                        <Link to="" className="my-2 transition-colors duration-300 transform lg:hidden dark:text-gray-200 hover:text-primaryTextColor md:mx-4 md:my-0">Portfolio</Link>
                        <div className="lg:hidden mt-4">
                            <Button className="NavButton font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-full py-2 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                                <FaPaperPlane />
                                Let's Talk
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Large screen button */}
                <div className="hidden lg:block">
                    <Button className="NavButton font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-40 h-10 border-2 py-5 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                        <FaPaperPlane />
                        Let's Talk
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
