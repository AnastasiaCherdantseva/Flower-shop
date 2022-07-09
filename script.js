"use strict"


function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
};

var    bottomRight = function(){
                console.log('es');
                let ProductOne = document.querySelector('.one-product');
        if (ProductOne.classList.contains('product-one-right') || ProductOne.classList.contains('product-one-left')){
            ProductOne.classList.add('product-two-right');
            ProductOne.classList.remove('product-one-right');
            ProductOne.classList.remove('product-one-left');
        } else if (ProductOne.classList.contains( 'product-two-left') || ProductOne.classList.contains('product-two-right')) {
            ProductOne.classList.add('product-three-right');
            ProductOne.classList.remove('product-two-right');
            ProductOne.classList.remove('product-two-left');
        } else if (ProductOne.classList.contains('product-three-left') || ProductOne.classList.contains('product-three-right')) {
            ProductOne.classList.add('product-four-right');
            ProductOne.classList.remove('product-three-right');
            ProductOne.classList.remove('product-three-left');
        } else if (ProductOne.classList.contains('product-four-left') || ProductOne.classList.contains('product-four-right')) {
            ProductOne.classList.add('product-one-right');
            ProductOne.classList.remove('product-four-right');
            ProductOne.classList.remove('product-four-left');
        }
               let ProductTwo = document.querySelector('.two-product');
        if (ProductTwo.classList.contains('product-two-left') || ProductTwo.classList.contains('product-two-right')){
            ProductTwo.classList.add('product-three-right');
            ProductTwo.classList.remove('product-two-right');
            ProductTwo.classList.remove('product-two-left');
        } else if (ProductTwo.classList.contains('product-three-left') || ProductTwo.classList.contains('product-three-right')) {
            ProductTwo.classList.add('product-four-right');
            ProductTwo.classList.remove('product-three-right');
            ProductTwo.classList.remove('product-three-left');
        } else if (ProductTwo.classList.contains('product-four-left') || ProductTwo.classList.contains('product-four-right')) {
            ProductTwo.classList.add('product-one-right');
            ProductTwo.classList.remove('product-four-right');
            ProductTwo.classList.remove('product-four-left');
        } else if (ProductTwo.classList.contains('product-one-left') || ProductTwo.classList.contains('product-one-right')){
            ProductTwo.classList.add('product-two-right');
            ProductTwo.classList.remove('product-one-right');
            ProductTwo.classList.remove('product-one-left');
        }
                let ProductThree = document.querySelector('.three-product');
        if (ProductThree.classList.contains('product-two-left') || ProductThree.classList.contains('product-two-right')){
            ProductThree.classList.add('product-three-right');
            ProductThree.classList.remove('product-two-right');
            ProductThree.classList.remove('product-two-left');
        } else if (ProductThree.classList.contains('product-three-left') || ProductThree.classList.contains('product-three-right')) {
            ProductThree.classList.add('product-four-right');
            ProductThree.classList.remove('product-three-right');
            ProductThree.classList.remove('product-three-left');
        } else if (ProductThree.classList.contains('product-four-left') || ProductThree.classList.contains('product-four-right')) {
            ProductThree.classList.add('product-one-right');
            ProductThree.classList.remove('product-four-right');
            ProductThree.classList.remove('product-four-left');
        } else if (ProductThree.classList.contains('product-one-left') || ProductThree.classList.contains('product-one-right')){
            ProductThree.classList.add('product-two-right');
            ProductThree.classList.remove('product-one-right');
            ProductThree.classList.remove('product-one-left');
        }
               let ProductFour = document.querySelector('.four-product');
        if (ProductFour.classList.contains('product-two-left') || ProductFour.classList.contains('product-two-right')){
            ProductFour.classList.add('product-three-right');
            ProductFour.classList.remove('product-two-right');
            ProductFour.classList.remove('product-two-left');
        } else if (ProductFour.classList.contains('product-three-left') || ProductFour.classList.contains('product-three-right')) {
            ProductFour.classList.add('product-four-right');
            ProductFour.classList.remove('product-three-right');
            ProductFour.classList.remove('product-three-left');
        } else if (ProductFour.classList.contains('product-four-left') || ProductFour.classList.contains('product-four-right')) {
            ProductFour.classList.add('product-one-right');
            ProductFour.classList.remove('product-four-right');
            ProductFour.classList.remove('product-four-left');
        } else if (ProductFour.classList.contains('product-one-left') || ProductFour.classList.contains('product-one-right')){
            ProductFour.classList.add('product-two-right');
            ProductFour.classList.remove('product-one-right');
            ProductFour.classList.remove('product-one-left');
        }
    } ;
var    bottomLeft = function(){
        console.log('es');
             let ProductOne = document.querySelector('.one-product');
        if (ProductOne.classList.contains('product-one-right') || ProductOne.classList.contains('product-one-left')){
            ProductOne.classList.add('product-four-left');
            ProductOne.classList.remove('product-one-right');
            ProductOne.classList.remove('product-one-left');
        } else if (ProductOne.classList.contains( 'product-two-left') || ProductOne.classList.contains('product-two-right')) {
            ProductOne.classList.add('product-one-left');
            ProductOne.classList.remove('product-two-right');
            ProductOne.classList.remove('product-two-left');
        } else if (ProductOne.classList.contains('product-three-left') || ProductOne.classList.contains('product-three-right')) {
            ProductOne.classList.add('product-two-left');
            ProductOne.classList.remove('product-three-right');
            ProductOne.classList.remove('product-three-left');
        } else if (ProductOne.classList.contains('product-four-left') || ProductOne.classList.contains('product-four-right')) {
            ProductOne.classList.add('product-three-left');
            ProductOne.classList.remove('product-four-right');
            ProductOne.classList.remove('product-four-left');
        }
               let ProductTwo = document.querySelector('.two-product');
        if (ProductTwo.classList.contains('product-two-left') || ProductTwo.classList.contains('product-two-right')){
            ProductTwo.classList.add('product-one-left');
            ProductTwo.classList.remove('product-two-right');
            ProductTwo.classList.remove('product-two-left');
        } else if (ProductTwo.classList.contains('product-three-left') || ProductTwo.classList.contains('product-three-right')) {
            ProductTwo.classList.add('product-two-left');
            ProductTwo.classList.remove('product-three-right');
            ProductTwo.classList.remove('product-three-left');
        } else if (ProductTwo.classList.contains('product-four-left') || ProductTwo.classList.contains('product-four-right')) {
            ProductTwo.classList.add('product-three-left');
            ProductTwo.classList.remove('product-four-right');
            ProductTwo.classList.remove('product-four-left');
        } else if (ProductTwo.classList.contains('product-one-left') || ProductTwo.classList.contains('product-one-right')){
            ProductTwo.classList.add('product-four-left');
            ProductTwo.classList.remove('product-one-right');
            ProductTwo.classList.remove('product-one-left');
        }
                let ProductThree = document.querySelector('.three-product');
        if (ProductThree.classList.contains('product-two-left') || ProductThree.classList.contains('product-two-right')){
            ProductThree.classList.add('product-one-left');
            ProductThree.classList.remove('product-two-right');
            ProductThree.classList.remove('product-two-left');
        } else if (ProductThree.classList.contains('product-three-left') || ProductThree.classList.contains('product-three-right')) {
            ProductThree.classList.add('product-two-left');
            ProductThree.classList.remove('product-three-right');
            ProductThree.classList.remove('product-three-left');
        } else if (ProductThree.classList.contains('product-four-left') || ProductThree.classList.contains('product-four-right')) {
            ProductThree.classList.add('product-three-left');
            ProductThree.classList.remove('product-four-right');
            ProductThree.classList.remove('product-four-left');
        } else if (ProductThree.classList.contains('product-one-left') || ProductThree.classList.contains('product-one-right')){
            ProductThree.classList.add('product-four-left');
            ProductThree.classList.remove('product-one-right');
            ProductThree.classList.remove('product-one-left');
        }
               let ProductFour = document.querySelector('.four-product');
        if (ProductFour.classList.contains('product-two-left') || ProductFour.classList.contains('product-two-right')){
            ProductFour.classList.add('product-one-left');
            ProductFour.classList.remove('product-two-right');
            ProductFour.classList.remove('product-two-left');
        } else if (ProductFour.classList.contains('product-three-left') || ProductFour.classList.contains('product-three-right')) {
            ProductFour.classList.add('product-two-left');
            ProductFour.classList.remove('product-three-right');
            ProductFour.classList.remove('product-three-left');
        } else if (ProductFour.classList.contains('product-four-left') || ProductFour.classList.contains('product-four-right')) {
            ProductFour.classList.add('product-three-left');
            ProductFour.classList.remove('product-four-right');
            ProductFour.classList.remove('product-four-left');
        } else if (ProductFour.classList.contains('product-one-left') || ProductFour.classList.contains('product-one-right')){
            ProductFour.classList.add('product-four-left');
            ProductFour.classList.remove('product-one-right');
            ProductFour.classList.remove('product-one-left');
        }} ;
var    bottomPlay = function(){
    alert('Дизайнер макета не предоставил ссылку на видео :(');
}
if (isTouchScreendevice()) {
//            console.log('sdf');
    document.body.classList.add('touch');
    let menuArrows = document.querySelectorAll('.burger-icon');
    if (menuArrows.length > 0) {
        for(let index = 0; index< menuArrows.length; index++){
            const menuArrow= menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                if (menuArrow.parentElement.classList.contains('burger')){
                      menuArrow.parentElement.classList.add('_click');
                      menuArrow.parentElement.classList.remove('burger');
                } else if (menuArrow.parentElement.classList.contains('_click')){
                      menuArrow.parentElement.classList.add('_no-click');
                      menuArrow.parentElement.classList.remove('_click');
                } else if (menuArrow.parentElement.classList.contains('_no-click')) {
                     menuArrow.parentElement.classList.add('_click');
                     menuArrow.parentElement.classList.remove('_no-click');
                }
            }) ;
        }
    } 
    document.querySelector('.bottom-right').onclick = bottomRight ;
    document.querySelector('.bottom-left').onclick = bottomLeft ;
    document.querySelector('.bottom-play').onclick = bottomPlay ;

    } else {
    document.body.classList.add('pc');
    document.querySelector('.bottom-right').onclick = bottomRight ;
    document.querySelector('.bottom-left').onclick = bottomLeft ;
    document.querySelector('.bottom-play').onclick = bottomPlay ;
}

