greet();

//greet the user
function greet() {
    //get the username from the user
    let username = prompt("Please enter your name:");
    //display the username on the webpage
    document.getElementById('username').innerText = username;
}


//validate the form
function validateform() {
    //get the name input value
    let name = document.getElementById('name-input').value;

    //validate the name input
    if (name === "") {
        //show an alert if the name is empty
        alert("Name must be filled out");
    } else {
        //show a thank you message if the name is filled out
        alert("Thank you, " + name + "!");
    }
}
