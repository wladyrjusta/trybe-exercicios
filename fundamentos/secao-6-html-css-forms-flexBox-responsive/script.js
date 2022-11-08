function submit(event) {
    event.preventDefault();
};
function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
        const userInput = formElements[index];
        userInput.value = "";
        userInput.checked = false;
    }
    textArea.value = '';
};
window.onload = function () {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', submit);
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
};
const inputs = document.querySelectorAll('input')
localStorage.setItem('dados-forms');


