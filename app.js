
// Project 01
// Chnage random background color by click on button
// RGB code generator
const genBgBtnRgb = document.getElementById('genBgBtnRgb')
const changeBgRgb = document.getElementById('generate__background_rgb')
const valuePrintRgb = document.getElementById('valuePrintRgb')

// One click to change background color
genBgBtnRgb.addEventListener('click',function(){
    const bgRgb = genRandomBgRgb()
    changeBgRgb.style.backgroundColor = bgRgb
    valuePrintRgb.innerHTML = genRandomBgRgb()

})
// Generating randomcolor
function genRandomBgRgb(){
    // Creating rgb color RED, GREEN BLUE MAXIMUM COLOR CALUE IS 255
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    return `rgb(${red},${green},${blue})`
}



// ==================================================
// Project 02 
// Chnage random background color by click on button
// Hex code generator

const genBgBtnHex = document.getElementById('genBgBtnHex')
const changeBgHex = document.getElementById('generate__background_hex')
const valuePrintHex = document.getElementById('valuePrintHex')
// One click to change background color
genBgBtnHex.addEventListener('click',function(){
    const bgHex = genRandomBgHex()
    changeBgHex.style.backgroundColor = bgHex
    valuePrintHex.value = genRandomBgHex()



})

// Generating hex randomcolor
function genRandomBgHex(){
    // Creating rgb color RED, GREEN BLUE MAXIMUM COLOR CALUE IS 255
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    // converted to the haxdecimal code 16
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
   
}

// ==================================================
// One Click to copy text
const copyBtn = document.getElementById('copyCode')
const copyTextAlart = document.getElementById('textDisplay')
copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(valuePrintHex.value)
    const span = document.createElement('span')
    span.id = 'textDisplay'
    

    // Validation the code before copy
    if(valuePrintHex.value && isValidColor(valuePrintHex.value)){
        span.innerText = `${valuePrintHex.value} Copied!`
        changeBgRgb.appendChild(span)
    }
    // Remove tha span after click
    span.addEventListener('click',function(){
        this.remove()
    })
})



// ===== Change bg color & copy color code if the input in valid.
// ===== user can put color code manually then check validation then apply function
// =================
// taking value from input filed then check is that valid if valid change the values

valuePrintHex.addEventListener('keyup',function(e){
    const inputColor = e.target.value
    if(inputColor && isValidColor(inputColor)){
        changeBgHex.style.backgroundColor = inputColor
    }
})





// Input validation function
/**
 * 
 * @param {string} color 
 */
function isValidColor(color){
    // checking lenght
    if(color.length !== 7) return false;
    
    // checking is the valu with #
    if(color[0] !== '#') return false;

    // FILTARING # FROM THE STRING
    color = color.substring(1)
    
    // RegExp (REGULAR EXPRESSION)
    return /^[1-9A-Fa-f]{6}#/i
}



