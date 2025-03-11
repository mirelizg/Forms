document.getElementById("myForm").onsubmit = function (event) {
    event.preventDefault();

    let input = document.getElementById("inputField").value.trim();
    let message = document.getElementById("message");

    if (/^[a-zA-Z0-9]+$/.test(input)) {
        message.style.color = "green";
        message.innerText = "Valid input! Form submitted.";
    } else {
        message.style.color = "red";
        message.innerText = "Invalid input! Use letters and numbers only.";
    }
};
