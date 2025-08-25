import { Eye, Target } from "lucide-react"
import { MissionAndVision } from "../data";




const AboutHero = () =>{
    return(
    <div className="flex justify-center items-center gap-2 flex-col px-10 max-md:px-3">
            <div className="flex py-10 gap-10 max-lg:flex-wrap max-md:gap-5">
                {MissionAndVision.map((func, index)=>(
                    <div key={index} className="border-1 border-gray-900 py-7 px-5 rounded-md">
                        <div className="flex gap-2 basis-1/2 pb-5 items-center">
                            <span style={{background: index === 0 ? 'rgb(1, 45, 75)' : 'rgb(1, 79, 41)', padding: '8px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {func.img}
                            </span>
                            <h3 className="text-xl max-md:text-lg">{func.name}</h3>
                        </div>
                        <p className="text-gray-500 text-lg max-lg:text-base max-md:text-sm">{func.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutHero;