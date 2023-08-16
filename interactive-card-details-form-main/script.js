let cardNumberDOM = document.querySelector(".cardInformations__container > p")
let formValid = false



let cardNumberStyle = (cardNumber) => {
    let numberSplited = cardNumber.match(/.{1,4}/g) ?? [];

    for (let i = 0; i < numberSplited.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = numberSplited[i];
        cardNumberDOM.appendChild(span);
    }
}

const inputEmpty = (inputDOM) => {
    if (inputDOM === "" || inputDOM === " ") {
        document.querySelector("")
    }
}

const emptyInputCheck = (inputValue, inputErrorMessageDOM) => {
    if ( inputValue === "" ) inputErrorMessageDOM.innerHTML = "Can't be blanck";
}

const letterInputCheck = (inputValue, errorTargetId) => {
    let hasLetter = /[a-zA-Z]/.test(inputValue);
    const errorTarget = document.getElementById(errorTargetId);
    if (hasLetter) {
        errorTarget.innerHTML = "Wrong format, numbers only" }
    else {
        errorTarget.innerHTML = "" }
}

const form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    /* Inputs values*/
    let name = document.getElementById("name").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let dateMonth = document.getElementById("dateMonth").value;
    let dateYear = document.getElementById("dateYear").value;
    let cvc = document.getElementById("cvc").value;

    let formInputValueArray = [name, cardNumber, dateMonth, dateYear, cvc]





    
    console.log(coco)
})

cardNumberStyle("0000000000000000")