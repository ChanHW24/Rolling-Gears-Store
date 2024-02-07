
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
    if (loginBtn) {
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
            
            fetch("https://rollinggearstore-6adf.restdb.io/rest/login-signup", settings)
            .then(response => response.json())
            .then(response => {
                console.log('response');

                const matchingUser = response.find(user => user.email === contactEmail && user.password === contactText);

                if (matchingUser) {
                    console.log('Login successful');
                    // Display a successful message to the user
                    if (document.getElementById("contact-email").value == "ain@ain.com") {
                        window.location.href = "profile(ain).html";
                    } else {
                        window.location.href = "profile.html";
                    }
                } else {
                    console.log('Invalid email or password');
                    alert('Invalid Email or Password');
                    // Display an error message to the user
                }
            })
        })
    }

    // Fetching Information from RestDB to display in profile page
    if (window.location.href.includes("profile.html")) {
        let settings = {
            method: "GET", 
            headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
            },
        }
        
        fetch("https://rollinggearstore-6adf.restdb.io/rest/login-signup", settings)
        .then(response => response.json())
        .then(response => {
            console.log('response', response);
        }
    )};
    
    // Signup Button
    var signUpBtn = document.getElementById('signup-submit');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Button clicked!');

            // Retrieve form data
            let signupName = document.getElementById("signup-name").value;
            let signupEmail = document.getElementById("signup-email").value;
            let signupPassword = document.getElementById("signup-password").value;
            let signupNumber = document.getElementById("signup-number").value;

            // Prepare JSON data for the API call
            let jsondata = {
                "name": signupName,
                "email": signupEmail,
                "password": signupPassword,
                "number": signupNumber,
            };

            // Define settings for fetch call
            let settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(jsondata),
            };

            // Make the API call to signup
            fetch("https://rollinggearstore-6adf.restdb.io/rest/login-signup", settings)
                .then(response => {
                    if (!response.ok) throw new Error('Make sure all fields are filled out correctly. And leave no spacing for your contact number.');
                    return response.json();
                })
                .then(response => {
                    console.log('Signup successful', response);
                    alert('Thank you for signing up!');
                    window.location.href = "loginPage.html";
                })
                .catch(error => {
                    console.error('Signup error:', error);
                    alert('Signup error: ' + error.message);
                });
        });
    }

    // Newsletter Button
    var newsBtn = document.getElementById('newsletter-submit');
    if (newsBtn) {
        newsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('button clicked');

            let newsEmail = document.getElementById("newsletter-email").value;

            if (newsEmail.trim() === "") {
                alert("Please enter your email address.");
                return; // Stop further execution if email is empty
            }

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

            fetch("https://rollinggearstore-6adf.restdb.io/rest/news-letter", settings)
            .then(response => response.json())
            .then(response => {
                console.log('Sending...', response);
                alert("Thank you for signing up!")
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
})



// Product Page Img Effect
// only run when in product page
if (window.location.href.includes("productPage.html")) {
    var mainimg = document.getElementById('MainImg');
    var mainimg2 = document.getElementById('MainImg2');
    var mainimg3 = document.getElementById('MainImg3');
    var mainimg4 = document.getElementById('MainImg4');
    var mainimg5 = document.getElementById('MainImg5');
    var mainimg6 = document.getElementById('MainImg6');
    var smallimg = document.getElementsByClassName('small-img');

    // First Product (race)
    smallimg[0].onclick = function() {
        mainimg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function() {
        mainimg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function() {
        mainimg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function() {
        mainimg.src = smallimg[3].src;
    }

    // Second Product (tour)
    smallimg[4].onclick = function() {
        mainimg2.src = smallimg[4].src;
    }
    smallimg[5].onclick = function() {
        mainimg2.src = smallimg[5].src;
    }
    smallimg[6].onclick = function() {
        mainimg2.src = smallimg[6].src;
    }
    smallimg[7].onclick = function() {
        mainimg2.src = smallimg[7].src;
    }

    // Third Product (retro)
    smallimg[8].onclick = function() {
        mainimg3.src = smallimg[8].src;
    }
    smallimg[9].onclick = function() {
        mainimg3.src = smallimg[9].src;
    }
    smallimg[10].onclick = function() {
        mainimg3.src = smallimg[10].src;
    }
    smallimg[11].onclick = function() {
        mainimg3.src = smallimg[11].src;
    }

    // Fourth Product (glove)
    smallimg[12].onclick = function() {
        mainimg4.src = smallimg[12].src;
    }
    smallimg[13].onclick = function() {
        mainimg4.src = smallimg[13].src;
    }
    smallimg[14].onclick = function() {
        mainimg4.src = smallimg[14].src;
    }
    smallimg[15].onclick = function() {
        mainimg4.src = smallimg[15].src;
    }

    // Fifth Product (jacket)
    smallimg[16].onclick = function() {
        mainimg5.src = smallimg[16].src;
    }
    smallimg[17].onclick = function() {
        mainimg5.src = smallimg[17].src;
    }
    smallimg[18].onclick = function() {
        mainimg5.src = smallimg[18].src;
    }
    smallimg[19].onclick = function() {
        mainimg5.src = smallimg[19].src;
    }

    // Sixth Product (boots)
    smallimg[20].onclick = function() {
        mainimg6.src = smallimg[20].src;
    }
    smallimg[21].onclick = function() {
        mainimg6.src = smallimg[21].src;
    }
    smallimg[22].onclick = function() {
        mainimg6.src = smallimg[22].src;
    }
    smallimg[23].onclick = function() {
        mainimg6.src = smallimg[23].src;
    }
}



// Cart
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'SHOEI X-14',
        tag: 'race helm',
        price: '1000',
        inCart: 0
    },
    {
        name: 'SHOEI GT-Air II',
        tag: 'tour helm',
        price: '800',
        inCart: 0
    },
    {
        name: 'SHOEI J.O.',
        tag: 'retro helm',
        price: '450',
        inCart: 0
    },
    {
        name: 'Klim Baja S4',
        tag: 'glove',
        price: '167',
        inCart: 0
    },
    {
        name: 'Klim Badlands Pro',
        tag: 'jacket',
        price: '1500',
        inCart: 0
    },
    {
        name: 'AlpineStars Tech 7',
        tag: 'boot',
        price: '599',
        inCart: 0
    },
]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log('added to cart!');
        alert("Items added to cart!");
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
        document.querySelector('.cart2 span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if ( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
        document.querySelector('.cart2 span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
        document.querySelector('.cart2 span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost );
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");


    console.log(cartItems);
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
           productContainer.innerHTML += `
           <div class="product">

                <img src="./images/Helmets/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="chevron-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="chevron-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price}
            </div>
           `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}
                </h4>
            </div>
        `;

    }
}



// checkout button message
if (window.location.href.includes("cartPage.html")) {
    var checkOutBtn = document.getElementById('checkout-submit');
    if (checkOutBtn) {
        checkOutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Button clicked!');
            if (localStorage.length === 0) {
                alert("Cart is empty.");
            } else {
                alert("Check out successfully!!!");
            }
        });
    };
}



// clear local storage button
if (window.location.href.includes("cartPage.html")) {
    function clearLocalStorage() {
        localStorage.clear();
        location.reload();
        alert("Cart cleared successfully!");
    }
}



// random number function
if (window.location.href.includes("profile.html")) {
    function generateRandomNumber() {
        var minNumber = 100000; // The minimum number you want
        var maxNumber = 10000000000; // The maximum number you want
        var randomnumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; // Generates random number
        document.getElementById("random").innerHTML = randomnumber; // Displays the random number
    }

    generateRandomNumber();
}


// Profile dynamic information



// functions
onLoadCartNumbers();
displayCart();