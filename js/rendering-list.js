import { objSort } from './data.js';
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();
const similarPictures = objSort();
const comments = document.querySelector('.social__comments');
const modalComment = comments.querySelector('.social__comment');
const renderImg = (data)=>{
  data.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__img').alt = picture.description;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.dataset.thumbnaiId = picture.id;
    pictureListFragment.append(pictureElement);
});
  picturesList.append(pictureListFragment);
}
const renderComments = (data) => {
  comments.innerHTML = '';
  data.forEach((element) => {
    const comentModal = modalComment.cloneNode(true);
    comentModal.querySelector('.social__picture').src = element.comments[1].avatar;
    comentModal.querySelector('.social__picture').alt = element.comments[1].name;
    comentModal.querySelector('.social__text').textContent = element.comments[1].message;
    pictureListFragment.append(comentModal);
  });
  comments.append(pictureListFragment);
}

// renderImg(similarPictures)
// fetch ('https://28.javascript.pages.academy/kekstagram/data')
//   .then((response) => response.json())
//   .then((data) => {
//     renderImg(data);

//   });
export {renderImg,renderComments}
