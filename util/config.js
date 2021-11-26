const defaultOptions = {
    /**
     * Enabled
     * 0:off 1:redirect 2:timer
     * @type {0|1|2}
     */
    enabled: 1,
    blacklist: ["www.youtube.com", "www.reddit.com", "discord.com", "www.instagram.com", "www.spotify.com", "www.facebook.com", "twitter.com"],
    redirects: ["https://classroom.google.com", "https://www.desmos.com", "https://trello.com", "https://keep.google.com"],
    time: 20
};

const keys = Object.keys(defaultOptions);
