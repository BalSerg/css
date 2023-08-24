window.onload = function (){
    function getElement(element) {
        return document.querySelector(element);
    }

    function getArray(elements) {
        return Array.from(document.querySelectorAll(elements));
    }

    let elMenu = getElement('.js-menu');
    let arrMenuItems = getArray('.js-go-from-menu');
    let arrForMenuItems = getArray('.js-for-menu');
    arrMenuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            arrForMenuItems[index].scrollIntoView({
                behavior: 'smooth'
            })
            if(elMenu.classList.contains('is-active')) {
                elMenu.classList.remove('is-active');
                elBurger.classList.remove('is-active');
            }
        })
    })


    let elOrderButton = getElement('.js-go-order');
    let elOrderBlock = getElement('.js-for-order');
    elOrderButton.addEventListener('click', () => {
        elOrderBlock.scrollIntoView({
            behavior: 'smooth'
        })
    })


    let elPseudoSelect = getElement('.js-pseudo-select');
    let elPseudoSelectInput = getElement('.js-pseudo-select-input');
    let arrDropdownItems = getArray('.js-dropdown > div');
    elPseudoSelect.addEventListener('click', function (){
        this.classList.toggle('is-active');
    });
    arrDropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            elPseudoSelect.classList.remove('is-active');
            elPseudoSelectInput.value = item.textContent;
        })
    })


    let arrForInputs = getArray('.js-for-input');
    let arrInputs = getArray('.js-input');
    arrForInputs.forEach((item, index) => {
        item.addEventListener('click', () => {
            arrInputs[index].focus();
        })
    })
    arrInputs.forEach((item, index) => {
        item.addEventListener('blur', function(e){
            e.stopPropagation();
            if(item.value === '' || item.value === null || item.value.length === 0) {
                arrForInputs[index].classList.remove('is-filled');
                item.classList.remove('is-filled');
            }
            else {
                item.classList.add('is-filled');
                arrForInputs[index].classList.add('is-filled');
            }
        })
    })


    let elRange = getElement('.js-range');
    let elRangeValue = getElement('.js-range-value');
    elRangeValue.textContent = elRange.value;
    elRange.addEventListener('input', () => {
        elRangeValue.textContent = elRange.value;
    })


    let elBurger = getElement('.js-burger');
    elBurger.addEventListener('click', () => {
        elBurger.classList.toggle('is-active');
        if(elBurger.classList.contains('is-active')){
            elMenu.classList.add('is-active');
        }
        else {
            elMenu.classList.remove('is-active');
        }
    })
}


