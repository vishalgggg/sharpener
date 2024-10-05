
function handleFormSubmit(event) {
    event.preventDefault();
  
    // const username = document.getElementById('username').value;
    // const email = document.getElementById('email').value;
    // const phone = document.getElementById('phone').value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    
    const user = { username, email, phone };
  
    // Store user details with email as the key
    localStorage.setItem(email, JSON.stringify(user));
    const userList = document.querySelector('ul');
    // userList.innerHTML = `<li> Username: ${username} Email: ${email} Phone:${phone}
    // <button class="delete-btn"> Delete </button>
    // </li>`;
    const li = document.createElement('li');
    li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
    const Button = document.createElement('button');
    // <button class="delete-btn"> Delete </button>`;
    Button.textContent = "Delete";
    Button.className = "delete-btn";
    li.appendChild(Button);
    userList.appendChild(li);
    userList.addEventListener('click',function(event){
        if(event.target.classList.contains('delete-btn')){
            const li = event.target.parentElement;
            // console.log(li);
            // const email = li.textContent.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
            // if(email){
            //     localStorage.removeItem(email[0]);
            // }
            localStorage.removeItem(user.email);
            userList.removeChild(li);
        }
    });
    // document.querySelectorAll('.delete-btn').forEach(button => {
    //     button.addEventListener('click', function() {
    //         const li = this.closest('li');
    //         const email = li.textContent.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    //         if(email){
    //             localStorage.removeItem(email[0]);
    //         }
    //         li.parentNode.removeChild(li);
    //     });
    // });

    

}