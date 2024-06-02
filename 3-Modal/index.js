const infoModal = document.querySelectorAll('.indicator')
const ModalInfo = document.querySelector('.info')
const Close = document.querySelector('.close')

let clickCount = 0;
function myFunction() {
    clickCount++;
    let body = document.body;

    if (clickCount % 2 === 1) {
        body.style.backgroundColor = "rgb(0, 0, 0, 0.5)";

    } else {
        body.style.backgroundColor = "#fff"

    }
}

infoModal.forEach(item => {
    item.addEventListener('click', () => {
        ModalInfo.classList.add('add')
        infoModal.forEach(buttonremove => buttonremove.classList.add('removeButton'));

    })
})

Close.addEventListener('click', () => {
    ModalInfo.classList.remove('add')
    infoModal.forEach(buttonremove => buttonremove.classList.remove('removeButton'));
})