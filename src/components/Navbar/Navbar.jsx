import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";


function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setisScrolled] = useState(false);
  const [showItems, setShowItems] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const HandleBurgerBar = () => {
    setShowItems(!showItems);
  }

  const HandleMenuClick = (id) => {
    setActiveSection(id);
    setShowItems(false);

    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }
  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contect Me" }
  ]
  return (

    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414]/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center">

        {/* Logo */}

        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Akki</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Bisht</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* menuitems */}

        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuitems.map((item) => (
            <li key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => HandleMenuClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/*social media icons*/}

        <div className='hidden md:flex space-x-4 text-2xl'>
          <a href="https://github.com/neeraj-bisht-8126/"
            target='_blank'
            className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-bisht8126/"
            target='_blank'
            className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedinIn />
          </a>
        </div>

        {/*Mobile Burgur icon*/}

        <div className='md:hidden'>
          {
            showItems ?
              (
                <FiX className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => HandleBurgerBar()} />
              )
              :
              (
                <GiHamburgerMenu className="text-3xl text-[#8245ec] cursor-pointer"
                  onClick={() => HandleBurgerBar()} />
              )
          }
        </div>
      </div>
      {/* Mobile Menu items*/}
      {showItems && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] opacity-50 backdrop-filter backdrop-blur-lg z-50 rouded-lg shadow-lg'>
          <ul className='md:hidden flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuitems.map((item) => (
              <li key={item.id}
                className={`cursor-pointer
                ${activeSection === item.id ? "text-[#8245ec]" : ""} hover:text-[#8245ec] 
                `}>
                <button onClick={() => HandleMenuClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a href="https://github.com/neeraj-bisht-8126/"
                target='_blank'
                className='text-gray-300 hover:text-[#8245ec]'>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/neeraj-bisht8126/"
                target='_blank'
                className='text-gray-300 hover:text-[#8245ec]'>
                <FaLinkedinIn />
              </a>
            </div>
          </ul>
        </div>
      )}

    </nav>

  )
}

export default Navbar