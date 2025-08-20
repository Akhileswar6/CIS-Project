import { AssociationDetailsCounts } from "../data"



const CountDetails = () => {
    return(
        <div>
            {AssociationDetailsCounts.map((count)=>(
                <p className="odd:bg-blue-500 even:bg-green-500">{count.img}</p>
            ))}
        </div>
    )
}

export default CountDetails;