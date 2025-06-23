const amountInput = document.getElementById("amount");

// Manipulando o input para receber somente numbers.
amountInput.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
console.log(amountInput.value);

  amountInput.value = amountInput.value.replace(hasCharactersRegex, "");

});
