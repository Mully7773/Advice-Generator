class AdviceView {
  #data;

  #adviceNumEl = document.querySelector('.advice-number');
  #parentEl = document.querySelector('.advice-container');
  #adviceEl = document.querySelector('.advice');
  #diceBtn = document.querySelector('.dice-btn');

  renderAdvice(data) {
    this.#data = data;
    console.log(this.#data);
    const adviceMarkup = this.#generateAdviceMarkup();
    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', adviceMarkup);
  }

  #clear() {
    this.#parentEl.innerHTML = '';
  }

  #generateAdviceMarkup() {
    return `
    <p class='advice'>${this.#data}</p>`;
  }
}

export default new AdviceView();
