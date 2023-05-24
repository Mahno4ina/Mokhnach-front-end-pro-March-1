const options = [
  { emoji: "😃", count: 0 },
  { emoji: "😊", count: 0 },
  { emoji: "🙂", count: 0 },
  { emoji: "😐", count: 0 },
  { emoji: "😞", count: 0 },
];

function displayResults() {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";
  options.forEach((option) => {
    const emojiElement = document.createElement("span");
    emojiElement.innerHTML = option.emoji;
    emojiElement.classList.add("emoji");

    const countElement = document.createElement("span");
    countElement.innerHTML = option.count;
    countElement.classList.add("count");

    const optionContainer = document.createElement("div");
    optionContainer.appendChild(emojiElement);
    optionContainer.appendChild(countElement);

    resultsContainer.appendChild(optionContainer);
  });
}

function handleEmojiClick(index) {
  options[index].count++;
  displayResults();
}

document.addEventListener("DOMContentLoaded", function () {
  displayResults();

  const emojis = document.getElementsByClassName("emoji");

  for (let i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener("click", function () {
      handleEmojiClick(i);
    });
  }
});
