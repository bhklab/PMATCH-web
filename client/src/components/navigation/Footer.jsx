import React from 'react';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-4 font-mono bg-gray-50 text-black py-4 shadow-inner">
            <address className="not-italic">101 College St, Toronto, ON M5G 0A3</address>
            {/* <a href="mailto:pmatch.info@gmail.com" className="hover:text-red-1000 transition-colors">
                pmatch.info@gmail.com
            </a> */}
            <div className="w-full text-center text-xs font-mono">
                © University Health Network. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
