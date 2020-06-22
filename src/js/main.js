var burger = document.querySelector('.burger');
var innerBurger = document.querySelector('.inner-burger');
var mainList = document.querySelector('.main-list');
var header = document.querySelector('.header');
var listItems = document.querySelectorAll('.list-item');

burger.addEventListener('click', function(){
    innerBurger.classList.toggle('burger-click');
    mainList.classList.toggle('main-list');
    mainList.classList.toggle('main-list-click');
    for(var i = 0; i<listItems.length; i++) {
        listItems[i].classList.toggle('block-list');
    }
    header.classList.toggle('header-click');
})