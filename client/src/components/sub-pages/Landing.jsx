import React from 'react';
import { Link } from 'react-scroll';

const Landing = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-left smd:items-center gap-8 px-60 lg:px-24 smd:px-4">
            <div className="flex flex-col gap-4">
                <img src="images/pmatch-logos-and-icons/pmatch-logo.png" className="w-full" id="landing" />
                <h2 className="text-6xl lg:text-5xl sm:text-4xl smd:text-center text-black-900 ">
                    Matching patients to clinical trials
                </h2>
            </div>

            <Link
                to="mission"
                smooth={true}
                duration={700}
                offset={-50}
                className="flex justify-center items-center py-2 px-4 w-36 text-center text-bodyLg font-semibold bg-red-1100 text-white hover:text-black-900 rounded-full ease-in-out duration-300 hover:cursor-pointer hover:scale-110"
            >
                Learn More
            </Link>
        </div>
    );
};

export default Landing;
