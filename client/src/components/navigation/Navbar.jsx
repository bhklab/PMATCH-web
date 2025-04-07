import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const links = ['mission', 'overview', 'team', 'news'];

    // If scrolled, change background from transparent to white
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 z-20 w-full px-16 md:px-1 bg-white border-b-1 duration-300 ease-in-out flex flex-row items-center justify-between drop-shadow-md border-none">
            <Link to="landing" smooth={true} duration={700} offset={-325} className="hover:cursor-pointer">
                <img
                    src={
                        isScrolled
                            ? '/images/pmatch-logos-and-icons/pmatch-icon-red.png'
                            : '/images/pmatch-logos-and-icons/pmatch-icon-red.png'
                    }
                    alt="PMATCH logo"
                    className="w-10 rounded ease-in-out duration-300 hover:cursor-pointer hover:scale-110"
                />
            </Link>
            <div className="flex gap-4 py-5">
                {links.map(link => (
                    <Link
                        key={link}
                        to={link}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        activeClass="text-red-1100 scale-110"
                        className="hover:text-red-1100 ease-in-out duration-300 hover:cursor-pointer hover:scale-110 font-semibold text-black-900 text-bodyXl"
                    >
                        {link[0].toUpperCase() + link.substring(1)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
