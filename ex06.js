function subtraction(numberOne, numberTwo) {
  const result = numberOne - numberTwo;
  return result;
}

const numberOne = Number(prompt('Digite um valor: '));
const numberTwo = Number(prompt('Digite outro valor: '));

alert(`Resultado da subtração: ${subtraction(numberOne, numberTwo)}`);