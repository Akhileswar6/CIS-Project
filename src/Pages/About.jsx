import AboutHero from "../Components/AboutHero";
import Achievements from "../Components/Achievements";
import OrgStructure from "../Components/OrgStructure";



const About = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-10`}>
            <AboutHero />
            <OrgStructure />
            <Achievements />
        </div>
    );
};

export default About;