<template>
  <div class="container clearfix">
    <left-block class="left-block-advanced"></left-block>
    <div class="right-block">
      <header-app></header-app>
      <main-form class="main-form" v-on:getPrice="getPriceAdvanced" v-on:getInfo="getInfoAdvanced">
        <div slot="form-others-elements">
          <div class="hr"></div>
          <!-- description     -->
          <div class="group clearfix">
            <div class="header-sub description-header-sub">Description</div>
            <div class="subgroup no-margin-left">
              <div class="subgroup-title-left subgroup-title">Bedrooms</div>
              <select name="BedRooms" class="select select-margin-left">
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
                <option value=">=9" class="subgroup-select-option">&gt;=9</option>
              </select>
            </div>
            <div class="subgroup">
              <div class="subgroup-title-left subgroup-title">Bathrooms</div>
              <select name="BathRooms" class="select select-margin-left">
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
                <option value=">=9" class="subgroup-select-option">&gt;=9</option>
              </select>
            </div>
            <div class="subgroup square-subgroup">
              <div class="subgroup-title-left subgroup-title">Square</div>
              <vue-slider v-model="range" width="400px" v-bind:min="100" v-bind:max="11000" v-bind:bg-style="rangeStyle.bgStyle" v-bind:dot-size="0"
                v-bind:height="4" v-bind:process-style="rangeStyle.processStyle" v-bind:tooltip-style="rangeStyle.tooltipStyle"></vue-slider>
              <input type="hidden" id="price-min" name="SquareFrom" v-model="range[0]">
              <input type="hidden" id="price-max" name="SquareTo" v-model="range[1]">
            </div>
          </div>

          <!-- main attrs -->
          <div class="clearfix">
            <div class="group clearfix main-attr-group">
              <div class="header-sub main-attr-sub">Main attributes</div>
              <div class="clearfix">
                <div class="subgroup no-margin-left main-attr-subgroup-title">
                  <div class="subgroup-title">Cats ok</div>
                  <div class="subgroup-element first-subgroup-element">
                    <input type="radio" name="CatsOk" id="CatsOkNoMatter" class="subgroup-input-radio" value="NoMatter" checked>
                    <label for="CatsOkNoMatter" class="subgroup-input-radio-span">
                      <span>No matter</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="CatsOk" id="CatsOkYes" class="subgroup-input-radio" value="Yes">
                    <label for="CatsOkYes" class="subgroup-input-radio-span">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="CatsOk" id="CatsOkNo" class="subgroup-input-radio" value="No">
                    <label for="CatsOkNo" class="subgroup-input-radio-span">
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div class="subgroup  main-attr-subgroup-title main-attr-subgroup">
                  <div class="subgroup-title">Dogs ok</div>
                  <div class="subgroup-element first-subgroup-element">
                    <input type="radio" name="DogsOk" id="DogsOkNoMatter" class="subgroup-input-radio" value="NoMatter" checked>
                    <label for="DogsOkNoMatter" class="subgroup-input-radio-span">
                      <span>No matter</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="DogsOk" id="DogsOkYes" class="subgroup-input-radio" value="Yes">
                    <label for="DogsOkYes" class="subgroup-input-radio-span">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="DogsOk" id="DogsOkNo" class="subgroup-input-radio" value="No">
                    <label for="DogsOkNo" class="subgroup-input-radio-span">
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="clearfix">
                <div class="subgroup  main-attr-subgroup-title">
                  <div class="subgroup-title">Furnished</div>
                  <div class="subgroup-element first-subgroup-element">
                    <input type="radio" name="Furnished" id="FurnishedNoMatter" class="subgroup-input-radio" value="NoMatter" checked>
                    <label for="FurnishedNoMatter" class="subgroup-input-radio-span">
                      <span>No matter</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="Furnished" id="FurnishedYes" class="subgroup-input-radio" value="Yes">
                    <label for="FurnishedYes" class="subgroup-input-radio-span">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="Furnished" id="FurnishedNo" class="subgroup-input-radio" value="No">
                    <label for="FurnishedNo" class="subgroup-input-radio-span">
                      <span>No</span>
                    </label>
                  </div>
                </div>
                <div class="subgroup  main-attr-subgroup-title  main-attr-subgroup">
                  <div class="subgroup-title">No smoking</div>
                  <div class="subgroup-element first-subgroup-element">
                    <input type="radio" name="NoSmokinkg" id="NoSmokinkgNoMatter" class="subgroup-input-radio" value="NoMatter" checked>
                    <label for="NoSmokinkgNoMatter" class="subgroup-input-radio-span">
                      <span>No matter</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="NoSmokinkg" id="NoSmokinkgYes" class="subgroup-input-radio" value="Yes">
                    <label for="NoSmokinkgYes" class="subgroup-input-radio-span">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="NoSmokinkg" id="NoSmokinkgNo" class="subgroup-input-radio" value="No">
                    <label for="NoSmokinkgNo" class="subgroup-input-radio-span">
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="clearfix">
                <div class="subgroup">
                  <div class="subgroup-title">Wheelchair access</div>
                  <div class="subgroup-element first-subgroup-element">
                    <input type="radio" name="WheelchairAccessible" id="WheelchairAccessibleNoMatter" class="subgroup-input-radio" value="NoMatter"
                      checked>
                    <label for="WheelchairAccessibleNoMatter" class="subgroup-input-radio-span">
                      <span>No matter</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="WheelchairAccessible" id="WheelchairAccessibleYes" class="subgroup-input-radio" value="Yes">
                    <label for="WheelchairAccessibleYes" class="subgroup-input-radio-span">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="radio" name="WheelchairAccessible" id="WheelchairAccessibleNo" class="subgroup-input-radio" value="No">
                    <label for="WheelchairAccessibleNo" class="subgroup-input-radio-span">
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- housing type -->
            <div class="group housing-group">
              <div class="header-sub housing-attr-sub">Housing type</div>
              <checkboxes-list>
                <div slot="checkboxes-list" class="subgroup-elements-container">
                  <div class="first-subgroup-element-checkbox subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="ApartmentYes" name="Apartment" value="Yes">
                    <label for="ApartmentYes" class="subgroup-input-checkbox-span">
                      <span>Apartment</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="CondoYes" name="Condo" value="Yes">
                    <label for="CondoYes" class="subgroup-input-checkbox-span">
                      <span>Condo</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="CottageCabinYes" name="CottageCabin" value="Yes">
                    <label for="CottageCabinYes" class="subgroup-input-checkbox-span">
                      <span>Cottage/cabin</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="DuplexYes" name="Duplex" value="Yes">
                    <label for="DuplexYes" class="subgroup-input-checkbox-span">
                      <span>Duplex</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="FlatYes" name="Flat" value="Yes">
                    <label for="FlatYes" class="subgroup-input-checkbox-span">
                      <span>Flat</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="HouseYes" name="House" value="Yes">
                    <label for="HouseYes" class="subgroup-input-checkbox-span">
                      <span>House</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="InLawYes" name="InLaw" value="Yes">
                    <label for="InLawYes" class="subgroup-input-checkbox-span">
                      <span>In-law</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="LoftYes" name="Loft" value="Yes">
                    <label for="LoftYes" class="subgroup-input-checkbox-span">
                      <span>Loft</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="TownhouseYes" name="Townhouse" value="Yes">
                    <label for="TownhouseYes" class="subgroup-input-checkbox-span">
                      <span>Townhouse</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="ManufacturedYes" name="Manufactured" value="Yes">
                    <label for="ManufacturedYes" class="subgroup-input-checkbox-span">
                      <span>Manufactured</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="AssistedLivingYes" name="AssistedLiving" value="Yes">
                    <label for="AssistedLivingYes" class="subgroup-input-checkbox-span">
                      <span>AssistedLiving</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="LandYes" name="Land" value="Yes">
                    <label for="LandYes" class="subgroup-input-checkbox-span">
                      <span>Land</span>
                    </label>
                  </div>
                </div>
              </checkboxes-list>
            </div>

            <!-- parking -->
            <div class="group parking-group">
              <div class="header-sub parking-sub">Parking</div>
              <checkboxes-list>
                <div slot="checkboxes-list" class="subgroup-elements-container">
                  <div class="first-subgroup-element-checkbox subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="CarportYes" name="Carport" value="Yes">
                    <label for="CarportYes" class="subgroup-input-checkbox-span">
                      <span>Carport</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="AttachedGarageYes" name="AttachedGarage" value="Yes">
                    <label for="AttachedGarageYes" class="subgroup-input-checkbox-span">
                      <span>Attached garage</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="DetachedGarageYes" name="DetachedGarage" value="Yes">
                    <label for="DetachedGarageYes" class="subgroup-input-checkbox-span">
                      <span>Detached garage</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="OffStreetParkingYes" name="OffStreetParking" value="Yes">
                    <label for="OffStreetParkingYes" class="subgroup-input-checkbox-span">
                      <span>Off-street parking</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="StreetParkingYes" name="StreetParking" value="Yes">
                    <label for="StreetParkingYes" class="subgroup-input-checkbox-span">
                      <span>Street parking</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="ValetParkingYes" name="ValetParking" value="Yes">
                    <label for="ValetParkingYes" class="subgroup-input-checkbox-span">
                      <span>Valet parking</span>
                    </label>
                  </div>
                  <div class="subgroup-element">
                    <input type="checkbox" class="subgroup-input-checkbox" id="NoParkingYes" name="NoParking" value="Yes">
                    <label for="NoParkingYes" class="subgroup-input-checkbox-span">
                      <span>No parking</span>
                    </label>
                  </div>

                </div>
              </checkboxes-list>
            </div>
          </div>
          <div class="group clearfix">
            <div class="header-sub laundry-sub">Laundry</div>
            <div class="subgroup no-margin-top">             
              <div class="subgroup-element subgroup-element-laundry  no-margin-top no-margin-left">
                <input type="radio" name="Laundry" id="LaundryNoMatter" class="subgroup-input-radio" value="NoMatter" checked>
                <label for="LaundryNoMatter" class="subgroup-input-radio-span">
                  <span>No matter</span>
                </label>
              </div>
              <div class="subgroup-element subgroup-element-laundry  no-margin-top">
                <input type="radio" name="Laundry" id="LaundryInUnit" class="subgroup-input-radio" value="InUnit">
                <label for="LaundryInUnit" class="subgroup-input-radio-span">
                  <span>W/d in unit and w/d hookups</span>
                </label>
              </div>
              <div class="subgroup-element subgroup-element-laundry  no-margin-top">
                <input type="radio" name="Laundry" id="LaundryHookups" class="subgroup-input-radio" value="Hookups">
                <label for="LaundryHookups" class="subgroup-input-radio-span">
                  <span>W/d hookups</span>
                </label>
              </div>
            </div>
            <div class="subgroup no-margin-top">              
              <select name="LaundrySeparation" class="select laundry-select">
                <option value="NoMatter" class="subgroup-select-option">No matter</option>
                <option value="InBldg" class="subgroup-select-option">Laundry in bldg</option>
                <option value="OnSite" class="subgroup-select-option">Laundry on site</option>
                <option value="NoOnSite" class="subgroup-select-option">No laundry on site</option>
              </select>
            </div>
          </div>
          <div class="hr"></div>
        </div>
      </main-form>   
      <info v-if="showInfo"></info>   
      <price v-bind:price="priceValue" v-if="showPrice"></price>   
    </div>
  </div>
</template>

<script>
  import LeftBlock from '../components/LeftBlock.vue';
  import Header from '../components/Header.vue';
  import Mainform from '../components/Mainform.vue';
  import vueSlider from 'vue-slider-component';
  import checkBoxesList from '../components/checkBoxesSelectAll.vue';
  import Info from '../components/Info.vue';
  import Price from '../components/Price.vue';
  
  export default {
    


    data() {
      return {
        range: [100, 11000],
        rangeStyle: {
          bgStyle: {
            "backgroundColor": "#ececec"
          },
          processStyle: {
            "backgroundColor": "#6281c9"
          },
          tooltipStyle: {
            "position": "absolute",
            "top": "-32px",
            "fontSize": "10px",
            "padding": "4px 2px",
            "left": "-25px",
            "background": "#fff",
            "width": "40px",
            "text-align": "center",
            "color": "#747474",
            "border": "0px",
            "borderColor": "#6281c9"
          }
        },
        showInfo:false,
        showPrice:false,
        priceValue:''
      }


    },

    components: {
      'left-block': LeftBlock,
      'header-app': Header,
      'main-form': Mainform,
      vueSlider,
      'checkboxes-list': checkBoxesList,
      'info':Info,
      'price':Price      
     
    },
    methods: {
      getPriceAdvanced: function (priceValue) {
        this.showInfo=false;
        this.showPrice=true;
        this.priceValue=priceValue;
        console.log(priceValue);
      },

      getInfoAdvanced:function(){        
        this.showInfo=true;
        this.showPrice=false;
      }
    },
 

  }

</script>


<style lang="scss">
  @import '../assets/css/mixins.scss';
  @import '../assets/css/variables.scss';

  .left-block-advanced {
    background: url('../assets/img/bg.jpg') no-repeat;
  }

  .main-form {
    margin-top: 40px;
  }

  .group {
    margin-top: 32px;
  }

  .subgroup {
    margin-top: 17px;
  }


  .subgroup {
    float: left;
    margin-left: 30px;
  }

  .square-subgroup {
    margin-top: 28px;
  }

  .subgroup:first-child {
    margin-left: 0;
  }

  .submit-button {
    margin-top: 30px;
  }

  .subgroup-state {
    position: relative;
  }

  .advanced-search-link {
    font-size: 14px;
    display: block;
    margin-top: 35px;
  }

  .hr {
    background: #c6c6c6;
    width: 100%;
    height: 2px;
    margin-top: 30px;
  }

  .description-header-sub {
    background: url('../assets/img/icons/description-icon.png') no-repeat;
    padding: 0 0 0 25px;
    line-height: 1;
  }

  .subgroup-title-left {
    display: inline-block;
  }

  .select-margin-left {
    margin-left: 10px;
  }

  /***************main attrs ***************/

  .main-attr-group {
    float: left;
  }

  .main-attr-sub {
    background: url("../assets/img/icons/main-attr-icon.png") no-repeat;
    padding: 0 0 0 25px;
    line-height: 1;
    height: 16px;
  }


  .subgroup-element {
    margin-top: 10px;
  }

  .first-subgroup-element {
    margin-top: 15px;
  }

  .main-attr-subgroup-title {
    margin-top: 20px;
  }

  .main-attr-subgroup {
    margin-left: 55px;
  }
  /************housing type ******************/

  .housing-attr-sub {
    background: url("../assets/img/icons/housing-icon.png") no-repeat;
    padding: 0 0 0 25px;
    line-height: 1;
    height: 16px;
  }

  .housing-group {
    float: left;
    margin-left: 80px;
  }

  .first-subgroup-element-checkbox {
    margin-top: 22px;
  }
  /********parking ******/

  .parking-group {
    float: left;
    margin-left: 80px;
  }

  .parking-sub {
    background: url("../assets/img/icons/parking-icon.png") no-repeat;
    padding: 0 0 0 25px;
    line-height: 1;
    height: 16px;
  }
  /*******laundry*************/

  .laundry-sub {
    background: url("../assets/img/icons/laundry-icon.png") no-repeat;
    padding: 0 0 0 25px;
    line-height: 1;
    height: 17px;
    float: left;
  }

  .subgroup-element-laundry {
    float: left;
    margin-left: 25px;
  }

  .laundry-select {
    margin-top: -10px;
    width: 258px;
  }
  /******buttons ********/

  .get-info-button {
    margin-left: 20px;
  }
  /*************** range slider ***************************/

  .vue-slider-component {
    display: inline-block;
    margin-left: 30px;
  }

  /**************** helpers *********************/
  .no-margin-left {
    margin-left: 0px;
  }

  .no-margin-top {
    margin-top: 0;
  }

</style>
