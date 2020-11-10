document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        'format': "yyyy-mm-dd",
    });
  });


  document.querySelectorAll('.modal-show').forEach(function(element) {
    element.onclick = showModal;
});


document.querySelectorAll('.modal-project-close').forEach(function(element) {
    element.onclick = closeModal;
});
// Закрытие через нажатие на серую область (мимо модального окна)
// получаем все модальные оболочки и перебираем их
document.querySelectorAll('.modal-wrap').forEach(function(element) {
    element.onclick = closeModal;
});

function showModal() {
    //this  в этом случае кнопка
    //dataset.modal - для получения data  атрибута modal слово которое идет после data
    //а именно айди оболояки
   let modalId = this.dataset.modal;
   //обозначаем конкретное модaльное окно modalId, добавляем toggle - переключатель
   //найти родителя текущего элемента 
   document.querySelector(modalId).classList.remove('hide');
   //Закрытие окна по нажатию на клавишу ESC
   document.onkeydown = function(event) {
       if(event.keyCode == 27) closeModal();
           //  element.classList.add('hide');
           //  document.onkeydown = null;
       
    }
}

function closeModal () {
    // по кнопке ищет айдишник оболочки
    //Проходится по модальным окнам  и скрывает их
    document.querySelectorAll('.modal-wrap').forEach(function(element) {
        element.classList.add('hide'); 
    });
    document.onkeydown = null;
 }

 document.querySelector('#log-in .modal-project').onclick = function(event) {
     event.stopPropagation();
 }

 document.querySelector('#sign-up .modal-project').onclick = function(event) {
    event.stopPropagation();
}



// SLIDER

document.querySelector('.read__rules').onclick = function () {
    document.querySelector('.form__slider').style.marginLeft = '-350px';
 }
 
 document.querySelectorAll('.read__rules-back').forEach(function(element) {
     
     element.onclick = closeSlider;
  });
 
 
 
  function closeSlider() {
  document.querySelector('.form__slider').style.marginLeft = '0';
  }