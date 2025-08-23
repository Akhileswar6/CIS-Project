import { Badge } from 'lucide-react';
import pic1 from '../assets/react.svg'
import { TeamsDetailsData } from '../data';




const TeamsDetails = () => {
    return(
        <div className='flex flex-col text-center gap-30 py-10 px-15'>
            {TeamsDetailsData.map((team, index) => (
                <div key={index} className='flex flex-col gap-5 py-5'>
                    <h3 className='text-xl font-semibold'>{team.name}</h3>
                    <div className='grid gap-7 grid-cols-3 place-content-center pt-10'>
                        {team.TeamDetails.map((person, index) => (
                            <div key={index} className='flex flex-col justify-center items-center px-10 gap-2 border-1 py-5 rounded-md border-gray-900'>
                                <div className=''><img src={person.img} alt="" /></div>
                                <h6 className='text-lg font-semibold pt-3'>{person.name}</h6>
                                <p className='text-blue-400 text-sm'>{person.role}</p>
                                <p className='text-gray-500 text-sm'>{person.branch}</p>
                                <p className='text-sm pt-5'>{person.description}</p>
                                <p className='text-gray-500 pt-5'>Skills</p>
                                <ul className='flex gap-3 flex-wrap justify-around items-center'>
                                    {person.skills.map((skill, index) => (
                                        <li className='bg-green-400 px-3 rounded-md text-sm py-1' key={index}>{skill}</li>
                                    ))}
                                </ul>
                                <p className='text-gray-500 pt-5'>Achievements</p>
                                <ul className='text-[10px] flex flex-col gap-1'>
                                    {person.achievements.map((achievement, index) => (
                                        <li key={index} className='flex gap-2 items-center'><Badge /> {achievement}</li>
                                    ))}
                                </ul>
                                <ul className='flex justify-around pt-3 gap-x-5'>
                                    {person.socialLinks.map((link, index) => (
                                        <li key={index}><a href={link.link}>{link.img}</a></li>
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