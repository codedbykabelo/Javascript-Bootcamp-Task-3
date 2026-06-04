const form = document.getElementById("signupForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const terms = document.getElementById("terms");

    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("termsError").textContent = "";


    if(username.value.trim() === "") {
        document.getElementById("usernameError").textContent =
        "Username is required";
        valid = false;
    }

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)) {
        document.getElementById("emailError").textContent =
        "Invalid email";
        valid = false;
    }

        if(password.value.length < 8) {
        document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters";
        valid = false;
    }

    if(!terms.checked) {
        document.getElementById("termsError").textContent =
        "Accept terms first";
        valid = false;
    }

    if(valid){
        console.log("Signup Successful");
    }


});