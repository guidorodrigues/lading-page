function rollDice(sides, resultId) {
  // Limpa todos os resultados antes de rolar
  const ids = [
    "d20-result",
    "d12-result",
    "d10-result",
    "d8-result",
    "d6-result",
    "d4-result",
  ];
  ids.forEach((id) => {
    document.getElementById(id).textContent = "0";
  });

  // Rola o dado selecionado
  const result = Math.floor(Math.random() * sides) + 1;
  document.getElementById(resultId).textContent = result;
}
