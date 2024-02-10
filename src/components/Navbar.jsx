import React from 'react'

//iconst
import { FaHome } from "react-icons/fa";
import { BsPostcardFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
//avatar Matirial UI
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

//images

import profile from '../assets/react.svg'


function Navbar() {

    const navItems = [
        {
            icon : <FaHome />,
            lable : 'Home',
            router : '/'
        },
        {
            icon : <BsPostcardFill />,
            lable : 'Posts',
            router : '/posts'
        },

    ]


  return (
    <div className='h-[100px] bg-gray-500 w-full'>
        <div className='container mx-auto flex justify-between h-full items-center'>
            <h1 className='text-4xl'>ProductApp</h1>

            <ul className='flex gap-5'>
                {navItems.map((el,index)=>{
                    return <li 
                            key={index}
                            className='flex items-center gap-2 text-2xl'
                            >
                            {el.icon}
                            <NavLink 
                                to={el.router}
                                className='text-2xl'
                            >
                            {el.lable}</NavLink>
                            </li>
                })}
            </ul>
            {/*profile*/}
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={profile} className='border-2 border-blue-400'/>
            </Stack>
        </div>
    </div>
  )
}

export default Navbar