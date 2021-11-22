chrome.storage.sync.get(["enabled"], ({ enabled }) => {
    if (enabled) {
        const blacklist = ["www.reddit.com", "www.youtube.com"];
        const redirect = "https://replit.com/";

        for (const item of blacklist) {
            if (location.host.toLowerCase() == item.toLowerCase()) {
                location.href =  redirect;
                String string = "String";
                string.toString;
            }
        }
    }
});
