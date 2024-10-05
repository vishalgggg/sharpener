
function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    
    const user = { username, email, phone };
  
    // Store user details with email as the key
    localStorage.setItem(email, JSON.stringify(user));
    const userList = document.querySelector('ul');
   
    const li = document.createElement('li');
    li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
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
    userList.addEventListener('click',function(event){
        if(event.target.classList.contains('delete-btn')){
            const li = event.target.parentElement;
           
            localStorage.removeItem(user.email);
            userList.removeChild(li);
        }
        if(event.target.classList.contains('edit-btn')){
            const li1 = event.target.parentElement;
            // event.target.username.value = user.username;
            // event.target.email.value = user.email;
            // event.target.phone.value = user.phone;
            // const userList = document.querySelector('ul');
            const input = document.querySelectorAll("input");
            input[0].value = user.username;
            input[1].value = user.email;
            input[2].value = user.phone;
    // const li = document.createElement('li');
    // li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
    // const Button = document.createElement('button');
    // // <button class="delete-btn"> Delete </button>`;
    // Button.textContent = "Delete";
    // Button.className = "delete-btn";
    // const editbutton = document.createElement("button");
    // editbutton.textContent = "Edit";
    // editbutton.className = "edit-btn";
    // li.appendChild(Button);
    // li.appendChild(editbutton);
    // userList.appendChild(li);
    localStorage.removeItem(user.email);
    userList.removeChild(li1);
    const form = document.querySelector('form');
    form.addEventListener('click',function(event){
        const username = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        
        const user = { username, email, phone };
      
        // Store user details with email as the key
        localStorage.setItem(email, JSON.stringify(user));
        const userList = document.querySelector('ul');
       
        const li = document.createElement('li');
        li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
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
    });
        }
    } );
   
    

}