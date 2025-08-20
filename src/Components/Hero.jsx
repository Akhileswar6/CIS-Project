import logo from '../assets/react.svg'



const Hero = () => {

    return(
        <div className='flex flex-col items-center justify-center gap-2'>
            <img src={logo} alt="" width={75} />
            <h1 className='text-6xl font-bold'>CIS Association</h1>
            <h5 className='text-green-700'>Empowering Students in CyberSecurity</h5>
            <p className='text-gray-500'>Sri Venkateshwara College of Engineering, Tirupati</p>
            <p className='pt-5 w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti officia perferendis earum, deleniti animi fugiat voluptates quaerat ut nihil quibusdam ipsa itaque deserunt tenetur eum repudiandae reiciendis dignissimos sed.</p>
        </div>
    );
};

export default Hero;