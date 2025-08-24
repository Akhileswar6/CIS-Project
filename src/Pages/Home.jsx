import Hero from "../Components/Hero";
import UpcomingEvents from "../Components/UpcomingEvents";
import CountDetails from "../Components/CountDetails";
import GetInTouch from "../Components/GetInTouch";



const Home = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-10`}>
            <Hero />
            <UpcomingEvents />
            <GetInTouch />
            <CountDetails />
        </div>
    );
};

export default Home;