/**
 * Shows a modal with the animal's name and some description.
 * @param {string} name - The name of the animal.
 */
function showAnimalInfo(name) {
  const modal = document.getElementById("animalModal");
  const nameElement = document.getElementById("modalName");
  const infoElement = document.getElementById("modalInfo");

  // Set content dynamically
  nameElement.textContent = name;
  infoElement.textContent = `You clicked on the ${name.toLowerCase()}. Shown what is possible with more aveage knowlege ;-) !`;

  // Show modal
  modal.style.display = "flex";
}

/**
 * Hides the modal window.
 */
function closeModal() {
  document.getElementById("animalModal").style.display = "none";
}
/**
 * Filters animal cards based on the search input value.
 */
function filterAnimals() {
  const input = document.querySelector(".sidebar input").value.toLowerCase();
  const cards = document.querySelectorAll(".animal-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "" : "none";
  });
}
