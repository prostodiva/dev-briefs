import BackendCard from "../components/BackendCard.jsx";
import DataStrCard from "../components/DataStrCard.jsx";
import Layout from "../components/Layout.jsx";
import FullStackCard from "../components/FullStackCard.jsx";
import BasicQuestCard from "../components/BasicQuestCard.jsx";

const CardPage = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-32">
                        <div className="bg-white rounded-lg shadow-lg">
                            <BackendCard />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <DataStrCard />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <FullStackCard />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            <BasicQuestCard />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CardPage;