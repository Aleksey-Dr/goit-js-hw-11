import { refs } from '../../../src/index.js'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Add default value
// let markup = '';

// Add function for rendering markup when found images
export function renderCards(images) {
  // console.log(images);
  // Test by empty
  if (images.totalHits !== 0) {
    const markup = images.hits
      .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
    return `<div class="photo-card">
      <img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy"/>
      <div class="info">
        <p class="info-item">
          <b>Likes:${likes}</b>
        </p>
        <p class="info-item">
          <b>Views:${views}</b>
        </p>
        <p class="info-item">
          <b>Comments:${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads:${downloads}</b>
        </p>
      </div>
    </div>`
      }).join('');
      refs.galleryImages.insertAdjacentHTML('beforeend', markup);
      refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
        refs.loadMoreBtn.classList.add('is-hidden');
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
  }
}