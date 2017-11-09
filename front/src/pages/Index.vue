<template>
  <div class="container clearfix">
    <left-block class="left-block-index"></left-block>
    <div class="right-block">
      <header-app></header-app>
      <div class="index-text">This is a service for quick
        <br/> and convenient search
        <br/> of real estate</div>
      <main-form class="main-form-index" v-on:getPrice="getPriceIndex" v-on:getInfo="getInfoIndex">
        <router-link class="advanced-search-link link" slot="form-links" to="/advanced">Advances search</router-link>

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
  import Info from '../components/Info.vue';
  import Price from '../components/Price.vue';


  export default {

    data() {
      return {
        showInfo: false,
        showPrice: false,
        priceValue: ''
      }
    },
    components: {
      'left-block': LeftBlock,
      'header-app': Header,
      'main-form': Mainform,
      'info': Info,
      'price': Price
    },
    methods: {
      getPriceIndex: function (priceValue) {
        this.showInfo = false;
        this.showPrice = true;
        this.priceValue = priceValue;
      },

      getInfoIndex: function () {
        this.showInfo = true;
        this.showPrice = false;
      }
    },
  }

</script>


<style>
  .left-block-index {
    background: url('../assets/img/bg-index.jpg') no-repeat;
  }

  .index-text {
    color: #95989a;
    font-size: 52px;
    font-weight: bold;
    margin-top: 90px;
    line-height: 1.2;
  }

  .main-form-index {
    margin-top: 150px;
  }

  .advanced-search-link {
    font-size: 14px;
    display: block;
    margin-top: 35px;
  }

</style>
