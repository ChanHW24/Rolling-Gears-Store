
// Preloader
var loader = document.getElementById("preloader");
setTimeout(function(){
    loader.style.display = "none";
}, 1300);

// API
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65b8e4bb3d3b7f9ac6c2656e";
  
    // Login Button
    var loginBtn = document.getElementById('contact-submit');
    loginBtn.addEventListener('click', function (e) {
        // Code to be executed when the button is clicked
        e.preventDefault();
        console.log('Button clicked!');

        //Retrieve form data
        let contactEmail = document.getElementById("contact-email").value;
        let contactText = document.getElementById("contact-text").value;

        //Get form value
        let jsondata = {
            "email": contactEmail,
            "text": contactText,
        };

        let settings = {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              "x-apikey": APIKEY,
              "Cache-Control": "no-cache"
            },
        }

        fetch("https://rollinggearstore-6adf.restdb.io/rest/login", settings)
        .then(response => response.json())
        .then(response => {
            console.log('response');

            const matchingUser = response.find(user => user.email === contactEmail && user.password === contactText);

            if (matchingUser) {
                console.log('Login successful');
                // Display a successful message to the user
                window.location.href = "profile.html";
            } else {
                console.log('Invalid email or password');
                // Display an error message to the user
            }
        })
    });
})