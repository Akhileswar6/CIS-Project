import GetInTouch from "../Components/GetInTouch";



const Contact = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-5`}>
            <GetInTouch />
        </div>
    );
};

export default Contact;