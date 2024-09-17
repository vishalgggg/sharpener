// Select the basket heading by its id and set its color to brown
document.querySelector("#basket-heading").style.color = "brown";
// Select all li elements
let fruitItems = document.querySelectorAll(".fruits li");

// Loop through each li element
fruitItems.forEach((item, index) => {
  // Check if the index is even
  if (index % 2 === 1) { // Note: index is zero-based, so 1, 3, 5... are even items in human terms
    item.style.backgroundColor = "brown";
    item.style.color = "white";
  }
});
