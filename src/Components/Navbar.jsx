import logo from '../assets/react.svg'
import { NavLinks } from '../data';
import { Link } from 'react-router-dom';
import ToggleDark from './ToggleDark';




const Navbar = ({isDark, setIsDark}) => {
  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} p-5 fixed w-full top-0 flex justify-between items-center border-b-1 border-gray-900`}>
        <div className='flex gap-2 justify-center items-center'>
            <img src={logo} alt="" width={24} />
            <div>
                <h3 className='text-lg font-bold'>CIS Assoc</h3>
                <p className='text-[10px] text-gray-500'>SVCE, Tirupati</p>
            </div>
        </div>

        <div>
            <ul className='flex items-center justify-center gap-x-10 text-md'>
                {NavLinks.map((link)=>(
                    <li className='hover:text-blue-400 transition-colors delay-100' key={link.name}><Link to={link.link}>{link.name}</Link></li>
                ))} 
                <ToggleDark isDark={isDark} setIsDark={setIsDark} />
            </ul>
        </div>
    </div>
  );
};

export default Navbar;