import * as model from './model.js';
import AdviceView from './views/adviceView.js';

const controlAdvice = async () => {
  try {
    await model.loadAdvice();
    AdviceView.renderAdvice(model.state.advice);
  } catch (err) {
    console.error(err);
  }
};

controlAdvice();
