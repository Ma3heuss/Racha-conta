import fs from 'node:fs';
import pc from 'picocolors';

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);


console.log('Racha-conta:', conta.restaurante);
console.log('Pessoas na mesa:', conta.pessoas);
console.log('Itens na conta:', conta.itens.length);
console.table(conta.itens);







const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);


const subtotalCentavos = Math.round(subtotal * 100);
const gorjetaCentavos = Math.round(subtotalCentavos * conta.gorjeta / 100);
const totalCentavos = subtotalCentavos + gorjetaCentavos;
const Total = (totalCentavos / 100).toFixed(2)




console.log(pc.bold(pc.greenBright('racha-conta:')), conta.restaurante);



const quantidadetotal = conta.itens.reduce((total, item) => total + item.quantidade, 0)
console.log("unidades pedidas: ", quantidadetotal)

const acima = conta.itens.filter( x =>  x.preco > 50,);
console.log("acima de 50: ", acima.length)



console.log(`Subtotal: R$ ${(subtotalCentavos / 100).toFixed(2)}`);
console.log(`Gorjeta (${conta.gorjeta}%): R$ ${(gorjetaCentavos / 100).toFixed(2)}`);
console.log(`Total: R$ ${(totalCentavos / 100).toFixed(2)}`);


const porpessoa = Math.floor( Total / 4)
console.log("por pessoa ", porpessoa)
const sobra = Total % 4
console.log(sobra)

console.log(`por pessoa: ${(Total / 4).toFixed(2)}`)
console.log(`Centavos que sobram:  ${Math.round(Total % 4)}`)

