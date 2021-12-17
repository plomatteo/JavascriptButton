var add= document.getElementById("add1");
var remove= document.getElementById("remove1");
var number= document.getElementById("display");
var counter = 0;

add.addEventListener("click", addone);
remove.addEventListener("click", removeone);

function addone() {
  counter = counter+1;
  number.value=counter;
  number.innerHTML=number.value;
}

function removeone() {
  if (counter>0){
    counter = counter-1;
    number.value=counter;
    number.innerHTML=number.value; 
  }
}