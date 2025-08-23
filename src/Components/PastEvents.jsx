import { Users, Badge } from "lucide-react"
import { PastEventsData } from "../data"
import { useState } from "react";




const PastEvents = () => {

    const [showAll, setShowAll] = useState(false);

    const dataSet = showAll ? PastEventsData : PastEventsData.slice(0, 4);

    return(
        <div className="flex flex-col justify-center items-center px-10 py-10">
            <h2>Past Events</h2>
            <div className="grid py-10 grid-cols-2 gap-5">
                {dataSet.map((ent, index) => (
                    <div key={index} className="border-1 p-5 rounded-md">
                        <div className="flex justify-between items-center">
                            <p>{ent.program}</p>
                            <p>{ent.date}</p>
                        </div>
                        <h4>{ent.name}</h4>
                        <p>{ent.tag}</p>
                        <div className="grid grid-cols-3">
                            {ent.images.map((img, index) => (
                                <img key={index} src={img} alt="" />
                            ))}
                        </div>
                        <p>Event Highlights:</p>
                        <ul className="flex flex-wrap gap-x-10 gap-y-1 pl-5 list-disc pt-2">
                            {ent.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                        <div className="flex justify-between items-center py-3">
                            <p className="flex items-center justify-center gap-2"><Users /> {ent.participants} participants</p>
                            <p className="flex items-center justify-center gap-2"><Badge /> {ent.rating}/5.0 rating</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="cursor-pointer bg-blue-500 px-4 text-white py-2 rounded-md" onClick={() => setShowAll(!showAll)}>{showAll ? 'View Recent Events' : 'View All Events'}</button>
        </div>
    )
};

export default PastEvents;