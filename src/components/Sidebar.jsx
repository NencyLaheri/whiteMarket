import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = ({sidebar,setsidebar}) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleExitComplete = () => {
        setIsVisible(false);
      };

    const handleCloseSidebar = () => {
        setsidebar(false)
      };
  return (
    <>
    <AnimatePresence onExitComplete={handleExitComplete}>
    {isVisible && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed top-0 right-0 w-full bg-opacity-90 bg-black z-50 overflow-hidden p-0 text-white h-[100vh]"
        >
     <div
            className={`2xl:hidden fixed top-0 right-0 w-full bg-opacity-90 bg-black z-50 overflow-hidden p-0 text-white h-[100vh]`}
          >
            <div>
              <div className="sbfdivClass">
                <div
                  className="flex justify-end m-3"
                  onClick={handleCloseSidebar}
                >
                  <span className="text-2xl ">
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="flex flex-col justify-start text-center text-lg">
                  <Link
                    to="/"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">Home</button>
                  </Link>
                  <Link
                    to="/about"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">About</button>
                  </Link>
                  <Link
                    to="/blog"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">Blog</button>
                  </Link>
                  <Link
                    to="/AllNftPage"
                    className="w-full hover:bg-[#303030]"
                    onClick={handleCloseSidebar}
                  >
                    <button className="py-3 text-center px-4 ">
                      Collection
                    </button>
                  </Link>

                  <button
                    className="py-3 text-center px-4 hover:bg-[#303030] ">
                    <Link>Contact</Link>
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          </motion.div>
           )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar