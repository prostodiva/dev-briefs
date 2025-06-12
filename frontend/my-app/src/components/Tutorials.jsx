import { useEffect, useRef, useState } from "react";
import { video } from "../data/index";
import { getYouTubeThumbnail, getYouTubeVideoId } from "../utils/youtube";

const TutorialsCard = ({ title, category, src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef(null);
    
    const videoId = getYouTubeVideoId(src);
    const thumbnailUrl = getYouTubeThumbnail(videoId);

    const handleClick = () => {
        setIsPlaying(true);
        // Add a small delay to ensure the iframe is mounted
        setTimeout(() => {
            if (iframeRef.current) {
                iframeRef.current.requestFullscreen();
            }
        }, 100);
    };

    return (
        <div className="w-[400px] flex-shrink-0 p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="aspect-video relative group cursor-pointer">
                    {src ? (
                        <div 
                            onClick={handleClick}
                            className="block w-full h-full"
                        >
                            {!isPlaying ? (
                                <>
                                    <img
                                        src={thumbnailUrl}
                                        alt={title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-10 flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Click to watch
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <iframe
                                    ref={iframeRef}
                                    src={`${src}?autoplay=1&fs=1&rel=0&modestbranding=1`}
                                    title={title}
                                    className="w-full h-full absolute inset-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                    allowFullScreen
                                    scrolling="no"
                                />
                            )}
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-500">Video coming soon</p>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
                    <p className="text-gray-600">{category}</p>
                </div>
            </div>
        </div>
    );
};

const Tutorials = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const handleWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            }
        };

        scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
        return () => scrollContainer.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 mt-16">Video Tutorials</h2>
                
                <div 
                    ref={scrollContainerRef}
                    className="overflow-x-auto pb-4 scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    <div className="flex gap-6 px-4">
                        {video.map((video) => (
                            <TutorialsCard key={video.id} {...video} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutorials;