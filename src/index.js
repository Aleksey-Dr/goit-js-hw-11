// Import fetchCountries
import { fetchGallery } from './partials/js/fetchGallery.js';
import { restartPage } from './partials/js/fetchGallery.js';
import { renderCards } from './partials/js/renderCards.js';

// console.log('Hello!');

// Add/find elements from html
// Create object with elements
export const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryImages: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
};
// console.log(refs.searchForm);
// console.log(refs.galleryImages);
// console.log(refs.loadMoreBtn);

// Add CONSTANTS
// Personal key for Pixabay API
export const KEY_TO_API = '35129314-12d9f6cafbe4df38ad9bc5f6b';

// Add default value
let valueTermImages = '';

refs.searchForm.addEventListener('submit', searchImages);

// Add function searchImages
function searchImages(evt) {
  // stop reboot page
  evt.preventDefault();
  // Constant for a inputed term (for serach images)
  // Add method trim()
  const termImages = evt.currentTarget.elements.searchQuery.value.trim();;
    console.log(termImages);
    
    if (valueTermImages !== termImages) {
        // Add function for reset page by new termImages
        restartPage();
    }
    valueTermImages = termImages;

    fetchGallery(termImages)
        .then(renderCards)
        .catch(error => console.log(error));
}