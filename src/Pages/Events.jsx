import EventsHero from "../Components/EventsHero";
import UpcomingEvents from "../Components/UpcomingEvents";
import PastEvents from "../Components/PastEvents";



const Events = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-5`}>
            <EventsHero />
            <UpcomingEvents />
            <PastEvents />
        </div>
    );
};

export default Events;