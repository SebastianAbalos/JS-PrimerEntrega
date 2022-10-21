//Declaracion de variables
let boton = document.getElementById ("promediar");
let clear =  document.getElementById ("clear");
let valor = document.getElementById("prom");
let promedio;
let aprobado = document.getElementById("aprobado");
let recuperar = document.getElementById("recuperar");
let recursar = document.getElementById("recursar");
let resultado;

let toggle = document.getElementById("toggle");
let label_toggle=document.getElementById("label_toggle");
let container=document.getElementById("container");

toggle.addEventListener("change",(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle("dark");
    if (checked==true){
        label_toggle.innerHTML='<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color='yellow';
    }else{
        label_toggle.innerHTML='<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color='rebeccapurple';
    }
})

//Esconde todas las alertas 
aprobado.hidden=true;
recuperar.hidden=true;
recursar.hidden=true;

//Llamados de los metodos al hacer click
boton.addEventListener('click',promediarNotas);
clear.addEventListener('click',limpiarPantalla);

//Funcion que se ocupa de la validacion de valor entre 1 - 10 al perder el foco de los textbox
function validar(){ 
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let n3=parseInt(document.getElementById('n3').value);
    
    if (n1<1 || n1>10 ){
        document.getElementById("n1").value = "";
        alert("Debes ingresar un valor entre 1 y 10");
        document.getElementById('n1').focus(this);
    }
    if (n2<1 || n2>10 ){
        document.getElementById("n2").value = "";
        alert("Debes ingresar un valor entre 1 y 10");
        document.getElementById('n2').focus(this);
    }
    if (n3<1 || n3>10 ){
        document.getElementById("n3").value = "";
        alert("Debes ingresar un valor entre 1 y 10");
        document.getElementById('n3').focus(this);
    }
}

//Funcion para realizar la cuenta matematica del promedio, esto dependiendo la nota activa la alerta
function promediarNotas(){
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let n3=parseInt(document.getElementById('n3').value);


    promedio=(n1+n2+n3)/3;
    document.getElementById('prom').value=promedio;
    
    if (promedio>=7 && promedio<=10){
        aprobado.hidden=false;
        aprobado.innerHTML=`Usted aprobo la materia`;
    }
    else if(promedio>3 && promedio<7){
        recuperar.hidden=false;
        recuperar.innerHTML=`Usted debera recuperar la materia`;       
    }
    else if(promedio>=1 && promedio<=3){
        recursar.hidden=false;
        recursar.innerHTML=`Usted debera recursar la materia`;       
    }
    else{
        alert("Los datos ingresados fueron incorrectos")
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        document.getElementById("n3").value = "";
        document.getElementById("prom").value = "";
    }
}

//Funcion para limpiar todo los campos para volver a cargar nuevas notas
function limpiarPantalla(){
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("prom").value = "";
    aprobado.innerHTML=``;
    recuperar.innerHTML=``;       
    recursar.innerHTML=``;
    aprobado.hidden=true;
    recuperar.hidden=true;
    recursar.hidden=true;
}


