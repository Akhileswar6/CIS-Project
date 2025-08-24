
import JoinForm from "../Components/JoinForm";



const JoinUs = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-5`}>
            <JoinForm />
        </div>
    );
};

export default JoinUs;