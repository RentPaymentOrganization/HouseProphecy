export var myRange = (function() {
    var container,
        inner,
        innerRange,
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

    var _setUpListners = function() {
        minBtn.addEventListener('mousedown', mouseDownMinBtn);
        maxBtn.addEventListener('mousedown', mouseDownMaxBtn);
        document.addEventListener('mouseup', mouseUpMinBtn);
    }

    var init = function(selector) {
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