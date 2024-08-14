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
// console.log(genRandomBgRgb())
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
    valuePrintHex.innerHTML = genRandomBgHex()

})
// ==================================================

// One Click to copy text
const copyBtn = document.getElementById('copyCode')
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(`${valuePrintHex.innerHTML}`)
})

// Generating randomcolor
function genRandomBgHex(){
    // Creating rgb color RED, GREEN BLUE MAXIMUM COLOR CALUE IS 255
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    // converted to the haxdecimal code 16
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
   
}
// console.log(genRandomBgHex())


