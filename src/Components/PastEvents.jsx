import { Users, Badge, Calendar } from "lucide-react"
import { PastEventsData } from "../data"
import { useState } from "react";




const PastEvents = () => {

    const [showAll, setShowAll] = useState(false);

    const dataSet = showAll ? PastEventsData : PastEventsData.slice(0, 4);

    return(
        <div className="flex flex-col justify-center items-center px-10 py-10 max-md:px-3">
            <h3 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">Past Events</h3>
            <div className="grid py-10 grid-cols-2 gap-5 max-md:py-5">
                {dataSet.map((ent, index) => (
                    <div key={index} className="border-1 p-5 rounded-md border-gray-900 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                            <p className="bg-green-500 px-2 rounded-md text-sm">{ent.program}</p>
                            <p className="flex gap-1 text-[10px] items-center justify-center"><Calendar size={16} />{ent.date}</p>
                        </div>
                        <h4 className="py-3 text-md font-semibold">{ent.name}</h4>
                        <p className="text-sm">{ent.tag}</p>
                        <div className="grid grid-cols-3 py-4 gap-2">
                            {ent.images.slice(0, 3).map((img, index) => (
                                <img key={index} src={img} alt="" width={150} height={24} className="rounded-md" />
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">Event Highlights:</p>
                        <ul className="flex flex-wrap gap-x-10 gap-y-1 pl-5 list-disc pt-2 text-[12px] marker:text-green-500">
                            {ent.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center pt-4 text-sm">
                            <p className="flex items-center justify-center gap-2 text-gray-500"><Users size={16} /> {ent.participants} participants</p>
                            <p className="flex items-center justify-center gap-2 text-green-500"><Badge size={16} /> {ent.rating}/5.0 rating</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="cursor-pointer bg-blue-500 px-4 text-white py-2 rounded-md" onClick={() => setShowAll(!showAll)}>{showAll ? 'View Recent Events' : 'View All Events'}</button>
        </div>
    )
};

export default PastEvents;