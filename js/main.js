let states=['Kansas','Alabama','Alaska','Arizona','California','Colorado','Connecticut','Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana',
    'Iowa','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska',
    'Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio,Oklahoma','Oregon,Pennsylvania',
    'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia',	'Washington','West Virginia','Wisconsin','Wyoming'];
//serialize
function serialize(form)
{
    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var i, j,
        obj = {};
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                        obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                        }
                        break;
                    case 'file':
                        break;
                }
                break;
            case 'TEXTAREA':
                obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                obj[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                        break;
                }
                break;
        }
    }
    return obj;
}


//ajax post
function postAjaxJSON(url,data='') {
    return new Promise(function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });
        xhr.addEventListener('error', () => {
            reject();
        });
        xhr.send(data);
    });
}

    //search states
    function searchStates(name){
        let res =states.filter(function(item){
            let newItem=item.toLowerCase();
            if(newItem.indexOf(name.toLowerCase()) + 1){
                return item;
            }
        });

        return res;
    }

    function createStateList(result){
        if(result){
            let list=`<ul class="state-input-window-list">`;
            result.forEach(function (item,i,result) {
                list+=`<li class="state-input-window-list-li">${item}</li>`;
            });
            list+=`</ul>`;
            return list;
        }
        return false;
    }

    //dropdown state input show window
    function dropdownSearchWindowShow(result){
        if(result) {
            let win = document.querySelector('.state-input-window');
            win.innerHTML = result;
            var listState = document.querySelector('.state-input-window-list');

            listState.addEventListener('click',function(e){

                if(e.target.className==="state-input-window-list-li"){
                    let stateInput=document.querySelector('.state-input');
                    stateInput.value=e.target.innerText;
                    dropdownSearchWindowHide();
                }
            });

            win.classList.add('active');

        }

    }

    //dropdown state input hide window
    function dropdownSearchWindowHide(){
        let win = document.querySelector('.state-input-window');
        win.innerHTML='';
        win.classList.remove('active');
    }


    let stateInput = document.querySelector(".state-input");

    stateInput.addEventListener('keyup',function(e){
        let result=searchStates(stateInput.value);
        if(result && stateInput.value){
            let stateList=createStateList(result);
            dropdownSearchWindowShow(stateList);
        }
        else{
            dropdownSearchWindowHide();
        }

    });
    document.body.addEventListener('click',function(e){
        dropdownSearchWindowHide();
    });

    //send form
    let mainForm=document.getElementById('main-form');
    mainForm.addEventListener('submit',function (e) {
        e.preventDefault();
        let data=JSON.stringify(serialize(mainForm));
        let price = postAjaxJSON(window.location.href,data);
        price.then((res)=>{
            console.log(res);
       
        })
            .catch(()=>console.log('price error'));
    });

    //select all and deselect
    let selectAllCheckBoxes = document.querySelectorAll('.subgroup-input-checkbox-select-all');
    for (let index = 0; index < selectAllCheckBoxes.length; index++) {
        selectAllCheckBox = selectAllCheckBoxes[index];
        selectAllCheckBox.addEventListener('click', clickHandlerCheckBoxAllSelect);   
    }

    function clickHandlerCheckBoxAllSelect() {
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

    function clickHandlerCheckBoxAllDeSelect() {
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

    //slider range

    var myRange = (function () {
        var container,
            inner,
            minBtn,
            maxBtn,
            minValue,
            maxValue,
            valueWidth,
            minValueInput,
            maxValueInput,
            minValueText,
            maxValueText;

        function mouseDownMinBtn(e) {
            e.preventDefault();
            document.addEventListener("mousemove", mouseMoveMinBtn);
        }

        function mouseDownMaxBtn(e) {
            e.preventDefault();
            document.addEventListener("mousemove", mouseMoveMaxBtn);
        }

        function mouseUpMinBtn(e) {
            e.preventDefault();
            document.removeEventListener("mousemove", mouseMoveMaxBtn);
            document.removeEventListener("mousemove", mouseMoveMinBtn);
        }

        function mouseMoveMinBtn(e) {

            var valuePercent,
                value,
                innerX = getCoords(inner).left,
                maxX = getCoords(maxBtn).left - innerX,
                innerRangeWidth = innerRange.offsetWidth,
                innerWidth = inner.offsetWidth,
                elemWidth = minBtn.offsetWidth,
                elemX = e.pageX - innerX;
            if (elemX < -elemWidth) {
                elemX = -elemWidth;
            }

            if (elemX > maxX - elemWidth) {
                elemX = maxX - elemWidth;
            }

            minBtn.style.left = elemX + "px";

            valuePercent = Math.round(100 - (innerWidth - elemX - elemWidth) / innerWidth * 100),
                value = Math.round(valueWidth * valuePercent / 100) + parseInt(minValue);

            minValueInput.value = value;
            minValueText.innerText = value;

            innerRange.style.width = maxX - elemX + "px";
            innerRange.style.left = elemX + "px";

        }

        function mouseMoveMaxBtn(e) {

            var valuePercent,
                value,
                innerX = getCoords(inner).left,
                innerWidth = inner.offsetWidth,
                minX = getCoords(minBtn).left - innerX,
                innerRangeWidth = innerRange.offsetWidth,
                elemWidth = maxBtn.offsetWidth,
                elemX = e.pageX - innerX;

            if (elemX < minX + elemWidth) {
                elemX = minX + elemWidth;
            }

            if (elemX > innerWidth) {
                elemX = innerWidth;
            }

            maxBtn.style.left = elemX + "px";

            valuePercent = Math.round(100 - (innerWidth - elemX) / innerWidth * 100),
                value = Math.round(valueWidth * valuePercent / 100) + parseInt(minValue);

            maxValueInput.value = value;
            maxValueText.innerText = value;

            innerRange.style.width = elemX - minX + "px";
            innerRange.style.right = innerWidth - elemX + "px";

        }

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        }

        var _setUpListners = function () {
            minBtn.addEventListener('mousedown', mouseDownMinBtn);
            maxBtn.addEventListener('mousedown', mouseDownMaxBtn);
            document.addEventListener('mouseup', mouseUpMinBtn);
        }

        var init = function (selector) {
            container = document.querySelector(selector);
            inner = container.querySelector('[data-type=range-element]');
            innerRange = container.querySelector('[data-type=range-inner-element]');
            minBtn = container.querySelector('[data-type=min-btn]');
            maxBtn = container.querySelector('[data-type=max-btn]');
            minValueInput = container.querySelector('[data-type=input-min]');
            maxValueInput = container.querySelector('[data-type=input-max]');
            minValueText = minBtn.querySelector('[data-type=min-btn-value]');
            maxValueText = maxBtn.querySelector('[data-type=max-btn-value]');
            minValue = container.querySelector('[data-type=input-min]').value;
            maxValue = container.querySelector('[data-type=input-max]').value;
            valueWidth = maxValue - minValue;
            _setUpListners();

        }

        return {
            init: init
        };

    })();

    myRange.init('.square-range-container');
