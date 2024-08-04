// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
  // Load external HTML content into the page
  loadContent("legend.html", "legend");
  loadContent("periodic-table.html", "periodic-table");

  // Attach event listeners for elements after content is loaded
  attachElementListeners();
});

// Function to load and inject content from external HTML files
function loadContent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      // Reattach event listeners after content is loaded
      attachElementListeners();
    })
    .catch((error) => console.error("Error loading content:", error));
}

// Function to toggle between light and dark themes
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Function to navigate to a different page
function loadPage(page) {
  window.location.href = page;
}

// Function to attach event listeners to elements and modals
function attachElementListeners() {
  const elements = document.querySelectorAll(".element");
  const modal = document.getElementById("element-modal");
  const modalClose = document.querySelector(".close");
  const elementName = document.getElementById("element-name");
  const elementSymbol = document.getElementById("element-symbol");
  const elementNumber = document.getElementById("element-number");
  const elementDescription = document.getElementById("element-description");

  // Attach click event listeners to each element
  elements.forEach((element) => {
    element.addEventListener("click", function () {
      elementName.textContent = this.dataset.name;
      elementSymbol.textContent = this.dataset.symbol;
      elementNumber.textContent = this.dataset.atomicNumber;
      elementDescription.textContent = this.dataset.description;
      modal.style.display = "block";
    });
  });

  // Attach click event listener to close button
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal if clicking outside of modal content
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
