import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
    { label: 'About', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
    { label: 'Resume', to: 'https://docs.google.com/document/d/1zXerM1hPAOscHX64T5fse9NrwcGqDuJFW9_wl2wv7Sk/edit', newTab: true },
];




function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar bg-white border-gray-200 dark:bg-gray-900 gloock-regular navbar">
            <div className="navbar_container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <h1 className='font-bold text-xl'>Heather Weltzien</h1>
                </Link>
                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {link.newTab ? (
                                    <a
                                        href={link.to}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                                                           
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link to={link.to}>
                                        <button className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent">
                                            {link.label}
                                        </button>
                                    </Link>
                                )}
                                
                            </li>
                        ))}
                        
                    </ul>
                </div>

                {/* Mobile Navigation Links */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } w-full md:hidden`}
                    id="mobile-menu"
                >
                    <ul className="flex flex-col items-end p-4 mt-4 border border-gray-100 rounded-lg">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to}>
                                    <button className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 dark:text-white    md:dark:hover:bg-transparent">
                                        {link.label}
                                    </button>
                                </Link>
                            </li>
                        ))}
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
