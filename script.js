let arrow = document.querySelector(".upArrow");
let arrowSection = document.querySelector(".arrowSection");
let arrowSectionTopChild = document.querySelectorAll(".arrowSectionTopChild");
let openCameraBtn = document.getElementById("openCamera");
let cameraFeed = document.getElementById("cameraFeed");
let camera = document.querySelector(".camera");
let faminus = document.querySelector(".cameraTopBarRht .fa-minus");
let faxmark = document.querySelector(".cameraTopBarRht .fa-xmark");
let faexpand = document.querySelector(".cameraTopBarRht .fa-expand");
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
let MicrosoftStore = document.querySelector(".MicrosoftStore");
let microsoftStoreBtn = document.querySelector(".microsoftStoreBtn");
let appDonwnload = document.querySelectorAll(".appDonwnload");
let Screen = document.querySelector(".allscreenApp");
let storeLi = document.querySelectorAll(".microSoftStoreEnd ul li");
let loaderAnimation = document.querySelector(".loaderAnimation");
let calcbtn = document.querySelector(".calcbtn");
let calculator = document.querySelector(".calculator");
let calculatorbuttons = document.querySelectorAll(".calculator ul li");
let displayCalc = document.querySelector(".calculator input");
let cutCalcbtn = document.querySelector(".calcMinMax i");

let flag = true;

const tl = gsap.timeline({ paused: true });

tl.from(arrowSection, {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});

let arrowMenu = () => {
  if (flag) {
    arrowSection.style.display = "block";
    tl.play(); // Play timeline (slide in)
    flag = false;
  } else {
    tl.reverse(); // Reverse timeline (slide out)
    tl.eventCallback("onReverseComplete", () => {
      arrowSection.style.display = "none"; // Fir display none
    });
    flag = true;
  }
};

let reverseArrowmenuBar = () => {
  tl.reverse(); // Reverse timeline (slide out)
  tl.eventCallback("onReverseComplete", () => {
    arrowSection.style.display = "none"; // Fir display none
  });
  flag = true;
};

arrow.addEventListener("click", () => {
  arrowMenu();
});

arrowSectionTopChild.forEach((val) => {
  let isOn = true;
  val.addEventListener("click", () => {
    if (isOn) {
      val.style.backgroundColor = val.dataset.color;
      isOn = false;
    } else {
      val.style.backgroundColor = "rgba(62, 57, 57, 0.564)";
      isOn = true;
    }
  });
});

let isCameraOn = true;

openCameraBtn.addEventListener("click", async () => {
  reverseArrowmenuBar();
  if (isCameraOn) {
    camera.style.transform = "scale(1)";
    camera.style.transition = "all 0.3s ease-in";
    camera.style.display = "flex";
    isCameraOn = false;
  } else {
    camera.style.transform = "scale(0)";
    camera.style.display = "none";
    camera.style.transition = "all 0.3s ease-out";
    isCameraOn = true;
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
  reverseArrowmenuBar();
  camera.style.transform = "scale(0)";
  camera.style.transition = "all 0.3s ease-out";
  camera.style.position = "absolute";
  camera.style.display = "block";
  isMinimized = true;
  minimizeIconsCam.style.display = "initial";
});
minimizeIconsCam.addEventListener("click", () => {
  reverseArrowmenuBar();
  camera.style.transform = "scale(1)";
  camera.style.display = "flex";
  camera.style.transition = "all 0.3s ease";
});
faxmark.addEventListener("click", () => {
  reverseArrowmenuBar();
  camera.style.transform = "scale(0)";
  camera.style.transition = "all 0.3s ease";
  minimizeIconsCam.style.display = "none";
  openCameraBtn.style.backgroundColor = "rgba(62, 57, 57, 0.564)";
  isCameraOn = true;
});

let isExpand = true;

faexpand.addEventListener("click", () => {
  reverseArrowmenuBar();

  if (isExpand) {
    camera.style.height = "50%";
    camera.style.width = "50%";
    cameraTopBarRht.style.width = "20%";
    isExpand = false;
  } else {
    camera.style.height = "100%";
    camera.style.width = "100%";
    cameraTopBarRht.style.width = "10%";
    isExpand = true;
  }
});





famoon.addEventListener("click", () => {
  overlay.style.opacity = "1";
  overlay.style.display = "block";

  camera.style.transition = "all 0.3s ease";
  camera.style.backgroundColor = "red";
});



let isBatterysaveon = true;
battery.addEventListener("click", () => {
  if (isBatterysaveon) {
    confirm("Are you sure to Turn on Battery Saver");
    isBatterysaveon = false;
  } else {
    confirm("Are you sure to Turn off Battery Saver");
    isBatterysaveon = true;
  }
});
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
  ease: "power2.out",
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
  ease: "power2.out",
});

batterybtn.addEventListener("click", () => {
  if (isBatteryDivOn) {
    batteryDiv.style.scale = "1";
    b1.play();
  } else {
    b1.reverse();
  }
  isBatteryDivOn = !isBatteryDivOn;
});

setInterval(() => {
  let date = new Date().toLocaleDateString("en-CA");
  let time = new Date().toLocaleTimeString("en-GB");
  datee.innerHTML = date;
  timee.innerHTML = time;
  w.innerHTML = time;
}, 1000);

let isSettingDivOn = true;
settingbtn.addEventListener("click", () => {
  if (isSettingDivOn) {
    fullSetting.style.scale = "1";
    fullSetting.style.transition = "all 0.5s ease";
    isSettingDivOn = false;
  } else {
    fullSetting.style.scale = "0";
    fullSetting.style.transition = "all 0.3s ease";
    isSettingDivOn = true;
  }
});
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
  loop: true,
});

let ifStoreOpen = true;

microsoftStoreBtn.addEventListener("click", () => {
  // ✅ Agar store open hona hai, tab loader dikhana hai
  if (ifStoreOpen) {
    let i = 1;
    if(bgColorStoreMin){
          MicrosoftStore.style.scale = "1";
         microsoftStoreBtn.style.backgroundColor = "transparent";
        MicrosoftStore.style.transition = "all 0.3s ease-in";
        ifStoreOpen = false;
    }else{
      loaderAnimation.style.display = "flex"; 
    }
    

    let discard = setInterval(() => {
      if (i < 100) {
        i++;
        console.log(i);
      } else {
        clearInterval(discard);
        loaderAnimation.style.display = "none"; // Hide loader

        MicrosoftStore.style.scale = "1";
         microsoftStoreBtn.style.backgroundColor = "transparent";
        MicrosoftStore.style.transition = "all 0.3s ease-in";
        ifStoreOpen = false;
      }
    }, 10);
  } else {
    // ❌ No loader needed on closing
    MicrosoftStore.style.scale = "0";
    MicrosoftStore.style.transition = "all 0.3s ease-out";
    ifStoreOpen = true;
  }
});


let allLinkArry = [
  "https://www.instagram.com/?flo=true",
  "https://web.whatsapp.com/",
  "#",
  "#",
  "https://www.linkedin.com/home",
  "#",
  "https://chatgpt.com/?model=auto",
  "https://chat.deepseek.com/",
  "#",
  "#",
  "#",
  "#",
];

appDonwnload.forEach((e, idx) => {
  const text = e.querySelector("h3");
  const btn = e.querySelector("button");
  const parentLi = e.closest("li");
  const img = parentLi.querySelector("img").src;

  btn.setAttribute("id", idx);
  let isRunning = false;

  btn.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    let i = 1;

    let a = setInterval(() => {
      if (i < 100) {
        i++;
        btn.style.backgroundColor = "red";
        btn.innerHTML = i + "%";
      } else {
        clearInterval(a);
        alert(`${text.textContent} download successfully ✅`);

        let data = `
          <div class="app1" id = ${idx}>
            <a href="${allLinkArry[parseInt(btn.id)]}" target="_blank">
              <img src="${img}" alt="">
            </a>
            <p>${text.textContent}</p>
          </div>`;

        document.querySelector(".allscreenApp").innerHTML += data;
        btn.innerHTML = "Downloaded";
        btn.style.backgroundColor = "rgb(125, 162, 98)";
      }
    }, 50);
  });
});

let calOpen = true;
calcbtn.addEventListener("click", () => {
  if (calOpen) {
    calculator.style.scale = "1";
    calculator.style.transition = "all 0.3s ease-in";
    calOpen = false;
  } else {
    calculator.style.scale = "0";
    calculator.style.transition = "all 0.3s ease-out";
    calOpen = true;
  }
});

calculatorbuttons.forEach((e) => {
  let allCalButton = e.querySelector("button");

  allCalButton.addEventListener("click", () => {
    const value = allCalButton.innerHTML;

    if (value === "C") {
      displayCalc.value = "";
      return;
    }

    if (value === "DEL") {
      displayCalc.value = displayCalc.value.slice(0, -1);
      return;
    }

    if (value === "=") {
      try {
        displayCalc.value = eval(displayCalc.value);
      } catch {
        displayCalc.value = "Error";
      }
      return;
    }

    if (displayCalc.value == 0) displayCalc.value = "";
    displayCalc.value += value;
  });
});

cutCalcbtn.addEventListener("click", () => {
  calculator.style.scale = "0";
  calculator.style.transition = "all 0.3s ease-out";
  calOpen = true;
});

let rghtClick = document.querySelector(".rghtClick");

document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // Right click menu disable

  rghtClick.style.top = e.clientY + "px";
  rghtClick.style.left = e.clientX + "px";
  rghtClick.style.scale = 1;
  // rghtClick.style.transition = "all 0.3s ease-in";
});

document.addEventListener("click", function (e) {
   rghtClick.style.scale = 0;
});
let wallpaperMenuOpen = true;
let wallaperBtn = document.querySelector(".wallaperBtn");
let wallpaperMenu = document.querySelector(".wallpaperMenu");

wallaperBtn.addEventListener("click", () => {
  if (wallpaperMenuOpen) {
    wallpaperMenu.style.scale = 1;
    wallpaperMenu.style.transition = "all 0.3s ease-in";
    wallpaperMenuOpen = false;
  } else {
    wallpaperMenu.style.scale = 0;
    wallpaperMenu.style.transition = "all 0.3s ease-out";
    wallpaperMenuOpen = true;
  }
});
let SetWallpaper = document.querySelector(".SetWallpaper");
let ImageUrl = document.querySelector(".ImageUrl");
let body = document.body;

SetWallpaper.addEventListener("click", () => {
  let setUrl = ImageUrl.value.trim();
  if (!setUrl) {
    alert("Please enter a valid image URL");
    return;
  }

  let i = 1;
  loaderAnimation.style.display = "flex";

  let wallpIntervalCut = setInterval(() => {
    if (i < 100) {
      i++;
    } else {
      clearInterval(wallpIntervalCut);
      loaderAnimation.style.display = "none";
      body.style.backgroundImage = `url('${setUrl}')`;
      alert("Wallpaper Set Succesfully ✅ ✅ ✅ ");
      wallpaperMenu.style.scale = 0;
      wallpaperMenu.style.transition = "all 0.3s ease-out";
      wallpaperMenuOpen = true;
    }
  }, 30);
});

let wallpaperMenuCut = document.querySelector(".wallpaperMenuCut .fa-xmark")

wallpaperMenuCut.addEventListener("click" , ()=>{
        wallpaperMenu.style.scale = 0;
    wallpaperMenu.style.transition = "all 0.3s ease-out";
    wallpaperMenuOpen = true;
})


let cameraBtn = document.querySelector(".cameraBtn");

cameraBtn.addEventListener("click" , async ()=>{
  if (isCameraOn) {
    camera.style.transform = "scale(1)";
    camera.style.transition = "all 0.3s ease-in";
    camera.style.display = "flex";
    isCameraOn = false;
  } else {
    camera.style.transform = "scale(0)";
    camera.style.display = "none";
     camera.style.transition = "all 0.3s ease-out";
    isCameraOn = true;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraFeed.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
    alert("Camera access allow karo");
  }
})


let storeMin = document.querySelector(".storeMinMaxCut .fa-minus");
let storeMax = document.querySelector(".storeMinMaxCut .fa-expand");
let storeCut= document.querySelector(".storeMinMaxCut .fa-xmark");

let bgColorStoreMin = false;
storeMin.addEventListener("click" , ()=>{
    MicrosoftStore.style.scale = "0";
    ifStoreOpen = true;
    bgColorStoreMin = true;
    microsoftStoreBtn.style.backgroundColor = "rgba(223, 86, 36, 0.566)";

})

let isStoreMax = true;
storeMax.addEventListener("click" , ()=>{

  if(isStoreMax){
    MicrosoftStore.style.width = "50%";
    MicrosoftStore.style.height = "50%";
     isStoreMax = false;
  }else{
    MicrosoftStore.style.width = "100%";
    MicrosoftStore.style.height = "100%";
    isStoreMax = true;
  }
})
storeCut.addEventListener("click" , ()=>{
    MicrosoftStore.style.scale = "0";
    MicrosoftStore.style.transition = "all 0.3s ease-out";
    ifStoreOpen = true;
  bgColorStoreMin = false;
})



let LoginBtn = document.querySelector(".LoginBtn");
let LoginName = document.querySelector(".LoginName");
let LoginVideo = document.querySelector(".Login");
let Loginvdo = document.querySelector(".Login video");
let LogInput = document.querySelector(".LoginName input");
let CarVideoWallpaper = document.querySelector(".img");



// LoginBtn.addEventListener("click", () => {
//   if (LogInput.value.trim() !== "") {
//     LoginName.style.display = "none";
//     LoginVideo.style.display = "flex";
//     Loginvdo.play();


   
//     Loginvdo.addEventListener("ended", () => {
//       LoginVideo.style.transition = "all 0.3s ease-out";
//       LoginVideo.style.display = "none";
//       CarVideoWallpaper.play();
//       CarVideoWallpaper.muted = true;
//       CarVideoWallpaper.loop = true;
//     });

//   } else {
//     alert("Abe Jab Kehra hu Name Enter kar 😡😡😡😡");
//   }
// });

let fileManager = document.querySelector(".fileManager");
let filebtn = document.querySelector(".filebtn");

filebtn.addEventListener("click" , ()=>{
    fileManager.style.scale = 0;
    fileManager.style.transition = "all 0.3s ease-in";
})
 




// https://wallpapercat.com/w/full/8/e/7/607651-3840x2160-desktop-4k-sports-car-background-image.jpg
