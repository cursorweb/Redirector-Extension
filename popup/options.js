// window.onload = () => {
//     const blacklists = document.querySelector(".blacklists");
//     const redirects = document.querySelector(".redirects");

//     chrome.storage.sync.get(["options"], ({ options }) => {
//         for (const site of options.blackList) {
//             blacklists.innerHTML += site + "<br>";
//         }

//         for (const site of options.redirects) {
//             redirects.innerHTML += site + "<br>";
//         }
//     });
// };