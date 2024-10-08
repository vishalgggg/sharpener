
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
    // document.getElementsByTagName('form')
    // console.log(event.target);
    document.querySelector('form').reset();
    Button.onclick=()=>{
        localStorage.removeItem(user.email);
        userList.removeChild(li);
    }
    editbutton.onclick=()=>{
        event.target.username.value = user.username;
        // console.log(event.target.username);
        event.target.email.value = user.email;
        event.target.phone.value = user.phone;
        localStorage.removeItem(user.email);
        userList.removeChild(li);
    }
}
module.exports = handleFormSubmit;
    // userList.addEventListener('click',function(event){
    //     if(event.target.classList.contains('delete-btn')){
    //         const li = event.target.parentElement;
           
    //         localStorage.removeItem(user.email);
    //         userList.removeChild(li);
    //     }
    //     if(event.target.classList.contains('edit-btn')){
    //         const li1 = event.target.parentElement;
    //         // event.target.username.value = user.username;
    //         // event.target.email.value = user.email;
    //         // event.target.phone.value = user.phone;
    //         // const userList = document.querySelector('ul');
    //         console.log(li1);
    //         const input1 = document.getElementById("username");
    //         const input2 = document.getElementById("email");
    //         const input3 = document.getElementById("phone");
    //         console.log(input1);
    //         input1.value = user.username;
    //         input2.value = user.email;
    //         input3.value = user.phone;

  
    //         localStorage.removeItem(user.email);
 
   
    //     }
    // } );
