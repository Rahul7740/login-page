let show = document.querySelector(".show")
let login1 = document.querySelector(".loginPage1")
let login2 = document.querySelector(".loginPage2")
let signUp1 = document.querySelector(".sighUp1") 
let signUp2 = document.querySelector(".sighUp2") 

let sign_up_btn = document.querySelector(".sign-up-btns")
let sign_in_btn = document.querySelector(".sing-in-btn")

let login_div = document.querySelector(".login-div")
let sighUp_div = document.querySelector(".sighUp-div")

show.addEventListener("click",()=>{
    login1.classList.toggle("activeCss")
    login2.classList.toggle("activeCss")
    login_div.classList.toggle("full-divs-activeCss")
    sighUp_div.classList.remove("full-divs-activeCss")
    signUp1.classList.remove("activeCss")
    signUp2.classList.remove("activeCss")
})

sign_up_btn.addEventListener("click",()=>{
    login1.classList.remove("activeCss")
    login2.classList.remove("activeCss")
    signUp1.classList.add("activeCss")
    signUp2.classList.add("activeCss")
    login_div.classList.remove("full-divs-activeCss")
    sighUp_div.classList.add("full-divs-activeCss")
})


sign_in_btn.addEventListener("click",()=>{
    login1.classList.add("activeCss")
    login2.classList.add("activeCss")
    signUp1.classList.remove("activeCss")
    signUp2.classList.remove("activeCss")
    login_div.classList.add("full-divs-activeCss")
    sighUp_div.classList.remove("full-divs-activeCss")
})


// password icon show/hide
let eye = document.querySelector(".eye")
let eyeOff = document.querySelector(".eyeOff")
eye.addEventListener("click",()=>{
    document.querySelector(".eyeOff").style.display = "block"
    document.querySelector(".eye").style.display = "none"
    document.getElementById("password").setAttribute("type","text")
})
eyeOff.addEventListener("click",()=>{
    document.querySelector(".eyeOff").style.display = "none"
    document.querySelector(".eye").style.display = "block"
    document.getElementById("password").setAttribute("type","password")
})

// password generator
let passGenerator = document.querySelector(".passGenerator")

let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let operator = ["!","@","+","&","$","-","/","^","=","*"]
let a = (abc.at(Math.random()*26))
let b = abc.at(Math.random()*26).toUpperCase()
let c = (Math.round(Math.random()*9)) ;
let d = (operator.at(Math.random()*10))
let pass = (abc.at(Math.random()*26))+a+b+(Math.round(Math.random()*9))+c+d+(Math.round(Math.random()*9))+(Math.round(Math.random()*9))+b+(Math.round(Math.random()*9))+(operator.at(Math.random()*10))+(abc.at(Math.random()*26));


passGenerator.addEventListener("click",()=>{
    let passPrint = document.getElementById("password12")
    let aaa = Array.from(pass)
    shuffle(aaa)
    let asdf = aaa.join("").toString()
    passPrint.value = asdf

})

function shuffle(array){
    let currentIndex = array.length;
    while (currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}