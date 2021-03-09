var services = {
    password:{
        title: "Something you know",
        image: "password.jpg",
        icon: "vpn_key",
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
        phonetics: "/ô-thĕn′tĭ-kāt′/",
        description:"The last but not least, division of the NyteVision's revolutionary Three Factor Authentication System, NyteVision users have the opportunity and choice use physical authentication devices for specific accounts, this add a another layer of security your accounts and electronic devices. These devices have been designed, both phsically and technologically, to maximize your efficieny while not losing the secure environment you gain from it"
    },
    integration:{
        title: "Anything you have",
        image: "integration.png",
        icon: "integration_instructions",
        descTitle: "Cross-Platform Software",
        word: "adjective",
        phonetics: "/ˌkrɒs ˈplætfɔːm/",
        description:"Nytevision is integrated to supoort all major software, operating systems including but not limited to Microsoft, Mac, Linux and Android. All these devices will work in tandem with reach other, providing a fast paced workflow able which in addition allows you to create secure channels to transfer data between said devices."
    },
    encryption:{
        title: "Only you can",
        image: "encryption.jpg",
        icon: "enhanced_encryption",
        descTitle: "Encryption",
        word: "noun",
        phonetics: "/ˈpɑːswəːd/",
        description:"Many mainstream messenger apps might use some sort of encryption methods, but Nytevision takes things step further by a new revolutionary and novel technology know as pre-compiled encrytion that allows the user to encrypt data even before it passes through to the used app. As an added bonus this also allows users to use this method in apps and programs that lack this encryption as well. Your privacy is our priority"
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

var OSInstall = {
    ['-360']:{
        title: 'Linux',
        image: 'Linux-logo.png',
        buttonText: 'Open Snapstore',
        card:'front'
    },
    ['-180']:{
        title: 'Android',
        image: 'Android-logo.png',
        buttonText: 'Open Playstore',
        card:'back'
    },
    ['0']:{
        title: 'Windows',
        image: 'Windows-logo.png',
        buttonText: 'Download Now',
        card:'front'
    },
    ['180']:{
        title: 'Mac OS',
        image: 'Apple-logo.png',
        buttonText: 'Download Now',
        card:'back'
    },
    ['360']:{
        title: 'Chrome OS',
        image: 'Chrome-logo.png',
        buttonText: 'Open Webstore',
        card:'front'
    },
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

let card = document.getElementById('card')

card.style.transform = 'rotateY(0deg)'

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
    if(toggleSwitch.textContent === "brightness_low"){
        toggleSwitch.textContent = "brightness_medium"
        toggleSwitchResp.textContent = "brightness_medium"
        document.documentElement.setAttribute('data-theme', 'dark');
        contact.style.backgroundImage = "url('/assets/img/bg-light.png')"
    }else{
        toggleSwitch.textContent = "brightness_low"
        toggleSwitchResp.textContent = "brightness_low"
        document.documentElement.setAttribute('data-theme', 'light');
        contact.style.backgroundImage = "url('/assets/img/bg.png')"
    }
})

toggleSwitchResp.addEventListener('click',()=>{
    if(toggleSwitch.textContent === "brightness_low"){
        toggleSwitch.textContent = "brightness_medium"
        toggleSwitchResp.textContent = "brightness_medium"
        document.documentElement.setAttribute('data-theme', 'dark');
        contact.style.backgroundImage = "url('/assets/img/bg-light.png')"
    }else{
        toggleSwitch.textContent = "brightness_low"
        toggleSwitchResp.textContent = "brightness_low"
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


  function rotate(direction){
    let rotation =  card.style.transform
    let currentRotatationValue = (((rotation.match(/\((.*)\)/))[1]).split('d'))[0]
    if(direction==="next" && parseInt(currentRotatationValue)<360){
        let rotationValue = parseInt(currentRotatationValue) + 180
        card.style.transform = `rotateY(${rotationValue}deg)`
        tracker(rotationValue)
        setFlipcardData(rotationValue)
        }else if(direction==="before" && parseInt(currentRotatationValue)>-360){
        let rotationValue = parseInt(currentRotatationValue) - 180
        card.style.transform = `rotateY(${rotationValue}deg)`
        tracker(rotationValue)
        setFlipcardData(rotationValue)
    }
  }

  function tracker(rotationValue){
    let sections = [-360,-180,0,180,360]
    sections = sections.filter((n)=>{return n !== rotationValue})
    document.getElementById(`tracker_(${rotationValue})`).textContent = 'radio_button_checked'
    sections.map((trackno)=>{
        document.getElementById(`tracker_(${trackno})`).textContent = 'radio_button_unchecked'
    })
  }

  function trackerClick(e){
    let currentRotatationValue = ((e.target.id).match(/\((.*)\)/))[1]
    card.style.transform = `rotateY(${currentRotatationValue}deg)`
    tracker(parseInt(currentRotatationValue))
    setFlipcardData(currentRotatationValue)
  }

  function setFlipcardData(index){
      let data =  OSInstall[index]
      let elem = document.getElementById(`fc-${data.card}`)
        elem.children[0].textContent = data.title
        elem.children[1].src = `/assets/img/os_logo/${data.image}`
        elem.children[2].textContent = data.buttonText
  }