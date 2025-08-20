import Hero from "../Components/Hero";
import UpcomingEvents from "../Components/UpcomingEvents";
import CountDetails from "../Components/CountDetails";



const Home = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-10`}>
            <Hero />
            <UpcomingEvents />
            <CountDetails />
        </div>
    );
};

export default Home;