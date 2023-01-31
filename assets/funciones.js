document.getElementById("button-gracias").onclick = function(){
    console.log("evento click");
    document.getElementById("gracias").innerHTML = "Gracias"
}

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (Event) => {
    Event.preventDefault();
    //console.log(formulario.querySelector('input'));
    const formDatos = new FormData(formulario);
    //console.log(formDatos);
    //for(item of formDatos){
    //    console.log(item)
    //}
    const Obj = Object.fromEntries(formDatos);
    //console.log(Obj);
    const Json = JSON.stringify(Obj);
    console.log(Json);
    formulario.reset(); 
    console.log("Se envio el formulario!")
})