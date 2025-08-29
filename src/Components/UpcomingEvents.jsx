import { CalendarRange, Clock } from "lucide-react";
import { UpcomingEventsData } from "../data";



const UpcomingEvents = () => {
    return(
        <div className="px-10 pt-36 flex flex-col w-full gap-y-2 max-md:px-3 max-sm:pt-26">
            <h2 className="text-3xl text-center font-semibold max-lg:text-2xl max-md:text-xl">Upcoming Events</h2>
            <p className="text-center text-gray-500 text-lg max-lg:text-base max-md:text-sm">Stay ahead in Cyber Security with our cutting edge workshops, competitions and Hackathons.</p>
            <div className="grid grid-cols-3 py-10 gap-4 w-full max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-2">
                {UpcomingEventsData.map((ent, index) => (
                    <div key={index} className="border-1 p-5 border-gray-900 rounded-xl flex flex-col gap-y-7 max-md:gap-y-4">
                        <div className="flex text-sm justify-between max-md:text-[10px] items-center">
                            <p className="bg-green-500 px-2 rounded-md">{ent.label}</p>
                            <p className="flex items-center gap-1"><CalendarRange size={13} />{ent.date}</p>
                        </div>
                        <div>
                            <p className="text-xl max-lg:text-lg max-md:text-base font-semibold max-sm:text-sm">{ent.name}</p>
                            <p className="text-sm flex items-center text-gray-500 gap-2 mt-2 max-sm:text-xs"><Clock size={13} />{ent.time}</p>
                        </div>
                        <p className="text-sm max-sm:text-xs">{ent.description}</p>
                        <button className="cursor-pointer hover:text-green-500 font-medium max-md:text-sm">Register Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingEvents;