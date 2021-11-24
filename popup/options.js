// placeholderblacklist
const placeholderbl = document.querySelector(".blacklist-input").placeholder;
// placeholderredirect
const placeholderr = document.querySelector(".redirect-input").placeholder;

const timertime = document.querySelector(".timer-time");

const blacklists = document.querySelector(".blacklists");
const redirects = document.querySelector(".redirects");

const clearBtn = document.querySelector(".clear");


clearBtn.addEventListener("click", () => {
    if (!confirm("This will reset all settings. Are you sure?")) return;
    chrome.storage.sync.set(defaultOptions);
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