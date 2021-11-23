/** @type {HTMLButtonElement} */
const btn = document.querySelector(".enable-btn");

chrome.storage.sync.clear();

chrome.storage.sync.get(["enabled", "blacklist", "redirects", "time"], options => {
    let opts = options;

    if (!Object.keys(opts).length) {
        chrome.storage.sync.set(defaultOptions);

        opts = defaultOptions;
    }

    let { enabled } = opts;

    updateBtn();

    btn.addEventListener("click", () => {
        options.enabled = enabled = (enabled + 1) % 3;

        btn.disabled = true;

        chrome.storage.sync.set(opts, () => {
            btn.disabled = false;
            updateBtn();

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    });

    function updateBtn() {
        btn.innerHTML = `Redirector ${["Disabled", "Enabled", "on Timer"][enabled]}`;
        if (enabled == 0) {
            btn.classList.add("red");
            btn.classList.remove("green");
        }
        else {
            btn.classList.add("green");
            btn.classList.remove("red");
        }
    }
});