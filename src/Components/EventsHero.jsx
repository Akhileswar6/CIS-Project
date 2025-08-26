import { ImportantPrograms } from "../data";




const EventsHero = () =>{
    return(
        <div className="flex flex-col gap-20 px-15 max-md:px-3 max-sm:gap-15">
            <div className="flex flex-col gap-2 items-center justify-center text-center">
                <h3 className="text-3xl font-semibold max-lg:text-2xl max-md:xl">Events & Workshops</h3>
                <p className="text-gray-500 text-lg max-lg:text-base max-md:text-sm">Discover our comprehensive cybersecurity events, from hands-on workshops to competitive challenges</p>
            </div>
            <div className="flex gap-5 max-md:flex-wrap items-center justify-center max-sm:gap-2">
                {ImportantPrograms.map((program, index) => (
                    <div key={index} className="p-5 border-1 flex justify-center flex-col items-center gap-5 border-gray-900 rounded-md text-center max-sm:gap-3">
                        <div className="text-white bg-[#012D4B] p-2 rounded-full">{program.img}</div>
                        <h6 className="text-lg font-semibold">{program.name}</h6>
                        <p className="text-[12px]">{program.description}</p>
                        <p className="text-[10px] bg-green-500 px-3 rounded-md text-black py-1">{program.tagLine}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventsHero;