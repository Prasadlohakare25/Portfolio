import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll"

function Navbar() {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contact"
        },
    ];

    return (
        <div className='flex justify-between items-center w-full h-10 fixed text-white bg-black p-3 md:h-16'>
            <div>
                <h1 className='font-signature text-3xl ml-1 md:text-5xl'><span className='text-red-500'>Prasad</span> Lohakare</h1>
            </div>
            <ul className='hidden md:flex'>

                {
                    links.map(e => (
                        <li key={e.id} className='px-4 cursor-pointer text-gray-500 hover:scale-110 duration-200'><Link to={e.link} duration={500}>{e.link}</Link></li>
                    ))
                }
            </ul>
            <div onClick={() => setNav(!nav)} className='pr-4 cursor-pointer z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(e => (
                    <li key={e.id} className='py-4 text-4xl cursor-pointer text-gray-500 hover:scale-110 duration-200'><Link onClick={() => setNav(!nav)} to={e.link} duration={500}>{e.link}</Link></li>
                ))}

            </ul>)}
        </div>
    )
}

export default Navbar