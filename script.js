 /* window.oninput = function(event){
    var campo = event.target.id;

     if(campo == "num1"){
        document.querySelector('#num2').value = document.querySelector('#num1').value;
     }else if(campo == "num2"){
         document.querySelector('#num1').value = document.querySelector('#num2').value;
    }

    console.log(num1.value)
} */

    const input = document.querySelector("#num1")

    function alteranum(){
    document.querySelector('#num1').value = "Abacate"
    }