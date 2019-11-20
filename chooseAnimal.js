const radio_sardine = document.getElementById("salveeny_blocker-radio-sardine");
const radio_gatti = document.getElementById("salveeny_blocker-radio-gatti");

chrome.storage.sync.get("salvini_blocker_animal", data => {
  return data.salvini_blocker_animal === "sardine"
    ? (radio_sardine.checked = true)
    : (radio_gatti.checked = true);
});

radio_sardine.addEventListener("click", () => {
  chrome.storage.sync.set({ salvini_blocker_animal: "sardine" }, () => {
    console.log(`Set "sardine" as animal`);
  });

  radio_sardine.checked = true;
});

radio_gatti.addEventListener("click", () => {
  chrome.storage.sync.set({ salvini_blocker_animal: "gatti" }, () => {
    console.log(`Set "gatti" as animal`);
  });

  radio_gatti.checked = true;
});
