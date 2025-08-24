import { CalendarRange, Clock } from "lucide-react";
import { UpcomingEventsData } from "../data";



const UpcomingEvents = () => {
    return(
        <div className="px-10 pt-36 flex flex-col w-full gap-y-5">
            <h2 className="text-3xl text-center max-lg:text-2xl">Upcoming Events</h2>
            <p className="text-center text-gray-500 max-lg:text-sm">Stay ahead in Cyber Security with our cutting edge workshops, competitions and Hackathons.</p>
            <div className="grid grid-cols-3 py-10 gap-4 w-full max-lg:grid-cols-2">
                {UpcomingEventsData.map((ent) => (
                    <div className="border-1 p-5 border-gray-900 rounded-xl flex flex-col gap-y-7">
                        <div className="flex text-[14px] justify-between">
                            <p className="bg-green-500 px-2 rounded-md">{ent.label}</p>
                            <p className="text-[13px] flex items-center gap-1"><CalendarRange size={13} />{ent.date}</p>
                        </div>
                        <div>
                            <p className="text-xl max-lg:text-lg">{ent.name}</p>
                            <p className="text-[14px] flex items-center text-gray-500 gap-2 mt-2"><Clock size={13} />{ent.time}</p>
                        </div>
                        <p className="text-sm">{ent.description}</p>
                        <button className="cursor-pointer hover:text-green-500 font-medium">Register Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingEvents;