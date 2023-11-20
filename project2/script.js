
const  input = document.querySelector("input");
const  counter = document.querySelector(".counter");
const  progresss = document.querySelector(".progresss");
const  inputAtrr = input.getAttribute("maxlength");


counter.innerHTML = inputAtrr ;

input.oninput = function(){

counter.innerHTML = inputAtrr - this.value.length;

counter.innerHTML == 0 ? counter.classList.add("zero") : counter.classList.remove("zero");



progresss.style.width = `${(this.value.length * 100) / inputAtrr}%`;
}





















