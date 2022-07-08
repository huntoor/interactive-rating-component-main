const ratingCard = document.querySelector(".rating-card");
const successCard = document.querySelector(".success-card");
const submitBtn = document.querySelector(".submit button");
const ratingBtns = document.querySelectorAll("li");
const error = document.querySelector(".error");
const selectedRating = document.querySelector(".selected-rating");
let rating = 0;

ratingBtns.forEach(ratingBtn => {
  ratingBtn.addEventListener("click", () => {
    error.classList.add("hidden");
    removeActive();
    ratingBtn.classList.add("active");
    rating = Number(ratingBtn.textContent);
  })
})

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
  if (!rating) return error.classList.remove("hidden");

  selectedRating.innerHTML = `You selected ${rating} out of 5`;
  ratingCard.classList.add("hidden");
  successCard.classList.remove("hidden");
}

function removeActive() {
  for (const ratingBtn of ratingBtns) {
    ratingBtn.classList.remove("active");
  }
}
