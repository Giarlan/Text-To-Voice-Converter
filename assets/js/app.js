let textarea = document.querySelector('#textarea');
let voices = document.querySelector('#voices');
let button = document.querySelector('#button');

button.addEventListener('click', () => {
    if(textarea.value !== '') {
        let ut = new SpeechSynthesisUtterance(textarea.value);
        window.speechSynthesis.speak(ut);
    }
});