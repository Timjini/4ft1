import React from "react";
import MainButton from "./common/MainButton";
import { BUCKET_URL } from "./common";

const FourFingersOneThumb = ({toggleModal}) => {
    const baseUrl = "https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/";

    return (
        <section id="organization" className="relative isolate overflow-hidden bg-white min-h-screen flex items-center justify-center px-6 py-12 sm:py-24">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width="200"
                            height="200"
                            x="50%"
                            y="-1"
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none"></path>
                        </pattern>
                    </defs>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth="0"
                        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                    ></rect>
                </svg>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <a href="" target="_blank">
                        <h1 className="uppercase text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                            Four Fingers One Thumb
                        </h1>
                    </a>
                    <p className="italic text-lg font-semibold text-gray-800 border-b-2 border-red-700 mb-6">
                        In an organisation, the pressure to perform can show up in a range of ways:
                    </p>
                    <ul className="list-disc text-left text-gray-700 pl-5 space-y-2">
                        <li>Low confidence for individuals – as they compare themselves with others.</li>
                        <li>Blame culture – as everyone is unwilling to acknowledge mistakes.</li>
                        <li>Dysfunctional teams – pulling in different directions instead of collaborating.</li>
                        <li>Low performance – as opportunities are missed.</li>
                    </ul>
                    <div className="mt-8">
                    <MainButton link="#" title="Book Dwain for your Event" toggleModal={toggleModal} />

                    </div>
                </div>
        
                {/* Right Section */}
                <div className="w-full lg:w-1/3 flex justify-center">
                    <a href="" target="_blank">
                        <img
                            src={`${BUCKET_URL}/4F1T-Logo.png`}
                            alt="4 Fingers 1 Thumb Logo"
                            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 max-w-full"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FourFingersOneThumb;
