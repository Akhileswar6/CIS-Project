import Hero from "../Components/Hero";



const Home = ({isDark}) => {
    return(
        <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <Hero />
        </div>
    );
};

export default Home;