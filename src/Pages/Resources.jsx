import SecurityToolsGuides from "../Components/SecurityToolsGuides";




const Resources = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-5`}>
            <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="text-3xl font-semibold">Resources</h3>
                <p className="text-gray-500">Access our comprehensive collection of cybersecurity resources, tools, and educational materials</p>
            </div>
            <SecurityToolsGuides />
        </div>
    );
};

export default Resources;