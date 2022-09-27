import { ADVICE_API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  advice: {},
  id: {},
};

export const loadAdvice = async () => {
  try {
    const adviceData = await getJSON(`${ADVICE_API_URL}`);
    console.log(adviceData);

    const { slip } = adviceData;
    console.log(slip);

    state.advice = slip.advice;
    state.id = slip.id;
    console.log(state.advice);
    console.log(state.id);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
    throw err;
  }
};
