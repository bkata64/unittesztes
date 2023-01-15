//const bmi = require('./bmi');
//import bmi from './bmi';

function bmi(kg, cm) {
    m = cm / 100
    resp = Math.round(kg / (m * m) * 100) / 100
    return resp;
}

module.exports = bmi;

function szamol() {
    kg = document.getElementById('kg').value;
    cm = document.getElementById('cm').value;
    tti = bmi(kg, cm);
    document.getElementById('tti').value = tti;
    if (tti < 18) {
        valasz = 'Sovány vagy!'
    } else if (tti > 25) {
        valasz = 'Túlsúlyos vagy!'
    } else {
        valasz = 'Normál testalkatú vagy.'
    }
    document.getElementById('valasz').innerHTML = valasz;
}

