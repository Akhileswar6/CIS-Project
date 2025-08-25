import { WhyJoinUs } from "../data";




const JoinForm = () => {
    return(
        <div>
            <div className="flex flex-col items-center justify-center gap-2">
                <h3 className="text-3xl font-semibold max-lg:text-2xl">Join the <span>CIS Association</span></h3>
                <p className="text-gray-500 text-lg max-lg:text-base">Become part of our cybersecurity community and enhance your skills in information security</p>
            </div>
            <div className="flex flex-col px-10 pt-30 gap-10 justify-center">
                <div className="flex flex-col justify-center gap-3 items-center">
                    <h4 className="text-2xl font-semibold pb-3 max-lg:text-xl">Why Join Us?</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {WhyJoinUs.map((res, index) => (
                            <div key={index} className="flex items-center gap-5 rounded-md bg-gray-600 text-white py-7 px-4">
                                <div className="">{res.img}</div>
                                <span>
                                    <p className="text-lg font-bold">{res.name}</p>
                                    <p>{res.description}</p>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h4 className="text-2xl font-semibold max-lg:text-xl">Student Registration</h4>
                    <button className="px-5 py-2 bg-blue-500 rounded-lg">Join Association</button>
                </div>
            </div>
        </div>
    )
}

export default JoinForm;