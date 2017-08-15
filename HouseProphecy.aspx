﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HouseProphecy.aspx.cs" Inherits="HouseProphecy.HouseProphecy" %>
<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->
<div class="container">
    <form action="" id="main-form" enctype="multipart/form-data">
        <!--address-->
        <div class="group clearfix">
            <div class="group-title">Address</div>
            <div class="subgroup no-margin-left subgroup-state">
                <div class="subgroup-title">State</div>
                <input type="text" class="subgroup-input state-input" value="" name="State">
                <div class="state-input-window"></div>
            </div>
            <div class="subgroup">
                <div class="subgroup-title">ZIP code</div>
                <input type="text" class="subgroup-input" value="" name="ZipCode">
            </div>
        </div>

        <!--description-->
        <div class="group clearfix">
            <div class="group-title">Description</div>
            <div class="subgroup no-margin-left">
                <div class="subgroup-title">Bedrooms</div>

                <select name="BedRooms" class="subgroup-select">
                    <option value="0" class="subgroup-select-option">0</option>
                    <option value="1" class="subgroup-select-option">1</option>
                    <option value="2" class="subgroup-select-option">2</option>
                    <option value="3" class="subgroup-select-option">3</option>
                    <option value="4" class="subgroup-select-option">4</option>
                    <option value="5" class="subgroup-select-option">5</option>
                    <option value="6" class="subgroup-select-option">6</option>
                    <option value="7" class="subgroup-select-option">7</option>
                    <option value="8" class="subgroup-select-option">8</option>
                    <option value="9" class="subgroup-select-option">9</option>
                    <option value=">=9" class="subgroup-select-option">>=9</option>
                </select>
            </div>
            <div class="subgroup">
                <div class="subgroup-title">Bathrooms</div>
                <select name="BathRooms" class="subgroup-select">
                    <option value="0" class="subgroup-select-option">0</option>
                    <option value="1" class="subgroup-select-option">1</option>
                    <option value="2" class="subgroup-select-option">2</option>
                    <option value="3" class="subgroup-select-option">3</option>
                    <option value="4" class="subgroup-select-option">4</option>
                    <option value="5" class="subgroup-select-option">5</option>
                    <option value="6" class="subgroup-select-option">6</option>
                    <option value="7" class="subgroup-select-option">7</option>
                    <option value="8" class="subgroup-select-option">8</option>                    
                    <option value=">=9" class="subgroup-select-option">>=9</option>
                </select>
            </div>
            <div class="subgroup">
                <div class="subgroup-title">Square</div>
                <div class="square-range-container" data-type="range">

                    <div class="range" data-type="range-element">
                        <div class="range_inner" data-type="range-inner-element">
                        </div>
                        <div class="range_btn" data-type="min-btn">
                            <span class="range_btn_value" data-type="min-btn-value">100</span>
                        </div>
                        <div class="range_btn" data-type="max-btn">
                            <span class="range_btn_value" data-type="max-btn-value">11000</span>
                        </div>
                        <div class="values">
                            <span class="min-value values-span" data-type="min-val">100</span>
                            <span class="max-value values-span" data-type="max-val">11000</span>
                        </div>
                    </div>

                    <div class="range-values-inputs">
                        <input id="price-min" type="hidden" name="SquareTo" value="100" data-type="input-min">
                        <input id="price-max" type="hidden" name="SquareFrom" value="11000" data-type="input-max">
                    </div>
                </div>
            </div>
        </div>

        <!--main attribute-->
        <div class="group clearfix">
            <div class="group-title">Main attributes</div>
            <div class="subgroup no-margin-left">
                <div class="subgroup-title">Cats ok</div>
                <div class="subgroup-elements-container">
                    <div class="subgroup-element">
                        <input type="radio" name="CatsOk" class="subgroup-input-radio" value="NoMatter" checked>
                        <span class="subgroup-input-radio-span">no matter</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="CatsOk" class="subgroup-input-radio" value="Yes">
                        <span class="subgroup-input-radio-span">yes</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="CatsOk" class="subgroup-input-radio" value="No">
                        <span class="subgroup-input-radio-span">no</span>
                    </div>
                </div>
            </div>
            <div class="subgroup">
                <div class="subgroup-title">Dogs ok</div>
                <div class="subgroup-elements-container">
                    <div class="subgroup-element">
                        <input type="radio" name="DogsOk" class="subgroup-input-radio" value="NoMatter" checked>
                        <span class="subgroup-input-radio-span">no matter</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="DogsOk" class="subgroup-input-radio" value="Yes">
                        <span class="subgroup-input-radio-span">yes</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="DogsOk" class="subgroup-input-radio" value="No">
                        <span class="subgroup-input-radio-span">no</span>
                    </div>
                </div>
            </div>

            <div class="subgroup">
                <div class="subgroup-title">Furnished</div>
                <div class="subgroup-elements-container">
                    <div class="subgroup-element">
                        <input type="radio" name="Furnished" class="subgroup-input-radio" value="NoMatter" checked><span class="subgroup-input-radio-span">no matter</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="Furnished" class="subgroup-input-radio" value="Yes"><span class="subgroup-input-radio-span">yes</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="Furnished" class="subgroup-input-radio" value="No"><span class="subgroup-input-radio-span">no</span>
                    </div>
                </div>
            </div>

            <div class="subgroup">
                <div class="subgroup-title">No smoking</div>
                <div class="subgroup-elements-container">
                    <div class="subgroup-element">
                        <input type="radio" name="NoSmokinkg" class="subgroup-input-radio" value="NoMatter" checked><span class="subgroup-input-radio-span">no matter</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="NoSmokinkg" class="subgroup-input-radio" value="Yes"><span class="subgroup-input-radio-span">yes</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="NoSmokinkg" class="subgroup-input-radio" value="No"><span class="subgroup-input-radio-span">no</span>
                    </div>
                </div>
            </div>

            <div class="subgroup">
                <div class="subgroup-title">Wheelchair access</div>
                <div class="subgroup-elements-container">
                    <div class="subgroup-element">
                        <input type="radio" name="WheelchairAccessible" class="subgroup-input-radio" value="NoMatter" checked><span class="subgroup-input-radio-span">no matter</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="WheelchairAccessible" class="subgroup-input-radio" value="Yes"><span class="subgroup-input-radio-span">yes</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="WheelchairAccessible" class="subgroup-input-radio" value="No"><span class="subgroup-input-radio-span">no</span>
                    </div>
                </div>
            </div>
        </div>

        <!--main attribute-->
        <div class="group clearfix">
            <div class="group-title">Housing type</div>
            <div class="subgroup-elements-container">
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Apartment" value="Yes">
                    <span class="subgroup-input-checkbox-span">Apartment</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Condo" value="Yes">
                    <span class="subgroup-input-checkbox-span">Condo</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="CottageCabin" value="Yes">
                    <span class="subgroup-input-checkbox-span">Cottage/cabin</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Duplex" value="Yes">
                    <span class="subgroup-input-checkbox-span">Duplex</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Flat" value="Yes">
                    <span class="subgroup-input-checkbox-span">Flat</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="House" value="Yes">
                    <span class="subgroup-input-checkbox-span">House</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="InLaw" value="Yes">
                    <span class="subgroup-input-checkbox-span">In-law</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Loft" value="Yes">
                    <span class="subgroup-input-checkbox-span">Loft</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Townhouse" value="Yes">
                    <span class="subgroup-input-checkbox-span">Townhouse</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Manufactured" value="Yes">
                    <span class="subgroup-input-checkbox-span">Manufactured</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="AssistedLiving" value="Yes">
                    <span class="subgroup-input-checkbox-span">AssistedLiving</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Land" value="Yes">
                    <span class="subgroup-input-checkbox-span">Land</span>
                </div>
                <div class="subgroup-element">
                    
                     <a href="javascript:void(0)" class="subgroup-input-checkbox-select-all">Select All</a>
                   
                </div>

            </div>
        </div>

        <!--main attribute-->
        <div class="group clearfix">
            <div class="group-title">Laundry</div>
            <div class="subgroup-elements-container">
                <div class="subgroup no-margin-left">
                    <div class="subgroup-element">
                        <input type="radio" name="Laundry" class="subgroup-input-radio" value="NoMatter" checked>
                        <span class="subgroup-input-radio-span">no matter</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="Laundry" class="subgroup-input-radio" value="InUnit">
                        <span class="subgroup-input-radio-span">W/d in unit and  w/d hookups</span>
                    </div>
                    <div class="subgroup-element">
                        <input type="radio" name="Laundry" class="subgroup-input-radio" value="Hookups">
                        <span class="subgroup-input-radio-span">W/d hookups</span>
                    </div>
                </div>
                <div class="subgroup">
                    <select name="LaundrySeparation" class="subgroup-select">
                        <option value="NoMatter" class="subgroup-select-option">No matter</option>
                        <option value="InBldg" class="subgroup-select-option">Laundry in bldg</option>
                        <option value="OnSite" class="subgroup-select-option">Laundry on site</option>
                        <option value="NoOnSite" class="subgroup-select-option">No laundry on site</option>
                    </select>
                </div>
            </div>
        </div>

        <!--parking-->
        <div class="group clearfix">
            <div class="group-title">Parking</div>
            <div class="subgroup-elements-container">
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="Carport" value="Yes">
                    <span class="subgroup-input-checkbox-span">Carport</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="AttachedGarage" value="Yes">
                    <span class="subgroup-input-checkbox-span">Attached garage</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="DetachedGarage" value="Yes">
                    <span class="subgroup-input-checkbox-span">Detached garage</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="OffStreetParking" value="Yes">
                    <span class="subgroup-input-checkbox-span">Off-street parking</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="StreetParking" value="Yes">
                    <span class="subgroup-input-checkbox-span">Street parking</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="ValetParking" value="Yes">
                    <span class="subgroup-input-checkbox-span">Valet parking</span>
                </div>
                <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" name="NoParking" value="Yes">
                    <span class="subgroup-input-checkbox-span">No parking</span>
                </div>
                <div class="subgroup-element">
                    
                    <a href="javascript:void(0)" class="subgroup-input-checkbox-select-all">Select All</a>
                </div>
            </div>
        </div>

        <input type="submit" value="Send" class="submit-button">
    </form>
    <div id="result"></div>
</div>

<script src="/js/main.js"></script>
</body>
</html>