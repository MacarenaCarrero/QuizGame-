// range y number
const numberRangeElement = document.getElementById('numberRange');
const rangeElement = document.getElementById('range');
// contenedor timers
const timeElement = document.getElementById('time');

const getNumberRange = () => {
  // cambia el numero del range
  const rangeValue = rangeElement.value;
  numberRangeElement.textContent = rangeValue;
};

getNumberRange();

rangeElement.addEventListener('input', getNumberRange);
