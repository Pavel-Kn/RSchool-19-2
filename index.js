import './index.css';

let isDeleteMessage = false;
console.log(isDeleteMessage);

const cookieMessageHTML = document.querySelector('.cookie-consent');

const consentButton = document.querySelector('.cookie-consent__button');
consentButton.addEventListener('click', (event) => {
    const { target } = event;
    if(target) {
        cookieMessageHTML.remove();
        isDeleteMessage = true;
        console.log(isDeleteMessage);
        localStorage.setItem('isDeleteMessage' , true)
    };
});
if(localStorage.getItem('isDeleteMessage' , true)){
    cookieMessageHTML.remove();
}

document.addEventListener('keydown', (event) => {
  
    const { key } = event;
    console.log(key);
    if(key === 'Tab'){
        localStorage.clear()
    };
});