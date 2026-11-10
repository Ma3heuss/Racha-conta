export function paraCentavos(reais) {
  return Math.round(reais * 100);
}

export function calcularGorjeta(subtotal, percentual = 10) {
    return Math.round(subtotal * percentual / 100);
}

export function formatarReais(centavos) {
  return `R$ ${(centavos / 100).toFixed(2)}`
}

