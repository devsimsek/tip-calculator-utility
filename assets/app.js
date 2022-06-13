let tip_per_person = document.querySelector('#tip-per-person')
let bill_per_person = document.querySelector('#bill-per-person')
let userCount = document.querySelector('#user-count')
let bill = document.querySelector('#bill');
let tip = document.querySelector('#tip');
let themeButton = document.querySelector('#themeButton');
let languageButton = document.querySelector('#languageButton');
let activeTheme = 'light';
let activeLanguage = 'turkish';

let billValue = 0.0;
let userAmount = 1;
let tipValue = 0.05;

function handleBillInput() {
    billValue = parseFloat(bill.value);
    calculateTip();
}

function handleTipInput() {
    tipValue = parseFloat(tip.value) / 100;
    calculateTip();
}

function handleUserInput() {
    userAmount = parseFloat(userCount.value);
    calculateTip();
}

function handleThemeButtonClick() {
    switch (activeTheme) {
        case 'light':
            document.body.classList.toggle("dark-mode");
            activeTheme = 'dark';
            break;
        case 'dark':
            document.body.classList.remove("dark-mode");
            activeTheme = 'light';
            break;
    }
}

function calculateTip() {
    console.log(tipValue)
    let tipAmount = (billValue * tipValue) / userAmount;
    let total = (billValue + tipAmount) / userAmount;

    let message = ""

    if (userAmount >= 2) {
        switch (activeLanguage) {
            case 'turkish':
                message = " (Kişi Başı)"
                break
            case 'english':
                message = " (Per Person)"
        }

    }

    tip_per_person.innerHTML = tipAmount.toFixed(2) + "TL" + message;
    bill_per_person.innerHTML = total.toFixed(2) + "TL" + message;
}

function handleLanguageChange() {
    switch (activeLanguage) {
        default:
        case 'turkish':
            console.info("Changing language to english.")
            activeLanguage = 'english'
            languageButton.textContent = 'Dil Değiştir'
            translate('.l_appTitle', 'Tip Calculator Utility')
            translate('.l_bill', 'Bill')
            translate('.l_tip', 'Tip (%)')
            translate('.l_user_count', 'Number of Users to Pay')
            translate('.l_switchTheme', 'Switch Theme')
            translate('.l_tipPerPerson', 'Tip to be paid per person:')
            translate('.l_billPerPerson', 'Amount to be paid per person:')
            break
        case 'english':
            console.info("Dil Türkçeye Çeviriliyor.")
            activeLanguage = 'turkish'
            languageButton.textContent = 'Change Language'
            translate('.l_appTitle', 'Bahşiş Hesaplama Aracı')
            translate('.l_bill', 'Fatura')
            translate('.l_tip', 'Bahşiş (%)')
            translate('.l_user_count', 'Hesabı Ödeyecek Kişi Sayısı')
            translate('.l_switchTheme', 'Tema Değiştir')
            translate('.l_tipPerPerson', 'Kişi Başı Ödenecek Başiş:')
            translate('.l_billPerPerson', 'Kişi Başı Ödenecek Miktar:')
            break
    }
}

function translate(field, value) {
    document.querySelectorAll(field).forEach(e => {
        e.textContent = value
    })
}

window.addEventListener('load', function () {
    console.info('App Loaded. Initializing...')
    bill.addEventListener("input", handleBillInput);
    tip.addEventListener("input", handleTipInput);
    userCount.addEventListener("input", handleUserInput);
    themeButton.addEventListener("click", handleThemeButtonClick);
    languageButton.addEventListener("click", handleLanguageChange);
    console.info('Initialized. Ready to work.')
    console.info('Copyright (C)devsimsek.')
}, false);