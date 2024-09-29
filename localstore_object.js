document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create an object to store the user details
    const userDetails = {
        username: username,
        email: email,
        phone: phone
    };

    // Store the object in local storage with the key "User Details"
    localStorage.setItem('User Details', JSON.stringify(userDetails));

    // Optionally, you can alert the user that their details have been saved
    alert('User details saved successfully!');
});
