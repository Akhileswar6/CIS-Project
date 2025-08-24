import { AchievementsData } from "../data"




const Achievements = () => {
    return(
        <div className="px-10 pt-10 flex flex-col w-full gap-y-5">
            <div className="text-center space-y-3">
                <h3 className="text-3xl">Our Achievements</h3>
                <p className="text-gray-500">Celebrating our milestones and contributions to the cybersecurity community</p>
            </div>
            <div className="grid grid-cols-3 gap-10 py-10 justify-around items-center w-full">
                {AchievementsData.map((ent, index) => (
                    <div className="border-1 p-4 border-gray-900 rounded-md flex flex-col gap-y-7 basis-1/3" key={index}>
                        <div className="flex text-[14px] justify-between">
                            <p className="bg-green-500 px-2 rounded-md">{ent.label}</p>
                            <p className="text-[13px] flex items-center gap-1">{ent.year}</p>
                        </div>
                        <div>
                            <b className="flex gap-2">{ent.img}{ent.name}</b>
                        </div>
                        <p className="text-gray-500">{ent.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievements;