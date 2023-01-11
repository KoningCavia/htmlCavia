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
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Cavia's zijn cool! Ze zijn echt cool hoor. Hoor je me, ${myName}?!!?!`;
    }
}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cavia's zijn cool! Ze zijn echt cool hoor. Hoor je me, ${storedName}?!!?!`;
}

myButton.onclick = () => {
    setUserName();
};

