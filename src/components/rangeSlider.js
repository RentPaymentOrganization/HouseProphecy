import React, { Component } from 'react';

function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

class rangeSlider extends Component {
    constructor(props){
        super(props)
        this.mouseDownMinBtn=this.mouseDownMinBtn.bind(this); 
        this.mouseDownMaxBtn=this.mouseDownMaxBtn.bind(this);
        this.mouseUp=this.mouseUp.bind(this);
        this.handleMouseMoveDownMinBtn=this.handleMouseMoveDownMinBtn.bind(this);       
        this.handleMouseMoveDownMaxBtn=this.handleMouseMoveDownMaxBtn.bind(this);      
    }

    componentDidMount(){
        this.container = document.querySelector('.square-range-container');
        this.inner = this.container.querySelector('[data-type=range-element]');
        this.innerRange = this.container.querySelector('[data-type=range-inner-element]');
        this.minBtn = this.container.querySelector('[data-type=min-btn]');
        this.maxBtn = this.container.querySelector('[data-type=max-btn]');
        this.minValueInput = this.container.querySelector('[data-type=input-min]');
        this.maxValueInput = this.container.querySelector('[data-type=input-max]');
        this.minValueText = this.minBtn.querySelector('[data-type=min-btn-value]');
        this.maxValueText = this.maxBtn.querySelector('[data-type=max-btn-value]');
        this.minValue = this.container.querySelector('[data-type=input-min]').value;
        this.maxValue = this.container.querySelector('[data-type=input-max]').value;
        this.valueWidth = this.maxValue - this.minValue;

        document.addEventListener("mouseup", this.mouseUp);
    } 

    componentWillUnmount(){
        document.removeEventListener("mouseup", this.mouseUp);
    }

    mouseDownMinBtn(e) {
        e.preventDefault();    
        document.addEventListener("mousemove", this.handleMouseMoveDownMinBtn);
    }   

    mouseUp(){
        document.removeEventListener("mousemove", this.handleMouseMoveDownMinBtn)
        document.removeEventListener("mousemove", this.handleMouseMoveDownMaxBtn)
    }
    

    handleMouseMoveDownMinBtn(e){       
        e.preventDefault();
            var valuePercent,
            value,
            innerX = getCoords(this.inner).left,
            maxX = getCoords( this.maxBtn).left - innerX,           
            innerWidth =  this.inner.offsetWidth,
            elemWidth =  this.minBtn.offsetWidth,
            elemX = e.pageX - innerX;
        if (elemX < -elemWidth) {
            elemX = -elemWidth;
        }

        if (elemX > maxX - elemWidth) {
            elemX = maxX - elemWidth;
        }

        this.minBtn.style.left = elemX + "px";

        valuePercent = Math.round(100 - (innerWidth - elemX - elemWidth) / innerWidth * 100),
            value = Math.round( this.valueWidth * valuePercent / 100) + parseInt( this.minValue);

            this.minValueInput.value = value;
            this.minValueText.innerText = value;

            this.innerRange.style.width = maxX - elemX + "px";
            this.innerRange.style.left = elemX + "px";
    }

    mouseDownMaxBtn(e) {
        e.preventDefault();
        document.addEventListener("mousemove", this.handleMouseMoveDownMaxBtn);
    }

    handleMouseMoveDownMaxBtn(e) {        
        var valuePercent,
            value,
            innerX = getCoords(this.inner).left,
            innerWidth = this.inner.offsetWidth,
            minX = getCoords(this.minBtn).left - innerX,         
            elemWidth = this.maxBtn.offsetWidth,
            elemX = e.pageX - innerX;

        if (elemX < minX + elemWidth) {
            elemX = minX + elemWidth;
        }

        if (elemX > innerWidth) {
            elemX = innerWidth;
        }

        this.maxBtn.style.left = elemX + "px";

        valuePercent = Math.round(100 - (innerWidth - elemX) / innerWidth * 100),
            value = Math.round(this.valueWidth * valuePercent / 100) + parseInt(this.minValue);

            this.maxValueInput.value = value;
            this.maxValueText.innerText = value;

            this.innerRange.style.width = elemX - minX + "px";
            this.innerRange.style.right = innerWidth - elemX + "px";

    }

    render() {
        return (
            <div className="square-range-container" data-type="range">            
                <div className="range" data-type="range-element">
                    <div className="range_inner" data-type="range-inner-element">
                    </div>
                    <div className="range_btn" data-type="min-btn" onMouseDown={this.mouseDownMinBtn}>
                        <span className="range_btn_value" data-type="min-btn-value">{this.props.min}</span>
                    </div>
                    <div className="range_btn" data-type="max-btn" onMouseDown={this.mouseDownMaxBtn}>
                        <span className="range_btn_value" data-type="max-btn-value">{this.props.max}</span>
                    </div>
                    <div className="values">
                        <span className="min-value values-span" data-type="min-val">{this.props.min}</span>
                        <span className="max-value values-span" data-type="max-val">{this.props.max}</span>
                    </div>
                </div>

                <div className="range-values-inputs">
                    <input id="price-min" type="hidden" name="SquareFrom" value={this.props.min} data-type="input-min"/>
                    <input id="price-max" type="hidden" name="SquareTo" value={this.props.max} data-type="input-max"/>
                </div>
            </div>
        );
    }
}

export default rangeSlider;