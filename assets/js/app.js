var services = {
    password:{
        title: "Something you know",
        image: "password.jpg",
        icon: "pattern",
        descTitle: "Passwords",
        word: "noun",
        phonetics: "/ˈpɑːswəːd/",
        description:"The first division of the NyteVision's revolutionary Three Factor Authentication System, our integrated system will and manage all passwords and authentication PINs from all your various accounts and store them in higly encrypted servers. Avoid the hassle of trying to remember easy to guess passwords, and safekeep your accounts from bruteforce hackers. Never again will you type in 'Password.123' !"
    },
    fingerprint:{
        title: "Something you are",
        image: "fingerprint.jpg",
        icon: "fingerprint",
        descTitle: "Biometrics",
        word: "noun",
        phonetics: "/bʌɪˈɒmɪtri/",
        description:"The second division of the NyteVision's revolutionary Three Factor Authentication System, our system will support biometric drives that natively consist in most new electronic devices while also including universal biometric scanners for multiple scenarios including but no limited to fingerprint, face-recognition, iris-scanning and voice recognition. These devices are built with state of the art techbology that has been put to rigorous testing."
    },
    creditcard:{
        title: "Something you have",
        image: "creditcard.jpg",
        icon: "credit_card",
        descTitle: "Authenticators",
        word: "noun",
        phonetics: "/ˈpɑːswəːd/",
        description:"The first division of the NyteVision's revolutionary Three Factor Authentication System, our integrated system will and manage all passwords and authentication PINs from all your various accounts and store them in higly encrypted servers. Avoid the hassle of trying to remember easy to guess passwords, and safekeep your accounts from bruteforce hackers."
    },
    integration:{
        title: "Anything you have",
        image: "integration.png",
        icon: "integration_instructions",
        descTitle: "Multi-Platform Software",
        word: "noun",
        phonetics: "/ˈpɑːswəːd/",
        description:"The first division of the NyteVision's revolutionary Three Factor Authentication System, our integrated system will and manage all passwords and authentication PINs from all your various accounts and store them in higly encrypted servers. Avoid the hassle of trying to remember easy to guess passwords, and safekeep your accounts from bruteforce hackers."
    },
    encryption:{
        title: "Only you can",
        image: "encryption.jpg",
        icon: "enhanced_encryption",
        descTitle: "Encryption",
        word: "noun",
        phonetics: "/ˈpɑːswəːd/",
        description:"The first division of the NyteVision's revolutionary Three Factor Authentication System, our integrated system will and manage all passwords and authentication PINs from all your various accounts and store them in higly encrypted servers. Avoid the hassle of trying to remember easy to guess passwords, and safekeep your accounts from bruteforce hackers."
    },
    customerservice:{
        title: "Anytime you can",
        image: "customerservice.jpg",
        icon: "support_agent",
        descTitle: "Customer Service",
        word: "noun",
        phonetics: "/ˈpɑːswəːd/",
        description:"The first division of the NyteVision's revolutionary Three Factor Authentication System, our integrated system will and manage all passwords and authentication PINs from all your various accounts and store them in higly encrypted servers. Avoid the hassle of trying to remember easy to guess passwords, and safekeep your accounts from bruteforce hackers."
    }
}

let navbar = document.getElementById('navbar')
let scrollable = document.getElementById('scrollable')
let toggleSwitch = document.getElementById('toggleSwitch')
let toggleSwitchResp = document.getElementById('toggleSwitchResp')
let respNav = document.getElementById('respNav')
let menuBtn = document.getElementById('menuBtn')
let menuOffBtn = document.getElementById('menuOffBtn')
let contact = document.getElementById('contact')
let modalWrapper = document.getElementById('modal-wrapper')
let modalWrapperClose = document.getElementById('modal-wrapper-close')

let modalServiceCard = document.getElementById('modal-service-card')
let modalServiceIcon = document.getElementById('modal-service-icon')
let modalServiceTitle = document.getElementById('modal-service-title')

let modalDescTitle = document.getElementById('modal-description-title')
let modalDescPhon = document.getElementById('modal-description-phonetics')
let modalDescPara = document.getElementById('modal-description-para')


scrollable.onscroll = function () { 
    "use strict";
    if (scrollable.scrollTop >= 10 ) {
        navbar.classList.add("scrolled");
    } 
    else {
        navbar.classList.remove("scrolled");
    }
};

respNav.style.transform= 'translateX(50%) rotateY(90deg) skew(15deg)'
modalWrapper.style.display = 'none'

toggleSwitch.addEventListener('click',()=>{
    if(toggleSwitch.textContent === "light_mode"){
        toggleSwitch.textContent = "dark_mode"
        toggleSwitchResp.textContent = "dark_mode"
        document.documentElement.setAttribute('data-theme', 'dark');
        contact.style.backgroundImage = "url('/assets/img/bg-light.png')"
    }else{
        toggleSwitch.textContent = "light_mode"
        toggleSwitchResp.textContent = "light_mode"
        document.documentElement.setAttribute('data-theme', 'light');
        contact.style.backgroundImage = "url('/assets/img/bg.png')"
    }
})

toggleSwitchResp.addEventListener('click',()=>{
    if(toggleSwitch.textContent === "light_mode"){
        toggleSwitch.textContent = "dark_mode"
        toggleSwitchResp.textContent = "dark_mode"
        document.documentElement.setAttribute('data-theme', 'dark');
        contact.style.backgroundImage = "url('/assets/img/bg-light.png')"
    }else{
        toggleSwitch.textContent = "light_mode"
        toggleSwitchResp.textContent = "light_mode"
        document.documentElement.setAttribute('data-theme', 'light');
        contact.style.backgroundImage = "url('/assets/img/bg.png')"
    }
    respNav.style.transform= 'translateX(50%) rotateY(90deg) skew(15deg)'
})

menuOffBtn.addEventListener('click',()=>{
    respNav.style.transform= 'translateX(50%) rotateY(90deg) skew(15deg)'
})

menuBtn.addEventListener('click',()=>{
    respNav.style.transform= 'translateX(0%) rotateY(0deg) skew(0deg)'
})

console.log("%cHello! I am Hasala!", "font-size:15px;");
console.log("%cThis website was built by me (Hasala Heiyanthuduwa) for the INTEROP'20 ICT Competition, held by the Vidura College ICT Society", "font-size:12.5px;");

const navTo = (path) =>{
    var pos = document.getElementById(`${path}`).offsetTop
    scrollable.scrollTop = pos
    respNav.style.transform= 'translateX(50%) rotateY(90deg) skew(15deg)'
}

modalWrapperClose.addEventListener('click',()=>{
    modalWrapper.style.display = 'none'
})

const openModal = (e) =>{
    let selectedService = e.target.getAttribute('data-service')
    modalServiceIcon.textContent = services[selectedService].icon
    modalServiceTitle.textContent = services[selectedService].title
    modalDescTitle.textContent = services[selectedService].descTitle
    modalDescPhon.innerHTML = `<b>${services[selectedService].word}</b> ${services[selectedService].phonetics}`
    modalDescPara.textContent = services[selectedService].description
    modalServiceCard.style.setProperty("--background-image",`url('/assets/img/${services[selectedService].image}')`)
    modalWrapper.style.display = 'flex'
}

window.onclick = function(event) {
    if (event.target == modalWrapper) {
      modalWrapper.style.display = "none";
    }
  }