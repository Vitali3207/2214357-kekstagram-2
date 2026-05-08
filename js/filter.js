import { renderThumbnails } from './render-thumbnails';
import { debounce } from './util';

const filterContainer = document.querySelector('.img-filters');
const filterDefault = 'filter-default';
const filterRandom = 'filter-random';
const filterDiscussed = 'filter-discussed';

const debounceRenderPicture = debounce(renderThumbnails, 500);
let currentFilter = filterDefault;
let pictures = [];

const generateFilter = () => {
  let picturesFilter = [];

  if (currentFilter === filterDefault) {
    picturesFilter = pictures;
  } else if (currentFilter === filterRandom) {
    picturesFilter = pictures.toSorted(() => Math.random() - 0.5).slice(0, 10);
  } else if (currentFilter === filterDiscussed) {
    picturesFilter = pictures.toSorted((a, b) => b.comments.length - a.comments.length);
  }
  debounceRenderPicture(picturesFilter);
};

function onFilterClick (evt) {
  const activButton = document.querySelector('.img-filters__button--active');
  const targetButton = evt.target;

  if (!targetButton.matches('button') || activButton === targetButton) {
    return;
  }

  activButton.classList.remove('img-filters__button--active');
  targetButton.classList.add('img-filters__button--active');
  currentFilter = targetButton.id;

  generateFilter();
}

const initFilter = (picturesData) => {
  filterContainer.classList.remove('img-filters--inactive');
  filterContainer.addEventListener('click', onFilterClick);
  pictures = picturesData;
};

export { initFilter };


