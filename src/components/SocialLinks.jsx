import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


function SocialLinks() {
    const socialLinks = [
        {
            id: 1,
            link: (<>LinkedIn <FaLinkedin size={30} /></>),
            ref: 'https://www.linkedin.com/in/prasad-lohakare-a1a686249/'
        },
        {
            id: 2,
            link: (<>Github <FaGithub size={30} /></>),
            ref: "https://github.com/Prasadlohakare25"
        },
        {
            id: 3,
            link: (<>Email <HiOutlineMail size={30} /></>),
            ref: "mailto:prasadlohakare2003@gmail.com"
        },
        {
            id: 4,
            link: (<>Resume < BsFillPersonLinesFill size={30} /></>),
            ref: "https://drive.google.com/file/d/1c84F9j4Ks_UNoZzl6o9Rpnu8CqVwU99g/view?usp=sharing"
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {
                    socialLinks.map((e) => (
                        <li className='flex justify-between items-center w-40 h-14 px-4  bg-gray-500  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' key={e.id}>
                            <a href={e.ref} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                                <>{e.link}</>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks