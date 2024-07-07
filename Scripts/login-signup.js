const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.querySelector(".overlay-container");
const overlaySignIn = document.querySelector(".overlay-signin");
const overlaySignUp = document.querySelector(".overlay-signup");

console.log(signInButton, signUpButton, container);

let tl = gsap.timeline({
  paused: true,
});

tl.to(container, {
  left: 0,
  duration: 0.2,
  ease: "power2.in",
  borderRadius: "0px 20px 20px 0px",
});

function animateOverlay() {
  overlaySignUp.style.display = "none";
  overlaySignIn.style.display = "block";
  tl.play();
}

function reverseOverlay() {
  overlaySignUp.style.display = "block";
  overlaySignIn.style.display = "none";
  tl.reverse();
}

signUpButton.addEventListener("click", animateOverlay);
signInButton.addEventListener("click", reverseOverlay);
