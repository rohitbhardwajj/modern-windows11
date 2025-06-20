let arrow = document.querySelector(".upArrow");
let arrowSection = document.querySelector(".arrowSection");
let flag = true;

// Pehle display none hai
arrowSection.style.display = "none";

// Timeline banate hain par pause me
const tl = gsap.timeline({ paused: true });

// Step 1: Slide in animation
tl.from(arrowSection, {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});

arrow.addEventListener("click", () => {
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
});
