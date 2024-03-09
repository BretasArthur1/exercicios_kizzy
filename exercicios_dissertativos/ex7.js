// **7)** Vamos criar um programa em JavaScript para entender classes, métodos e atributos!
// Classe Animal:
// - Crie uma classe chamada Animal.
// - Adicione dois atributos: nome e idade.
// - Adicione um método chamado descrever() na classe Animal.
//   - Este método deve exibir no console uma descrição do animal com seu nome e idade.

// Criando e manipulando Animais:
// - Crie dois objetos da classe Animal: um chamado "cachorro" e outro "gato", com idades distintas.
// - Para cada animal, chame o método descrever() para ver a descrição no console.

// Dica: Utilize `console.log()` para exibir as informações!

class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`O animal ${this.nome} tem ${this.idade} anos.`);
    }
}

const novoAnimal = new Animal('Tigre', 10);
novoAnimal.descrever();