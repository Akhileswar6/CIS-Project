import lightLogo from '../assets/light.png'
import darkLogo from '../assets/dark.png'
import { NavLinks } from '../data';
import { Link } from 'react-router-dom';
import ToggleDark from './ToggleDark';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';




const Navbar = ({isDark, setIsDark}) => {

    const [display, setDisplay] = useState(false);

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} p-3 fixed w-full top-0 flex justify-between items-center border-b-1 border-gray-900 z-10`}>
        <div className='flex gap-2 justify-center items-center'>
                <Link to="/" className='ml-1 flex gap-2 items-center'>
                    <img src={isDark ? lightLogo : darkLogo} alt="Main Logo" width={40} height={40}  />
                    <div>
                        <h3 className='text-lg max-lg:text-base'>CIS Association</h3>
                        <p className='text-[12px] text-gray-500 max-lg:text-[10px]'>SVCE, Tirupati</p>
                    </div>
                </Link>
        </div>

        <div className='max-md:hidden'>
            <ul className='flex items-center justify-center gap-x-10 max-lg:text-sm max-lg:gap-x-5'>
                {NavLinks.map((link)=>(
                    <li className='hover:text-blue-400 transition-colors delay-100' key={link.name}>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))} 
                <ToggleDark isDark={isDark} setIsDark={setIsDark} />
            </ul>
        </div>
        <div className='hidden max-md:flex justify-center items-center gap-3'>
            {display ? 
                <ul className='bg-white/90 text-black py-5 flex flex-col absolute w-full right-0 top-[100%] z-1 items-center justify-center gap-x-10'>
                    {NavLinks.map((link)=>(
                        <li className='hover:text-blue-400 transition-colors delay-100' key={link.name}>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    ))} 
                </ul> : null
            }
            <button onClick={() => setDisplay(!display)}>{display ? <X /> : <Menu />}</button>
            <ToggleDark isDark={isDark} setIsDark={setIsDark} />
        </div>
    </div>
  );
};

export default Navbar;