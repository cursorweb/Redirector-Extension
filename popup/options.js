const blacklists = document.querySelector(".blacklists");
const redirects = document.querySelector(".redirects");

chrome.storage.sync.get(keys, options => {
    blacklists.textContent = "";
    for (const site of options.blacklist) {
        const el = document.createElement("input");
        el.classList.add("input", "blacklist");
        el.value = site;
        el.placeholder = "Domain only, e.g. 'www.youtube.com'.";

        blacklists.appendChild(el);
    }

    redirects.textContent = "";
    for (const site of options.redirects) {
        const el = document.createElement("input");
        el.classList.add("input", "redirects");
        el.value = site;
        el.placeholder = "Enter a url...";

        redirects.appendChild(el);
    }
});
