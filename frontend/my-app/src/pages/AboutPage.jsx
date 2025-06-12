import { useState } from "react";
import Layout from "../components/Layout.jsx";

const AboutPage = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    return (
        <section>
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="w-full max-w-2xl aspect-video rounded-lg shadow-lg overflow-hidden relative">
                        {!iframeLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                                <img
                                    src="https://img.youtube.com/vi/vD4wkF1YQMo/maxresdefault.jpg"
                                    alt="Video thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <iframe
                            src="https://www.youtube.com/embed/vD4wkF1YQMo"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                            onLoad={() => setIframeLoaded(true)}
                        />
                    </div>
                </div>
            </Layout>
        </section>
    );
};

export default AboutPage;