const snowflakesContainer = document.querySelector(
  ".snowflakes-main-container"
);
const numberOfSnowflakes = 50;

for (let i = 0; i < numberOfSnowflakes; i++) {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflakesContainer.appendChild(snowflake);
}

const snowflakes = document.querySelectorAll(".snowflake");

function animateSnowflake(snowflake) {
  snowflakesContainer.style.display = "block";
  body.style.backgroundImage =
    "url(https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * -window.innerHeight;
  const duration = Math.random() * 5 + 5;
  const delay = Math.random() * 2;

  gsap.set(snowflake, {
    x: randomX,
    y: randomY,
    opacity: Math.random(),
  });

  gsap.to(snowflake, {
    y: window.innerHeight + 100,
    x: "+=100",
    ease: "none",
    duration: duration,
    delay: delay,
    repeat: -1,
  });
}

function animateSnow() {
  snowflakes.forEach((snowflake) => {
    animateSnowflake(snowflake);
  });
  console.log("function is working in winter.js")
}

