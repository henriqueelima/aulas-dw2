function mercado(valor, Convenio, Cartao) {
  const descontototal = Cartao && Convenio;
  const descontoparcial = Cartao || Convenio;

  if (descontototal) {
    return valor - valor * 0.15;
  }

  if (descontoparcial) {
    return valor - valor * 0.1;
  }
  if (!Convenio && !Cartao) {
    return valor;
  }
}

console.log(mercado(80, true, true));
console.log(mercado(100, false, true));
console.log(mercado(120, false, false));
