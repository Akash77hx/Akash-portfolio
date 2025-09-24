import AnimationContainer from "../utils/animation-container";

const AboutMe = () => {
    return (
        <div className="w-full relative pt-10 pb-20 z-40">
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto"
            >
                <div className="w-full">
                    <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
                        About Me
                    </h2>
                </div>
            </AnimationContainer>
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
            >
                <div className="w-full flex items-center justify-center">
                    <p className="text-base md:text-lg text-justify w-full">
                        Hi, I&apos;m Akash, a passionate developer dedicated to building clean, modern, and scalable digital solutions. With expertise in web development, app development, and custom IT services, I help businesses and individuals bring their ideas to life through technology.
                        <br /><br />
                        I believe in "writing code that solves problems and creates impact." My approach is focused on delivering solutions that are not only functional but also user-friendly, reliable, and future-ready.
                        <br /><br />
                        Whether it&apos;s developing a responsive website, crafting a seamless mobile app, or designing full-stack systems, I bring both technical expertise and creative problem-solving to every project.
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
