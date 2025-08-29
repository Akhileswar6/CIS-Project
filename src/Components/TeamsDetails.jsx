import { Badge } from 'lucide-react';
import pic1 from '../assets/react.svg'
import { TeamsDetailsData } from '../data';




const TeamsDetails = () => {
    return(
        <div className='flex flex-col text-center gap-20 py-7 px-15 max-md:px-3 max-md:gap-15'>
            {TeamsDetailsData.map((team, index) => (
                <div key={index} className='flex flex-col gap-5 py-3 max-md:gap-1'>
                    <h3 className='text-xl font-semibold max-md:text-lg'>{team.name}</h3>
                    <div className='grid gap-7 grid-cols-3 pt-10 max-lg:grid-cols-2 max-md:gap-3'>
                        {team.TeamDetails.map((person, index) => (
                            <div key={index} className='flex flex-col justify-center items-center px-10 gap-2 border-1 py-5 rounded-md border-gray-900 max-md:px-2 max-md:gap-1 text-sm max-sm:text-[7px]'>
                                <div className=''><img src={person.img} alt="" /></div>
                                <h6 className='text-lg font-semibold pt-3 max-md:text-base max-sm:text-sm'>{person.name}</h6>
                                <p className='text-blue-400'>{person.role}</p>
                                <p className='text-gray-500'>{person.branch}</p>
                                <p className='pt-5 max-sm:pt-2'>{person.description}</p>
                                <p className='text-gray-500 pt-5 max-sm:pt-2'>Skills</p>
                                <ul className='flex gap-3 flex-wrap justify-around items-center max-sm:gap-1'>
                                    {person.skills.map((skill, index) => (
                                        <li className='bg-green-400 px-3 rounded-md py-1 max-sm:py-0' key={index}>{skill}</li>
                                    ))}
                                </ul>
                                <p className='text-gray-500 pt-5 max-sm:pt-2'>Achievements</p>
                                <ul className='flex flex-col gap-1'>
                                    {person.achievements.map((achievement, index) => (
                                        <li key={index} className='flex gap-2 items-center max-sm:gap-1'><Badge className='max-sm:w-3' /> {achievement}</li>
                                    ))}
                                </ul>
                                <ul className='flex justify-around pt-3 gap-x-5'>
                                    {person.socialLinks.map((link, index) => (
                                        <li key={index} className=''><a href={link.link}>{link.img}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamsDetails;