import React from 'react';
import web from "../../../assets/web.png"
import code from "../../../assets/code.png"
import programming from "../../../assets/programming.png"

const Service = () => {
    return (
        <div className='py-20'>
            <div className="container">
                <div className="servicesTitle text-center mb-10">
                    <h1 className="pb-7 text-6xl font-NotoSans font-bold ">I'm <span className='text-primaryTextColor'>Specialized</span> in</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                    <div className="col-span-1 md:col-span-2 pe-6 pb-7">
                        <div className="servicesItem">
                            <div className="appDesign p-6 rounded-2xl">
                                <div className="applogo w-16 h-16 rounded-full bg-primaryTextColor p-3">
                                    <img className='' src={web} alt="" />
                                </div>
                                <h2 className="appTitle text-3xl font-medium font-Rubik py-4">Web Application</h2>
                                <p className="appDec text-lg font-light font-Rubik text-decColor">I have 1 years plus of experience in Web Design section. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 pe-6 pb-7">
                        <div className="webDesign p-6 rounded-2xl">
                            <div className="weblogo w-16 h-16 rounded-full bg-primaryTextColor p-3 active">
                                <img className='' src={code} alt="" />
                            </div>
                            <h2 className="webTitle text-3xl font-medium font-Rubik py-4">Web Development</h2>
                            <p className="webDec text-lg font-light font-Rubik text-decColor">I have 1 years plus of experience in Web Development section. </p>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 pe-6 pb-7">
                        <div className="productDesign p-6 rounded-2xl">
                            <div className="productlogo w-16 h-16 rounded-full bg-primaryTextColor p-3">
                                <img className='' src={programming} alt="" />
                            </div>
                            <h2 className="productTitle text-3xl font-medium font-Rubik py-4">WordPress Customize</h2>
                            <p className="productDec text-lg font-light font-Rubik text-decColor">I have 2 years plus of experience in WordPress Customize section.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;