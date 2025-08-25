import TeamsDetails from "../Components/TeamsDetails";



const Teams = ({isDark}) => {
    console.log(isDark)
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-3`}>
            <div className="flex flex-col justify-center items-center px-15">
                <h3 className="text-3xl font-bold max-lg:text-2xl">Meet Our Team</h3>
                <p className="text-gray-500 pt-2 text-lg text-center max-lg:text-base">Dedicated cybersecurity enthusiasts working together to build a safer digital future</p>
            </div>
            <div className="pt-10">
                <TeamsDetails />
            </div>
        </div>
    );
};

export default Teams;