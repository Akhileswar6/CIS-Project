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
                <h3 className='text-lg font-bold'>CIS Association</h3>
                <p className='text-[10px] text-gray-500'>SVCE, Tirupati</p>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam et error, reprehenderit iusto voluptates ratione ipsum vitae nobis, officia quas ut consequuntur numquam perferendis provident. Dolor facilis non quas eius.</p>
          
          <div className="flex gap-x-5">
            {SocialLinks.map((link, index)=>(
              <a key={index} href={link.link}>{link.img}</a>
            ))}
          </div>
        </div>
        <div className="basis-1/3">
          <h3>College information</h3>
          <b>Sri Venkateshwara College of Engineering.</b>
          <p>Tirupati - Renigunta Road</p>
        </div>
        <div className="basis-1/3">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newstellerfor the latest cs updates.</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex">
          <Copyright /> 2024 CIS Association, Sri Venkateshwara College of Engineering. All rights reserved.
          <br />
          Developed by Teja and Akhileshwar, CIS Association Technical Team.
        </p>
        <p>
          Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Footer;