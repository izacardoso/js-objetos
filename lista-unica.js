const cliente = [{
    nome: 'Lina',
    idade: 26,
    cidade: 'Rio de Janeiro',
    dependentes:[
        {
            nome: 'Pedro Silva',
            parentesco: 'filho',
            idade:7,
            dataNasc: '20/03/2014'
        },
        {
            nome: 'João Silva',
            parentesco: 'filho',
            idade: 10,
            dataNasc:'13/04/2012'
        }],
    },
    {
        nome: 'Lucas',
        idade: 30,
        cidade: 'São Paulo',
        dependentes:[
        {
            nome: 'Vitoria Silva',
            parentesco: 'filha',
            idade:5,
            dataNasc: '20/07/2017'
        }],
    }
]

let listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes]

console.table(listaDependentes)