document.body.style.backgroundColor = 'black'

document.addEventListener('mousemove', (e) => {
  let circle = document.querySelector(".circle");
  circle.style.left = `${e.pageX}px`
  circle.style.top = `${e.pageY}px`
});