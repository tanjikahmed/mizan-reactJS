import { Button } from '@headlessui/react';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { LuPhone } from 'react-icons/lu';

const Contactus = () => {
    return (
        <div className='py-20' id='contact'>
            <div className="container bg-white shadow-xl border-gray-100 border rounded-2xl " id="contact">
                <div className="formContent z-50 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        <div className="col-span-2">
                            <div className="addressContent py-5 ps-5">
                                <div className="addressTitle">
                                    <h2 className="pb-6 text-4xl font-NotoSans font-semibold">Let's discuss your Project</h2>
                                    <p className="pb-10 pr-5 text-decColor font-normal font-Rubik text-lg">There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                                </div>
                                <div className="AddressData ml-6 mt-5">
                                    <div className="address flex items-center gap-6 mb-5">
                                        <div className="icon w-14 h-14 flex items-center justify-center bg-iconBg text-primaryTextColor text-xl rounded-sm ">
                                            <FiMapPin />
                                        </div>
                                        <div className="text ">
                                            <h2 className='text-base font-medium pt-1 font-Rubik'>Address</h2>
                                            <p className='font-Rubik'>Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className="address flex items-center gap-6 mb-5">
                                        <div className="icon w-14 h-14 flex items-center justify-center bg-iconBg text-primaryTextColor text-xl rounded-sm ">
                                            <HiOutlineMail />
                                        </div>
                                        <div className="text ">
                                            <h2 className='text-base font-medium pt-1 font-Rubik'>My Email:</h2>
                                            <p className='font-Rubik'>tahfeezmizan@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="address flex items-center gap-6 mb-5">
                                        <div className="icon w-14 h-14 flex items-center justify-center bg-iconBg text-primaryTextColor text-xl rounded-sm ">
                                            <LuPhone />
                                        </div>
                                        <div className="text ">
                                            <h2 className='text-base font-medium pt-1 font-Rubik'>Call Me Now:</h2>
                                            <p className='font-Rubik'>+880 1612675374</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="contactForm">
                                <form
                                    action="https://formspree.io/f/{form_id}"
                                    method="post"
                                >
                                    <input type="text" id="fname" name="firstname" placeholder="Name*" required
                                    />

                                    <input type="email" id="email" name="email" placeholder="Email*" required
                                    />

                                    <input type="text" id="location" name="location" placeholder="Location*"
                                        required
                                    />

                                    <input type="number" id="number" name="budget" placeholder="Budget*" required
                                    />

                                    <input type="text" name="subject" id="subject" placeholder="Subject*" required
                                    />

                                    <textarea id="message" name="message" placeholder="Message"                                   ></textarea>

                                    <Button className="NavButton mb-5 font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-40 h-10 border-2 py-6 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                                        Hire Me
                                        <FaChevronDown />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;