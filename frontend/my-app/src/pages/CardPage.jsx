import BackendCard from "../components/BackendCard.jsx";
import DataStrCard from "../components/DataStrCard.jsx";
import Navbar from "../components/Navbar.jsx";

const CardPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-32">
                    <div className="bg-white rounded-lg shadow-lg">
                        <BackendCard />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <DataStrCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;