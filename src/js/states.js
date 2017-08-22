let states = ['Kansas', 'Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
    'Iowa', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
    'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio,Oklahoma', 'Oregon,Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

//search states
function searchStates(name) {
    let res = states.filter(function(item) {
        let newItem = item.toLowerCase();
        if (newItem.indexOf(name.toLowerCase()) + 1) {
            return item;
        }
    });

    return res;
}

function createStateList(result) {
    if (result) {
        let list = `<ul class="state-input-window-list">`;
        result.forEach(function(item, i, result) {
            list += `<li class="state-input-window-list-li">${item}</li>`;
        });
        list += `</ul>`;
        return list;
    }
    return false;
}

//dropdown state input show window
function dropdownSearchWindowShow(result) {
    if (result) {
        let win = document.querySelector('.state-input-window');
        win.innerHTML = result;
        var listState = document.querySelector('.state-input-window-list');

        listState.addEventListener('click', function(e) {

            if (e.target.className === "state-input-window-list-li") {
                let stateInput = document.querySelector('.state-input');
                stateInput.value = e.target.innerText;
                dropdownSearchWindowHide();
            }
        });

        win.classList.add('active');

    }

}

//dropdown state input hide window
function dropdownSearchWindowHide() {
    let win = document.querySelector('.state-input-window');
    win.innerHTML = '';
    win.classList.remove('active');
}

export { states, searchStates, createStateList, dropdownSearchWindowShow, dropdownSearchWindowHide };