import { ADVICE_API_URL } from './config.js';
import { getJSON } from './helpers.js';

export const loadAdvice = async () => {
  try {
    const adviceData = await getJSON(`${ADVICE_API_URL}`);
    console.log(adviceData);
  } catch (err) {
    console.error(`Fetch problem: ${err.message}`);
    throw err;
  }
};

loadAdvice();
