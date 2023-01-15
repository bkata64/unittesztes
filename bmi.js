function bmi(kg, cm) {
    m = Math.round(cm / 100, 2)
    return kg / (m * m);
}

module.exports = bmi;