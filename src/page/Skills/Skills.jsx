

import { useEffect, useState } from "react";

const Skills = () => {
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch('logo.json')
            .then(res => res.json())
            .then(data => setLogo(data))
    }, []);

    return (
        <div className='bg-primaryTextColor space-y-6 text-white py-16 my-10'>
            <div className="flex items-center gap-7 animate-rightToLeft">
                {
                    logo?.map(logo => <div key={logo.name} className="">
                        <h2 className="text-4xl  font-NotoSans font-medium uppercase ">{logo.name}</h2>
                        
                    </div>)
                }
            </div>
            <div className="flex items-center flex-row-reverse gap-7 animate-leftToRight">
                {
                    logo?.map(logo => <div key={logo.name} className="">
                        <h2 className="text-4xl  font-NotoSans font-medium uppercase ">{logo.name}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skills;
