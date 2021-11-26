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

const inputbl = document.querySelector(".blacklist-input");
const inputr = document.querySelector(".redirect-input");

const addBtnbl = document.querySelector(".add-btn-bl");
const addBtnr = document.querySelector(".add-btn-r");

const timeAmt = document.querySelector(".timer-time");

const saveBtns = document.querySelectorAll(".save");


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


saveBtns.forEach(el => el.addEventListener("click", () => {
    chrome.storage.sync.set({
        time: (Number(timeAmt) || 20) * 60 * 1000,
        blacklist: getInputsFor(".blacklisti"),
        redirects: getInputsFor(".redirecti")
    });
}));


addBtnbl.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = inputbl.value;
    input.classList.add("input", "blacklisti");
    input.placeholder = placeholderbl;
    inputbl.value = "";

    blacklists.appendChild(input);
});

addBtnr.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = inputr.value;
    input.classList.add("input", "redirecti");
    input.placeholder = placeholderr;
    inputr.value = "";

    redirects.appendChild(input);
});


function updateSettings() {
    chrome.storage.sync.get(keys, options => {
        blacklists.textContent = "";
        for (const site of options.blacklist) {
            const el = document.createElement("input");
            el.classList.add("input", "blacklisti");
            el.value = site;
            el.placeholder = placeholderbl;

            blacklists.appendChild(el);
        }

        redirects.textContent = "";
        for (const site of options.redirects) {
            const el = document.createElement("input");
            el.classList.add("input", "redirecti");
            el.value = site;
            el.placeholder = placeholderr;

            redirects.appendChild(el);
        }
    });
}

function getInputsFor(cls) {
    return [...document.querySelectorAll(`${cls}`)]
        .map(el => el.value.trim())
        .filter(e => e != "")
    ;
}

updateSettings();