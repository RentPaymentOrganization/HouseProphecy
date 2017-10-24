<template>
  <div class="container clearfix">
   <left-block class="left-block-index"></left-block>
   <div class="right-block">
      <header-app></header-app>
      <div class="index-text">This is a service for quick <br/> and convenient search <br/> of real estate</div>
      <main-form class="main-form-index">
        <router-link class="advanced-search-link link" slot="form-links" to="/advanced">Advances search</router-link>
       
      </main-form>
   </div>
  </div>
</template>

<script>
import LeftBlock from '../components/LeftBlock.vue';
import Header from '../components/Header.vue';
import Mainform from '../components/Mainform.vue';

export default {
 
  data () {
    return {
     
    }
  },
  components:{
    'left-block':LeftBlock,
    'header-app':Header,
    'main-form':Mainform
  }
}
</script>


<style>
.left-block-index{
    background: url('../assets/img/bg-index.jpg') no-repeat;
}

.index-text{
    color: #95989a;
    font-size: 52px;
    font-weight: bold;
    margin-top: 90px;
    line-height: 1.2;
}

.main-form-index{
    margin-top: 150px;
}

.advanced-search-link{
    font-size: 14px;
    display: block;
    margin-top: 35px;
}

</style>
