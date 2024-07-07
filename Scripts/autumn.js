const leafContainers = document.querySelector(".leaf-main-container");
const leaves = document.querySelectorAll(".leaf");

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function animateLeaf(leaf) {
  body.style.backgroundImage =
    "url(https://png.pngtree.com/background/20230612/original/pngtree-autumn-picture-image_3174187.jpg)";
  leafContainers.style.display = "block";
  const duration = random(5, 10);
  const delay = random(0, 5);
  const startX = random(-100, window.innerWidth);
  const endX = random(-100, window.innerWidth);
  const endY = window.innerHeight + 100;

  gsap.fromTo(
    leaf,
    {
      x: startX,
      y: -200,
      rotation: random(-180, 180),
    },
    {
      x: endX,
      y: endY,
      rotation: random(-180, 180),
      duration: duration,
      delay: delay,
      ease: "none",
      onComplete: () => animateLeaf(leaf),
    }
  );
}



