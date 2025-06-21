let arrow = document.querySelector(".upArrow");
let arrowSection = document.querySelector(".arrowSection");
let arrowSectionTopChild = document.querySelectorAll(".arrowSectionTopChild");
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

let openCameraBtn = document.getElementById("openCamera");
let cameraFeed = document.getElementById("cameraFeed");

openCameraBtn.addEventListener("click", async () => {
  try {
    // Camera access lene ki request
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    // Video tag me stream dikhana
    cameraFeed.srcObject = stream;
  } catch (error) {
    console.error("Camera access denied:", error);
    alert("Camera access allow karo");
  }
});


