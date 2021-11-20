let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupForm = popup.querySelector('.popup__form');
let popupInputName = popup.querySelector('.popup__input_type_name');
let popupInputJob = popup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');

function open() {
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
  popup.classList.add('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
  close()
}

function close() {
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', open);
popupForm.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', close);
