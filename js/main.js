import { generatePhotos } from './generator';
import { renderThumbnails } from './render-thumbnails';

const photos = generatePhotos();
renderThumbnails(photos);


