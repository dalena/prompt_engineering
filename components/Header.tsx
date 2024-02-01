"use client";
import { useNavigation } from '../context/NavigationContext';
import { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { FiMenu, FiX } from 'react-icons/fi';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { techniques, activeTab, setActiveTab } = useNavigation();

  return (
    <header className="mx-auto px-4 bg-purpz-100 text-purpz-900 flex flex-col justify-center items-center h-[8vh]">
      <div className="w-full grid grid-col-3">
        <div className="titleBox flex flex-col justify-center items-center col-start-2 col-end-2">
          <Link href="/"><h1 className="text-2xl font-bold">Prompt Engineering Examples</h1></Link>
          <h2>by Dalena Tran</h2>
        </div>
        <div className="menuBox flex flex-col justify-center items-center col-start-3 col-end-3 min-h-2 min-w-2">
          <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (<div className="close-icon"><FiX size={30} /></div>) : (<div className="hamburger"><FiMenu size={30} /></div>)}
          </div>
          <div className={isMenuOpen ? "nav-visible" : "nav-hidden"}>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;