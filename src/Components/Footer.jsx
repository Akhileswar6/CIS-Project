import { NavLinks } from "../data";
import { Link } from "react-router-dom";
import logo from '../assets/light.png'
import { SocialLinks } from "../data";
import { Copyright, Home } from 'lucide-react'



const Footer = ({isDark}) => {
  return (
    <div className={`bg-black px-5 py-5 text-white flex flex-col gap-y-10 border-t-1 border-gray-900`}>
      {/* <div className="flex flex-col gap-y-3 py-7 ml-4">
        <div className="flex gap-30 max-sm:hidden">
          <div>
            <h4 style={{fontSize:18, fontWeight:500}} className="text-white-500 mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-y-2">
              {NavLinks.map((link, index) => (
                <li key={index} className="text-md text-gray-500"><Link className="hover:text-white transition-colors duration-200" to={link.link}>{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:18, fontWeight:500}} className="text-white-500 mb-2">Events</h4>
            <ul className="flex flex-col gap-y-2">
              <li className=" text-gray-500"><Link className="hover:text-white transition-colors duration-200" to={'/'}>Past Events</Link></li>
              <li className=" text-gray-500"><a className="hover:text-white transition-colors duration-200" href="https://www.github.com" target="_blank" rel="noopener noreferrer">Workshops</a></li>
              <li className=" text-gray-500"><a className="hover:text-white transition-colors duration-200" href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">UpComing Events</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{fontSize:18, fontWeight:500}} className="text-white-500 mb-2">Resources</h4>
            <ul className="flex flex-col gap-y-2">
              <li className=" text-gray-500"><a className="hover:text-white transition-colors duration-200" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Tools</a></li>
              <li className=" text-gray-500"><a className="hover:text-white transition-colors duration-200" href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li className=" text-gray-500"><a className="hover:text-white transition-colors duration-200" href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>
            </ul>
          </div>
          
        </div>
      </div> */}
      <div className="flex gap-20 max-md:gap-10 max-sm:flex-wrap">
        <div className="flex flex-col gap-y-3 basis-1/2">
          <Link to="/" className='flex gap-2 items-center'>
            <img src={logo} alt="CIS Logo" width={24} height={24} />
            <div>
              <h3 className='text-base max-lg:text-sm'>CIS Association</h3>
              <p className='text-xs text-gray-500 max-lg:text-[10px]'>SVCE, Tirupati</p>
            </div>
          </Link>
          <p className="text-gray-500 text-sm">Empowering Students in CyberSecurity through hands-on learning, Competitions, and community building at Sri Venkateswara College of Engineering.</p>
            
          
          <div className="flex gap-x-5">
            {SocialLinks.map((link, index)=>(
              <a key={index} href={link.link} className=''>{link.img}</a>
            ))}
          </div>
        </div>
        <div className="text-sm flex flex-col gap-1">
          <h3 style={{fontSize:18, fontWeight:500}}className="text-white-500 text-sm flex items-center gap-x-2"><Home size={16} />College Information</h3>
          <p style={{fontSize:15}}className="text-sm text-gray-500"> Sri Venkateshwara College of Engineering.</p>
          <p className="text-gray-500">Karakambadi Road, Tirupati - 517507</p>
          <p className="text-gray-500">Phone: +91 8886644985</p>
          <p className="text-gray-500">Website: <a href="https://svce.edu.in" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">svce.edu.in</a></p>
        </div>
      </div>
      <div className="flex flex-col border-t-1 border-gray-900 pt-5 w-full">
        <div className="flex justify-between w-full max-md:flex-col gap-y-4 gap-2">
          <div>
            <p className="flex items-center gap-x-2 text-gray-500 text-sm">
              © 2025 CIS Association, Sri Venkateswara College of Engineering. All rights reserved.
            </p>
            <div className="flex gap-x-4 pt-3">
              <a className="text-gray-500 hover:text-white hover:no-underline text-sm" href="/privacy-policy">Privacy Policy</a>
              <a className="text-gray-500 hover:text-white hover:no-underline text-sm" href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-2 text-gray-500 text-sm">
            <span className="">Developed by <p className="text-blue-400">Technical Team, CIS Association</p></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;