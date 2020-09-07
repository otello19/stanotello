//image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kovacic.jpg') {
      myImage.setAttribute('src','images/Chelsea-Logo.jpg');
    } else {
      myImage.setAttribute('src','images/kovacic.jpg');
    }
}

//Personalized welcome code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to Chelsea Super Fans Page, ' + myName;
      }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome to Chelsea Super Fans Page,  ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }