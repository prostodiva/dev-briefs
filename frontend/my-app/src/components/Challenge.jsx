import React, { useEffect, useState } from 'react';
import { challengeData } from '../data/index';
import EnlargedImage from "./EnlargedImage.jsx";

const PostCard = ({ day, content, timestamp, image}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-blue-600">Day {day}</h3>
                <span className="text-gray-500 text-sm">{timestamp}</span>
            </div>
            <p className="text-gray-700 mb-4">{content}</p>
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
        <section className="max-w-4xl mx-auto p-6 mt-32">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center mb-4">#100DaysOfCode Challenge</h1>
                <p className="text-gray-600 text-center mb-6">Tracking my coding journey one day at a time</p>

                <div className="text-center mb-8 space-y-2">
                    <p className="text-lg font-semibold text-blue-600">
                        Progress: {challengeData.length} / 100 days
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                        <p>Local Time: {currentTime.local}</p>
                        <p>PST Time: {currentTime.pst}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
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
    );
};

export default Challenge;