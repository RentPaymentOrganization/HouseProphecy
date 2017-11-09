<template>
   <div class="header">       
      <router-link v-if="!indexPage" class="header-back" to="/"></router-link>
      <div :class="[indexPage?'header-maps-index':'header-maps']">Maps</div>
      <div :class="[indexPage?'header-search-index':'header-search']">
            <span class="header-search-text">Search</span>
            <span class="header-search-icon"></span>
      </div>
      <div class="header-sign-in">Sign In</div>
      <div class="header-menu-icon"></div>                     
   </div>
</template>

<script>
   export default {
     data() {
       return {
         indexPage: false
       }
     },
      created(){       
        if(this.$router.history.current.name==="Index"){
          this.indexPage=true;
        }       
      }
   }
</script>

<style>
.header{
  position: relative;
  height: 20px;
}

.header-back{
  background: url('../assets/img/header-back-str.png') no-repeat;
  position: absolute;
  top: 3px;
  left: 0;
  width: 17px;
  height: 16px;
  cursor: pointer;
}

.header-maps{
  position: absolute;
  left: 80px;
}

.header-maps-search{
  position: absolute;
  left: 0px;
}

.header-search{
  position: absolute;
  left: 180px;
  top: 0;
}

.header-search-index{
  position: absolute;
  left: 100px;
  top: 0;
}


.header-search-icon{
  background: url('../assets/img/icons/header-search-icon.png') no-repeat;
  display: inline-block;
  margin-left: 5px;
  width: 11px;
  height: 11px; 
}

.header-sign-in{
  position: absolute;
  right: 70px;
  top: 0;
}

.header-menu-icon{
  position: absolute;
  right: 0;
  top: 3px;
  background: url('../assets/img/icons/header-menu-icon.png') no-repeat;
  width: 18px;
  height: 16px;
}
</style>