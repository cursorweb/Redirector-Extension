/**
 * @type {HTMLButtonElement}
 */
const btn = document.querySelector(".enable-btn");

chrome.storage.sync.get(["enabled"], ({ enabled }) => {
    if (enabled == null) {
        chrome.storage.sync.set({
            enabled: true
        });
    }

    updateBtn();

    btn.addEventListener("click", () => {
        enabled = !enabled;

        btn.disabled = true;

        chrome.storage.sync.set({ enabled }, () => {
            btn.disabled = false;
            updateBtn();

            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    });

    function updateBtn() {
        btn.innerHTML = `${enabled ? "Disable" : "Enable"} Redirector`;
        if (enabled) {
            btn.classList.add("red");
            btn.classList.remove("green");
        }
        else {
            btn.classList.add("green");
            btn.classList.remove("red");
        }
    }
});