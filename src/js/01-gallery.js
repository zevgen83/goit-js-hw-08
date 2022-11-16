// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
const collectionImg = document.querySelector('.gallery');

const markupGallery = galleryItems 
  .map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"    
    alt="${description}"    
   />
  </a>  
`)
  .join("");

collectionImg.insertAdjacentHTML("beforeend", markupGallery);

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

