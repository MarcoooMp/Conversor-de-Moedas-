function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var ValorEmReal = valorEmDolarNumerico * 5;
  console.log(ValorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "o resultado em real é R$ " + ValorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
