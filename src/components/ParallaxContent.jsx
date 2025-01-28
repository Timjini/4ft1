import LogoSlide from "./LogoSlide";

const ParallaxContent = () => {
    return (
        <div className='flex flex-col justify-around'>
        <h1 className="ml1 title mb-6 font-sans text-5xl md:text-8xl font-bold tracking-tight sm:leading-none text-center uppercase">Dwain in Action</h1>
        <LogoSlide />
    </div>
    )
}

export default ParallaxContent;