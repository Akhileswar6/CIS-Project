import logo from '../assets/react.svg'



const Hero = () => {

    return(
        <div className='flex flex-col items-center justify-center gap-2 px-10'>
            <img src={logo} alt="" width={75} />
            <h1 className='text-6xl font-bold max-lg:text-5xl'>CIS Association</h1>
            <h5 className='text-green-700 mt-2 text-lg max-lg:text-base'>Empowering Students in CyberSecurity</h5>
            <p className='text-gray-500 text-lg max-lg:text-base'>Sri Venkateshwara College of Engineering, Tirupati</p>
            <p className='pt-3 w-2xl text-center text-lg max-lg:text-base max-lg:w-xl'>Join the CyberSecurity Association dedicated to fostering knowledge, skills, and innoavation in Information Security. We empower students through hands-on Workshops, Competitions, Hackathons, and real-world CyberSecurity challenges.</p>
        </div>
    );
};

export default Hero;