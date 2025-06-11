import { back3 } from "../assets/images";

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-24">
            <img src={back3} alt="Background" className="w-full h-full object-cover absolute inset-0"/>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
                <h1 className="text-8xl font-bold font-inter text-black">Dev-Briefs</h1>
                <h2 className="text-2xl font-light text-black flex justify-center p-5 font-inter">Rita's Tech Journey: From Code to Career</h2>
            </div>
        </section>
    );
};

export default Hero;