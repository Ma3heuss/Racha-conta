import fs from 'node:fs';
import pc from 'picocolors';
import { paraCentavos, calcularGorjeta, formatarReais} from '../regras/conta.js';

const texto = fs.readFileSync('src/data/conta.json', 'utf-8');
const conta = JSON.parse(texto);
const subtotal = conta.itens.reduce((total, item) => total + item.preco * item.quantidade, 0);


console.log('Racha-conta:', conta.restaurante);
console.log('Pessoas na mesa:', conta.pessoas);
console.log('Itens na conta:', conta.itens.length);
console.table(conta.itens);


const subtotalCentavos = paraCentavos(subtotal);
const gorjetaCentavos = calcularGorjeta(subtotalCentavos, conta.gorjeta);
const totalCentavos = subtotalCentavos + gorjetaCentavos;
const Total = (formatarReais(totalCentavos));

console.log(`Subtotal: R$ ${(formatarReais(subtotalCentavos))}`);
console.log(`Gorjeta (${conta.gorjeta}%):  ${(formatarReais(gorjetaCentavos))}`);
console.log(`Total: R$ ${Total}`);

//console.log('subtotal:', subtotal.toFixed(2))
// console.log(pc.bold('Racha-conta:'), conta.restaurante);


// Unidades pedidas quantidades de todos os itens
const UnidadesPedidas = conta.itens.reduce((total, item) => total + item.quantidade, 0);
console.log('Unidades pedidas: ', UnidadesPedidas)


const filtro = conta.itens.filter(numero => numero.preco > 50);
console.log('Itens acima de R$ 50: ', filtro.length)

console.log(`Por pessoa:  ${formatarReais(totalCentavos / conta.pessoas)}`);
console.log(`Centavos que sobram: ${formatarReais(Math.round(totalCentavos % 4))}`);


console.log(formatarReais(totalCentavos))
