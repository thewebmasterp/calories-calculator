module.exports = global.config = {
    FEETtoIN: a => a * 12,
    totalIHEIGHTval: (feet, inches) => inches + global.config.FEETtoIN(feet),
    INtoCM: a => a / 0.39370, 
    CMtoIN: a => a * 0.39370,
    LBStoKG: a => a / 2.2046,
    KGtoLBS: a => a * 2.2046,
}
