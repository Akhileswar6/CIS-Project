import { User } from "lucide-react"
import { OrganizationalStructure } from "../data";




const OrgStructure = () => {
    return(
        <div className="flex flex-col px-10 py-15 gap-5">
            <div className="text-center space-y-3">
                <h3 className="text-3xl font-bold">Organizational Structure</h3>
                <p className="text-gray-500">Oue dedicated team working together to achieve excellence in cyber field.</p>
            </div>
            <div className="flex gap-x-5 gap-y-10 pt-7 flex-wrap items-center justify-evenly">
                {OrganizationalStructure.map((org, index) => (
                    <div className="basis-1/4 flex flex-col gap-5 px-7 border-1 border-gray-900 py-5 rounded-md" key={index}>
                    <div className="flex items-baseline gap-2">
                        {org.img}
                        <h6 className="text-lg font-medium">{org.name}</h6>
                    </div>
                    <p className="text-[11px]">{org.work}</p>
                    <div className="flex flex-col">
                        <p className="text-gray-500">Key responsibilities</p>
                        <ul className="list-disc pt-2">
                            {org.resonsibilities.map((res, index) => (
                                <li key={index} className="text-sm marker:text-blue-300">{res}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default OrgStructure;