//variabili che selezionano +,- e input del contatore
var addCounter1 = document.getElementById("addCounter1");
var removeCounter1 = document.getElementById("removeCounter1");
var counter = document.getElementById("displayCounter1");

//variabili che selezionano +,- e input dello step
var addStep1 = document.getElementById("addStep1");
var removeStep1 = document.getElementById("removeStep1");
var step = document.getElementById("displayStep1");

//SEQUENZA DI LISTENER
//Listener che ascolta i cambiamenti del campo input e setta a 0 il counter e a 1 lo step, nel caso in cui l'utente inserisse numeri inferiori
counter.addEventListener("change", setCounter);
step.addEventListener("change", setStep);

//Listener che ascoltano i click sui bottoni del contatore e richiama le funzioni per incrementarlo o decrementarlo
addCounter1.addEventListener("click", addCounter);
removeCounter1.addEventListener("click", removeCounter);

//Listener che ascoltano i click sui bottoni dello step e richiama le funzioni per incrementarlo o decrementarlo
addStep1.addEventListener("click", addStep);
removeStep1.addEventListener("click", removeStep);

//Funzioni per incrementare e decrementare lo step e il counter
function addCounter() {
  counter.value=Number(counter.value)+Number(step.value);
  console.log(`${step.value} and ${counter.value}`);
}
function removeCounter() {
  if (Number(counter.value)>=Number(step.value)) {
    counter.value=Number(counter.value)-Number(step.value);
    console.log(`${step.value} and ${counter.value}`);
  }
}
function addStep () {
  step.value++;
}
function removeStep() {
  if (step.value > 1) {
    step.value--;
  }
}

//Funzioni che settano a 0 il counter e a 1 lo step, nel caso in cui l'utente inserisse numeri inferiori
function setCounter () {
  if (counter.value<0){
      counter.value=0;
  }
}
function setStep () {
  if (step.value<1){
      step.value=1;
  }
}
