
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

    if (imc > 25){
        pacientes[cont].classList.add("paciente-invalido");
    }

}

//Funcionamento botão adicionar paciente
let btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    //console.log("Oi");

    let formNovoPaciente = document.querySelector("#form-adiciona");

    //retorna todo o elemento input
    let nomePaciente = formNovoPaciente.nome
    let pesoPaciente = formNovoPaciente.peso
    let alturaPaciente = formNovoPaciente.altura 
    let gorduraPaciente = formNovoPaciente.gordura

    //pega os valores dos inputs
    let nomeValor = nomePaciente.value
    let pesoValor = pesoPaciente.value 
    let alturaValor = alturaPaciente.value 
    let gorduraValor = gorduraPaciente.value 


    //console.log(`${nomeValor} ${pesoValor} ${alturaValor} ${gorduraValor}`)
    // Criando linha na tabela para adicionar paciente
    let pacienteTr = document.createElement("tr");
    let nomeTd = document.createElement("td"); 
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nomeValor;
    pesoTd.textContent = pesoValor;
    alturaTd.textContent = alturaValor;
    gorduraTd.textContent = gorduraValor;
    let imcCalculado = (pesoValor/(alturaValor * alturaValor)).toFixed(2)
    imcTd.textContent = imcCalculado;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    if(imcCalculado > 25){
        pacienteTr.classList.add("paciente-invalido");
    }

    document.querySelector("#tabela-pacientes").appendChild(pacienteTr);

});


//Remover um paciente
//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        //console.log("Duplo clique na linha.");
//        this.remove();
//    });
//});

//quando acontece um evento em um elemento, os elementos da hierarquia acima também identificão a ocorrência do evento. 
// OBS: O this é que tem o evento associado a ele, e não necessariamente de onde partiu o evento
let tbBody = document.querySelector("#tabela-pacientes");
tbBody.addEventListener("dblclick", function(event){
    //console.log("Fui clicado");
    //this.remove();
    let trPai = event.target.parentNode;
    trPai.classList.add("fadeout");
    setTimeout(function(){
        trPai.remove();
    }, 500);
    
});


// Filtrar tabela

let campoFiltrar = document.querySelector("#filtrar-tabela");

campoFiltrar.addEventListener("input", function(event){
    //console.log(this.value);

    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
    
            if(nome != this.value){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
    
        });
    }
    else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    }    
});


// Buscando dados via ajax
// Endereço para api:  https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json
let btBuscarPacientes = document.querySelector("#buscar-pacientes");
btBuscarPacientes.addEventListener("click", function(event){
    event.preventDefault();
    console.log("buscando pacientes....");
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.addEventListener("load", function(){
        //console.log(xhr.responseText);
        let resposta = xhr.responseText;
        //console.log(typeof resposta);

        let pacientesRemoto = JSON.parse(resposta);
        console.log(pacientesRemoto);
        console.log(typeof pacientesRemoto);

    });

    xhr.send();

});

