let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((b) => {
    b.addEventListener('click', () => {
      b.classList.contains('decrease')? count-- :
      b.classList.contains('increase')? count++ : count = 0;
      value.style.color = count > 0 ? 'red' : count < 0 ? 'blue' : '';
      value.innerHTML = count;
    })
})



