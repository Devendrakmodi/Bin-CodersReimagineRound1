const apiKey = `2cc03a709abe3ea0bf4aec6e62b3cf4a`;

function chakDeUper() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.querySelector(".count");
  let count = 1;
  const interval = setInterval(() => {
    counter.textContent = count;
    count++;
    if (count > 7) {
      count = 1;
    }
  }, 1000);
});

/////////////////////////////////////////////////////

function defaultSeasonMode() {
  async function GetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const city = await getCityName(latitude, longitude);
      if (city) {
        await getWeather(city);
      }
    }

    async function getCityName(latitude, longitude) {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.address && data.address.city) {
          return data.address.city;
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }

  const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return showWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const showWeather = (data) => {
    if (data.cod == "404") {
      return console.log("City not found");
    }

    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition.includes("clouds")) {
      leaves.forEach((leaf) => animateLeaf(leaf));
      console.log("Cloudy animation triggered");
    } else if (weatherCondition.includes("snow")) {
      animateSnow();
      console.log("Snow animation triggered");
    } else if (weatherCondition.includes("sun")) {
      animateSnow();
      console.log("Summer animation triggered");
    } else if (weatherCondition.includes("rain")) {
      console.log("Rainy animation triggered");
    }
  };

  GetLocation();
}

defaultSeasonMode();
/////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.querySelector(".count");
  let count = 1;
  const interval = setInterval(() => {
    counter.textContent = count;
    count++;
    if (count > 7) {
      // delay:1;
      count = 1;
    }
  }, 1000);
});
let mm = gsap.matchMedia();
var tl = gsap.timeline();
const spinner = document.querySelector(".spinner");
const loading = document.querySelector(".loader");

gsap.to(spinner, {
  duration: 1,
  rotate: 360,
  ease: "none",
  repeat: -1,
});

function hideLoader() {
  setTimeout(() => {
    gsap.to(loading, {
      opacity: 0,
      duration: 1,
      display: "none",
    });
    chakDeUper();
  }, 2000);
}

hideLoader();
/////////////////////////////////////////////////////
tl.from(".landing", {
  opacity: 0,
});
/////////////////////////////////////////////////////

tl.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1, // Duration of 1 second
  ease: "power2.out", // Easing function for a smooth effect
  delay: 2,
});
tl.from(".logo", {
  opacity: 0,
  scale: 0,
  // duration: 0.7
});
tl.from(".navlinks li ", {
  opacity: 0,
  y: -100,
  stagger: 0.5,
  x: -100,
});
tl.from(".navbar .humberger ", {
  opacity: 0,
  stagger: 0.5,
  x: 100,
});
tl.from(".navbar-right  .mode-btn .light-btn i", {
  opacity: 0,
  y: -100,
  x: 100,
  // duration:0.5
});
tl.from(".navbar-right  .mode-btn .dark-btn i", {
  opacity: 0,
  y: -100,
  x: 100,
  // duration:0.5,
});
tl.from(".search-input", {
  opacity: 0,
  y: -100,
  x: 100,
  stagger: 0.5,
});
tl.from(".signin-signup button ", {
  opacity: 0,
  y: -100,
  stagger: 0.5,
  x: 100,
  // duration:0.7
});

/////////////////////////////////////////////////////

tl.from(".main .video-box video", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  // rotate:180,
  // zindex:0
});
tl.from("text-center h3", {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});

/////////////////////////////////////////////////////

const body = document.body;
const cursor = document.querySelector(".cursor");
const point = document.querySelector(".point");
document.addEventListener("mousemove", function (e) {
  const left = e.clientX;
  const top = e.clientY;
  gsap.to(point, {
    x: left,
    y: top,
    ease: "ease.in",
  });

  gsap.to(cursor, {
    x: left,
    y: top,
    duration: 1,
    fill: "forward",
    ease: "ease.in",
  });
  cursor.style.display = "block";
  point.style.display = "block";
});

document.addEventListener("mouseleave", function (e) {
  cursor.style.display = "none";
  point.style.display = "none";
});

/////////////////////////////////////////////////////
// add a media query. When it matches, the associated function will run
mm.add("(min-width: 500px)", () => {
  // this setup code only runs when viewport is at least 800px wide
  gsap.to(".page-1  h3", {
    y: -100,
    duration: 2,
    opacity: 0,
    stagger: 0.8,
    scrollTrigger: {
      trigger: ".page-1 .text-center h3",
      scroller: "body",
      start: "top 20%",
      end: "top 0%",
      // markers: true,
      scrub: true,
    },
  });
});
mm.add("(min-width: 320px)", () => {
  // this setup code only runs when viewport is at least 800px wide
  gsap.to(".page-1  h3", {
    y: -100,
    duration: 2,
    opacity: 0,
    stagger: 0.8,
    scrollTrigger: {
      trigger: ".page-1 .text-center h3",
      scroller: "body",
      start: "top 31%",
      end: "top 0%",
      // markers: true,
      scrub: true,
    },
  });
});

gsap.registerPlugin(ScrollTrigger);
mm.add("(min-width: 768px)", () => {
  gsap.to(".page-2-inner", {
    translateX: "-300vw",
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page-2",
      scroller: "body",
      pin: true,
      scrub: true,
      // markers: true,
      start: "top top",
      end: () => "+=" + document.querySelector(".page-2").offsetWidth * 2,
    },
  });
});

mm.add("(min-width: 650px) and (max-width: 768px)", () => {
  gsap.to(".page-2-inner", {
    translateX: "-450vw",
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page-2",
      scroller: "body",
      pin: true,
      scrub: true,
      // markers: true,
      start: "top top",
      end: () => "+=" + document.querySelector(".page-2").offsetWidth * 2,
    },
  });
});
mm.add("(min-width: 500px) and (max-width: 650px)", () => {
  gsap.to(".page-2-inner", {
    translateX: "-600vw",
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page-2",
      scroller: "body",
      pin: true,
      scrub: true,
      // markers: true,
      start: "top top",
      end: () => "+=" + document.querySelector(".page-2").offsetWidth * 2,
    },
  });
});
mm.add("(min-width: 320px) and (max-width: 500px)", () => {
  gsap.to(".page-2-inner", {
    translateX: "-900vw",
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page-2",
      scroller: "body",
      pin: true,
      scrub: true,
      // markers: true,
      start: "top top",
      end: () => "+=" + document.querySelector(".page-2").offsetWidth * 2,
    },
  });
});

gsap.to(".page-2-inner h2 span", {
  duration: 1,
  color: "white",
  scrollTrigger: {
    trigger: ".page-2-inner h2 span",
    scroller: "body",
    scrub: true,
    // markers:true,
    start: "top 50%",
    end: "top 10%",
  },
});

//////////////////////////////////////////////////////
const loginbtn = document.querySelector(".sign-in");
const logInSignUpPage = document.querySelector(".login-signup-page");
const logInPage = document.querySelector(".login-user");
const signUpAnchor = document.querySelector(".login-user p a");
const logInAnchor = document.querySelector(".signup-user p a");
const signUpPage = document.querySelector(".signup-user");
const button = document.querySelector(".login-container button");
const close = document.querySelector(".close-icons span");

loginbtn.addEventListener("click", function () {
  logInSignUpPage.style.display = "inline-flex";
  dispalyLogInSignUp();
  logInPage.style.display = "inline-flex";
  signUpPage.style.display = "none";
});
signUpAnchor.addEventListener("click", function () {
  signUpPage.style.display = "inline-flex";
  logInPage.style.display = "none";
});
logInAnchor.addEventListener("click", function () {
  signUpPage.style.display = "none";
  logInPage.style.display = "inline-flex";
});
close.addEventListener("click", function () {
  logInSignUpPage.style.display = "none";
});

function dispalyLogInSignUp() {
  let tl = gsap.timeline()
  tl.from(".login-signup-page", {
    duration: 0.2,
    opacity: 0,
    ease: "ease-in",
  });
  tl.from(".login-signup-container", {
    duration: 1,
    scale: 0,
    ease: "ease-in",
  });
  logInSignUpPage = false;

  if (logInSignUpPage == true) {
    body.style.overflow = "hidden"
    body.style.height = "100vh"
  } else if ((!logInSignUpPage)) {
    body.style.overflow = "auto"
    body.style.height = "100%"
  }
}
