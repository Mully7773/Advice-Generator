import * as model from './model.js';
import AdviceNumView from './views/adviceNumView.js';
import AdviceView from './views/adviceView.js';

const controlAdvice = async function () {
  try {
    AdviceView._renderSpinner();
    await model.loadAdvice();
    AdviceView.renderAdvice(model.state.advice);
    AdviceNumView.renderAdviceNumber(model.state.id);
  } catch (err) {
    console.error(err);
    AdviceView._renderError();
  }
};

const init = () => {
  AdviceView.addHandlerRender(controlAdvice);
  AdviceNumView.addHandlerRender(controlAdvice);
};
init();
