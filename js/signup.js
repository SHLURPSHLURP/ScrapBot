//sign in/sign up page--> restDB and API, modified week 13 CA code//

//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "679f63fe74defacf0a181f2b";
    const RESTDBURL = "https://scrapbot-e2fb.restdb.io/rest/contact";

    document.getElementById("signup-submit").addEventListener("click", function (e) {
        // Prevent default action of the button
        e.preventDefault(); 

        //[STEP 2]: Let's retrieve form data
        // For now, we assume all information is valid
        // You are to do your own data validation
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;

        //checking if email exists in data base
        fetch(`${RESTDBURL}?q={"email":"${email}"}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY
            }
        })
        .then(response => response.json())
        .then(existingUsers => {
            if (existingUsers.length > 0) {
                alert("Email has already been registered, Please log in! :)");
                return;
            }

            //adding new user to database
            let newUser = { "email": email, "password": password };

            fetch(RESTDBURL, { 
                method: "POST", //POST method to add data
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY
                },
                body: JSON.stringify(newUser)
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("Sign-up successful! You can now log in :)");
                    window.location.href = "index.html"; // redirect to homepage page
                } else {
                    alert("Sign-up failed, Try again :( ");
                }
            })
            .catch(error => {
                console.error("Error during user creation:", error);
                alert("An error occurred, Please try again! :( ");
            });
        })
        .catch(error => {
            console.error("Error checking email:", error);
            alert("An error occurred, Please try again! :( ");
        });
    });
});
