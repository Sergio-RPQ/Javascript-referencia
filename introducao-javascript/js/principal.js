
let trPaciente = document.querySelector(".paciente");
console.log(trPaciente);
let valorPeso = parseFloat(trPaciente.querySelector(".info-peso").textContent);
let valorAltura = parseFloat(trPaciente.querySelector(".info-altura").textContent);
console.log(`Peso : ${valorPeso}  Altura: ${valorAltura}`);
let imc = valorPeso/(valorAltura * valorAltura);
console.log(imc);
let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);




// Calculando o IMC dos pacientes da tabela
for(cont = 0; cont < pacientes.length; cont++){
    let valorPeso = parseFloat(pacientes[cont].querySelector(".info-peso").textContent);
    let valorAltura = parseFloat(pacientes[cont].querySelector(".info-altura").textContent);
    let imc = valorPeso/(valorAltura * valorAltura);
    pacientes[cont].querySelector(".info-imc").textContent = imc.toFixed(2);
}