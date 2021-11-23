const defaultOptions = {
    /**
     * Enabled
     * 0:off 1:redirect 2:timer
     * @type {0|1|2}
     */
    enabled: 1,
    blacklist: ["www.youtube.com", "www.reddit.com", "discord.com", "www.instagram.com", "www.spotify.com", "www.facebook.com", "twitter.com"],
    redirects: ["classroom.google.com", "www.desmos.com", "trello.com", "keep.google.com"],
    time: 20 * 60 * 1000 // 20 minutes
};

const keys = Object.keys(defaultOptions);
