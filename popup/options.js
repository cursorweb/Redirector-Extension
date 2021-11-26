// placeholderblacklist
const placeholderbl = document.querySelector(".blacklist-input").placeholder;
// placeholderredirect
const placeholderr = document.querySelector(".redirect-input").placeholder;

const timertime = document.querySelector(".timer-time");

const blacklists = document.querySelector(".blacklists");
const redirects = document.querySelector(".redirects");

const clearBtn = document.querySelector(".clear");
const clearblBtn = document.querySelector(".clear-blacklist");
const clearrBtn = document.querySelector(".clear-redirects");


clearBtn.addEventListener("click", () => {
    if (!confirm("This will reset all settings. Are you sure?")) return;
    chrome.storage.sync.set(defaultOptions);
    updateSettings();
});

clearblBtn.addEventListener("click", () => {
    if (!confirm("This will reset your blacklist. Are you sure?")) return;
    chrome.storage.sync.set({
        blacklist: defaultOptions.blacklist
    });
    updateSettings();
});

clearrBtn.addEventListener("click", () => {
    if (!confirm("This will reset your redirects. Are you sure?")) return;
    chrome.storage.sync.set({
        redirects: defaultOptions.redirects
    });
    updateSettings();
});


function updateSettings() {
    chrome.storage.sync.get(keys, options => {
        blacklists.textContent = "";
        for (const site of options.blacklist) {
            const el = document.createElement("input");
            el.classList.add("input", "blacklist");
            el.value = site;
            el.placeholder = placeholderbl;

            blacklists.appendChild(el);
        }

        redirects.textContent = "";
        for (const site of options.redirects) {
            const el = document.createElement("input");
            el.classList.add("input", "redirects");
            el.value = site;
            el.placeholder = placeholderr;

            redirects.appendChild(el);
        }
    });
}

updateSettings();