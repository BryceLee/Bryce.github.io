// let heading=document.querySelector('h1');
// heading.textContent='BryceLeeHub'
let img = document.querySelector('img');
img.onclick = function () {
    let src = img.getAttribute('src');
    if (src === 'images/img_01.jpg') {
        img.setAttribute('src', 'images/img_02.jpg');
    } else {
        img.setAttribute('src', 'images/img_01.jpg');
    }
    alert("haha");
}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello World，' + name + '！';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
} else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;