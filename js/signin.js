//sign in/sign up page--> restDB and API, modified week 13 CA code//

//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "679ef932d24ab46410dcca54";
    const RESTDBURL = "https://scrapbot-bead.restdb.io/rest/contact";

    document.getElementById("contact-submit").addEventListener("click", function (e) {
        // Prevent default action of the button
        e.preventDefault(); 

        //[STEP 2]: Let's retrieve form data
        // For now, we assume all information is valid
        // You are to do your own data validation
        let email = document.getElementById("contact-email").value;
        let password = document.getElementById("contact-password").value;

        //checking if email exists in data base
        fetch(`${RESTDBURL}?q={"email": "${email}"}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY
            }
        })
        .then(response => response.json())
        .then(users => {
            if (users.length === 0) { //if the email is not found
                alert("Email not found, Please sign up first! :( ");
            } else if (users[0].password === password) { //if email is found and passsword is correct
                window.location.href = "../html/index.html"; // redirect to homepage
            } else {
                alert("Wrong password! :( "); //password wrong
            }
        })
        .catch(error => {
            console.error("Login error:", error);
            alert("An error occurred, Please try again! :( ");
        });
    });
});

