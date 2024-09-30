
function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    const user = { username, email, phone };
  
    // Store user details with email as the key
    localStorage.setItem(email, JSON.stringify(user));
    let userList = document.getElementById('userList');
    if (!userList) {
      userList = document.createElement('ul');
      userList.id = 'userList';
      document.body.appendChild(userList);
    }
    const li = document.createElement('li');
    li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
    userList.appendChild(li);
    // displayUsers();
    document.querySelector('form').reset();
  }
  