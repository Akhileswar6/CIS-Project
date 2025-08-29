import { AssociationDetailsCounts } from "../data"



const CountDetails = () => {
    return(
        <div className="flex items-center justify-center gap-x-7 px-10">
            {AssociationDetailsCounts.map((count, index)=>(
                <div key={index} className="flex flex-col items-center justify-center text-lg max-lg:text-base max-md:text-sm">
                    <div className=" bg-blue-300 darkblue-400 p-2 text-white rounded-md max-sm:p-1">{count.img}</div>
                        <h3 className="pt-1">{count.count}</h3>
                        <p>{count.name}</p>
                </div>
            ))}
        </div>
    )
}

export default CountDetails;