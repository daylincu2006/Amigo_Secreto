// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigoSecreto = "";
let maxAmigos = 5;
let amigo = "";
let intentos= 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
       if(document.querySelector('#amigo').value!=''){
         let amigo = document.querySelector('#amigo').value;
         if(listaAmigos.length<maxAmigos){
          if(listaAmigos.includes(amigo)){
            eliminar();
            asignarTextoElemento('h2', 'Ya se encuentra en la lista');
            }else{
            listaAmigos.push(amigo);
            document.getElementById('listaAmigos').innerHTML=listaAmigos;
            console.log(listaAmigos);
            eliminar();
            asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
            intentos+1; 
            }
           }else{
          if(listaAmigos.length==maxAmigos){
            document.getElementById('agregar').setAttribute("disabled","true");
            asignarTextoElemento('h2', ' Ha completado su lista. Investiga  ahora tu amigo Secreto');
            eliminar();
           }
          } 
        }else{
        asignarTextoElemento('h2', 'Por favor inserte un nombre'); 
        } 
        actualizarLista();
        return listaAmigos;
      
      }


function actualizarLista(){
   var nuevaListaAmigos= document.getElementById('listaAmigos').value;
   document.getElementById('listaAmigos').innerHTML="";
   var liAmigos = document.createElement("li");
   for(var i=0;i<nuevaListaAmigos.legth; i++){
   listaAmigos[i]=document.createElement("li");
   document.querySelector("#listaAmigos").appendChild(liAmigos);
   return nuevaListaAmigos;
   }
}

function eliminar() {
    document.querySelector('#amigo').value = '';
    
       }

function sortearAmigo(){
    listaAmigos.legth==maxAmigos;
    let indice =Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto=listaAmigos[indice];
    console.log(amigoSecreto);
    document.getElementById('resultado').innerHTML=amigoSecreto;
    asignarTextoElemento('h2', 'Amigo secreto')
    document.getElementById('sorteo').setAttribute("disabled","true");
    return amigoSecreto;
  }       