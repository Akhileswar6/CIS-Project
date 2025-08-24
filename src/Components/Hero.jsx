import logo from '../assets/react.svg'



const Hero = () => {

    return(
        <div className='flex flex-col items-center justify-center gap-2 px-10'>
            <img src={logo} alt="" width={75} />
            <h1 className='text-6xl font-bold max-lg:text-4xl'>CIS Association</h1>
            <h5 style={{fontSize:20}} className='text-green-700 mt-2 max-lg:text-sm'>Empowering Students in CyberSecurity</h5>
            <p style={{fontSize:17}} className='text-gray-500 max-lg:text-sm'>Sri Venkateshwara College of Engineering, Tirupati</p>
            <p className='pt-3 w-2xl text-center max-lg:text-sm max-lg:w-xl'>Join the CyberSecurity Association dedicated to fostering knowledge, skills, and innoavation in Information Security. We empower students through hands-on Workshops, Competitions, Hackathons, and real-world CyberSecurity challenges.</p>
        </div>
    );
};

export default Hero;