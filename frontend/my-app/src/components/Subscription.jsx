import React, { useEffect } from 'react';

const Subscription = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://eocampaign1.com/form/c14e9000-3fe2-11f0-a5e2-932b51893c6d.js";
        script.async = true;
        script.setAttribute('data-form', 'c14e9000-3fe2-11f0-a5e2-932b51893c6d');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="flex flex-col justify-center bg-gray-50 mt-32">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-gray-600 mb-8">
                        Subscribe to receive notifications about new posts and updates.
                    </p>
                    {/* The form will be injected here by the script */}
                    <div id="emailoctopus-form-c14e9000-3fe2-11f0-a5e2-932b51893c6d" className="mx-auto w-full max-w-md"></div>
                </div>
            </div>
        </section>
    );
};

export default Subscription;