let cardNumberDOM = document.querySelector(".cardInformations__container > p")
let formValid = [false, false, false, false, false];

const applyCardNumberStyle = (cardNumber, targetElement) => {
    targetElement.innerHTML = "";
    let numbercleaned = cardNumber.replace(/\s/g, "")
    let numberSplited = numbercleaned.match(/.{1,4}/g) ?? [];
    for (let i = 0; i < numberSplited.length; i++) {
        let span = document.createElement('span');
        span.innerHTML = numberSplited[i];
        targetElement.appendChild(span);
    }
}

const applyRedBorder = (inputElement, state) => {
    if (state === "error") inputElement.classList.add("error");
    else inputElement.classList.remove("error");
}

const preventSpaceInput = (inputElement) => {
    inputElement.addEventListener("keydown", function(event) {
        if (event.key === " ") {
            event.preventDefault();
            applyRedBorder(inputElement, "error")
        }
        if (inputElement.value.length === 1 && inputElement.value[0] === " ") {
            this.value = ""; // Effacer l'espace au début
        }
    });
};

const validateInput = (inputElement,inputValue, errorMessage, index) => {

    formValid[index] = false;
    if (inputValue.trim() === "") {
        errorMessage.innerHTML = "Can't be blank";
        applyRedBorder(inputElement, "error")
    } else if (/[a-zA-Z]/.test(inputValue)) {
        errorMessage.innerHTML = "Wrong format, numbers only";
        applyRedBorder(inputElement, "error")
    } else {
        errorMessage.innerHTML = "";
        applyRedBorder(inputElement, "no-error")
        formValid[index] = true;
    }
};

/* Add a 0 at the beginning */
const addZeroAtBeginning = document.getElementById("dateMonth").addEventListener("blur", function() {
    const inputValue = this.value.trim();
    
    if (inputValue.length === 1 && /^[1-9]$/.test(inputValue)) {
        this.value = "0" + inputValue;
    }
});

/* cardHOLDER NAME */
document.getElementById("name").addEventListener("input", function() {

    formValid[0] = false;
    if (this.value.trim() === "") { 
        document.querySelector("span.errorMessage__text--name").innerHTML = "Can't be blank";
        applyRedBorder(this, "error");
    } else if (/\d/.test(this.value)) { 
        document.querySelector("span.errorMessage__text--name").innerHTML = "Wrong format, letters only";
        applyRedBorder(this, "error");
    } else {
        applyRedBorder(this, "no-error");
        document.querySelector("span.errorMessage__text--name").innerHTML = "";
        formValid[0] = true;
    }
});
/* CARD NUMBER */
document.getElementById("cardNumber").addEventListener("input", function() {
    preventSpaceInput(this);
    let inputValue = this.value.replace(/\s/g, ''); // Supprimer les espaces existants
    let formattedValue = inputValue.match(/.{1,4}/g)?.join(' ') || ''; // Ajouter des espaces après chaque groupe de 4 caractères
    this.value = formattedValue;

    if (this.value.length < 16) formValid[1] = false;
    validateInput(this, this.value, document.querySelector("span.errorMessage__text--cardNumber"),1);
});
/* DATE MONTH + YEAR */
document.getElementById("dateMonth").addEventListener("input", function() {
    preventSpaceInput(this);
    if (this.value <= 0 || this.value > 12 ) {
        document.querySelector("span.errorMessage__text--expDate").innerHTML = "Invalid";
        formValid[2] = false;
        applyRedBorder(this, "error")
    }else {
        validateInput(this, this.value, document.querySelector("span.errorMessage__text--expDate"),2) }
});
document.getElementById("dateYear").addEventListener("input", function() {
    preventSpaceInput(this);
    if (this.value < 23) {
        document.querySelector("span.errorMessage__text--expDate").innerHTML = "Invalid";
        applyRedBorder(this, "error")
        formValid[3] = false
    } else {
        validateInput(this, this.value, document.querySelector("span.errorMessage__text--expDate"),3);
    }
});
/* CVC */
document.getElementById("cvc").addEventListener("input", function() {
    preventSpaceInput(this);
    if (this.value.length < 3) {
        document.querySelector("span.errorMessage__text--cvc").innerHTML = "Invalid";
        applyRedBorder(this, "error");
        formValid[4] = false;
    } else {
        validateInput(this, this.value, document.querySelector("span.errorMessage__text--cvc"),4); }
});

const resetForm = () => {
    document.querySelector("form").reset();
};

const showAndHideForm = (action) => {
    if (action === "hide") {
        document.querySelector(".formSubmitAnswer").classList.remove("hide")
        document.querySelector("form").classList.add("hide")
    }
    else {
        document.querySelector("form").classList.remove("hide")
        document.querySelector(".formSubmitAnswer").classList.add("hide")
    }
}

const submitForm = document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();

    if (!formValid.includes(false)) { 
        /* Inputs values*/
        document.querySelector(".cardInformations__container > div > p").innerHTML = document.getElementById("name").value;
        applyCardNumberStyle(document.getElementById("cardNumber").value, cardNumberDOM );
        document.querySelector(".cardInformations__container > div > p span ").innerHTML = document.getElementById("dateMonth").value;
        document.querySelector(".cardInformations__container > div > p span + span").innerHTML = document.getElementById("dateYear").value;
        document.querySelector(".card__container--back > div > p").innerHTML = document.getElementById("cvc").value
        showAndHideForm("hide")
    }



    console.log(formValid)
})

const cleanOldValues = document.querySelector("button#continue").addEventListener("click", () => {

    formValid = [false, false, false, false, false];
    /* DOM cards old values */
    document.querySelector(".cardInformations__container > div > p").innerHTML = "Jane Appleseed";
    applyCardNumberStyle("0000000000000000", cardNumberDOM);
    document.querySelector(".card__container--back > div > p").innerHTML = "000";
    document.querySelector(".cardInformations__container > div > p span ").innerHTML = "00"
    document.querySelector(".cardInformations__container > div > p span + span ").innerHTML = "00"

    resetForm();
    showAndHideForm("show")
})

applyCardNumberStyle("0000000000000000", cardNumberDOM)