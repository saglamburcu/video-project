// loading
let video = document.querySelector("video")
let preLoader = document.querySelector(".pre-loader")

window.addEventListener("load", function() {
  preLoader.classList.add("hidden-preloader")
})

// click
let button = document.querySelector("button")
let switchBtn = document.querySelector(".switch")

button.addEventListener("click", function() {
  switchBtn.classList.toggle("switch-right")
  if (switchBtn.classList.contains("switch-right")) {
    video.pause()
  } else {
    video.play()
  }
  
})