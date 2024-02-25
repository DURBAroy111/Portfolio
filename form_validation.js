function submitForm() {
    // Validate the form
    if (validateForm()) {
        // Submit the form
        document.getElementById("myForm").submit();
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill out all fields.");
        return false;
    }
    return true;
}