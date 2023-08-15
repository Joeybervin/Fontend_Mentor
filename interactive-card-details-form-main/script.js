let creditCardNumberDOM = document.querySelector(".cardInformations__container > p")




let styleCreditCardNumber = (creditCardNumber) => {
    let numberSplited = creditCardNumber.match(/.{1,4}/g) ?? [];

    for (let i = 0; i < numberSplited.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = numberSplited[i];
        creditCardNumberDOM.appendChild(span);
    }
}

styleCreditCardNumber("0000000000000000")