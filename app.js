// CALCULATOR
var input = document.getElementById ("input")
var valinput = document.getElementById("valinput");
function addvalue(num) {
    input.value += num;
    var answer = eval(input.value);
    valinput.value = answer;
}
function equalsto(){
    input.value = eval(valinput.value)
    valinput.value = ""
    if (input.value == "undefined") {
        input.value = "";
    }
}
function deletekey( ) {
    input.value = input.value.slice(0,-1)
    valinput.value = eval(input.value)
    if (valinput.value == "undefined") {
        valinput.value = "";
    }

}
function clearinput(){
    input.value =""

}
function clearvalinput(){
    valinput.value= ""
}