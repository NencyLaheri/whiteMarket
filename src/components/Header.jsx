import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import Sidebar from './Sidebar'
import DropdownModel from '../utils/DropdownModel'


const Header = () => {

    const [sidebar, setsidebar] = useState(false)
    const [isdropdown, setisDropdown] = useState(false)
    return (
        <>
        <div className="container mx-auto px-5 xl:px-4 2xl:px-4 sm:px-3 flex justify-between items-center py-8" >
            <div>   
                <Link to="/">
                    <h1 className="text-4xl font-bold font-serif">Blue</h1>
                </Link>
            </div>
            <div className="flex items-center gap-8 lg:gap-5">
                <div>
                    <ul className="hidden 2xl:!flex lg:flex xl:!flex md:hidden sm:hidden text-[#505072] text-lg gap-10 lg:gap-5 items-center">
                        <li className="hover:text-[#050515] pb-1 hover:border-b border-[#050515] ">
                            <Link to="/" className="">
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-[#050515] pb-1 hover:border-b border-[#050515]">
                            <Link to="/">About</Link>
                        </li>
                        <div className="relative inline-block"
                         onMouseOver={() => setisDropdown(true)}
                         onMouseLeave={()=>setisDropdown(false)}
                        //  ={()=>setisDropdown(false)}
                         >
                        <li className="hover:text-[#050515] pb-1 hover:border-b border-[#050515]" 
                       >
                            <Link to="/">Blog</Link>
                        </li>

                        </div>
               
                        <li className="hover:text-[#050515] pb-1 hover:border-b border-[#050515]">
                            <Link to="/">Collection</Link>
                        </li>
                        <li className="hover:text-[#050515] pb-1 hover:border-b border-[#050515]">
                            <Link className="">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:!flex dsm:!flex text-3xl" onClick={()=>setsidebar(!sidebar)}>
                    <HiMenu />
                </div>

            </div>
        </div>
        {sidebar && <Sidebar sidebar={sidebar} setsidebar={setsidebar}/>}
        {isdropdown && <DropdownModel setisDropdown={setisDropdown}/>}

        </>
    )
}

export default Header