let span = document.querySelector(".up");

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;

    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
