import {KEY_TO_API} from '../../../src/index'

// Add asynchronous function
export async function fetchGallery(term) {
//   console.log('test');
  // Add URL to Pixabay
  // Parts URL
  const frontURL = 'https://pixabay.com/api/?key=';
  const betweenURL = '&q=';
  const backURL = '&image_type=photo&orientation=horizontal&safesearch=true';
  // Complete URL
  const url = frontURL + KEY_TO_API + betweenURL + term + backURL;
  
  const response = await fetch(url);
  const images = await response.json();
//   console.log(images);
  return images;
}