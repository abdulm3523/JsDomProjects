
// CONVERT HEX & RGB CODE
// USER CAN REWRITE HEX CODE THE AUTOMATICALY GENERATE RGB CODE
// USER CAN COPY BOTH COLOR CODE
// USER CAN NOT EDIT RGB COLOR BUT CAN COPY
// WHEN COLOR IS GENERATED THE BG COLOR WILL BE CHANGE AUTOMATICALLY

const hexCodeOutPUT = document.getElementById('outputHex')
const rgbCodeOutPUT = document.getElementById('outputRgb')
const genBtn = document.getElementById('genBgBtnHex__rgb')
const sectionBg = document.getElementById('generate__background_hex__rgb')
const copyCodeHex = document.getElementById('copyCodeHex')
const copyCodeRgb = document.getElementById('copyCodeRgb')
const copyText1 = document.getElementById('copyMsg1')
const copyText2 = document.getElementById('copyMsg2')
// STEP-1 GEN DECEMAL NUMBER
function genDecemalCode(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    
    return {
        red,
        green,
        blue
    }
}

// console.log(colorCode)

// STEP-2 GEN HEX COLOR
function genHexCode({red,green,blue}){
    function getTwoCode(value){
        const hexCode = value.toString(16)
        return hexCode.length == 1? `0${hexCode}` : hexCode
    }
    return `${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`
}
// STEP-3 GEN RGB COLOR
function genRgbCode({red,green,blue}){
    return `${red},${green},${blue}`
}

// STEP-4 BUTTON CLICK TO GENETARE HEX & rgbCODE
genBtn.addEventListener('click',function(){
    const decimalCode = genDecemalCode()
    const genHex = genHexCode(decimalCode)
    const genRgb = genRgbCode(decimalCode)
    sectionBg.style.backgroundColor = `#${genHex}`
    hexCodeOutPUT.value = genHex
    rgbCodeOutPUT.value = genRgb
})

// STEP-5 UPDATING RGB COLOR CODE WHEN CHANGEING HEX CODE MANUALY


// CONVERT HEX TO RGB
/**
 * 
 * @param {string} value 
 */
function hexToRgb(value){
    const red = parseInt(value.slice(0,2),16)
    const green = parseInt(value.slice(2,4),16)
    const blue = parseInt(value.slice(4),16)
    
    return `rgb(${red},${green},${blue})`
}

// UPDATE RGB COLOR & BACKGROUND COLOR
hexCodeOutPUT.addEventListener('keyup',function(e){
    const hexToRgbCode= hexToRgb(e.target.value)
    hexCodeOutPUT.style.backgroundColor = '#ffffff'
    sectionBg.style.backgroundColor = `#${e.target.value}`
    rgbCodeOutPUT.value = hexToRgbCode
})

// STEP-6 BUTTON CLICK TO COPY THE CODE
// copy hex code
copyCodeHex.addEventListener('click',function(e){
    navigator.clipboard.writeText(`#${hexCodeOutPUT.value}`)
    copyText1.style.display = 'block'
    setTimeout(function() {
        copyText1.style.display = 'none'
    }, 500); // <-- time in milliseconds
})

// copy rgb code
copyCodeRgb.addEventListener('click',function(e){
    navigator.clipboard.writeText(`rgb(${rgbCodeOutPUT.value})`)
    copyText2.style.display = 'block'
    setTimeout(function() {
        copyText2.style.display = 'none'
    }, 500); // <-- time in milliseconds
})