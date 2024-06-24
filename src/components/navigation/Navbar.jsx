import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const links = ['mission', 'overview', 'goals', 'team', 'stakeholders'];

    const handleSetActive = to => {
        setActiveLink(to);
    };

    // If scrolled, change background from transparent to white
    const handleScroll = () => {
        if (window.scrollY > 500) {
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
        <div
            className={`fixed top-0 z-20 w-full px-16 md:px-1 py-3 border-b-1 duration-300 ease-in-out flex flex-row items-center justify-between ${
                isScrolled ? 'bg-white border-black-900' : 'bg-transparent border-none'
            }`}
        >
            <div
                className="hover:cursor-pointer"
                onClick={() => {
                    navigate('/');
                }}
            >
                <img src="/images/pmatch-logo.png" alt="PMATCH logo" className="w-50" />
            </div>
            <div className="flex space-x-4">
                {links.map(link => (
                    <Link
                        key={link}
                        to={link}
                        smooth={true}
                        duration={500}
                        className={`hover:text-red-1000 cursor-pointer ${
                            activeLink === link ? 'text-red-1000' : isScrolled ? 'text-black-900' : 'text-white'
                        }`}
                        onSetActive={() => handleSetActive(link)}
                    >
                        {link[0].toUpperCase() + link.substring(1)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
