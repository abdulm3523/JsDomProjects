/* Project 01 */
/* Chnage random background color by click on button */

const genBgBtn = document.getElementById('genBgBtn')
const changeBg = document.getElementById('generate__background')

// One click to change background color
genBgBtn.addEventListener('click',function(){
    const bg = genRandomBg()
    changeBg.style.backgroundColor = bg

})

// Generating randomcolor
function genRandomBg(){
    // Creating rgb color RED, GREEN BLUE MAXIMUM COLOR CALUE IS 255
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    return `rgb(${red},${green},${blue})`
}
// console.log(genRandomBg())