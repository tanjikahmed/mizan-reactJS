import { Button } from '@headlessui/react';
import React from 'react';
import image1 from '../../../assets/Image3.png';
import image2 from '../../../assets/image4.png';
import bootstrap from '../../../assets/logo/bootstrap-logo.svg';
import expressjs from '../../../assets/logo/express-js.svg';
import javascript from '../../../assets/logo/javascript.svg';
import mongodb from '../../../assets/logo/mongodb-icon.svg';
import nextjs from '../../../assets/logo/next-js.svg';
import nodejs from '../../../assets/logo/node-js.svg';
import reactjs from '../../../assets/logo/react.svg';
import tailwindcss from '../../../assets/logo/tailwind-css.svg';
import wordpress from '../../../assets/logo/wordpress.svg';
import resume from '../../../assets/Front End Developer.pdf'


const Experiences = () => {
    return (
        <div className='py-20'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-10 items-center">
                    <div className="col-span-full md:col-span-3">
                        <div className="flex flex-col md:flex-row ga-0">
                            <div className="Saticfied flex-1 me-4">
                                <div className="expContent w-72 h-80 rounded-3xl">
                                    <img className='w-56 h-80 round rounded-3xl' src={image1} alt="" />
                                    <h2 className='font-Montserrat text-lg  font-medium text-right'>Saticfied Customers <span className='pl-5 text-7xl font-Anton text-primaryTextColor'>15</span> </h2>
                                </div>
                            </div>

                            <div className="expContent2 rounded-3xl">
                                <h2 className="flex items-center font-Montserrat text-lg font-medium mb-11 md:mt-12  pr-12"><span className='text-7xl pr-5 font-Anton text-primaryTextColor'>2+</span> Year of experience</h2>
                                <h2></h2>
                                <img src={image2} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full md:col-span-3 mt-10 md:mt-0">
                        <div className="expContent3">
                            <h1 className="expTitle text-6xl font-NotoSans pb-6 font-bold">I'm Here to Help Your Next <span className='text-primaryTextColor'>Project!</span></h1>
                            <p className="text-xl text-textColor font-Rubik font-light pb-6">I have 2 years pluse of experience in Front End Development section. My passion is developing & solving problems through user experience and research.</p>

                            <div className="flex gap-5 flex-wrap">
                                <img className='w-10' src={tailwindcss} alt="TailwindCSS" />
                                <img className='w-10' src={bootstrap} alt="Bootstrap" />
                                <img className='w-10' src={javascript} alt="JavaScript" />
                                <img className='w-10' src={reactjs} alt="React" />
                                <img className='w-10' src={nextjs} alt="Next.js" />
                                <img className='w-10' src={nodejs} alt="Node.js" />
                                <img className='w-10' src={expressjs} alt="Express.js" />
                                <img className='w-10' src={mongodb} alt="MongoDB" />
                                <img className='w-10' src={wordpress} alt="WordPress" />
                            </div>

                            <a href={resume} className="">
                                <Button className="NavButton mt-6 font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-40 h-10 border-2 py-6 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                                    DOWNLOAD CV
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;