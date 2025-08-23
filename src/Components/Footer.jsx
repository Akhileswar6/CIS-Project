import { NavLinks } from "../data";
import { Link } from "react-router-dom";
import logo from '../assets/light.png'
import { SocialLinks } from "../data";
import { Copyright } from 'lucide-react'



const Footer = ({isDark}) => {
  return (
    <div className={`bg-black px-5 py-10 text-white flex flex-col gap-y-10`}>
  <div className="flex flex-col gap-y-3 py-7 ml-4">
        <div className="flex gap-30">
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
      </div>
      <div className="flex gap-20">
        <div className="basis-1/3 flex flex-col gap-y-3">
      <Link to="/" className='flex gap-2 items-center'>
        <img src={logo} alt="CIS Logo" width={40} height={40} />
        <div>
          <h3 className='text-lg '>CIS Association</h3>
          <p className='text-[12px] text-gray-500'>SVCE, Tirupati</p>
        </div>
      </Link>
          <p className="text-gray-500 text-[15px]">Empowering Students in CyberSecurity through hands-on learning, Competitions, and community building at Sri Venkateswara College of Engineering.</p>
            
          
          <div className="flex gap-x-5">
            {SocialLinks.map((link, index)=>(
              <a key={index} href={link.link}>{link.img}</a>
            ))}
          </div>
        </div>

 

        <div className="basis-1/3">
          <h3 style={{fontSize:18, fontWeight:500}}className="text-white-500 mt-6 mb-2">College Information</h3>
          <p style={{fontSize:15}}className=" text-sm"> Sri Venkateshwara College of Engineering.</p>
          <p className="text-gray-500 text-[15px]">Karakambadi Road, Tirupati - 517507</p>
          <p className="text-gray-500 text-[15px] ">Phone: +91 8886644985</p>
          <p className="text-gray-500 text-[15px]">Website: <a href="https://svce.edu.in" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">svce.edu.in</a></p>
        </div>
      </div>
      <div className="flex flex-col border-t-1 border-gray-900 pt-5 w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="flex items-center gap-x-2 text-gray-500 text-[15px]">
              © 2025 CIS Association, Sri Venkateswara College of Engineering. All rights reserved.
            </p>
            <div className="flex gap-x-4 mt-1 ">
              <a className="text-gray-500 hover:text-white hover:no-underline text-[15px]" href="/privacy-policy">Privacy Policy</a>
              <a className="text-gray-500 hover:text-white hover:no-underline text-[15px]" href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
          <div className="flex items-end gap-x-2 text-gray-500 mt-3 text-[15px]">Developed by
            <span style={{color: '#456ec7ff'}}>Technical Team, CIS Association</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;