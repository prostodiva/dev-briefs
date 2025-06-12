import { tips } from '../data/index';

const TipCard = ({ title, url }) => {
    return (
        <div className="p-4 m-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow h-40 flex flex-col items-center justify-center  hover:shadow-blue-900  hover:-translate-y-2 duration-300">
            <h1 className="text-xl font-bold mb-2">{title || 'Quick Tip'}</h1>
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
                View Tip
            </a>
        </div>
    );
};

const Tips = () => {
    return (
        <section id="tips" className="py-8">
            <h2 className="text-black text-4xl font-bold mb-8 text-center mt-20">Quick Tips</h2>
            <div className="tips container mx-auto px-4 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                    {tips.map((tip, index) => (
                        <TipCard key={index} url={tip.url} title={tip.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Tips