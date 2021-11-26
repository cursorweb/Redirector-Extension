chrome.storage.sync.get(keys, options => {
    let enabled = options.enabled;

    // check if database is empty
    if (!Object.keys(options).length) {
        enabled = defaultOptions.enabled;
        chrome.storage.sync.set(defaultOptions);
    }

    if (enabled == 1) {
        redirect();
    } else if (enabled == 2) {
        setTimeout(redirect, options.time * 60 * 1e3);
    }

    function redirect() {
        const redirects = options.redirects;

        const blacklist = options.blacklist;
        const redirect = redirects[Math.floor(Math.random() * redirects.length)];

        for (const item of blacklist) {
            if (location.host.toLowerCase() == item.toLowerCase()) {
                location.href = redirect;
            }
        }
    }
});