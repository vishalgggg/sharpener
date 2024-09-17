// Select the 5th li element (index 4 since it's zero-based)
document.getElementsByTagName("li")[4].style.color = "blue";
// Get all li elements
let listItems = document.getElementsByTagName("li");

// Loop through each li element and set its font style to italic
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontStyle = "italic";
}
