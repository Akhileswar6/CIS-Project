import lightLogo from '../assets/light.png'
import darkLogo from '../assets/dark.png'
import { NavLinks } from '../data';
import { Link } from 'react-router-dom';
import ToggleDark from './ToggleDark';




const Navbar = ({isDark, setIsDark}) => {
  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} p-3 fixed w-full top-0 flex justify-between items-center border-b-1 border-gray-900 z-10`}>
        <div className='flex gap-2 justify-center items-center'>
            <img src={isDark ? lightLogo : darkLogo} alt="Main Logo" width={50} height={50} style={{marginBottom:2}} />
                        <div>
                                <h3 className='text-lg mt-2'>CIS Association</h3>
                                <p className='text-[12px] text-gray-500'>SVCE, Tirupati</p>
                        </div>
        </div>

        <div>
            <ul className='flex items-center justify-center gap-x-10 text-md mr-2'>
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