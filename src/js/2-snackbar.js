// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const delay = Number(formData.get('delay'));
        const state = formData.get('state');

        function createPromise(delay, state) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (state === 'fulfilled') {
                        resolve(delay);
                    } else {
                        reject(delay);
                    }
                }, delay);
            });
        }

        createPromise(delay, state)
            .then((delay) => {
                iziToast.success({
                    title: 'Success',
                    message: `Fulfilled in ${delay}ms`,
                    position: 'topRight',
                });
            })
            .catch((delay) => {
                iziToast.error({
                    title: 'Error',
                    message: `Rejected in ${delay}ms`,
                    position: 'topRight',
                });
            });
    });
});
