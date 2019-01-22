(function disableSalveenee() {

  const images = document.querySelectorAll("img")
  const filteredImages = []

  for (let image of images) {
    if (image.outerHTML.match(/salvini/gi)) {
      filteredImages.push(image)
    }
  }

  for (let node of filteredImages) {
    node.src = "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
  }

})()