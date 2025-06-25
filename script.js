let arrow = document.querySelector(".upArrow");
let arrowSection = document.querySelector(".arrowSection");
let arrowSectionTopChild = document.querySelectorAll(".arrowSectionTopChild");
let openCameraBtn = document.getElementById("openCamera");
let cameraFeed = document.getElementById("cameraFeed");
let camera = document.querySelector(".camera");
let faminus = document.querySelector(".fa-minus");
let faxmark = document.querySelector(".fa-xmark");
let faexpand = document.querySelector(".fa-expand");
let minimizeIconsCam = document.querySelector(".minimizeIconsCam");
let cameraTopBarRht = document.querySelector(".cameraTopBarRht");
let famoon = document.querySelector(".fa-moon");
let overlay = document.querySelector(".overlay");
let battery = document.querySelector(".battery");
let aeroplane = document.querySelector(".aeroplane");
let wifi = document.querySelector(".wifi");
let windows = document.querySelector(".windows");
let windowbtn = document.querySelector(".windowbtn");
let openGooglebtn = document.querySelector("#openGooglebtn");
let timee = document.querySelector(".timee");
let datee = document.querySelector(".date");
let batterybtn = document.querySelector(".batterybtn");
let batteryDiv = document.querySelector(".batteryDiv");
let fullSetting = document.querySelector(".fullSetting");
let settingbtn = document.querySelector(".settingbtn");
let w = document.querySelector(".w");
let settingInputSearchBar = document.querySelector(".settingInputSearchBar");


let flag = true;




const tl = gsap.timeline({ paused: true });

tl.from(arrowSection, {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});

let arrowMenu = ()=>{
      if (flag) {
    arrowSection.style.display = "block"; 
    tl.play();                             // Play timeline (slide in)
    flag = false;
  } else {
    tl.reverse();                          // Reverse timeline (slide out)
    tl.eventCallback("onReverseComplete", () => {
      arrowSection.style.display = "none"; // Fir display none
    });
    flag = true;
  }
}

let reverseArrowmenuBar = ()=>{
   tl.reverse();                          // Reverse timeline (slide out)
    tl.eventCallback("onReverseComplete", () => {
      arrowSection.style.display = "none"; // Fir display none
    });
    flag = true;
}





arrow.addEventListener("click", () => {
  arrowMenu();
});


arrowSectionTopChild.forEach((val)=>{
   let isOn = true;
    val.addEventListener(("click"),()=>{
        if(isOn){
          val.style.backgroundColor = val.dataset.color;
          isOn = false;
        }else{
           val.style.backgroundColor ="rgba(62, 57, 57, 0.564)" ;
          isOn = true;
        }
    })
})


let isCameraOn = true;

openCameraBtn.addEventListener("click", async () => {
      reverseArrowmenuBar()
      if(isCameraOn){
        // camera.style.transform = "scale(1)";
        camera.style.transition = "all 0.3s ease";
       camera.style.display = "flex";
       isCameraOn = false;
       
  }else{
     camera.style.display = "none";
     isCameraOn= true;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraFeed.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
    alert("Camera access allow karo");
  }
});

faminus.addEventListener("click", () => {
  reverseArrowmenuBar()
  camera.style.transform = "scale(0)";
  camera.style.transition = "all 0.3s ease";
  camera.style.position = "absolute";
  camera.style.display = "block";
  isMinimized = true;
  minimizeIconsCam.style.display = "initial";
});
minimizeIconsCam.addEventListener("click", ()=>{
  reverseArrowmenuBar()
   camera.style.transform = "scale(1)";
     camera.style.display = "flex";
  camera.style.transition = "all 0.3s ease";
})
faxmark.addEventListener("click", ()=>{
  reverseArrowmenuBar()
   camera.style.transform = "scale(0)";
    camera.style.transition = "all 0.3s ease";
     minimizeIconsCam.style.display = "none";
     openCameraBtn.style.backgroundColor = "rgba(62, 57, 57, 0.564)";
      isCameraOn= true;
})


let isExpand = true;


faexpand.addEventListener("click", ()=>{
   
reverseArrowmenuBar()

  if(isExpand){
    camera.style.height = "50%";
    camera.style.width = "50%";
    cameraTopBarRht.style.width = "20%"
    isExpand = false;
  }else{
    
    camera.style.height = "100%";
    camera.style.width = "100%";
    cameraTopBarRht.style.width = "10%"
    isExpand = true;
  }
})

famoon.addEventListener("click" , ()=>{
      overlay.style.opacity = "1";
      overlay.style.display = "block";

       camera.style.transition = "all 0.3s ease";
       camera.style.backgroundColor = "red";
})

let isBatterysaveon = true;
battery.addEventListener("click",()=>{
    if(isBatterysaveon){
    confirm("Are you sure to Turn on Battery Saver");
    isBatterysaveon = false;
    }else{
          confirm("Are you sure to Turn off Battery Saver");
    isBatterysaveon = true;
    }
})
let isFlightmodeOn = true;
let isWifiEnabled = true;

aeroplane.addEventListener("click", () => {
  if (isFlightmodeOn) {
    const ans = confirm("Are you sure to Turn ON Flight Mode?");
    if (ans) {
      aeroplane.style.backgroundColor = "#004bb5";
      wifi.style.opacity = "0.5";
      wifi.style.pointerEvents = "none";
      isWifiEnabled = false;
      isFlightmodeOn = false;
    }

  } else {
    const ans = confirm("Are you sure to Turn OFF Flight Mode?");
    if (ans) {
      aeroplane.style.backgroundColor = "rgba(62, 57, 57, 0.564)";
      wifi.style.opacity = "1";
      wifi.style.pointerEvents = "auto";
      isWifiEnabled = true;
      isFlightmodeOn = true;
    }
  }
});


let isWindowOn = true;

let w1 = gsap.timeline({ paused: true });

w1.from(windows, {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});

windowbtn.addEventListener("click", () => {
  if (isWindowOn) {
    windows.style.display = "flex";
    w1.play();
  } else {
    w1.reverse(); 
  }
  isWindowOn = !isWindowOn; 
});

let b1 = gsap.timeline({ paused: true });
let isBatteryDivOn = true;
b1.from(batteryDiv, {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});

batterybtn.addEventListener("click" , ()=>{
  if (isBatteryDivOn) {
    batteryDiv.style.scale = "1";
    b1.play();
  } else {
    b1.reverse(); 
  }
  isBatteryDivOn = !isBatteryDivOn; 
})






setInterval(()=>{
let date = new Date().toLocaleDateString('en-CA');
let time = new Date().toLocaleTimeString('en-GB');
   datee.innerHTML = date;
   timee.innerHTML = time;
   w.innerHTML = time;
},1000)


let isSettingDivOn = true;
settingbtn.addEventListener("click" , ()=>{
    if(isSettingDivOn){
      fullSetting.style.scale = "1";
      fullSetting.style.transition = "all 0.5s ease";
      isSettingDivOn = false;
    }else{
           fullSetting.style.scale = "0";
      fullSetting.style.transition = "all 0.3s ease";
      isSettingDivOn= true;
    }
})
const listItems = document.querySelectorAll(".settingSearch ul li");

  settingInputSearchBar.addEventListener("input", () => {
    const searchTerm = settingInputSearchBar.value.toLowerCase(); 

    listItems.forEach((li) => {
      const text = li.querySelector("h5").textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        li.style.display = "flex"; 
      } else {
        li.style.display = "none"; 
      }
    });
  });


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  loop: true 
});

