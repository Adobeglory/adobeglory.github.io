let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

var form = document.querySelector("form");
var log = document.querySelector("#log");

//myHeading.textContent = 'Hello world!';

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/xuenv.jpg') {
      myImage.setAttribute('src', 'images/liuyifei.jpg');
    } else {
      myImage.setAttribute('src', 'images/xuenv.jpg');
    }
}

// document.querySelector('html').onclick = function() {
//   alert('别戳我，我怕疼。');
// }

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'aaa，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello,' + storedName;
}

// myButton.onclick = function() {
//   setUserName();
// }



form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);