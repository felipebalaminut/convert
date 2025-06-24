// Cotações de moedas
const USD = 5.5;
const EUR = 6.38;
const GBP = 7.45;

// Obtendo elementos formulário
const form = document.querySelector("form");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input para receber somente numbers.
amountInput.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  amountInput.value = amountInput.value.replace(hasCharactersRegex, "");
});

// Capturando o evento de submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  switch (currencySelect.value) {
    case "USD": {
      convertCurrency(amountInput.value, USD, "US$");
      break;
    }

    case "EUR": {
      convertCurrency(amountInput.value, EUR, "€");
      break;
    }

    case "EUR": {
      convertCurrency(amountInput.value, GBP, "£");
      break;
    }

    default: {
      console.error("Moeda não suportada:", currencySelect.value);
      break;
    }
  }
});

function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Exibindo resultado final.
    let total = amount * price;
    total = formatCurrencyBRL(total).replace("R$", "");

    result.textContent = `${total} Reais`;

    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // Remove a classe que exibe o footer
    footer.classList.remove("show-result");
    console.log("Ocorreu um erro! Tente novamente mais tarde.");
  }
}

// Formata a moeda em Real Brasileiro (R$ 00,00)
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
