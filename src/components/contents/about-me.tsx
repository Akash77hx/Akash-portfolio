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
                        Hi, I&apos;m Md Faizan, the founder of DN Software Solution — a virtual IT company dedicated to delivering high-quality digital solutions. With a passion for technology and design, I specialize in web development, app development, and custom IT services tailored to meet your business goals.
                        <br /><br />
                        At DN Software Solution, we believe in "Building Digital Dreams" — turning ideas into impactful online experiences. Whether you&apos;re a startup looking for your first website or a business aiming to upgrade your digital presence, I provide end-to-end solutions that are reliable, scalable, and user-friendly.
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
