function mercado(valor, isConvenio, isCartao) {
  const descontototal = isCartao && isConvenio;
  const descontoparcial = isCartao || isConvenio;

  if (descontototal) {
    return valor - valor * 0.15;
  }

  if (descontoparcial) {
    return valor - valor * 0.1;
  }
  if (!isConvenio && !isCartao) {
    return valor;
  }
}

console.log(mercado(80, true, true));
console.log(mercado(100, false, true));
console.log(mercado(120, false, false));
