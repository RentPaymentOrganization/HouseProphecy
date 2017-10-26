<template>
  <div class="info-container">

    <div class="menu-info">
      <a href="#" :class="{active:details}" class="menu-info-link" @click.prevent="showProperty">Property details</a>
      <a href="#" :class="{active:recommendation}" class="menu-info-link" @click.prevent="showRecommendation">Recommendation</a>
    </div>
    
    <div :class="{active:details}" class="info-contetnt">
      <div class="info-contetnt-container clearfix">
        <div class="info-contetnt-map">
          <img src='../assets/img/map.jpg' alt="" />
        </div>
        <div class="info-contetnt-address-block">
          <div class="info-contetnt-address">
            <div class="info-contetnt-address-street">622 White horse street</div>
            <div class="info-contetnt-address-city">Abescon city Atlantic</div>
          </div>
          <div class="info-contetnt-address-data-blocks clearfix">
            <div class="info-contetnt-address-data-block no-margin-left">
              <div class="info-contetnt-address-data-block-title">Rentestimate</div>
              <div class="info-contetnt-address-data-block-value">$ 3,000</div>
            </div>
            <div class="info-contetnt-address-data-block">
              <div class="info-contetnt-address-data-block-title">Confidence score</div>
              <div class="info-contetnt-address-data-block-value">80%</div>
            </div>
            <div class="info-contetnt-address-data-block">
              <div class="info-contetnt-address-data-block-title">Est property vacancy rate</div>
              <div class="info-contetnt-address-data-block-value">4,6%</div>
            </div>
            <div class="info-contetnt-address-data-block">
              <div class="info-contetnt-address-data-block-title">District criminality</div>
              <div class="info-contetnt-address-data-block-value">30%</div>
            </div>
          </div>
        </div>

      </div>
      <div class="info-contetnt-container info-contetnt-props-container clearfix">
        <div class="info-contetnt-props-block info-contetnt-props-block-type">
          <div class="info-contetnt-props-block-title">Type</div>
          <div class="info-contetnt-props-block-value">Single-family</div>
        </div>
        <div class="info-contetnt-props-block info-contetnt-props-block-year">
          <div class="info-contetnt-props-block-title">Year built</div>
          <div class="info-contetnt-props-block-value">Not found</div>
        </div>
        <div class="info-contetnt-props-block info-contetnt-props-block-square">
          <div class="info-contetnt-props-block-title">SQ/FT</div>
          <div class="info-contetnt-props-block-value">530</div>
        </div>
        <div class="info-contetnt-props-block info-contetnt-props-block-beds">
          <span class="info-contetnt-props-block-title">Beds</span>
          <span class="info-contetnt-props-block-value">2</span>
        </div>
        <div class="info-contetnt-props-block info-contetnt-props-block-baths">
          <span class="info-contetnt-props-block-title">Baths</span>
          <span class="info-contetnt-props-block-value">1</span>
        </div>
        <div class="info-contetnt-props-block info-contetnt-props-block-radius">
          <div class="info-contetnt-props-block-title">Radius serched</div>
          <div class="info-contetnt-props-block-value">2.0 ml</div>
        </div>
      </div>
      <div class="info-contetnt-container info-contetnt-socials">
        <div class="info-contetnt-socials-title">District ifrastructure</div>
        <div class="info-contetnt-socials-blocks-container clearfix">
          <div class="info-contetnt-socials-block">
            <div class="info-contetnt-socials-block-title info-contetnt-socials-block-title-schools">Schools</div>
            <ul class="info-contetnt-socials-block-list">
              <li class="info-contetnt-socials-block-list-li">Ps 77 Lower Lab School</li>
              <li class="info-contetnt-socials-block-list-li">The Anderson School</li>
              <li class="info-contetnt-socials-block-list-li">Harlem Success Academy Charter School 4</li>
              <li class="info-contetnt-socials-block-list-li">Ps 333 Manhattan School</li>
              <li class="info-contetnt-socials-block-list-li">High Tech High School</li>
              <li class="info-contetnt-socials-block-list-li">Ps 31 Samuel F Dupont</li>
            </ul>
            <a href="#" class="info-contetnt-socials-block-link link">View more</a>
          </div>
          <div class="info-contetnt-socials-block">
            <div class="info-contetnt-socials-block-title info-contetnt-socials-block-title-markets">Markets</div>
            <ul class="info-contetnt-socials-block-list">
              <li class="info-contetnt-socials-block-list-li">Pioneer supermarket</li>
              <li class="info-contetnt-socials-block-list-li">Bebeth market</li>
              <li class="info-contetnt-socials-block-list-li">Fairway market</li>
              <li class="info-contetnt-socials-block-list-li">Ketarilla gourment</li>
              <li class="info-contetnt-socials-block-list-li">Royal dely</li>
              <li class="info-contetnt-socials-block-list-li">Amish market</li>
            </ul>
            <a href="#" class="info-contetnt-socials-block-link link">View more</a>
          </div>
          <div class="info-contetnt-socials-block">
            <div class="info-contetnt-socials-block-title info-contetnt-socials-block-title-hospital">Hospital</div>
            <ul class="info-contetnt-socials-block-list">
              <li class="info-contetnt-socials-block-list-li">West dentisty</li>
              <li class="info-contetnt-socials-block-list-li">Abc medical</li>
              <li class="info-contetnt-socials-block-list-li">Cosmetic dentisty</li>
              <li class="info-contetnt-socials-block-list-li">Pediatric ophtalmic consults</li>
              <li class="info-contetnt-socials-block-list-li">Professional dental</li>
              <li class="info-contetnt-socials-block-list-li">Dermatology</li>
            </ul>
            <a href="#" class="info-contetnt-socials-block-link link">View more</a>
          </div>
          <div class="info-contetnt-socials-block">
            <div class="info-contetnt-socials-block-title info-contetnt-socials-block-title-metro">Metro</div>
            <ul class="info-contetnt-socials-block-list">
              <li class="info-contetnt-socials-block-list-li">72 st</li>
              <li class="info-contetnt-socials-block-list-li">72 st Broadway</li>
              <li class="info-contetnt-socials-block-list-li">Museum</li>
              <li class="info-contetnt-socials-block-list-li">86 st</li>
              <li class="info-contetnt-socials-block-list-li">Subway station</li>
            </ul>
            <a href="#" class="info-contetnt-socials-block-link link">View more</a>
          </div>
        </div>
      </div>
    </div>

    <div :class="{active:recommendation}" class="recommendation-content">
      <div class="recommendation-content-title">Recommendation</div>
      <div class="recommendation-content-blocks-container">
        <div class="recommendation-content-blocks-container-row">
          <div class="recommendation-content-block">
            <div class="recommendation-content-block-title recommendation-content-block-title-wall-color">Wall color</div>
            <ul class="recommendation-content-block-list">
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Blue</div>
                <div class="recommendation-content-block-list-li-value">fast-rent 65%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Grey</div>
                <div class="recommendation-content-block-list-li-value">fast-rent 50%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Green</div>
                <div class="recommendation-content-block-list-li-value">fast-rent 0%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Red</div>
                <div class="recommendation-content-block-list-li-value">fast-rent -16%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Yellow</div>
                <div class="recommendation-content-block-list-li-value">fast-rent -30%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
            </ul>
          </div>
          <div class="recommendation-content-block">
            <div class="recommendation-content-block-title recommendation-content-block-title-pets">Pets</div>
            <ul class="recommendation-content-block-list">
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">No matter</div>
                <div class="recommendation-content-block-list-li-value">fast-rent 65%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Dogs yes</div>
                <div class="recommendation-content-block-list-li-value">fast-rent 50%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Cats yes</div>
                <div class="recommendation-content-block-list-li-value">fast-rent 0%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Cats no</div>
                <div class="recommendation-content-block-list-li-value">fast-rent -16%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Dogs no</div>
                <div class="recommendation-content-block-list-li-value">fast-rent -30%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
            </ul>
          </div>
          <div class="recommendation-content-block">
            <div class="recommendation-content-block-title recommendation-content-block-title-furniture">Furniture</div>
            <ul class="recommendation-content-block-list">
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Full furniture</div>
                <div class="recommendation-content-block-list-li-value">+700$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Designer furniture</div>
                <div class="recommendation-content-block-list-li-value">+500$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Built-in furniture</div>
                <div class="recommendation-content-block-list-li-value">0$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Minimal furniture</div>
                <div class="recommendation-content-block-list-li-value">-800$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">No furniture</div>
                <div class="recommendation-content-block-list-li-value">-2000$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="recommendation-content-blocks-container-row">
          <div class="recommendation-content-block">
            <div class="recommendation-content-block-title recommendation-content-block-title-tech">Home technical</div>
            <ul class="recommendation-content-block-list">
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Dishwasher</div>
                <div class="recommendation-content-block-list-li-value">+200$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Wi-fi</div>
                <div class="recommendation-content-block-list-li-value">+40$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Tv</div>
                <div class="recommendation-content-block-list-li-value">0$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">No microvave</div>
                <div class="recommendation-content-block-list-li-value">-100$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">No oven</div>
                <div class="recommendation-content-block-list-li-value">-250$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
            </ul>
          </div>
          <div class="recommendation-content-block">
            <div class="recommendation-content-block-title recommendation-content-block-title-parking">Parking</div>
            <ul class="recommendation-content-block-list">
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Valet parking</div>
                <div class="recommendation-content-block-list-li-value">+500$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Garage</div>
                <div class="recommendation-content-block-list-li-value">+300$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Carport</div>
                <div class="recommendation-content-block-list-li-value">0$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">Street parking</div>
                <div class="recommendation-content-block-list-li-value">-100$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">No parking</div>
                <div class="recommendation-content-block-list-li-value">-600$</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
            </ul>
          </div>
          <div class="recommendation-content-block">
            <div class="recommendation-content-block-title recommendation-content-block-title-parking">Deposit</div>
            <ul class="recommendation-content-block-list">
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">500$</div>
                <div class="recommendation-content-block-list-li-value">fast rent +60%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">$1000</div>
                <div class="recommendation-content-block-list-li-value">fast rent +40%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-icon-up"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">$1500</div>
                <div class="recommendation-content-block-list-li-value">fast rent 0%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-none"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">$2000</div>
                <div class="recommendation-content-block-list-li-value">fast rent -20%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
              <li class="recommendation-content-block-list-li clearfix">
                <div class="recommendation-content-block-list-li-text">$3000</div>
                <div class="recommendation-content-block-list-li-value">fast rent -37%</div>
                <div class="recommendation-content-block-list-li-icon recommendation-content-block-list-li-down"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
     data() {
        return {
           details: true,
           recommendation:false
        }
     },
     methods: {
        showProperty() {
            this.details=true;
            this.recommendation=false;
        },
        showRecommendation() {
            this.details=false;
            this.recommendation=true;
        }
     },
  }

</script>

<style scoped  lang="scss">
  @import '../assets/css/variables.scss';
.info-contetnt{
    display: none;
}

.info-contetnt.active{
    display: block;
}

.menu-info{
    margin-top: 30px;
    background: #cccccc;
}

.menu-info-link{
    color: #747474;
    padding:13px 33px;
    position: relative;
    font-size: 12px;
    text-decoration:none;
    display: inline-block;
}

.menu-info-link.active{
    color: #fff;
}

.menu-info-link.active:after{
    content: '';
    border: 5px solid transparent;
    border-bottom: 5px solid #fff;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    bottom: 0px;
    width: 0;
}

.info-contetnt{
    background: #fcfcfc;
    padding: 20px 35px;
}

.info-contetnt-address-data-block-title{
    font-size: 12px;
}

.info-contetnt-address-data-block-value{
    color: #6281c9;
}

.info-contetnt-map, .info-contetnt-address-block, .info-contetnt-address-data-block{
    float:left;
}

.info-contetnt-address-block{
    margin: 0 0 0 30px;
}

.info-contetnt-address-data-blocks{
    margin: 20px 0 0 0;
}

.info-contetnt-address-data-block{
    margin: 0 0 0 40px
}

/*****props block ****/
.info-contetnt-props-container{
    margin-top: 35px;
}

.info-contetnt-props-block{
    font-size: 12px;
    line-height: 1;
    height: 25px;
    padding: 0 0 0 30px;
    float: left;
    margin-left: 40px;
}

.info-contetnt-props-block-beds, .info-contetnt-props-block-baths{
    line-height: 1.8;
}

.info-contetnt-props-block:first-child{
    margin-left: 0px;
}

.info-contetnt-props-block-type{
    background: url('../assets/img/icons/info-prop-type-icon.png') no-repeat;
}

.info-contetnt-props-block-year{
    background: url('../assets/img/icons/info-prop-year-built-icon.png') no-repeat;
}

.info-contetnt-props-block-square{
    background: url('../assets/img/icons/info-prop-square-icon.png') no-repeat;
}

.info-contetnt-props-block-beds{
    background: url('../assets/img/icons/info-prop-beds-icon.png') no-repeat;
}

.info-contetnt-props-block-baths{
    background: url('../assets/img/icons/info-prop-baths-icon.png') no-repeat;
}

.info-contetnt-props-block-radius{
    background: url('../assets/img/icons/info-prop-search-icon.png') no-repeat;
}

/***socials***/
.info-contetnt-socials{
    margin-top: 35px;
}

.info-contetnt-socials-block{
    margin-top: 35px;
}

.info-contetnt-socials-title{
    color:$blueMain;
}

.info-contetnt-socials-block{
    float: left;
    margin-left: 40px;
    width: 160px;
}

.info-contetnt-socials-block:first-child{
    margin-left: 0;
}

.info-contetnt-socials-block-title{
    padding: 0 0 0 30px;
 }

.info-contetnt-socials-block-title-schools{
    background: url('../assets/img/icons/socials-school-icon.png') no-repeat;
}

.info-contetnt-socials-block-title-markets{
    background: url('../assets/img/icons/socials-markets-icon.png') no-repeat;
}

.info-contetnt-socials-block-title-hospital{
    background: url('../assets/img/icons/socials-hospital-icon.png') no-repeat;
}

.info-contetnt-socials-block-title-metro{
    background: url('../assets/img/icons/socials-metro-icon.png') no-repeat;
}

.info-contetnt-socials-block-list{
    margin-top: 20px;
    line-height: 2;
    font-size: 12px;
}


/****recommendation*****/
.recommendation-content{
    display: none;
}

.recommendation-content.active{
    display: block;
}

.recommendation-content-title{
    margin-top: 20px;
}

.recommendation-content-blocks-container{
   margin: 20px 0 0 0;   
}

.recommendation-content-blocks-container-row{
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top:20px;
}

.recommendation-content-blocks-container-row:first-child{
    margin-top: 0;
}

.recommendation-content-block{
    padding: 20px;
    background: #fff;
    border: 1px solid #f5f5f5;  
    width: 31%;
    box-sizing: border-box;
}

.recommendation-content-block-list{
    font-size: 12px;
    line-height: 2;
}


.recommendation-content-block-title{
    padding: 0 0 0 25px;
}

.recommendation-content-block-list-li-text{
    float: left;    
    width: 50%;    
}

.recommendation-content-block-list-li-value{
    float: left;    
    width: 42%;  
    text-align: right;
}

.recommendation-content-block-list-li-icon{
    float: right;  
    width: 13px;
    height: 7px;
}

.recommendation-content-block-title-wall-color{
    background: url('../assets/img/icons/recommendation-wall-color-icon.png') no-repeat;
}

.recommendation-content-block-title-pets{
    background: url('../assets/img/icons/recommendation-pets-icon.png') no-repeat;
}

.recommendation-content-block-title-furniture{
    background: url('../assets/img/icons/recommendation-furniture-icon.png') no-repeat;
}

.recommendation-content-block-title-tech{
    background: url('../assets/img/icons/recommendation-tech-icon.png') no-repeat;
}

.recommendation-content-block-title-parking{
    background: url('../assets/img/icons/recommendation-parking-icon.png') no-repeat;
}





.recommendation-content-block-list-li-icon-up{
    background: url('../assets/img/icons/rec-str-up-icon.png') no-repeat;
    margin-top: 7px;
}

.recommendation-content-block-list-li-down{
    background: url('../assets/img/icons/rec-str-down-icon.png') no-repeat;
    margin-top: 9px;
}

.recommendation-content-block-list-li-none{
    background: #cccccc;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    margin-right: 4px;
    margin-top: 11px;
}
</style>
