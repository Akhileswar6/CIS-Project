import { Book, Star } from "lucide-react"
import { SecurityToolsWithGuides } from "../data"



const SecurityToolsGuides = () => {
    return(
        <div className="flex flex-col pt-10">
            <h6 className="text-center text-2xl font-semibold max-lg:text-xl">Security Tools & Guides</h6>
            <div className="grid grid-cols-3 px-10 py-15 gap-3 max-lg:grid-cols-2">
                {SecurityToolsWithGuides.map((tool) => (
                    <div className="border-1 p-5 flex flex-col justify-center rounded-md text-sm border-gray-900">
                        <div className="flex justify-between items-center text-sm">
                            <div className="p-2 bg-[#012D4B] rounded-lg text-white">{tool.img}</div>
                            <p className="bg-green-500 px-2 rounded-lg">{tool.topic}</p>
                        </div>
                        <p className="pt-4 text-lg font-semibold max-lg:text-base">{tool.name}</p>
                        <p className="pt-3">{tool.description}</p>
                        <div className="flex justify-between pt-5 marker:text-green-500">
                            <li className="text-gray-500">{tool.status}</li>
                            <p className="flex items-center justify-center gap-1"><Star size={16} fill="green" color='green' />{tool.rating}</p>
                        </div>
                        <button className="flex justify-center"><a href="" className="flex justify-center items-center pt-7 gap-2 w-fit"><Book size={16} /> View Guide</a></button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SecurityToolsGuides;