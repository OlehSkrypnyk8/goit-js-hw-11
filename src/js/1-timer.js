// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const btnStart = document.querySelector("button[data-start]");
btnStart.disabled = true;
let selectedDate = null;
const dateInput = document.querySelector("#datetime-picker");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.error({ 
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      btnStart.disabled = true;
      return;
    }
    btnStart.disabled = false;
    selectedDate = selectedDates[0];
    console.log(selectedDate);
  },
};

flatpickr("#datetime-picker", options);

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  dateInput.disabled = true;
  const timerId = setInterval(() => {
    const currentTime = new Date();
    const deltaTime = selectedDate - currentTime;
    if (deltaTime <= 0) {
      clearInterval(timerId);
      dateInput.disabled = false;
      iziToast.success({
        title: 'Success',
        message: 'Countdown finished',
        position: 'topRight',
      });
      return;
    }


    
    function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    document.querySelector('[data-days]').textContent = String(days).padStart(2, '0');
    document.querySelector('[data-hours]').textContent = String(hours).padStart(2, '0');
    document.querySelector('[data-minutes]').textContent = String(minutes).padStart(2, '0');
    document.querySelector('[data-seconds]').textContent = String(seconds).padStart(2, '0');
    console.log(`${days}:${hours}:${minutes}:${seconds}`);
  }, 1000);
  console.log('Start countdown');
});
