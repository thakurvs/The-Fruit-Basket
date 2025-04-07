import React, {useState} from 'react'
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import Logo from '../Logo/Logo';
import { motion } from "framer-motion";
import ResponsiveMenu from './ResponsiveMenu';
import { NavLink } from 'react-router-dom'
import './Header.css'

const NavBarMenu = [
    {
        id: 1,
        title: "Products",
        url: "/products",
      },
      {
        id: 2,
        title: "About",
        url: "/about",
      },
      {
        id: 3,
        title: "Shop",
        url: "/shop",
      },
      {
        id: 4,
        title: "Contact",
        url: "/contact",
      },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <header className="w-full shadow-lg sticky z-50 top-0 text-white p-4">
        <div className="w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl main-header"> */}
              <nav className="navbar w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl shadow-lg sticky z-1000 top-0 bg-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="container flex justify-between items-center py-4 md:pt-4">
                    {/* logo section  */}
                    <Logo />
                    {/* menu section  */}
                    <Menu />
                    {/* Mobile Hamburger menu section  */}
                    <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
                </motion.div>
              </nav>
              {/* Mobile Menu section */}
              <ResponsiveMenu open={isOpen} />
        {/* </div>
      </header> */}
    </>
  )
};

function Menu() {
    return (
      <div className='hidden md:block'>
        <ul className="flex text-gray-600 gap-6 space-x-4 navbar-menu">
          {NavBarMenu.map((item) => (
              <li key={item.id} className='text-xl navbar-item'>
                <NavLink
                  to={item.url}
                  className="inline-block py-1 px-3 font-semibold hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] navbar-link"
                  activeClassName="active"
                  exact
                >
                {item.title}
                </NavLink>
              </li> 
          ))}
          <button className="text-2xl p-2 rounded-full hover:bg-primary hover:text-white duration-200">
            <MdOutlineShoppingCart />
          </button>
        </ul>
      </div>        
    );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div className=" md:hidden block">
      <MdMenu className={`text-4xl`} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}


export default Header