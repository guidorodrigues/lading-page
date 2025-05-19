function rollDice(sides, elementId) {
  const resultElement = document.getElementById(elementId);

  // Adiciona classe de animação
  resultElement.classList.add("rolling");
  resultElement.textContent = "...";

  // Tempo de animação
  setTimeout(() => {
    const roll = Math.floor(Math.random() * sides) + 1;
    resultElement.textContent = roll;
    resultElement.classList.remove("rolling");

    // Efeitos especiais para crítico ou falha
    if (roll === sides) {
      resultElement.classList.add("critical");
      setTimeout(() => {
        resultElement.classList.remove("critical");
      }, 1000);
    } else if (roll === 1) {
      resultElement.classList.add("min-roll");
      setTimeout(() => {
        resultElement.classList.remove("min-roll");
      }, 1000);
    }
  }, 500);
}

function rollCustomDice() {
  const count = parseInt(document.getElementById("dice-count").value) || 1;
  const sides = parseInt(document.getElementById("dice-sides").value) || 6;
  const bonus = parseInt(document.getElementById("dice-bonus").value) || 0;
  const resultElement = document.getElementById("custom-roll-result");

  if (count < 1 || sides < 2) {
    resultElement.textContent = "Valores inválidos!";
    return;
  }

  resultElement.textContent = "Rolando...";

  setTimeout(() => {
    let total = 0;
    let rolls = [];

    for (let i = 0; i < count; i++) {
      const roll = Math.floor(Math.random() * sides) + 1;
      rolls.push(roll);
      total += roll;
    }

    total += bonus;

    let resultText = `Rolagem: ${rolls.join(" + ")}`;
    if (bonus > 0) {
      resultText += ` + ${bonus}`;
    }
    resultText += ` = ${total}`;

    resultElement.textContent = resultText;

    // Efeito especial para crítico ou falha
    if (rolls.some((r) => r === sides)) {
      resultElement.classList.add("critical");
      setTimeout(() => {
        resultElement.classList.remove("critical");
      }, 1000);
    } else if (rolls.every((r) => r === 1)) {
      resultElement.classList.add("min-roll");
      setTimeout(() => {
        resultElement.classList.remove("min-roll");
      }, 1000);
    }
  }, 500);
}
