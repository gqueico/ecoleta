function sum() {
  const numberOne = Number(prompt('Digite o primeiro valor da soma: '));
  const numberTwo = Number(prompt('Digite o segundo valor da soma: '));
  const result = numberOne + numberTwo;

  return result;
}

alert(`Soma dos dois valores: ${sum()}`);