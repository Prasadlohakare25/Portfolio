import React from 'react'
import HeroImage from '../Asset/Portfolio/HeroImage.jpg'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from "react-scroll"

function Home() {
    return (
        <div name="Home" className=' h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800 pl-3'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center align-middle h-full md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>I'm a MERN Stack Developer</h1>
                    <p className='text-gray-500 py-4 max-w-md'>I thrive on crafting innovative web solutions that marry functionality with seamless user experiences. Driven and enthusiastic, I am embarking on my journey into the dynamic world of web development. As a student with a passion for coding and creating digital solutions, I bring a solid foundation in Web Development, Java Development.</p>
                    <div className=''>
                        <Link to="Portfolio" smooth duration={500} className='group text-white p-2 w-fit flex items-center rounded-md px-4 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <FaAngleRight size={20} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className=''>
                    <img src={HeroImage} alt="it was here only" className='rounded-full mx-auto w-2/3 md:w-2/3 ' />
                </div>
            </div>
        </div>
    )
}

export default Home