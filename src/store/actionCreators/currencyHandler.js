import currencyChange from '../actions/currencyChange';

function currencyHandler(value) {
  return {
    type: currencyChange,
    value: value,
  };
}

export default currencyHandler;
