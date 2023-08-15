
let counter = 0;

const countervalue =   document.getElementById("counter-value")
const incrementvalue = document.getElementById("increment-btn")
const decrementvalue = document.getElementById("decrement-btn")
const resetbtn = document.querySelector("#reset")


incrementvalue.addEventListener('click',() =>{
  counter++;
  countervalue.innerHTML= counter
  
});


decrementvalue.addEventListener('click',() =>{
  counter--;
  countervalue.innerHTML= counter
  
});

resetbtn.addEventListener('click',reset)

function reset() {
	counter = 0;
	countervalue.innerHTML = counter;
}