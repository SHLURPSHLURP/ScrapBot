document.addEventListener("DOMContentLoaded", function () {
    const resetBtn = document.getElementById("reset-btn");
    const emailInput = document.getElementById("email-input");

    resetBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();

        // empty alert
        if (email === "") {
            alert("Please enter your email");
            return;
        }

        // sned email reset
        setTimeout(() => {
            alert(`A reset link has been sent to ${email}!`);
            emailInput.value = "";
        }, 1000);
    });
});
