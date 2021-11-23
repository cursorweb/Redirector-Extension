chrome.storage.sync.get(["enabled", "blacklist", "redirects", "time"], options => {
    let enabled = options.enabled;

    // check if database is empty
    if (!Object.keys(options).length) {
        enabled = defaultOptions.enabled;
        chrome.storage.sync.set(defaultOptions);
    }

    if (enabled) {
        const blacklist = ["www.reddit.com", "www.youtube.com", "discord.com"];
        const redirect = "https://classroom.google.com/";

        for (const item of blacklist) {
            if (location.host.toLowerCase() == item.toLowerCase()) {
                location.href = redirect;
            }
        }
    }
});