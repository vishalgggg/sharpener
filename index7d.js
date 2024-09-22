const listItems = document.querySelectorAll('.fruit');

        // Loop through each li element
listItems.forEach(li => {
    // Create the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';

    // Append the edit button after the delete button
    li.appendChild(editButton);
});
// const listItems = document.querySelectorAll('.fruit');

// // Loop through each li element
// listItems.forEach(li => {
//     // Create the edit button
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.className = 'edit-btn';

//     // Find the delete button
//     const deleteButton = li.querySelector('.delete-btn');

//     // Insert the edit button after the delete button
//     deleteButton.insertAdjacentElement('afterend', editButton);
// });
const Form = document.querySelector('form');
const Fruits = document.querySelector('.fruits')
Form.addEventListener('submit',function(event){
    event.preventDefault();
    const newli = document.createElement('li');
    const fruitToAdd =  document.getElementById('fruit-to-add');
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    newli.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class = "edit-btn">Edit</button>' ;
    Fruits.appendChild(newli);
});
Fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruit_to_delete = event.target.parentElement;
        Fruits.removeChild(fruit_to_delete);
    }
});
// why this is not working?
// const deleteBtn = document.querySelector('.delete-btn');
// deleteBtn.addEventListener('click',function(event){
    
//         const fruit_to_delete = event.target.parentElement;
//         Fruits.removeChild(fruit_to_delete);
    
// });