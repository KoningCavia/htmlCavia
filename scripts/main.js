//
// document.querySelector("img").addEventListener("click", function() {
//     alert("Squeek");
// });
const myImage = document.querySelector("img");


myImage.onclick = () => {

    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cavia2.jpg") {
        myImage.setAttribute("src", "images/cavia3.jpg" )
    } else {
        myImage.setAttribute("src", "images/cavia2.jpg");
    }
}


//add personalised message //
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent=`Cavia's zijn cool! Ze zin echt cool hoor. Hoor je me, ${myName}?!!?!`;
}

