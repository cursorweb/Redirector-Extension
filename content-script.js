chrome.storage.sync.get(keys, options => {
    let enabled = options.enabled;

    // check if database is empty
    if (!Object.keys(options).length) {
        enabled = defaultOptions.enabled;
        chrome.storage.sync.set(defaultOptions);
    }

    if (enabled == 1) {
        const blacklist = options.blacklist;
        const redirect = options.redirects[Math.floor(Math.random() * options.redirects.length)];

        for (const item of blacklist) {
            if (location.host.toLowerCase() == item.toLowerCase()) {
                location.href = redirect;
            }
        }
    }
});