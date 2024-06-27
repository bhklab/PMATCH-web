import React from 'react';

const Footer = () => {
    const logos = [
        '/images/teams/bhk-lab.png',
        '/images/teams/CDI.png',
        '/images/teams/pugh-lab.png',
        '/images/teams/wang-lab.png',
        '/images/support/3CTN.png',
        '/images/support/genome-canada.svg',
        '/images/support/TFRI.png'
    ];
    return (
        <div className="flex flex-row lg:flex-col justify-center items-center bg-gray-100 text-black py-10 px-10 lg:px-20 shadow-inner">
            <div className="flex flex-col text-left space-y-2 lg:mb-6 mb-0">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Contact</h3>
                <p className="text-md italic">38 Blue Springs Road</p>
                <p className="text-md italic">Toronto, ON</p>
                <p className="text-md italic">pmatch@gmail.com</p>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-4 px-6 lg:px-24 max-w-[800px] lg:mb-6 mb-0">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`logo-${index}`} className="w-32 lg:w-16 md:w-12" />
                ))}
            </div>
            <div className="flex flex-col text-left space-y-2">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Connect with us</h3>
                <p className="text-md italic">Follow us on social media:</p>
                <div className="flex space-x-4">
                    <img
                        src="/images/socials/linkedin.png"
                        alt="LinkedIn"
                        className="w-10 lg:w-8 md:w-6 hover:opacity-75 transition-opacity duration-300"
                    />
                    <img
                        src="/images/socials/twitter.png"
                        alt="Twitter"
                        className="w-10 lg:w-8 md:w-6 hover:opacity-75 transition-opacity duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
