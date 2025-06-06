import React, { useEffect, useState } from 'react';
import { challengeData } from '../data/index';
import EnlargedImage from "./EnlargedImage.jsx";

const PostCard = ({ day, content, timestamp, image }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 border border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h3 className="text-xl font-bold text-blue-600">Day {day}</h3>
                <span className="text-gray-500 text-sm">{timestamp}</span>
            </div>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">{content}</p>
            {image && (
                <div className="mt-4 flex justify-center">
                    <EnlargedImage
                        src={image}
                        alt={`Day ${day} challenge`}
                        className="rounded-lg shadow-md max-w-[300px] w-full h-auto"
                    />
                </div>
            )}
        </div>
    );
};

const Challenge = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const pstTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));

            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZoneName: 'short'
            };

            // Update current time
            setCurrentTime({
                local: now.toLocaleString('en-US', options),
                pst: pstTime.toLocaleString('en-US', options)
            });

        };

        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="max-w-4xl mx-auto px-4 py-6 sm:p-6 mt-20 sm:mt-32 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">#100DaysOfCode Challenge</h1>
                    <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">Tracking my coding journey one day at a time</p>

                    <div className="text-center mb-8 space-y-2">
                        <p className="text-base sm:text-lg font-semibold text-blue-600">
                            Progress: {challengeData.length} / 100 days
                        </p>
                        <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                            <p>Local Time: {currentTime.local}</p>
                            <p>PST Time: {currentTime.pst}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 pb-8">
                    {challengeData.map((post, index) => (
                        <PostCard
                            key={index}
                            day={post.day}
                            content={post.content}
                            timestamp={post.timestamp}
                            image={post.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Challenge;