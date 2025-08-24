import { AssociationDetailsCounts } from "../data"



const CountDetails = () => {
    return(
        <div className="px-12 py-10">
            <div className="flex flex-wrap">
                {AssociationDetailsCounts.map((count)=>(
                    <div className="basis-1/4 flex flex-col items-center justify-center">
                        <div className=" bg-blue-300 darkblue-400 p-2 text-white rounded-md">{count.img}</div>
                            <h3 className="pt-1">{count.count}</h3>
                            <p>{count.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountDetails;