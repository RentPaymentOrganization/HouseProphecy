//select all and deselect
function clickHandlerCheckBoxAllSelect(event) {
    event.preventDefault();
    let parent = this.closest('.subgroup-elements-container'),
        checkBoxes = parent.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = "checked";
    }
    this.classList.remove('subgroup-input-checkbox-select-all');
    this.classList.add('subgroup-input-checkbox-deselect-all');
    this.innerText = "Deselect All";
    this.addEventListener('click', clickHandlerCheckBoxAllDeSelect);
}

function clickHandlerCheckBoxAllDeSelect(event) {
    event.preventDefault();

    let parent = this.closest('.subgroup-elements-container'),
        checkBoxes = parent.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = "";
    }
    this.classList.add('subgroup-input-checkbox-select-all');
    this.classList.remove('subgroup-input-checkbox-deselect-all');
    this.innerText = "Select All";
    this.removeEventListener('click', clickHandlerCheckBoxAllDeSelect);
    this.addEventListener('click', clickHandlerCheckBoxAllSelect);
}

export { clickHandlerCheckBoxAllSelect, clickHandlerCheckBoxAllDeSelect }