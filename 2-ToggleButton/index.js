var btnColor = document.querySelector('.btnColor');
let clickCount = 0;


document.querySelector('#btnWhite').addEventListener('click', () => {
    btnColor.style.left = "0px";
    document.querySelector('#btnBlack').style.color = '#333'
    document.querySelector('#btnWhite').style.color = 'white'
});

document.querySelector('#btnBlack').addEventListener('click', () => {
    btnColor.style.left = "50%";
    document.querySelector('#btnBlack').style.color = 'white'
    document.querySelector('#btnWhite').style.color = '#333'
});

function myFunction() {
    clickCount++; 
    let body = document.body;

    if (clickCount % 2 === 1) {

        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {

        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}