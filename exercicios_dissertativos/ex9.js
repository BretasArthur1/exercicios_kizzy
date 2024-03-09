// 9) Vamos criar um programa em JavaScript para somar notas!

// Classe SomadorDeNotas:

// Crie uma classe chamada SomadorDeNotas.
// Adicione um atributo total inicializado com 0 para armazenar a soma das notas.
// Método adicionarNota:

// Adicione um método chamado adicionarNota(nota) na classe SomadorDeNotas.
// Este método deve receber um parâmetro nota e somá-lo ao atributo total.
// Criando o Somador e Adicionando Notas:

// Crie um objeto da classe SomadorDeNotas, chamado somador.
// Utilize o método adicionarNota(nota) para adicionar algumas notas ao somador.
// Chamando o Método para Ver o Total:

// Após adicionar todas as notas, chame um método verTotal() para exibir o total das notas adicionadas.
// Dica: Utilize console.log() para exibir as informações!




class SomadorDeNotas {

    constructor() {
        this.totalNotas = 0;
    }

    adicionarNota(nota) {

        this.totalNotas += nota;
    }

    verTotal() {
        console.log(`O total das notas e ${this.totalNotas}`);
    }
}

let somador = new SomadorDeNotas();

somador.adicionarNota(5);
somador.adicionarNota(3);

somador.verTotal();