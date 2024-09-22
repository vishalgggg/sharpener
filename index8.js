

const input = document.createElement('input');
input.id = 'description'
const fruitToAdd = document.getElementById('fruit-to-add');
fruitToAdd.insertAdjacentElement('afterend',input);
const Form = document.querySelector('form');
const Fruits = document.querySelector('.fruits')
Form.addEventListener('submit',function(event){
    event.preventDefault();
    const newli = document.createElement('li');
    const fruitToAdd =  document.getElementById('fruit-to-add');
    // const editButton = document.createElement('button');
    // editButton.textContent = 'Edit';
    // editButton.className = 'edit-btn';
    const description = document.getElementById('description');
    // const para = document.createElement('p');
    // para.ap = 
    newli.innerHTML = fruitToAdd.value +'<p class = "para">'+ "<i>"+description.value + "</i>" + '</p>'+ '<button class="delete-btn">x</button>'  ;
    // newli.firstElementChild.id = 'para';
    // document.getElementById("para").style.fontStyle = "italic";
    newli.className = 'fruit';
   
    Fruits.appendChild(newli);
});

const filter = document.getElementById('filter');
// console.log(filter);
filter.addEventListener('keyup',function(e){
const text = e.target.value.toLowerCase();
// console.log(text);
const fruit = document.getElementsByClassName('fruit');
// console.log(fruit);

for(let i = 0; i < fruit.length; i++ )
{   
    const currentText = fruit[i].firstChild.textContent.toLowerCase(); 
    
    // console.log(currentText);
    const currentDesc = fruit[i].firstElementChild.firstElementChild.textContent.toLowerCase();
    // console.log(currentDesc);
    // console.log(text);
    // const parentElement = document.querySelectorAll('.fruit');
    // console.log(parentElement[i].children[0].children[0].textContent); // Index is zero-based

    if(currentText.indexOf(text) === -1 && currentDesc.indexOf(text) === -1){
        
        fruit[i].style.display = "none";
    }
    else{
        fruit[i].style.display = "flex";
    }
}
});