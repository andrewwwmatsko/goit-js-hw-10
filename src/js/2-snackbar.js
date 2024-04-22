import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const submitBtn = form.querySelector('button[type=submit]');
const delayInput = form.querySelector('input[name=delay]');
const radioFulfilled = form.querySelector('input[value=fulfilled]');
const radioReject = form.querySelector('input[value=rejected]');

form.addEventListener('submit', e => {
  e.preventDefault();
  //   const obj = {
  //     delay: form.elements.delay.value,
  //     shouldResolve: form.querySelector('input[type = radio]:checked').value,
  //   };

  const { delay, state } = e.currentTarget;

  let delayInput = delay.value;
  let shouldResolve = state.value;

  makePromise(delayInput, shouldResolve)
    .then(delay => {
      iziToast.show({
        title: 'OK',
        titleSize: '16px',
        titleLineHeight: '24px',
        titleColor: '#fff',
        message: `✅ Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        position: 'topCenter',
        messageLineHeight: '24px',
        messageSize: '16px',
        backgroundColor: '#59A10D',
        iconUrl: '../img/snackbar-success-icon.svg',
        theme: 'dark',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        titleColor: '#fff',
        titleLineHeight: '24px',
        titleSize: '16px',
        message: `❌ Rejected promise in ${error}ms`,
        messageColor: '#fff',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
        position: 'topCenter',
        messageSize: '16px',
        iconUrl: '../img/error-icon.svg',
        theme: 'dark',
      });
    });

  form.reset();
});

const makePromise = (delay, shouldResolve) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};
