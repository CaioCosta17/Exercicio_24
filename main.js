function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.apresentar = function() {
        return `${this.nome} ${this.sobrenome}`
    };
}

function Funcionario(nome, sobrenome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }
    
    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor
            console.log(`${this.nome} ${this.sobrenome} teve seu salário atualizado para R$ ${_salario}`);
        } else {
            console.log('Valor de salário inválido.');
        }
    }

    this.darAumento = function(porcentagem) {
        if (typeof porcentagem === 'number' && porcentagem > 0) {
            const valorAumento = 1 + (porcentagem / 100);
            _salario = _salario * valorAumento;
        };
    }

    this.apresentar = function() {
        return `${this.nome} ${this.sobrenome} cargo de ${this.cargo} com o salário de ${this.getSalario}`
    };

    Pessoa.call(this, nome, sobrenome);
}

function Cliente(nome, sobrenome, codigoCliente, saldoDevedor) {
    this.codigoCliente = codigoCliente;
    let _saldoDevedor = saldoDevedor;

    this.getSaldoDevedor = function() {
        return _saldoDevedor;
    }

    this.registraPagamento = function(valorPago) {
        if (typeof valorPago === 'number' && valorPago > 0) {
            _saldoDevedor -= valorPago;
            console.log (`Pagamento de R$ ${valorPago} recebido de ${this.nome}. Saldo devedor atual: R$ ${_saldoDevedor}`);
        };
    }
    
    this.apresentar = function() {
        return `Cliente ${this.nome} ${this.sobrenome}, código #${this.codigoCliente} seu saldo devedor é R$ ${this.getSaldoDevedor}`;
    }

    Pessoa.call(this, nome, sobrenome);
}

console.log('\n\n=== Gerenciamento de Pessoas e Cliente ===');

// Instância 1: Funcionário 1
const funcionario1 = new Funcionario('Luiza', 'Marques', 'Dev Full-Steck', 6000);
console.log('\n=== Detalhes do Funcionário 1 ===');
console.log(funcionario1.apresentar());
funcionario1.darAumento(10);
console.log(`Salário atualde ${funcionario1.nome}: R$ ${funcionario1.getSalario()}`);
funcionario1.setSalario(8000);
console.log(`Salário após setSalario: R$ ${funcionario1.getSalario()}`);

// Instância 2: Funcionário 2
const funcionario2 = new Funcionario('João', 'Costa', 'Gerente de Projetos', 10000);
console.log('\n\n=== Detalhes do Funcionário 2 ===');
console.log(funcionario2.apresentar(10));
funcionario2.darAumento(15);
console.log(`Salário atual de ${funcionario2.nome}: R$ ${funcionario2.getSalario()}`);
funcionario2.setSalario(11500);
console.log(`Salário após setSalario: R$ ${funcionario2.getSalario()}`);

// Instância 3: Cliente 1
const cliente1 = new Cliente('Ana', 'Silva', 'C001', 500);
console.log("\n\n=== Detalhes do Cliente 1 ===");
console.log(cliente1.apresentar());
cliente1.registraPagamento(150);
console.log(`Saldo devedor atual de ${cliente1.nome}: R$ ${cliente1.getSaldoDevedor()}`);

// Instância 3: Cliente 2
const cliente2 = new Cliente('Pedro', 'Henrique', 'C002', 1200);
console.log('\n\n=== Detalhes do Cliente 2 ===');
console.log(cliente2.apresentar());
cliente1.registraPagamento(500);
console.log(`Saldo devedor atual de ${cliente2.nome}: R$ ${cliente2.getSaldoDevedor()}\n\n`);