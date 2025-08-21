import { NavLinks } from "../data";
import { Link } from "react-router-dom";
import logo from '../assets/react.svg'
import { SocialLinks } from "../data";
import { Copyright } from 'lucide-react'



const Footer = ({isDark}) => {
  return (
    <div className={`bg-black px-5 py-10 text-white flex flex-col gap-y-10`}>
      <div className="flex flex-col gap-y-3 border-y-1 border-gray-900 py-7">
        <h4 className="text-xl">Quick Links</h4>
        <ul className="flex flex-col gap-y-2">
          {NavLinks.map((link, index) => (
            <li key={index} className="text-md text-gray-500"><Link to={link.link}>{link.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10">
        <div className="basis-1/3 flex flex-col gap-y-3">
          <div className='flex gap-2 items-center'>
            <img src={logo} alt="" width={24} />
            <div>
                <h3 className='text-lg '>CIS Association</h3>
                <p className='text-[12px] text-gray-500'>SVCE, Tirupati</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">Empowering Students in CyberSecurity through hands-on learning, Competitions, and community building at Sri Venkateswara College of Engineering.</p>
            
          
          <div className="flex gap-x-5">
            {SocialLinks.map((link, index)=>(
              <a key={index} href={link.link}>{link.img}</a>
            ))}
          </div>
        </div>
        <div className="basis-1/3">
          <h3 className="">College information</h3>
          <b>Sri Venkateshwara College of Engineering.</b>
          <p>Karakambadi Road, Tirupati - 517507</p>
          <p>Phone: +91 8886644985</p>
          <p>Website: <a href="https://svce.edu.in" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">svce.edu.in</a></p>
        </div>
      </div>
      <div className="flex flex-col border-t-1 border-gray-900 pt-5 w-full">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="flex items-center gap-x-2 text-gray-500">
              © 2025 CIS Association, Sri Venkateswara College of Engineering. All rights reserved.
            </p>
            <div className="flex gap-x-4 ">
              <a className="text-gray-500 hover:text-white hover:no-underline" href="/privacy-policy">Privacy Policy</a>
              <a className="text-gray-500 hover:text-white hover:no-underline" href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
          <div className="flex items-end gap-x-2 text-gray-500 mt-3">Developed by
            <span style={{color: '#456ec7ff'}}>Technical Team, CIS Association</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;