  var toggleButton = document.getElementById("toggleButton");
  var contentDiv = document.getElementById("content");
  toggleButton.addEventListener("click", function() {
    if (contentDiv.style.display == "none") {
      contentDiv.style.display = "block";
      toggleButton.textContent = "Hide Content";
    } else {
      contentDiv.style.display = "none";
      toggleButton.textContent = "Show Content";
    }
  });