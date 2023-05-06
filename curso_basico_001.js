/* 
    1 - Javascript é case sensitive
    2 - Após a ES6, o uso de ponto e vírgula no final do statement e opcional
    3 - Podemos usar aspas simples ou duplas para criar strings
    4 - Diferenças entre var, let, const
        - Se var é declarada dentro de um bloco como uma função, seu scopo é do bloco
        - Se var é declarada fora de um bloco, seu scopo é global
        Hoisting de var
            Hoisting é um mecanismo do JavaScript que faz com que as declarações de variáveis 
            e de funções sejam movidas para o topo de seu escopo antes da execução do código. 
            Portanto, se fizermos isso:
                console.log (greeter);
                var greeter = "say hello"
            A interpretação será:
                var greeter;
                console.log(greeter); // greeter is undefined
                greeter = "say hello"
            Desse modo, variáveis de var sofrem o hoisting e vão para o topo do escopo, 
            sendo inicializadas com um valor de undefined.

            Problema com var
                var greeter = "hey hi";
                var times = 4;
                if (times > 3) {
                    var greeter = "say Hello instead"; 
                }
                console.log(greeter) // o resultado será "say Hello instead"

            Assim, já que times > 3 retorna true, greeter é redefinido como "say Hello instead". 
            Embora isso não seja um problema se você quer, conscientemente, que greeter 
            possa ser redefinido, passará a ser um problema quando você não perceber que uma variável 
            greeter já havia sido definida antes.    
            Se você já usou greeter em outras partes do seu código, pode se surpreender 
            com o resultado que vai obter. Isso provavelmente causará vários bugs no seu código. 
            É por isso que let e const são necessários.

            let tem escopo de bloco
                Um bloco é uma porção de código cercado por {}. Um bloco vive dentro dessas 
                chaves. Tudo o que estiver cercado por chaves é um bloco.
                Assim, uma variável declarada com let em um bloco estará disponível 
                apenas dentro daquele bloco. Vamos explicar isso com um exemplo:
                    let greeting = "say Hi";
                    let times = 4;
                    if (times > 3) {
                        let hello = "say Hello instead";
                        console.log(hello);// dirá "say Hello instead"
                    }
                    console.log(hello) // hello não está definido

                Vemos que o uso de hello fora de seu bloco (as chaves dentro das quais a variável foi definida) 
                retorna um erro. Isso ocorre porque as variáveis de let têm escopo de bloco.  
                
                let pode ser atualizado, mas não declarado novamente.
                    Assim como var,  uma variável declarada com let pode ser atualizada 
                    dentro de seu escopo. Diferente de var, no entanto, uma variável let não 
                    pode ser declarada novamente dentro de seu escopo. O código a seguir funciona:

                    let greeting = "say Hi";
                    greeting = "say Hello instead";

                Este outro código, no entanto, retornará um erro:
                    let greeting = "say Hi";
                    let greeting = "say Hello instead"; // erro: identificador 'greeting' já foi declarado    

                Porém, se a mesma variável for definida em escopos diferentes, não haverá erro:
                    let greeting = "say Hi";
                    if (true) {
                        let greeting = "say Hello instead";
                        console.log(greeting); // retornará "say Hello instead"
                    }
                    console.log(greeting); // retornará "say Hi"    

                Hoisting de let
                    Assim como as declarações com var, as feitas com let também sofrem o hoisting 
                    para o topo. Diferentemente de var, porém, que é inicializado como undefined, 
                    a palavra-chave let não é inicializada. Assim, se você tentar usar uma variável 
                    let antes de sua declaração, terá um Reference Error.        

                Const
                    Variáveis declaradas com const mantêm valores constantes. 
                    Declarações com const compartilham algumas semelhanças com as declarações com let.        

                Declarações com const têm escopo de bloco
                    Assim como as declarações de let, as declarações de const somente podem ser 
                    acessadas dentro do bloco onde foram declaradas.

                const não pode ser atualizado nem declarado novamente
                    Isso significa que o valor de uma variável declarada com const se 
                    mantém o mesmo dentro do escopo. Ela não pode ser atualizada nem declarada 
                    novamente. Desse modo, se declararmos uma variável com const, 
                    isso não será possível:    


                const greeting = "say Hi";
                    greeting = "say Hello instead";// erro: atribuição a uma variável constante. 

                O código abaixo também não:
                    const greeting = "say Hi";
                    const greeting = "say Hello instead";// erro: identificador 'greeting' já foi declarado
                    Cada declaração com const, portanto, deve ser inicializada no momento 
                    da declaração.    


*/

// Emitindo mensagens no console
console.log("Programa JS 001");

// Criando constantes 
const idade = 20
console.log("Idade é : " + idade)

// Declarando variáveis 
var carro = "Volvo"
let profissao = 'Advogado'
console.log(`Texto com crase ${idade}`)
console.log(carro + profissao)

// Conversões
console.log(parseInt("23"))
console.log(parseFloat("23"))
console.log(parseInt('23'))
console.log(parseFloat('23'))
console.log("11" / "2")
console.log("Sergio" / 2)

// Atribuição e imutabilidade


// Declarando listas(array)
let listaDestinos = new Array("São Paulo", "Rio de janeiro", "Salvador", "Curitiba")
let listaDestinos2 = ["São Paulo", "Rio de janeiro", "Salvador"]
let listaDestinosVazia = []

console.log(listaDestinos)
console.log(listaDestinos2)
console.log(listaDestinosVazia)

// Adicionando item na lista vazia
listaDestinosVazia.push("Porto Alegre")
console.log(listaDestinosVazia)

// Removendo items da lista
console.log(listaDestinos)
listaDestinos.splice(1, 1)
console.log(listaDestinos)

// Mostrar elemento pelo índice
console.log(listaDestinos[2])

// Mostrar a quantidade de elementos
console.log(listaDestinos.length)


// Iterações sobre arrays
let tamanhoLista = listaDestinos.length
let contador = 0
while (contador < tamanhoLista){
    console.log(listaDestinos[contador])
    contador++
}

for(contador = 0; contador < tamanhoLista; contador++){
    console.log(listaDestinos[contador])
}










