// let container = document.getElementById("container");
// let slider = document.getElementById("slider");
// let slides = document.getElementsByClassName("slide").length;
// let buttons = document.getElementsByClassName("btn");

// let currentPosition = 0;
// let currentMargin = 0;
// let slidesPerPage = 0;
// let slidesCount = slides - slidesPerPage;
// let containerWidth = container.offsetWidth;
// let prevKeyActive = false;
// let nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//   containerWidth = container.offsetWidth;
//   setParams(containerWidth);
// }

// function setParams(w) {
//   if (w < 551) {
//     slidesPerPage = 1;
//   } else {
//     if (w < 901) {
//       slidesPerPage = 2;
//     } else {
//       if (w < 1101) {
//         slidesPerPage = 3;
//       } else {
//         slidesPerPage = 4;
//       }
//     }
//   }
//   slidesCount = slides - slidesPerPage;
//   if (currentPosition > slidesCount) {
//     currentPosition -= slidesPerPage;
//   }
//   currentMargin = -currentPosition * (100 / slidesPerPage);
//   slider.style.marginLeft = currentMargin + "%";
//   if (currentPosition > 0) {
//     buttons[0].classList.remove("inactive");
//   }
//   if (currentPosition < slidesCount) {
//     buttons[1].classList.remove("inactive");
//   }
//   if (currentPosition >= slidesCount) {
//     buttons[1].classList.add("inactive");
//   }
// }

// setParams();

// function slideRight() {
//   if (currentPosition != 0) {
//     slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
//     currentMargin += 100 / slidesPerPage;
//     currentPosition--;
//   }
//   if (currentPosition === 0) {
//     buttons[0].classList.add("inactive");
//   }
//   if (currentPosition < slidesCount) {
//     buttons[1].classList.remove("inactive");
//   }
// }

// function slideLeft() {
//   if (currentPosition != slidesCount) {
//     slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
//     currentMargin -= 100 / slidesPerPage;
//     currentPosition++;
//   }
//   if (currentPosition == slidesCount) {
//     buttons[1].classList.add("inactive");
//   }
//   if (currentPosition > 0) {
//     buttons[0].classList.remove("inactive");
//   }
// }

// // dark mode
// function darkMode() {
//   const element = document.body;
//   element.classList.toggle("dark-mode");
// }

const slider = document.querySelector(".parent");
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) {
    return;
  }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener("mousedown", startDragging, false);
slider.addEventListener("mouseup", stopDragging, false);
slider.addEventListener("mouseleave", stopDragging, false);