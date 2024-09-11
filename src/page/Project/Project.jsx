import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import nextestate from "../../assets/next-estate.png";
import gadgetsstock from "../../assets/gadgetsstock.jpeg";
import triprex from "../../assets/triprex.jpeg";
import aterarecipes from "../../assets/aterarecipes.png";

const Project = () => {
    return (
        <div className="bg-gray-50">
            <div className='container px-0 py-20 bg-gray-50'>
                <div className="servicesTitle text-center mb-10">
                    <h1 className="pb-7 text-6xl font-NotoSans font-bold ">My Recent <span className='text-primaryTextColor'>Works</span></h1>
                </div>

                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${gadgetsstock})`,
                                backgroundPosition: 'top',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-36 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                                <h1 className="text-white capitalize text-3xl font-Rubik font-semibold pb-2">Gadgets Stock</h1>
                                <p className="text-base text-white font-Montserrat pb-2">Alternative Product Information System.</p>

                                <div className="flex items-center justify-center gap-5">
                                    <Link to={'https://gadgetsstock-9e801.web.app/'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        Link
                                    </Link>
                                    <Link to={'https://github.com/tahfeezmizan/gadget-stock'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${nextestate})`,
                                backgroundPosition: 'top',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-36 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                                <h1 className="text-white capitalize text-3xl font-Rubik font-semibold pb-2">next estate</h1>
                                <p className="text-base text-white font-Montserrat pb-2">Real Estate Property Selling Platform</p>

                                <div className="flex items-center justify-center gap-5">
                                    <Link to={'https://next-estate-ccc96.web.app'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        Live Link
                                    </Link>
                                    <Link to={'https://github.com/tahfeezmizan/next-estate'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${aterarecipes})`,
                                backgroundPosition: 'top',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-36 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                                <h1 className="text-white capitalize text-3xl font-Rubik font-semibold pb-2">atera recipes</h1>
                                <p className="text-base text-white font-Montserrat pb-2">Restaurant Template</p>

                                <div className="flex items-center justify-center gap-5">
                                    <Link to={'https://atera-recipes-react-template.netlify.app'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        Live Link
                                    </Link>
                                    <Link to={'https://github.com/tahfeezmizan/triprex'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${triprex})`,
                                backgroundPosition: 'top',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-36 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                                <h1 className="text-white capitalize text-3xl font-Rubik font-semibold pb-2">TripRex</h1>
                                <p className="text-base text-white font-Montserrat pb-2">Tour Guide Website Templates</p>

                                <div className="flex items-center justify-center gap-5">
                                    <Link to={'https://triprex-de4c0.web.app/'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        Live Link
                                    </Link>
                                    <Link to={'https://github.com/tahfeezmizan/triprex'} target='_blank' className="NavButton font-Rubik text-base font-medium inline-flex items-center justify-center gap-2 rounded-lg px-5 py-1  text-white bg-HeaderBG ">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Project;