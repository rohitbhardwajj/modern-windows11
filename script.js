let arrow = document.querySelector(".upArrow");
let arrowSection = document.querySelector(".arrowSection");
let arrowSectionTopChild = document.querySelectorAll(".arrowSectionTopChild");
let openCameraBtn = document.getElementById("openCamera");
let cameraFeed = document.getElementById("cameraFeed");
let camera = document.querySelector(".camera");
let faminus = document.querySelector(".fa-minus");
let faxmark = document.querySelector(".fa-xmark");
let minimizeIconsCam = document.querySelector(".minimizeIconsCam");
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
      if(isCameraOn){
        camera.style.transform = "scale(1)";
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
  camera.style.transform = "scale(0)";
  camera.style.transition = "all 0.3s ease";
  camera.style.position = "absolute";
  camera.style.display = "block";
  isMinimized = true;
  minimizeIconsCam.style.display = "initial";
});
minimizeIconsCam.addEventListener("click", ()=>{
   camera.style.transform = "scale(1)";
     camera.style.display = "flex";
  camera.style.transition = "all 0.3s ease";
})
faxmark.addEventListener("click", ()=>{
   camera.style.transform = "scale(0)";
    camera.style.transition = "all 0.3s ease";
     minimizeIconsCam.style.display = "none";
     openCameraBtn.style.backgroundColor = "rgba(62, 57, 57, 0.564)";
      isCameraOn= true;
})

