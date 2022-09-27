class AdviceNumView {
  #data;

  #adviceNumEl = document.querySelector('.advice-number');
  #parentEl = document.querySelector('.advice-number-container');
  #diceBtn = document.querySelector('.dice-btn');

  addHandlerRender(handler) {
    this.#diceBtn.addEventListener('click', handler);
  }

  renderAdviceNumber(data) {
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
    <p class="advice-number-text">
    Advice <span class="advice-number">#${this.#data}</span>
  </p>`;
  }
}

export default new AdviceNumView();
