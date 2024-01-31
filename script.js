
// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

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

        // Create AJAX setting
        let settings = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-apikey": APIKEY,
              "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata),
            beforeSend: function () {
              // Disable our button or show loading bar
              document.getElementById("contact-submit").disabled = true;
              // Clear our form using the form ID and triggering its reset feature
              document.getElementById("add-contact-form").reset();
            }
        }

        // Fetch data
        fetch("https://rollinggearstore-6adf.restdb.io/rest/login", settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("contact-submit").disabled = false;
            });

    });

    
});