// **10)** Imagine que você está criando um programa em JavaScript para uma escola. Neste programa, existem diferentes tipos de funcionários, cada um com suas próprias características. Considere as seguintes classes:

// Funcionário:
// - atributo: Nome
// - atributo: Idade
// - atributo: Salário base
// - método: calcularSalario() - Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.

// Professor (herança de Funcionário):
// - atributo: Disciplina
// - atributo: Horas de aula por semana
// - método: calcularSalario() - Para calcular o salário do professor, multiplicamos suas horas de aula pelo valor da hora/aula.

// Agora, sua tarefa é escrever um código em JavaScript que crie as classes Funcionário e Professor, com suas características e métodos descritos acima. Depois de criar as classes, crie:
// - Dois objetos do tipo Professor com informações fictícias.
// - Para cada objeto, chame o método calcularSalario() e mostre o salário calculado no console.

// Certifique-se de explicar cada parte do código utilizando comentários, explicando para que serve cada atributo e método, bem como a lógica por trás do cálculo de salário para o tipo de funcionário Professor.

//Definicao da classe pai, Funcionario
class Funcionario {

    constructor(nome, idade, salarioBase) {

        this.nome = nome;//atributos da classe
        this.idade = idade;
        this.salarioBase = salarioBase;

    }
    calcularSalario() {

        //aqui declaramos o metodo, mas irei subscrever ele na subclasse
    }
}
//classe filha de funcionario que herda os atributos da classe
class Professor extends Funcionario {

    constructor(nome, idade, salarioBase, disciplina, horaAulaSemana, horaAula) {
        super(nome, idade, salarioBase);//atributos herdados
        this.disciplina = disciplina;//atributos da classe filha
        this.horaAulaSemana = horaAulaSemana;
        this.horaAula = horaAula;
    }

    calcularSalario() { //funcao que retorna a conta de valor da hora aula multiplicado por quantas horas o professor da de aula por semana
        var salarioSemanal = this.horaAula * this.horaAulaSemana;
        return salarioSemanal;
    }

    calcularSalarioTotal(){// calcula o salario total do mes
        var salarioTotal = this.calcularSalario() * 4
        return salarioTotal;
    }
}

const Professor1 = new Professor('Kizzy', 25, 3000, 'Programacao', 20, 100);//criando objetos da classe professor
const Professor2 = new Professor('Marcelo', 50, 3000, 'Lideranca', 50, 115);

console.log(`${Professor1.nome}, ganha por semana R$ : ${Professor1.calcularSalario()} e no total mensal R$ : ${Professor1.calcularSalarioTotal()}`);
console.log(`${Professor1.nome}, ganha por semana R$ : ${Professor2.calcularSalario()} e no total mensal R$ : ${Professor2.calcularSalarioTotal()}`);