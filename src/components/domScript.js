
let navbar = document.querySelector('header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
}

// console.log(document.getElementById("btn-dark"));

// 1. get value from localStorage
let darkmode = localStorage.getItem('darkmode');
//2.get button from click
let btn = document.getElementById('btn-dark');
//3.function enable dark mode arrow function
const enabledark = () => {
    document.body.classList.add('dark');
    localStorage.setItem('darkmode', 'enable');
    btn.innerHTML = "Dark Mode ON ";

    /*when dark mode is on then they should be color change */
    let c = document.querySelectorAll(".output")
    for (var i = 0; i < c.length; i++) {
        c[i].style.color = 'black';
    }

    let syntax = document.querySelectorAll(".syntax");
    for (var i = 0; i < syntax.length; i++) {
        syntax[i].style.color = 'black';
    }

    let messageBox = document.querySelectorAll(".size"); //color of message box
    for (var i = 0; i < messageBox.length; i++) {
        messageBox[i].style.color = 'black';
    }

    let item = document.querySelectorAll(".sub-item"); //color of message box
    for (var i = 0; i < item.length; i++) {
        item[i].style.color = 'black';
    }
    let alertsuccess = document.querySelectorAll(".alert-success"); //color of message box
    for (var i = 0; i < alertsuccess.length; i++) {
        alertsuccess[i].style.color = 'white';
    }

}

//4.diabled dark mode arrow function
const disabledark = () => {
    document.body.classList.remove('dark');
    localStorage.removeItem('darkmode');
    btn.innerHTML = "Dark Mode off"

    /*when dark mode is on then they should be color change */
    let c = document.querySelectorAll(".output")
    for (var i = 0; i < c.length; i++) {
        c[i].style.color = '';
    }

    let syntax = document.querySelectorAll(".syntax");
    for (var i = 0; i < syntax.length; i++) {
        syntax[i].style.color = '';
    }

    let messageBox = document.querySelectorAll(".size"); //color of message box
    for (var i = 0; i < messageBox.length; i++) {
        messageBox[i].style.color = '';
    }

    let item = document.querySelectorAll(".sub-item"); //color of message box
    for (var i = 0; i < item.length; i++) {
        item[i].style.color = '';
    }
    let alertsuccess = document.querySelectorAll(".alert-success"); //color of message box
    for (var i = 0; i < alertsuccess.length; i++) {
        alertsuccess[i].style.color = '';
    }
}

//5.add event listener for click
window.onload = () => {
    btn.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'enable') {
            enabledark();
        } else {
            disabledark();
        }

    });
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkmode === 'enable') {
    enabledark();
}
    //  Dark Mode End


