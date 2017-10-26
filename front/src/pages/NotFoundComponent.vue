<template>
   <div class="page-not-found-container">
    
     <router-link to="/" class="logo"></router-link>
     <div class="not-found-text">Page not found</div>
     <div class="not-found-text-oops">Opps, sorry we can’t found page!</div>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style scoped>
.page-not-found-container{
     background:url("../assets/img/404.jpg") no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  position:absolute;
  z-index: -1;
  top:0;
  left:0;
  min-width:100%;
  min-height:100%;       
}

.logo{
   background: url('../assets/img/logo.png') no-repeat;
  width: 139px;
  height: 37px;
  position: absolute;
  z-index: 100;
  top: 75px;
  left: 50%;
  transform: translateX(-50%)
}

.not-found-text-oops{
   position: absolute;
   bottom: 55px;
   left: 50%;
   transform: translateX(-50%);
   color:#fff;
   font-size: 30px;
}

.not-found-text{
   position: absolute;
   bottom:105px;
   left: 50%;
   transform: translateX(-50%);
   color:#fff;
   font-size: 65px;
}

</style>