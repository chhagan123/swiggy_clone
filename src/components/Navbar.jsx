
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbBasketDiscount } from "react-icons/tb";
import { MdHelpCenter } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { BsFillSignIntersectionFill } from "react-icons/bs";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleMenu = () => {
        setToggle(true);
    }

    const handleCloseMenu = () => {
        setToggle(false);
    }

    const links = [
        { icons: <CiSearch />, name: 'Search' },
        { icons: <TbBasketDiscount />, name: 'Offers', sup: 'New' },
        { icons: <MdHelpCenter />, name: 'Help' },
        { icons: <CiShoppingCart />, name: 'Cart', sup: '2' },
        { icons: <BsFillSignIntersectionFill />, name: 'Sign In' }
    ];

    return (
        <>
            <div className={`black-overlay w-full h-full fixed top-0 left-0 duration-500 z-50  ${toggle ? 'opacity-50 visible' : 'opacity-0 invisible'}`} onClick={handleCloseMenu}>
                <div
                    onClick={(event) => { event.stopPropagation(); }}
                    
                    className={`w-[400px] h-full bg-white  fixed top-0 left-0 duration-500 z-50 ${toggle ? 'translate-x-0' : '-translate-x-full'}`}
                
                >
                    <div className=' w-[100%] h-[100%]  font-bold flex items-center border border-20'>
                           bar
                    </div>
                    
                    {/* Side Menu Content */}
                </div>
            </div>

            <header className='p-[15px] shadow-xl z-10 relative sticky top-0 bg-white z-[999] '>
                <div className='max-w-[1200px] h-[50px] mx-auto flex'>
                    <div className='w-[90px]'>
                        <img src="images/logo.png" className='w-full' alt="Logo" />
                    </div>
                    <div className='m-[10px]'>
                        <span className='font-bold border-b-[3px] underline'>Maharashtra,</span> Nagpur, Maharashtra, India
                        <FaCaretDown onClick={handleMenu} className='inline text-[0.9rem] text-[#fc8819] cursor-pointer' />
                    </div>
                    <ul className='flex list-none gap-10 ml-auto font-semibold text-[18px]'>
                        {links.map((link, index) => (
                            <li key={index} className='flex items-center gap-2 cursor-pointer hover:text-[#fc8019]'>
                                {link.icons}
                                {link.name}
                                {link.sup && <span className='text-red-500 text-sm'>{link.sup}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navbar;
