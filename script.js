
// Preloader Lottie animation
var loader = document.getElementById("preloader");
setTimeout(function(){
    loader.style.display = "none";
}, 1250);



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
                // Open the intended file if credentials are right
            } else {
                console.log('Invalid email or password');
                // Display an error message to the user
            }
        })
    });

    // Newsletter Button
    var signUpBtn = document.getElementById('newsletter-submit');
    signUpBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('button clicked');

        let newsEmail = document.getElementById("newsletter-email").value;

        let jsondata = {
            "email": newsEmail,
        };

        let settings = {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              "x-apikey": APIKEY,
              "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
        };

        fetch("https://rollinggearstore-6adf.restdb.io/rest/newsletter", settings)
        .then(response => response.json())
        .then(response => {
            console.log('Sending...', response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
})



// Product Page Img Effect
var mainimg = document.getElementById('MainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}