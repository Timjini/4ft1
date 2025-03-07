import { useState } from 'react';
import LogoSlide from './LogoSlide';
import { BUCKET_URL } from './common';

const VideoSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const showModal = (url) => {
        setVideoUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoUrl('');
    };

    return (
        <>
            <section  id="dwain-in-action" className="flex flex-col p-4 justify-center content-center">
                <div>
                    <h1 className="ml1 title mb-2 font-sans text-4xl md:text-6xl font-bold tracking-tight sm:leading-none text-center uppercase">
                        Dwain in Action
                    </h1>
                </div>
                <div className="py-4 px-4 md:px-24 mx-auto">
                    <video
                        className="rounded-lg neu-bg transform duration-300 transition ease-in-out hover:scale-101 hover:cursor-pointer"
                        onClick={() => showModal(`${BUCKET_URL}/short_video.mp4`)}
                        style={{ width: 'auto', height: '65vh', objectFit: 'cover' }}
                        loading="lazy"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src={`${BUCKET_URL}/short_video.mp4`}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <video
                            className="py-4 px-4 md:px-24 mx-auto"
                            controls
                            autoPlay
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoSection;
