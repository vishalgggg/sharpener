function handleFormSubmit(event) {
    event.preventDefault();

    const ChooseExpenseAmount = event.target.ChooseExpenseAmount.value;
    const Description = event.target.Description.value;
    const hobbies = event.target.hobbies.value;
    
    const user = { ChooseExpenseAmount, Description, hobbies };
  
    // Store user details with Description as the key
    
    localStorage.setItem(Description, JSON.stringify(user));
    const userList = document.querySelector('ul');
   
    const li = document.createElement('li');
    li.textContent = `ChooseExpenseAmount: ${user.ChooseExpenseAmount}, Description: ${user.Description}, hobbies: ${user.hobbies}`;
    const Button = document.createElement('button');
    // <button class="delete-btn"> Delete </button>`;
    Button.textContent = "Delete";
    Button.className = "delete-btn";
    const editbutton = document.createElement("button");
    editbutton.textContent = "Edit";
    editbutton.className = "edit-btn";
    li.appendChild(Button);
    li.appendChild(editbutton);
    userList.appendChild(li);
    // document.getElementsByTagName('form')
    // console.log(event.target);
    document.querySelector('form').reset();
    Button.onclick=()=>{
        localStorage.removeItem(user.Description);
        userList.removeChild(li);
    }
    editbutton.onclick=()=>{
        // event.target.ChooseExpenseAmount.value = user.ChooseExpenseAmount;
        // console.log(event.target.ChooseExpenseAmount);
        // event.target.Description.value = user.Description;
        // event.target.hobbies.value = user.hobbies;
        document.getElementById('ChooseExpenseAmount').value = user.ChooseExpenseAmount;
        document.getElementById('Description').value = user.Description;
        document.getElementById('hobbies').value = user.hobbies;
        localStorage.removeItem(user.Description);
        userList.removeChild(li);
    }
}