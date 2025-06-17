import { useEffect, useRef, useState } from "react";
import { video } from "../data/index";
import { getYouTubeVideoId } from "../utils/youtube";

const thumbnailQualities = [
    'maxresdefault.jpg',
    'hqdefault.jpg',
    'mqdefault.jpg',
    'default.jpg'
];

const TutorialsCard = ({ title, category, src }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbIndex, setThumbIndex] = useState(0);
    const iframeRef = useRef(null);
    
    const videoId = getYouTubeVideoId(src);

    // Debug log for src and videoId
    console.log('TutorialsCard src:', src, 'videoId:', videoId);

    const thumbnailUrl = videoId
        ? `https://img.youtube.com/vi/${videoId}/${thumbnailQualities[thumbIndex]}`
        : null;

    const handleClick = () => {
        setIsPlaying(true);
        setTimeout(() => {
            if (iframeRef.current) {
                iframeRef.current.requestFullscreen();
            }
        }, 100);
    };

    // Reset thumbnail index if videoId changes
    useEffect(() => {
        setThumbIndex(0);
    }, [videoId]);

    return (
        <div className="w-[400px] flex-shrink-0 p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative group cursor-pointer" style={{ height: 225 }}>
                    {src ? (
                        !isPlaying ? (
                            <>
                                {thumbnailUrl ? (
                                    <img
                                        src={thumbnailUrl}
                                        alt={title}
                                        className="absolute inset-0 w-full h-full object-cover z-10"
                                        onError={() => {
                                            if (thumbIndex < thumbnailQualities.length - 1) {
                                                setThumbIndex(thumbIndex + 1);
                                            }
                                        }}
                                        onClick={handleClick}
                                        style={{ cursor: 'pointer' }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 w-full h-full bg-black" />
                                )}
                                <div
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-0 pointer-events-none group-hover:pointer-events-auto"
                                    onClick={handleClick}
                                    style={{ cursor: "pointer" }}
                                >
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
                        )
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-500">Video coming soon</p>
                        </div>
                    )}
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
                <h3 className="text-xl font-light text-center">Data Structures</h3>
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