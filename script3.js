'use strict';

const chipsDropdown = document.querySelector('.chips-dropdown');
const iconDropdown = document.querySelector('.material-symbols-outlined');
const chipsInnerContainer = document.querySelector('.chips-inner-container');

const dropDownList = ['Warehouse 1', 'Warehouse 3', 'Warehouse 2'];
const chipzList = [];

fillDropDown();

iconDropdown.addEventListener('click', function () {
  chipsDropdown.classList.toggle('chips-collapse');
});

chipsDropdown.addEventListener('click', function (e) {
  console.log(e.target, e.currentTarget);
  let elm = e.target;
  console.log(elm);
  elm = elm.closest('.chips-dropdown-item');

  if (elm) {
    const elP = elm.querySelector('p') || elm;
    const data = elP.textContent;
    const index = dropDownList.findIndex(text => text === data);
    dropDownList.splice(index, 1);
    chipzList.push(data);
    renderChipsItem(data);
    elm.remove();
    if (!chipsDropdown.children.length) {
      iconDropdown.click();
    }
    if (chipsInnerContainer.querySelector('.chips-placeholder')) {
      chipsInnerContainer.querySelector('.chips-placeholder').remove();
    }
  }
});

chipsInnerContainer.addEventListener('click', function (event) {
  const elm = event.target;
  if (elm.classList.contains('material-symbols-outlined')) {
    const chipsItem = elm.closest('.chips-item');
    dropDownList.push(chipsItem.querySelector('p').textContent);
    chipsDropdown.innerHTML = '';
    chipsItem.remove();
    if (!chipsInnerContainer.children.length) {
      renderChipsPlaceholder();
    }
    fillDropDown();
  }
});

function fillDropDown() {
  dropDownList.sort().forEach(renderDropdownItem);
}

function renderDropdownItem(str) {
  const rendered = `<div class="chips-dropdown-item">
              <p class="chips-dropdown-par">${str}</p>
            </div>`;
  chipsDropdown.insertAdjacentHTML('beforeend', rendered);
}

function renderChipsItem(str) {
  const rendered = `<div class="chips-item">
                <div class="chips-item-inner-item">
                  <p>${str}</p>
                </div>
                <span class="material-symbols-outlined"> close </span>
              </div>`;
  chipsInnerContainer.insertAdjacentHTML('beforeend', rendered);
}

function renderChipsPlaceholder() {
  const rendered = `<div class="chips-item chips-placeholder">
                <div class="chips-inner-container">
                  <p>Warehouses</p>
                </div>
              </div>`;
  chipsInnerContainer.insertAdjacentHTML('beforeend', rendered);
}

function discardChips() {
  console.log(this);
}
