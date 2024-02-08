# Rolling-Gears-Store

Online store for motorcycle apparels and helmets.

We wanted to create a website that predominantly sells motorcycle helmet/ apparels, have a attractive reward system that draw consumer back, and having a immersive interactive touch to uplift the overall experience for anyone visiting the site.

Design Process

    -As a new user, I want to easily navigate through the website to find information about the product I am keen on purchasing.
    -As a user, I want a reward system so that I can get good discount and offers
    -As a user, I want a persnoalised account that can track my rewards system/ points to further encourage me to purchase from them again.
    -As a user, I want a section where I can view what are the frequently asked question, and have a solution or answer for that specific question.
    -As a user, I want to be able to easily check out and have the website store my data while I can make up my mind on other things.
    -As a user, I want to be able to view this website through my phone and my desktop.

    1. Ecommerce store selling motorcycle helmets or accessories.
    2. Bringing more attention to the products we are selling.
    3. Have consumers visiting our site a 3D model to view and interact with.
    4. Have a personailsed account to store the user loyalty card and login informations for easy checkouts.
    5. Have a responsive webite for all devices.

    Wireframelink:
        Low fidelity: https://www.figma.com/file/o2Xo54H37SgJVdQvglMZeD/Rolling-Gears?type=design&node-id=0%3A1&mode=design&t=blfWz5cWgK6YuPGm-1
        High fidelity: https://www.figma.com/file/o2Xo54H37SgJVdQvglMZeD/Rolling-Gears?type=design&node-id=80%3A64&mode=design&t=blfWz5cWgK6YuPGm-1

Features

    Exisiting Features:
        Feature 1 - Allows user to be able to view this website no matter the device they are using. Making this website responsive.
        Feature 2 - Have a product page that allows user to add item into cart and have it shown in the cart page when they decided to checkout.
        Feature 3 - The information stored in the local storage will not go away even when refreshing page.
        Feature 4 - A dynamic check out page where the product added to cart will show up correctly in the cart page and have a simple addition math that will add up the respective items in the cart.
        Feature 5 - A newsletter that will send a POST to the database(restDB) and have the email entered stored in the database.
        Feature 6 - A sign up page that will take down the name, phone number, email and password and send it to the database(restDB) for login purposely and fetching dynamic content in the future.
        Feature 7 - A login page that will take the information that is keyed into the indended input field and then using the GET method to match the credentials which will be the email and password. If both matched it will then bring them to the profile page.
        Feature 8 - A dynamic profile page. Firstly if the credentials are correct for login, it will then store the email into the local storage. After that, it will then fetch information like the contact number, name, password and email from the database(restDB). It will then run a loop to matched the email stored in the local storage with the email gotten from the database. If matched it will then fetch the array of information pegged to the email and display them out neatly as the name, phone number, email and password.
        Feature 9 - A lottie animation to be played first in every page, simulating a loading animation, this is to add on the interactiveness of the website and provide a more immersive experience for the end users.
        Features 10 - A clear cart function which will then clear the local storage data and force the page to refresh.
        Features 11 - A working 3D model to interact with in the rewards page.

    Features Left to Implement:
        1. A review section for the product would be extremely beneficial for a website like ours.
        2. A dynamic profile picture for the user when they are logged into their profile.
        3. A user comment sectioons where end user can leave their inputs on the products on the site.
        4. A size guide for the products we have.
        5. A live chat where end users can text or use if they were to be faced with issues.

Technologies Used

    1. Google Fonts: https://fonts.google.com 
        This is to introduce more interesting fonts into the webpage.

    2. BootStrap: https://getbootstrap.com
        This was use to provide a quicker way to build up a website and have the website be responsive.

    3. Lottie: https://lottiefiles.com
        An animation added to our webpage to provide more touch to our website.

    4. W3 Icons: https://lottiefiles.com
        Provided with us micro icons we used in the website.

    5. restDB: https://restdb.io
        Provided us with a database where we can GET, POST and PUT to make a functioning login and signup page.
    
    6. SketchFab: https://sketchfab.com/feed?gclid=CjwKCAiAlJKuBhAdEiwAnZb7lbNRp5IgKfbhWRRrHHlibpNagCidEiRFe7o2hpwbUYmHy6sh_YRX_RoCSR4QAvD_BwE&utm_campaign=358341061&utm_content=414556469961&utm_medium=cpc&utm_source=googleads&utm_term=sketch%20fab
        For embeding our 3D viewmodel into our website.

Testing

    1. Sign up form:
        Tried to submit a empty form and verify an error message is shown correctly
    
    2.  Login form:
        Tried to submit a empty form and verify an error message is shown correctly

    3. Newsletter form:
        Tried to submit a empty form and verify an error message is shown correctly

    4. Profile Page:
        Had to login and login again to test the right information pegged to the email is shown correctly and the loyalty show up is the correct one

    5. Local Storage:
        I had to run multiple console.log to print out the arrays of informations coming from the database. and then using that data printed to guide me to find the right information to be printed onto the html.

Credits

    1. Youtube
    2. Google
    3. Chatgpt
    4. YouChat
    5. Github Co-pilot