
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import { form, loader, createGallery, clearGallery, showLoader, hidenLoader } from "./js/render-functions.js";

const input = form.elements['search-text'];
const defaultPlaceholder = input.placeholder;
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    showLoader();
    const query = form.elements['search-text'].value.trim();
    if (!query) {
        iziToast.error({
            title: 'Error',
            message: "Please enter a search query.",
        });
        hidenLoader();
        return;
    }
    input.placeholder = "";
    getImagesByQuery(query)
        .then(images => {
            clearGallery();
            if (!images || images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
                return;
            }
            createGallery(images);

        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
        })
        .finally(() => {
            loader.classList.add('hidden');
            input.value = '';
            input.placeholder = defaultPlaceholder;
        });
}










