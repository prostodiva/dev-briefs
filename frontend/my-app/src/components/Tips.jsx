import { tips } from '../data/index';

const TipCard = ({ title, url }) => {
    return (
        <div className="p-4 m-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
            <div className="tips container mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tips.map((tip, index) => (
                        <TipCard key={index} url={tip.url} title={tip.title} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Tips