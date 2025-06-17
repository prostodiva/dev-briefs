/**
 * Extracts the video ID from a YouTube URL
 * @param {string} url - YouTube URL
 * @returns {string|null} - YouTube video ID or null if invalid
 */
export const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // Handle different YouTube URL formats
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^#&?]*)/,
        /youtube\.com\/v\/([^#&?]*)/,
        /youtube\.com\/user\/[^#&?]*\/#p\/u\/\d+\/([^#&?]*)/
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }

    return null;
};

/**
 * Generates a YouTube thumbnail URL with fallback options
 * @param {string} videoId - YouTube video ID
 * @returns {string} - URL for the video's thumbnail
 */
export const getYouTubeThumbnail = (videoId) => {
    if (!videoId) return null;
    
    // Try different thumbnail qualities in order of preference
    const qualities = [
        'maxresdefault.jpg',  // Highest quality (not always available)
        'hqdefault.jpg',      // High quality
        'mqdefault.jpg',      // Medium quality
        'default.jpg'         // Default quality
    ];
    
    // Return the first available thumbnail URL
    return `https://img.youtube.com/vi/${videoId}/${qualities[0]}`;
};