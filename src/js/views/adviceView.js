class AdviceView {
  #data;

  #adviceNumEl = document.querySelector('.advice-number');
  #parentEl = document.querySelector('.advice-container');
  #diceBtn = document.querySelector('.dice-btn');

  addHandlerRender(handler) {
    this.#diceBtn.addEventListener('click', handler);
  }

  renderAdvice(data) {
    this.#data = data;
    console.log(this.#data);
    const adviceMarkup = this.#generateAdviceMarkup();
    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', adviceMarkup);
  }

  _renderSpinner() {
    const spinnerMarkup = `
    <div class="spinner"></div>
    `;
    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', spinnerMarkup);
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
