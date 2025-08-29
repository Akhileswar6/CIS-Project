import { WhyJoinUs } from "../data";




const JoinForm = () => {
    return(
        <div className="">
            <div className="flex flex-col items-center justify-center gap-2 text-center px-10 max-md:px-3">
                <h3 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">Join the <span>CIS Association</span></h3>
                <p className="text-gray-500 text-lg max-lg:text-base">Become part of our cybersecurity community and enhance your skills in information security</p>
            </div>
            <div className="flex flex-col px-10 pt-30 gap-10 justify-center max-md:px-3">
                <div className="flex flex-col justify-center gap-3 items-center">
                    <h4 className="text-2xl font-semibold pb-3 max-lg:text-xl max-md:text-lg">Why Join Us?</h4>
                    <div className="grid grid-cols-1 gap-2 max-md:grid-cols-2">
                        {WhyJoinUs.map((res, index) => (
                            <div key={index} className="flex gap-2 rounded-md bg-gray-600 text-white py-7 px-4 max-sm:py-2 max-sm:px-1 max-sm:flex-col">
                                <div className="">{res.img}</div>
                                <span className="flex flex-col gap-2">
                                    <p className="text-lg font-bold max-sm:text-sm">{res.name}</p>
                                    <p className="max-sm:text-xs">{res.description}</p>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h4 className="text-2xl font-semibold max-lg:text-xl max-md:text-lg">Student Registration</h4>
                    <button className="px-5 py-2 bg-blue-500 rounded-lg max-sm:text-sm">Join Association</button>
                </div>
            </div>
        </div>
    )
}

export default JoinForm;