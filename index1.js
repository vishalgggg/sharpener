// Select all elements with the class 'fruit'
const fruits = document.getElementsByClassName('fruit');

// Make all elements bold
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = 'bold';
}

// Make the 3rd element have a yellow background color
if (fruits.length >= 3) {
  fruits[2].style.backgroundColor = 'yellow';
}
