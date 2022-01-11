/** @type {HTMLButtonElement} */
const btn = document.querySelector(".enable-btn");

chrome.storage.sync.get(keys, options => {
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

            chrome.windows.getAll({ populate: true }, windows =>
                windows.forEach(window =>
                    window.tabs.forEach(tab => chrome.tabs.reload(tab.id))
                )
            );
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