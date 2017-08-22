import './css/main.css';
import { states, searchStates, createStateList, dropdownSearchWindowShow, dropdownSearchWindowHide } from './js/states';
import { serialize } from './js/serialize';
import { postAjaxJSON } from './js/postAjaxJSON';
import { clickHandlerCheckBoxAllSelect, clickHandlerCheckBoxAllDeSelect } from "./js/selectAll";
import { myRange } from "./js/rangeSlider"

//state input
let stateInput = document.querySelector(".state-input");

stateInput.addEventListener('keyup', function(e) {
    let result = searchStates(stateInput.value);
    if (result && stateInput.value) {
        let stateList = createStateList(result);
        dropdownSearchWindowShow(stateList);
    } else {
        dropdownSearchWindowHide();
    }

});

document.body.addEventListener('click', function(e) {
    dropdownSearchWindowHide();
});

//send form
let mainForm = document.getElementById('main-form');
mainForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let data = JSON.stringify(serialize(mainForm));
    let price = postAjaxJSON(window.location.href, data);
    price.then((res) => {
            console.log(res);
        })
        .catch(() => console.log('price error'));
});

//select and deselect all
let selectAllCheckBoxes = document.querySelectorAll('.subgroup-input-checkbox-select-all');
for (let index = 0; index < selectAllCheckBoxes.length; index++) {
    let selectAllCheckBox = selectAllCheckBoxes[index];
    selectAllCheckBox.addEventListener('click', clickHandlerCheckBoxAllSelect);
}

//range slider
myRange.init('.square-range-container');