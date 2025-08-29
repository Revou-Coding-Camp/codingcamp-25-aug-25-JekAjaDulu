window.onload = function() {
    document.getElementById('message-form').classList.add('centered');
};

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
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let message = document.getElementById('message-input').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return;
    }

    // Geser form ke kiri
    const form = document.getElementById('message-form');
    form.classList.remove('centered');
    form.classList.add('shifted');

    // Tampilkan hasil dengan animasi fade dari bawah
    const resultDiv = document.getElementById('message-result');
    resultDiv.innerHTML = `
        <div>
            <h3 class="font-bold text-white mb-[8px]">Thank you!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
    setTimeout(() => {
        resultDiv.style.opacity = "1";
        resultDiv.style.transform = "translateY(0)";
    }, 50);
}
