import * as model from './model.js';

const controlAdvice = async () => {
  try {
    await model.loadAdvice();
  } catch (err) {
    console.error(err);
  }
};

controlAdvice();

// const adviceNumEl = document.querySelector('.advice-number');
// const adviceEl = document.querySelector('.advice');
// const diceBtn = document.querySelector('.dice-btn');
