import SecurityToolsGuides from "../Components/SecurityToolsGuides";




const Resources = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-10`}>
            <div className="flex flex-col justify-center items-center gap-2 px-10 text-center max-md:px-3">
                <h3 className="text-3xl font-semibold max-lg:text-2xl max-md:text-xl">Resources</h3>
                <p className="text-gray-500 text-lg max-lg:text-base max-md:text-sm">Access our comprehensive collection of cybersecurity resources, tools, and educational materials</p>
            </div>
            <SecurityToolsGuides />
        </div>
    );
};

export default Resources;