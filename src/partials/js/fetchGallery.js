// Add asynchronous function
export async function fetchImages(term) {
  // console.log('test');
  // Add URL to Pixabay
  // Parts URL
  const frontURL = 'https://pixabay.com/api/?key=';
  const betweenURL = '&q=';
  const backURL = '&image_type=photo&orientation=horizontal&safesearch=true&';
  // Complete URL
  const url = frontURL + API_KEY + betweenURL + term + backURL + currentPage;
  
  const response = await fetch(url);
  const images = await response.json();
  // console.log(images);
  return images;
}