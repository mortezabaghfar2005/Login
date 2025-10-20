/* Getting variables */

let inputElm1 = document.getElementById("userInput");
let inputElm2 = document.getElementById("passInput");
let leftEye = document.getElementById("leftEye");
let rightEye = document.getElementById("rightEye");
let leftEyePaddingLeft = 0
let rightEyePaddingLeft = 0

/* UserName */ 

inputElm1.addEventListener("focus", () => {
    leftEye.style.top = "85px"
    leftEye.style.left = "103px"
    leftEye.style.transition = "all ease 0.3s"
    rightEye.style.top = "85px"
    rightEye.style.left = "165px"
    rightEye.style.transition = "all ease 0.3s"
})

inputElm1.addEventListener("blur", () => {
    leftEye.style.top = "75px"
    leftEye.style.left = "110px"
    leftEye.style.transition = "all ease 0.3s"
    rightEye.style.top = "75px"
    rightEye.style.left = "174px"
    rightEye.style.transition = "all ease 0.3s"
})

const userkeyHandler = (event) => {
    console.log("userkeyHandler", event)

    if(leftEyePaddingLeft > 20){
        return false
    }

    if (event.keyCode === 8) {
        leftEyePaddingLeft--
        rightEyePaddingLeft--
    } else{
        leftEyePaddingLeft++
        rightEyePaddingLeft++
    }
    
    leftEye.style.paddingLeft = leftEyePaddingLeft + "px"
    rightEye.style.paddingLeft = rightEyePaddingLeft + "px"
}

// Only add keydown handler to username field (not password)
inputElm1.addEventListener("keydown", userkeyHandler);



/* Password */

inputElm2.addEventListener("focus", () => {
    leftEye.style.top = "58px"
    leftEye.style.left = "117px"
    leftEye.style.transition = "all ease 0.3s"
    rightEye.style.top = "58px"
    rightEye.style.left = "168px"
    rightEye.style.transition = "all ease 0.3s"
})

inputElm2.addEventListener("blur", () => {
    leftEye.style.top = "75px"
    leftEye.style.left = "110px"
    leftEye.style.transition = "all ease 0.3s"
    rightEye.style.top = "75px"
    rightEye.style.left = "174px"
    rightEye.style.transition = "all ease 0.3s"
})
