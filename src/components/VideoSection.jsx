import LogoSlide from './LogoSlide';

const VideoSection = () => {
    const showModal = (videoUrl) => {
        console.log('Video clicked:', videoUrl);
    };

    return (
        <>
            <section className="grid grid-cols-2 gap-10 lg:max-h-screen">
                <div className="videoContainer">
                    <video 
                        className="neu-bg transform duration-300 transition duration-300 ease-in-out hover:scale-101 hover:cursor-pointer" 
                        onClick={() => showModal('https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/videoplayback.mp4')}
                        style={{ width: '100%', height: '65vh', objectFit: 'cover' }}
                        loading="lazy" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source 
                            src="https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/videoplayback.mp4" 
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='flex flex-col justify-around'>
                    <h1 className="ml1 title mb-6 font-sans text-5xl md:text-8xl font-bold tracking-tight sm:leading-none text-center uppercase">Dwain in Action</h1>
                    <LogoSlide />
                </div>
            </section>
        </>
    );
}

export default VideoSection;
