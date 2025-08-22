import { CalendarRange, Clock } from "lucide-react";
import { UpcomingEventsData } from "../data";



const UpcomingEvents = () => {
    return(
        <div className="px-10 pt-36 flex flex-col w-full gap-y-5">
            <h2 className="text-4xl font-bold text-center">Upcoming Events</h2>
            <p className="text-center text-gray-500">Stay ahead in Cyber Security with our cutting edge workshops, competitions and Hackathons.</p>
            <div className="flex  py-10 justify-around items-center w-full flex-wrap">
                {UpcomingEventsData.slice(0, 2).map((ent) => (
                    <div className="border-1 p-5 border-gray-900 rounded-xl flex flex-col gap-y-7 basis-1/3">
                        <div className="flex text-[14px] justify-between">
                            <p className="bg-green-500 px-2 rounded-md">{ent.label}</p>
                            <p className="text-[13px] flex items-center gap-1"><CalendarRange size={13} />{ent.date}</p>
                        </div>
                        <div>
                            <b>{ent.name}</b>
                            <p className="text-[14px] flex items-center text-gray-500 gap-2 mt-2"><Clock size={13} />{ent.time}</p>
                        </div>
                        <p className="">{ent.description}</p>
                        <button className="cursor-pointer hover:text-green-500 font-medium">Register Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingEvents;