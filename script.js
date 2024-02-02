
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

            })

    });

    /*
    function getContacts(limit = 10, all = true) {

        // Create AJAX setting
        let settings = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
        }

        // Make our AJAX calls
        fetch("https://rollinggearstore-6adf.restdb.io/rest/login", settings)
            .then(response => response.json())
            .then(response => {
                let content = "";

                for (var i = 0; i < response.length && i < limit; i++) {
                    content = `${content}<tr id='${response[i]._id}'>
                        <td>${response[i].email}</td>
                        <td>${response[i].text}</td>
                        <td>
                            <a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-studentid='${response[i].Student_ID}' data-name='${response[i].Name}' data-email='${response[i].Student_Email}' data-studentclass='${response[i].Student_Class}' data-studentcourse='${response[i].Student_Course}' data-studentmentor='${response[i].Student_Mentor}'>Update</a>
                            <a href='#' class='delete' data-id='${response[i]._id}'>Delete</a>
                        </td>`;
                }

                // Update HTML content
                document.getElementById("contact-list").getElementsByTagName("tbody")[0].innerHTML = content;
                document.getElementById("total-contacts").innerHTML = response.length;
            });

    }
    */

});