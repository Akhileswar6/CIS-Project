import { AddressDetails, CommunityDetails, MailDetails } from "../data"




const GetInTouch = () => {
    return(
        <div>
            <div className="flex flex-col justify-center items-center gap-2 px-10 max-md:px-3">
                <h3 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">Get In Touch</h3>
                <p className="text-gray-500 text-lg max-lg:text-base text-center max-md:text-sm">Connect with us through various channels and stay updated with the latest cybersecurity trends</p>
            </div>
            <div className="grid grid-cols-3 gap-4 px-10 py-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:px-3">
                {MailDetails.map((section, index) => (
                    <div key={index} className="border-1 border-gray-900 flex flex-col justify-between p-5 gap-5 rounded-md max-md:gap-2"> 
                        <div className="p-2 bg-[#012D4B] w-fit rounded-lg">{section.img}</div>
                        <h5 className="text-lg max-lg:text-base font-semibold">{section.heading}</h5>
                        {section.links.map((mail, index) => (
                            <span key={index} className="text-sm">
                                <p className="text-gray-500 py-1">{mail.name}</p>
                                <a href={mail.link}>{mail.value}</a>
                            </span>
                        ))}
                    </div>
                ))}
                {CommunityDetails.map((section, index) => (
                    <div key={index} className="border-1 border-gray-900 flex flex-col justify-between p-5 gap-5 rounded-md
                    max-md:gap-2">
                        <div className="p-2 bg-[#012D4B] w-fit rounded-lg">{section.img}</div>
                        <h5 className="text-lg max-lg:text-base font-semibold">{section.heading}</h5>
                        {section.links.map((link, index) => (
                            <span key={index} className="flex items-center gap-2 text-sm">
                                <span className="p-2 bg-[#012D4B] rounded-full text-white">{link.img}</span>
                                <span>
                                    <p className="text-gray-500">{link.name}</p>
                                    <a href={link.link}>{link.value}</a>
                                </span>
                            </span>
                        ))}
                    </div>
                ))}
                {AddressDetails.map((section, index) => (
                    <div key={index} className="border-1 border-gray-900 flex flex-col justify-between p-5 gap-5 rounded-md
                    max-md:gap-2">
                        <div className="p-2 bg-[#012D4B] w-fit rounded-lg">{section.img}</div>
                        <h5 className="text-lg max-lg:text-base font-semibold">{section.heading}</h5>
                        {section.Address.map((ent, index) => (
                            <span className="text-sm flex flex-col gap-1">
                                <p className="text-gray-500">{ent.name}</p>
                                <h6>{ent.value}</h6>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default GetInTouch;