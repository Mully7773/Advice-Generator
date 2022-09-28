export default class View {
  _clear() {
    this._parentEl.innerHTML = '';
  }

  //   _renderError(message = this._errorMessage) {
  //     const markup = `<div>
  //         <p class='advice'>${message}
  //         </div>`;
  //     this._clear();
  //     this._parentEl.insertAdjacentHTML('afterbegin', markup);
  //   }
}
