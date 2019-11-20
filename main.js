function getSavedAnimal() {
  return new Promise(resolve => {
    return chrome.storage.sync.get("salvini_blocker_animal", data => {
      return data.salvini_blocker_animal
        ? resolve(data.salvini_blocker_animal)
        : resolve("sardine");
    });
  });
}

async function disableSalveenee() {
  const animal = await getSavedAnimal();

  const regexp = new RegExp("salvini", "gi");

  const imgTag = document.querySelectorAll("img");
  const sourceTag = document.querySelectorAll("source");
  const filteredImages = [];

  for (let image of imgTag) {
    if (
      image.outerHTML.match(regexp) ||
      image.baseURI.match(regexp) ||
      image.src.match(regexp) ||
      image.alt.match(regexp)
    ) {
      filteredImages.push(image);
    }
  }

  for (let image of sourceTag) {
    if (image.outerHTML.match(regexp)) {
      filteredImages.push(image);
    }
  }

  for (let node of filteredImages) {
    const newImage = node =>
      animal === "sardine"
        ? `https://us-central1-sardine-as-a-service.cloudfunctions.net/api`
        : `https://cataas.com/cat?width=${node.clientWidth ||
            400}&height=${node.clientHeight || 250}`;

    if (node.src) {
      node.src = newImage(node);
    }

    if (node.srcset) {
      node.srcset = newImage(node);
    }
  }
}

document.addEventListener("load", disableSalveenee);
document.addEventListener("DOMNodeInserted", disableSalveenee);
