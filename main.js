function disableSalveenee() {

  const regexp = new RegExp("salvini", "gi")

  const imgTag    = document.querySelectorAll("img")
  const sourceTag = document.querySelectorAll("source")
  const filteredImages = []

  for (let image of imgTag) {
    if (image.outerHTML.match(regexp) 
    || image.src.match(regexp)
    || image.alt.match(regexp)) {
      filteredImages.push(image)
    }
  }

  for (let image of sourceTag) {
    if (image.outerHTML.match(regexp)) {
      filteredImages.push(image)
    }
  }

  for (let node of filteredImages) {
    
    const newImage = (node) => `https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=${node.clientWidth || 400}&h=${node.clientHeight || 250}`

    if (node.src) {
      node.src = newImage(node)
    }
    
    if (node.srcset) {
      node.srcset = newImage(node)
    }

  }
}

document.addEventListener("load", disableSalveenee);
document.addEventListener("DOMNodeInserted", disableSalveenee);