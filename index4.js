const subHeading = document.createElement('h3');
subHeading.textContent =  "Buy high quality organic fruits online";
subHeading.style.font = 'italic'
const Header = document.getElementById('header');
Header.appendChild(subHeading);

const ptag = document.createElement('p');
ptag.textContent =  "Total fruits: 4";
// console.log(ptag);
// console.log("vu")
const fruitsitem = document.querySelector(".fruits");
const divs = document.getElementsByTagName("div");
const second_div = divs[1];
second_div.insertBefore(ptag,fruitsitem);
ptag.id = "fruits-total";
