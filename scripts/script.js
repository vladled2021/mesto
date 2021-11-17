let profileEditButton = document.querySelector('.profile__edit-button');// кнопка Edit
let popup = document.querySelector('.popup');// попап элемент
let elementLike = document.querySelectorAll('.element__like');// кнопка лайк
let popupCloseButton = popup.querySelector('.popup__close-button');//кнопка закрытия попап
let popupContainer = popup.querySelector('.popup__container');// форма попап
let popupInputName = popup.querySelector('.popup__input_name');// поле name input попапа
let popupInputJob = popup.querySelector('.popup__input_job');// поле job input попапа
let profileName = document.querySelector('.profile__name');//элемент имя в dive
let profileActivity = document.querySelector('.profile__activity');//элемент занятие в dive

function open() {
  popup.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputJob.value = profileActivity.textContent;
}

profileEditButton.addEventListener('click', open);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
    // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = popupInputName.value;
  profileActivity.textContent = popupInputJob.value;
    // Вставьте новые значения с помощью textContent
  close()
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
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

