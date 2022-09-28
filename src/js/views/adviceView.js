import View from './View.js';

class AdviceView extends View {
  _data;

  #adviceNumEl = document.querySelector('.advice-number');
  _parentEl = document.querySelector('.advice-container');
  #diceBtn = document.querySelector('.dice-btn');

  addHandlerRender(handler) {
    this.#diceBtn.addEventListener('click', handler);
  }

  renderAdvice(data) {
    this._data = data;
    console.log(this._data);
    const adviceMarkup = this.#generateAdviceMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', adviceMarkup);
  }

  _renderSpinner() {
    const spinnerMarkup = `
    <div class="spinner"></div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', spinnerMarkup);
  }

  #generateAdviceMarkup() {
    return `
    <blockquote class='advice'>${this._data}</blockquote>`;
  }
}

export default new AdviceView();
