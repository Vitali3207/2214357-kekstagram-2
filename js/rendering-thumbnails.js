import { generatePhotos } from './generator';

const usersPhotoList = document.querySelector('.pictures');
const thumbnails = document.querySelector('#picture').content.querySelector('.picture');
const photoFragment = document.createDocumentFragment();
const userPhoto = generatePhotos();

userPhoto.forEach(({url, description, comments, likes}) => {
  const photoElement = thumbnails.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoElement.querySelector('.picture__likes').textContent = likes;

  photoFragment.append(photoElement);
});

usersPhotoList.append(photoFragment);

export { usersPhotoList };
