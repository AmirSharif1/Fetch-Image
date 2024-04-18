document.addEventListener("DOMContentLoaded", () => {
    const loadImageButton = document.getElementById("loadImageButton");
    const imageContainer = document.getElementById("imageContainer");
    const loadingText = document.getElementById("loadingText");
    const errorText = document.getElementById("errorText");
  
    loadImageButton.addEventListener("click", async () => {
      loadingText.classList.remove("hidden");
      errorText.classList.add("hidden");
      imageContainer.innerHTML = "";
  
      try {
        const imageUrl = "https://source.unsplash.com/random";
        const response = await fetch(imageUrl);
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to load image');
        }
        const image = response.url;
        const img = document.createElement("img");
        img.src = image;
        imageContainer.appendChild(img);
        loadingText.classList.add("hidden");
      } catch (error) {
        console.error(error);
        loadingText.classList.add("hidden");
        errorText.classList.remove("hidden");
        console.log("Somthing went wrong")
      }
    });
  });
  