import MainButton from "./common/MainButton";

const Hero = ({toggleModal}) => {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-16 lg:overflow-visible lg:px-0 lg:max-h-screen">
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
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0"></path>
                    </svg>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"></rect>
                </svg>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600"></p>
                            <a href="" target="_blank">
                                <h1 className="uppercase px-4 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Four Fingers One Thumb
                                </h1>
                            </a>
                            <p className="my-8 italic text-xl font-semibold text-gray-800 border-l-4 border-red-700 pl-4">
                                "What defines you as a person are your actions and not your words."
                                <span className="block mt-2 text-right text-base font-normal text-gray-600">
                                    - Dwain Chambers
                                </span>
                            </p>
                            <p className="p-4">
                                In a world where winning is all that counts, it’s easy for anyone to be under pressure to excel...
                            </p>
                            <p className="p-4">
                                Dwain Chambers – top performing British Sprinter and multiple World Record Holder – knows all about the pressure to perform...
                            </p>
                            <p className="p-4">
                                His keynote presentation ‘Four Fingers, One Thumb’ will empower audiences to own their own decisions and face disappointments with a positive attitude...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <a href="" target="_blank">
                        <img 
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" 
                            src="https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/talks-image3.webp" 
                            alt=""
                        />
                    </a>
                </div>

                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="p-4 max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <MainButton link="#" title="Book Dwain for your Event" toggleModal={toggleModal} />
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 hidden"></h2>
                            <p className="mt-6 hidden"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
