const btn = document.querySelector(".item");

chrome.storage.sync.get(["enabled"], ({ enabled }) => {
    if (enabled == null) {
        chrome.storage.sync.set({
            enabled: true
        });
    }

    btn.innerHTML = enabled ? "enabled" : "disabled";

    btn.addEventListener("click", () => {
        chrome.storage.sync.set({
            enabled: !enabled
        }, () => {
            location.reload();
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.reload(tabs[0].id);
            });
        });
    });
});