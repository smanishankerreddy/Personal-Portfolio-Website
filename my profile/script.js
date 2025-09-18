const imageIndices = {};

    function nextImage(id, images) {
      if (!(id in imageIndices)) imageIndices[id] = 0;
      imageIndices[id] = (imageIndices[id] + 1) % images.length;
      document.getElementById(id).src = images[imageIndices[id]];
    }

     async function updateVisitorCount() {
      const res = await fetch('https://manisankarreddy.w3spaces.com/');
      const data = await res.json();
      document.getElementById('visitor-counter').innerText = "Visitors: " + data.value;
    }
    updateVisitorCount();
