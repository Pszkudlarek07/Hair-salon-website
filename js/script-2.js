// Select all the labels within the accordion
const labels = document.querySelectorAll(".accordion .label");

// Function to toggle the display of content
function toggleContent() {
  // First, hide all contents
  const allContents = document.querySelectorAll(".accordion .content");
  for (const content of allContents) {
    content.style.display = "none";
  }

  // Then, show the content associated with the clicked label
  const content = this.nextElementSibling;
  if (content.style.display === "none" || !content.style.display) {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Add click event listener to all labels
labels.forEach((label) => {
  label.addEventListener("click", toggleContent);
});
