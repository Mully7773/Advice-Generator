import View from './View.js';

class AdviceNumView extends View {
  _data;

  #adviceNumEl = document.querySelector('.advice-number');
  _parentEl = document.querySelector('.advice-number-container');
  #diceBtn = document.querySelector('.dice-btn');

  addHandlerRender(handler) {
    this.#diceBtn.addEventListener('click', handler);
  }

  renderAdviceNumber(data) {
    this._data = data;
    console.log(this._data);
    const adviceMarkup = this.#generateAdviceMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', adviceMarkup);
  }

  #generateAdviceMarkup() {
    return `
    <h1 class="advice-number-text">
    Advice <span class="advice-number">#${this._data}</span>
  </h1>`;
  }
}

export default new AdviceNumView();
