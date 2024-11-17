import React, { useEffect, useState } from "react";

const FullPageNotification = ({ message, youtubeId, registerUrl, callToAction, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let player;

        if (youtubeId) {
            // Dynamically load the YouTube IFrame Player API
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                // Initialize YouTube player
                window.onYouTubeIframeAPIReady = () => {
                    player = new window.YT.Player("youtube-player", {
                        videoId: youtubeId,
                        events: {
                            onReady: (event) => {
                                // Automatically play the video when ready
                                event.target.playVideo();
                            },
                            onStateChange: (event) => {
                                // Auto-close modal when the video ends
                                if (event.data === window.YT.PlayerState.ENDED) {
                                    setVisible(false);
                                    if (onClose) onClose();
                                }
                            },
                        },
                    });
                };
            };
        }

        return () => {
            if (player && player.destroy) {
                player.destroy(); // Destroy YouTube player instance
            }
        };
    }, [youtubeId, onClose]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 text-center relative">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{message}</h2>

                {youtubeId ? (
                    <div className="w-full h-96 rounded-md overflow-hidden">
                        <iframe
                            id="youtube-player"
                            title="YouTube video"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                ) : (
                    <p>No video source provided.</p>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6">
                    {/* Close Button (Left) */}
                    <button
                        onClick={() => {
                            setVisible(false);
                            if (onClose) onClose();
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                    >
                        Close
                    </button>

                    {/* Register Button (Right) */}
                    {registerUrl && callToAction && (
                        <a
                            href={registerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                        >
                            {callToAction}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FullPageNotification;
