import { AssociationDetailsCounts } from "../data"



const CountDetails = () => {
    return(
        <div className="px-12 ml-20 mt-20 mb-10">
            <div className="flex relative justify-end">
                {AssociationDetailsCounts.map((count)=>(
                    <div className="relative basis-1/4">
                        {count.img}
                        <h3>{count.count}</h3>
                        <p>{count.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountDetails;