var input = document.getElementById("dinero");
var monedaInicio = document.getElementById("selectMon1");
var monedaFinal = document.getElementById("selectMon2");
var valor = document.getElementById("dinero");
var monedaInicioValue , monedaFinalValue 

//Menú desplegable
var select = document.getElementById("selectMon1");
var moneda = ['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

for(var i = 0; i < moneda.length; i++) {
  var opt = moneda[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("selectMon2");
var moneda = ['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

for(var i = 0; i < moneda.length; i++) {
    var opt = moneda[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

//Validaciones
function validar() {
  if (input.value > 0 )
  alert('El valor ingresado se puede convertir');
  else 
  alert('El valor ingresado no se puede convertir. Revisar');  
}

//Conversión
function convertir() {
    alert('Se ha dado clic al botón convertir :D ');

    Resultado(input);
  }



function Resultado(){
    
    //Valores iniciales
    monedaInicioValue = monedaInicio.value;
    monedaFinalValue = monedaFinal.value;
    parametro=input.value;
    console.log(input.value);
    console.log(monedaInicioValue);
    console.log(monedaFinalValue);

  
    //Comparar el valor de entrada y de salida y usar la fórmula

  if (monedaInicioValue === "Dolar" && monedaFinalValue === "Dolar"){
    console.log(parametro + "USD");
  }
  else if (monedaInicioValue === "Dolar" && monedaFinalValue === "Peso Mexicano") {
    console.log((parametro * 20.842209) +"MX");
  }
  else if (monedaInicioValue === "Dolar" && monedaFinalValue === "Peso Colombiano"){
    console.log((parametro * 3909.2656) +"COP");
  }
  else if (monedaInicioValue === "Dolar" && monedaFinalValue === "Euro"){
    console.log((parametro * 0.88636394)+"EUR");
  }
  else if (monedaInicioValue === "Dolar" && monedaFinalValue === "Libra Esterlina"){
    console.log((parametro * 0.74382481)+"GBP");
  }

  if (monedaInicioValue === "Peso Mexicano" && monedaFinalValue === "Dolar"){
    console.log(parametro * 0.04797956 + "USD");
  }
  else if (monedaInicioValue === "Peso Mexicano" && monedaFinalValue === "Peso Mexicano") {
    console.log(parametro +"MXN");
  }
  else if (monedaInicioValue === "Peso Mexicano" && monedaFinalValue === "Peso Colombiano"){
    console.log((parametro * 187.56423) +"COP");
  }
  else if (monedaInicioValue === "Peso Mexicano" && monedaFinalValue === "Euro"){
    console.log((parametro * 0.042527264)+"EUR");
  }
  else if (monedaInicioValue === "Peso Mexicano" && monedaFinalValue === "Libra Esterlina"){
    console.log((parametro * 0.035688532)+"GBP");
  }

  if (monedaInicioValue === "Peso Colombiano" && monedaFinalValue === "Dolar"){
    console.log(parametro * 0.00025580336 + "USD");
  }
  else if (monedaInicioValue === "Peso Colombiano" && monedaFinalValue === "Peso Mexicano") {
    console.log((parametro *0.005331507) +"MXN");
  }
  else if (monedaInicioValue === "Peso Colombiano" && monedaFinalValue === "Peso Colombiano"){
    console.log(parametro + "COP");
  }
  else if (monedaInicioValue === "Peso Colombiano" && monedaFinalValue === "Euro"){
    console.log((parametro * 0.0002267344)+"EUR");
  }
  else if (monedaInicioValue === "Peso Colombiano" && monedaFinalValue === "Libra Esterlina"){
    console.log((parametro * 0.00019027366)+"GBP");
  }

  if (monedaInicioValue === "Euro" && monedaFinalValue === "Dolar"){
    console.log((parametro* 1.1282071) + "USD")
  }
  else if (monedaInicioValue === "Euro" && monedaFinalValue === "Peso Mexicano") {
    console.log((parametro * 23.514359) +"MXN");
  }
  else if (monedaInicioValue === "Euro" && monedaFinalValue === "Peso Colombiano"){
    console.log((parametro * 4410.4583) +"COP");
  }
  else if (monedaInicioValue === "Euro" && monedaFinalValue === "Euro"){
    console.log(parametro+"EUR");
  }
  else if (monedaInicioValue === "Euro" && monedaFinalValue === "Libra Esterlina"){
    console.log((parametro * 0.83919184)+"GBP");
  }

  if (monedaInicioValue === "Libra Esterlina" && monedaFinalValue === "Dolar"){
    console.log((parametro* 1.3443943) + "USD")
  }
  else if (monedaInicioValue === "Libra Esterlina" && monedaFinalValue === "Peso Mexicano") {
    console.log((parametro * 28.020147) +"MXN");
  }
  else if (monedaInicioValue === "Libra Esterlina" && monedaFinalValue === "Peso Colombiano"){
    console.log((parametro * 5255.5841) +"COP");
  }
  else if (monedaInicioValue === "Libra Esterlina" && monedaFinalValue === "Euro"){
    console.log((parametro*1.1916186)+"EUR");
  }
  else if (monedaInicioValue === "Libra Esterlina" && monedaFinalValue === "Libra Esterlina"){
    console.log(parametro +"GBP");
  }



   




   




}