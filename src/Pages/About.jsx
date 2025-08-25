import AboutHero from "../Components/AboutHero";
import Achievements from "../Components/Achievements";
import OrgStructure from "../Components/OrgStructure";




const About = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-10 max-md:gap-5`}>
            <div className="flex flex-col justify-center items-center gap-2 px-10 text-center max-md:px-3">
                <h3 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">About CIS Association</h3>
                <p className="text-center text-gray-500 text-lg max-lg:text-base min-lg:w-xl max-md:text-sm">Empowering the next generation of cyber security professionals through education, innovation and community.</p>
            </div>
            <AboutHero />
            <OrgStructure />
            <Achievements />
        </div>
    );
};

export default About;