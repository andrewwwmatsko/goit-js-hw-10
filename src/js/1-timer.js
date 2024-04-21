import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.querySelector('#datetime-picker');

const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', true);

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = new Date();

    if (selectedDates[0] < dateNow) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
    }
  },
};

const fp = flatpickr(dateInput, options);
