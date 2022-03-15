document
  .querySelector('[data-answer-button-id="1"')
  .addEventListener("click", function() {
    document
      .querySelector('[data-answer-id="1"')
      .classList.toggle("card__answer--hidden");
  });

document
  .querySelector('[data-answer-button-id="2"')
  .addEventListener("click", function() {
    document
      .querySelector('[data-answer-id="2"')
      .classList.toggle("card__answer--hidden");
  });
