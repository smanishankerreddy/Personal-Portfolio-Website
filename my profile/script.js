const imageIndices = {};

    function nextImage(id, images) {
      if (!(id in imageIndices)) imageIndices[id] = 0;
      imageIndices[id] = (imageIndices[id] + 1) % images.length;
      document.getElementById(id).src = images[imageIndices[id]];
    }