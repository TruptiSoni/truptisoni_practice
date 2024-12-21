// JavaScript Variables and Array
let names = ["Amit", "Priya", "Rohan", "Sneha", "Anjali"];
console.log("Names Array:", names);

// Loop through array and log names
names.forEach((name, index) => {
    console.log(`${index + 1}: ${name}`);
});

// Display current date using Date object
let currentDate = new Date();
console.log("Current Date:", currentDate);

// jQuery: Add click event to form submit button
$(document).ready(() => {
    $("form").on("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        let name = $("#name").val();
        let email = $("#email").val();

        if (name && email) {
            alert(`Thank you, ${name}! We will contact you at ${email}.`);
        } else {
            alert("Please fill out all fields.");
        }
    });

    // jQuery Filtering Example
    $("ul li").filter(":contains('CSS')").css("color", "red");
});
