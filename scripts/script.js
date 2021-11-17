let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let elementLike = document.querySelectorAll('.element__like');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupContainer = popup.querySelector('.popup__container');
let popupInputName = popup.querySelector('.popup__input_name');
let popupInputJob = popup.querySelector('.popup__input_job');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

function open() {
  popup.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
}

profileEditButton.addEventListener('click', open);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
  close()
}

popupContainer.addEventListener('submit', formSubmitHandler);

function close() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', close);

for (let i = 0; i < elementLike.length; i +=1){
  elementLike[i].addEventListener('click', function() {

  elementLike[i].classList.toggle('element__like_selected');
  });
}

