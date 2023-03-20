console.log('funguju!');




const alarmRing = () => {
    let alarmElm = document.querySelector('.alarm');
    alarmElm.classList.add('alarm--ring');
    console.log('prodleva uběhla, zvoní');
}

//setTimeout(alarmRing, 5000);


let prodleva = Number(prompt('Zadej časovou prodlevu v sekundách.'))

setTimeout(alarmRing, prodleva*1000);

button.addEventListener('click', () => {
alarmElm.classList.remove('alarm--ring');
})
