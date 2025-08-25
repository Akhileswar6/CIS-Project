import { User } from "lucide-react"
import { OrganizationalStructure } from "../data";




const OrgStructure = () => {
    return(
        <div className="flex flex-col px-10 py-15 gap-5">
            <div className="text-center space-y-3">
                <h3 className="text-3xl font-semibold max-lg:text-2xl">Organizational Structure</h3>
                <p className="text-gray-500 max-lg:text-sm">Oue dedicated team working together to achieve excellence in cyber field.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 pt-7 max-lg:grid-cols-2">
                {OrganizationalStructure.map((org, index) => (
                    <div className="basis-1/4 flex flex-col gap-5 px-7 border-1 border-gray-900 py-5 rounded-md" key={index}>
                    <div className="flex items-center gap-2">
                        <div style={{background: 'rgb(1, 45, 75)', padding: '6px', borderRadius: '8px', color: '#fff'}}>{org.img}</div>
                        <h6 className="text-lg font-medium">{org.name}</h6>
                    </div>
                    <p className="text-[15px]">{org.work}</p>
                    <div className="flex flex-col">
                        <p className="text-gray-500">Key responsibilities</p>
                        <ul className="list-disc pt-2 pl-7">
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